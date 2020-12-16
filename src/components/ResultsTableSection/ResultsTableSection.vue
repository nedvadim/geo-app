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
          {one: '45', two: '2235', three: '24234'},
          {one: '67', two: '131', three: '35'},
          {one: '45345', two: '436', three: '6'}
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
