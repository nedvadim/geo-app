<template>
    <div class="results-section">
        <p class="section-label">{{ $t('results') }}</p>
        <CustomTable :headers="headers" :dataset="[dataset]"/>
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
      headers () {
        return this.$store.getters.getCurrentResultHeaders;
      },
      dataset () {
        const current = this.$store.getters.getCurrentResult;
        const defaultCurrent = this.$store.getters.getDefaultCurrentResult;
        return current.length ? current : defaultCurrent;
      }
    }
  }
</script>

<style scoped>
.results-section > * {
    margin-bottom: 1rem;
}
</style>
