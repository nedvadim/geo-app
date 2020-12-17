<template>
    <div class="results-section">
        <p class="section-label">{{ $t('results') }}</p>
        <CustomTable :headers="headers" :dataset="dataset"/>
    </div>
</template>

<script>
    import CustomTable from "../common/ui/CustomTable";
  export default {
    name: "ResultsTableSection",
    components: {
      CustomTable
    },
    data () {
      return {
        headers: ['IP address', 'Continent/code', 'Country/code', 'City', 'Time zone', 'Coordinates'],
      };
    },
    computed: {
      dataset () {
        return this.$store.getters.getCurrentResult;
      }
    }
  }
</script>

<style scoped>
.results-section > * {
    margin-bottom: 1rem;
}
</style>
