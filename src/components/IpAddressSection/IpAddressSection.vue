<template>
    <div class="ip-section">
        <p class="ip-section-label">Ip Address</p>
        <CustomInput class="ip-section-input" />
        <CustomButton class="ip-section-button">Get Information</CustomButton>
    </div>
</template>

<script>
import CustomInput from "../common/ui/CustomInput";
import CustomButton from "../common/ui/CustomButton";
  export default {
    name: "IpAddressSection",
    components: {
      CustomInput,
      CustomButton
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
.ip-section-label {
    font-size: 18px;
    line-height: 25px;
}
.ip-section-input {
    width: 396px;
}
.ip-section-button {
    width: 280px;
}
</style>
