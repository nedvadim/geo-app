<template>
    <div>
        <Header></Header>
        <CustomCard class="custom-card">
            <IpAddressSection />
            <ResultsTableSection />
            <HistoryTableSection />
        </CustomCard>
    </div>
</template>

<script>
import Header from "./Header/Header";
import CustomCard from "./hoc/CustomCard";
import IpAddressSection from "./IpAddressSection/IpAddressSection";
import ResultsTableSection from "./ResultsTableSection/ResultsTableSection";
import HistoryTableSection from "./HistoryTableSection/HistoryTableSection";
  export default {
    name: "MainWrapper",
    components: {
      Header,
      CustomCard,
      IpAddressSection,
      ResultsTableSection,
      HistoryTableSection
    }
  }
</script>

<style scoped>
.custom-card {
    margin: 1.6rem auto;
}
</style>
