<template>
    <div class="ip-section">
        <p class="section-label">{{ $t('ipAddress') }}</p>
        <CustomInput class="ip-section-input" />
        <CustomButton class="ip-section-button">Get Information</CustomButton>
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
        ip: '1.1.1.1',
        ipAddress: ''
      };
    },
    apollo: {
      ipAddress: {
        query: gql`query getIp($dynamicIp: String!) {
                    ipAddress(address: $dynamicIp) {
                country {
                  name
                  languages {
                    name
                  }
                }
                city {
                  continent {
                    name
                  }
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
