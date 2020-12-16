<template>
    <div class="history-section">
        <p class="section-label">{{ $t('history') }}</p>
        <CustomTable class="history-section-table" :headers="headers" :dataset="dataset"/>
        <CustomButton class="clear-history-button" :disabled="true">Clear history</CustomButton>
    </div>
</template>

<script>
  import CustomTable from "../common/ui/CustomTable";
  import CustomButton from "../common/ui/CustomButton";
  export default {
    name: "HistoryTableSection",
    components: {
      CustomTable,
      CustomButton
    },
    data () {
      return {
        headers: ['hey', 'hey', 'ololo'],
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
    .history-section {
        display: flex;
        flex-direction: column;
    }
    .history-section > * {
        margin-bottom: 1rem;
    }
    .history-section-table {
        width: 400px;
    }
    .clear-history-button {
        width: 300px;
    }
</style>
