<template>
    <input type="text" :label="label" :placeholder="placeholder">
</template>

<script>
  export default {
    name: "CustomInput",
    props: {
      placeholder: {
        type: String,
        default: 'Placeholder'
      },
      label: {
        type: String,
        default: 'Label'
      }
    }
  }
</script>

<style scoped>

</style>
