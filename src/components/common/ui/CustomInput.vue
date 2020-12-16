<template>
    <input type="text" :label="label" class="input-styling" :placeholder="placeholder">
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
    .input-styling {
        border: 1px solid #CCCCCC;
        box-sizing: border-box;
        border-radius: 8px;
        padding: 0 1rem;
        height: 45px;
        width: 100%;
    }
    .input-styling:focus {
        outline: none;
        border: 1px solid #656BF2;
    }
</style>
