<template>
    <div class="header">
        <h1 class="header-title">GeoIP</h1>
        <select v-model="$i18n.locale" class="header-dropdown">
            <option v-for="(option, i) in localisationOptions" :value="option.value" :key="i">{{ option.label }}</option>
        </select>
    </div>
</template>

<script>
  export default {
    name: "Header",
    data () {
      return {
      }
    },
    watch: {
      locale (val) {
        this.$store.commit('SET_LOCALE', val);
      }
    },
    computed: {
      localisationOptions () {
        return this.$store.getters.getLangOptions;
      }
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
