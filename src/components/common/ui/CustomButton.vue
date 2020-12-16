<template>
    <button class="button error-style">
        <slot></slot>
    </button>
</template>

<script>
  export default {
    name: "CustomButton"
  }
</script>

<style scoped>
.button {
    height: 45px;
    border: none;
    border-radius: 8px;
    color: #FFFFFF;
    cursor: pointer;
}
.button:focus {
    border: none;
    outline: none;
}
.error-style {
    background: #FF5252;
    opacity: 0.85;
}
</style>
