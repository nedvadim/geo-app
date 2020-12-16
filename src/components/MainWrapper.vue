<template>
    <div>
        <Header></Header>
        <CustomCard class="custom-card">
            <p>card</p>
        </CustomCard>
    </div>
</template>

<script>
    import Header from "./Header/Header";
    import CustomCard from "./hoc/CustomCard";
  export default {
    name: "MainWrapper",
    components: {
      Header,
      CustomCard
    }
  }
</script>

<style scoped>
.custom-card {
    margin: 3rem auto;
}
</style>
