<template>
    <div class="ip-section">
        <p class="section-label">{{ $t('ipAddress') }}</p>
        <CustomInput class="ip-section-input" />
        <CustomButton @click="fetchData" class="ip-section-button">Get Information</CustomButton>
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
        ip: '112.111.11.11',
        ipAddress: ''
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
                            id
                          }
                        }
                        country {
                          name
                          alpha2Code
                        }
                    }
                }`,
        // Static parameters
        variables() {
          return {
            dynamicIp: this.ip,
          };
        },
      },
    },
    methods: {
      async fetchData () {
        try {
          const res = await this.$apollo.queries.ipAddress.refetch(this.ip);
          console.log(res);
        } catch (e) {
          console.error(e)
        }
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
