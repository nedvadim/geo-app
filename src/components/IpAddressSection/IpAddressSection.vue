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
        address: '',
      };
    },
    apollo: {
      address: gql`
{
  client {
    ipAddress {
      city {
        name
        population
        timeZone {
          name
        }
      }
      country {
        name
        currencies {
          name
          inGBP: convert(amount: 1, to: "GBP")
        }
      }
    }
  }
}
      `,
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
