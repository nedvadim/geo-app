<template>
    <MainWrapper />
</template>

<script>
import MainWrapper from "./components/MainWrapper";
export default {
  name: 'App',
  components: {
    MainWrapper
  }
}
</script>
<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Open Sans, sans-serif;
    }
    .section-label {
        font-size: 18px;
        line-height: 25px;
    }
</style>
