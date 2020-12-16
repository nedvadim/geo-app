<template>
    <button class="button" :class="{ 'disabled': disabled, 'primary-red': !disabled }">
        <slot></slot>
    </button>
</template>

<script>
  export default {
    name: "CustomButton",
    props: {
      disabled: {
        type: Boolean,
        default: false
      }
    }
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
.disabled {
    background-color: #E6E6E6;
    cursor: not-allowed;
}
.button:focus {
    border: none;
    outline: none;
}
.primary-red {
    background: #FF5252;
    opacity: 0.85;
}
.primary-red:hover {
    box-shadow: 0 0 20px rgba(255, 108, 108, 0.7);
}
</style>
