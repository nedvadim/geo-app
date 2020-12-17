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
        headers: ['IP address', 'Continent/code', 'Country/code'],
        dataset: [
          {one: '000.000.00.00', two: '', three: ''},
        ]
      };
    }
  }
</script>

<style scoped>
.results-section > * {
    margin-bottom: 1rem;
}
</style>
