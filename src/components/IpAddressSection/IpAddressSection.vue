<template>
    <div class="ip-section">
        <p class="section-label">{{ $t('ipAddress') }}</p>
        <CustomInput v-model="ip" class="ip-section-input" :is-error="isError"/>
        <CustomButton @click="handleIp" class="ip-section-button">{{$t('getInformation')}}</CustomButton>
    </div>
</template>

<script>
import gql from 'graphql-tag';
import CustomInput from "../common/ui/CustomInput";
import CustomButton from "../common/ui/CustomButton";
  export default {
    name: "IpAddressSection",
    components: {
      CustomInput,
      CustomButton
    },
    data () {
      return {
        ip: '',
        ipAddress: '',
        isError: false,
        resultsData: {
          ipAddress: '',
          continent: '',
          country: '',
          city: '',
          timeZone: '',
          coordinates: ''
        }
      };
    },
    apollo: {
      ipAddress: {
        query: gql`query getIp($dynamicIp: String!) {
                    ipAddress(address: $dynamicIp) {
                        city {
                          name
                          location {
                            long
                            lat
                          }
                          timeZone {
                            name
                          }
                          continent {
                            name
                          }
                        }
                        country {
                          name
                          alpha2Code
                        }
                    }
                }`,
        errorPolicy: 'ignore',
        variables: {
            dynamicIp: ''
        },
      },
    },
    methods: {
      async handleIp () {
        try {
          const res = await this.$apollo.queries.ipAddress.refetch({dynamicIp: this.ip});
          this.isError = false;
          this.initResults(res);
          this.updateStore();
        } catch (e) {
          this.isError = true;
          console.error(e)
        }
      },
      initResults (res) {
        const city = res.data.ipAddress.city;
        const country = res.data.ipAddress.country;
        if (!country) {
          this.resultsData.country = '-'
        } else {
          this.resultsData.country = `${country.name || '-'} / ${country.alpha2Code || '-'}`
        }
        if (!city) {
          this.resultsData.city = '-';
          this.results.timeZone = '-';
          this.resultsData.coordinates = '-';
          this.resultsData.continent = '-';
        } else {
          this.resultsData.city = city.name;
          this.resultsData.timeZone = city.timeZone ? city.timeZone.name : '-';
          this.resultsData.coordinates = city.location ? `${city.location.long.toFixed(1)}/${city.location.lat.toFixed(1)}` : '-';
          this.resultsData.continent = city.continent ? city.continent.name : '-';
        }
        this.resultsData.ipAddress = this.ip;

      },
      updateStore () {
        this.$store.dispatch('setResults', this.resultsData);
      }
    }
  }
</script>

<style scoped>
.ip-section {
    display: flex;
    flex-direction: column;
}
.ip-section > * {
    margin-bottom: 1rem;
}
.ip-section-input {
    width: 396px;
}
.ip-section-button {
    width: 280px;
}
</style>
