<template>
    <div class="header">
        <h1 class="header-title">GeoIP</h1>
        <CustomDropDown class="header-dropdown" />
    </div>
</template>

<script>
    import CustomDropDown from "../common/ui/CustomDropDown";
  export default {
    name: "Header",
    components: {
      CustomDropDown
    }
  }
</script>

<style scoped>
.header {
    height: 48px;
    background: #656BF2;
    display: flex;
    align-items: center;
}
.header-title {
    font-weight: 800;
    font-size: 18px;
    line-height: 25px;
    color: #FFFFFF;
    display: inline-block;
    margin: 0 auto;
}
.header-dropdown {
    margin-right: 5rem;
}
</style>
