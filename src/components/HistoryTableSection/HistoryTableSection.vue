<template>
    <div class="history-section">
        <p class="section-label">{{ $t('history') }}</p>
        <CustomTable class="history-section-table" :headers="headers" :dataset="dataset"/>
        <CustomButton class="clear-history-button" :disabled="noHistory" @click="clearHistory">Clear history</CustomButton>
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
    computed: {
      headers () {
        return this.$store.getters.getHistoryHeaders;
      },
      dataset () {
        const history = this.$store.getters.getHistoryResults;
        const defaultHistory = this.$store.getters.getDefaultHistoryResults;
        return history.length ? history : defaultHistory;
      },
      noHistory () {
        return !this.$store.getters.getHistoryResults.length;
      }
    },
    methods: {
      clearHistory () {
        this.$store.commit('CLEAR_HISTORY');
      }
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
