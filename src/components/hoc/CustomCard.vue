<template>
    <div class="custom-card">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    name: "CustomCard"
  }
</script>

<style scoped>
    .custom-card {
        width: 70%;
        min-height: 300px;
        background: #FFFFFF;
        box-shadow: 0px 0px 50px rgba(230, 230, 230, 0.8);
        padding: 38px;
    }
</style>
