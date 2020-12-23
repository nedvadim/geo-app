<template>
    <div class="results-section">
        <p class="section-label">{{ $t('results') }}</p>
        <CustomTable :dataset="dataset"/>
    </div>
</template>

<script>
    import CustomTable from "../common/ui/CustomTable";
  export default {
    name: "ResultsTableSection",
    components: {
      CustomTable
    },
    computed: {
      dataset () {
        const current = this.$store.getters.getCurrentResult;
        const defaultCurrent = this.$store.getters.getDefaultCurrentResult;
        return current.length ? current : defaultCurrent;
      },
      locale () {
        return this.$store.getters.getLang;
      }
    }
  }
</script>

<style scoped>
.results-section > * {
    margin-bottom: 1rem;
}
</style>
