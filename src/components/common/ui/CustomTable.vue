<template>
    <div class="wrapper">
        <table class="table">
            <tr class="table-header">
                <th v-for="h in headers" :key="h">
                    {{ h }}
                </th>
            </tr>
            <tr v-for="(data, i) in dataset" :key="i">
                <td v-for="(el, i) in data" :key="i">
                    {{ el }}
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    name: "CustomTable",
    props: {
      dataset: {
        type: Array
      }
    },
    computed: {
      headers () {
        return Object.keys(this.dataset[0]).map(el => this.$t(el))
      }
    }
  }
</script>

<style scoped>
    .table {
        border-collapse: collapse;
        width: 100%;
    }
    .table td {
        border-left: 1px solid #CCCCCC;
        border-right: 1px solid #CCCCCC;
        padding: 8px;
        text-align: center;
        font-size: 12px;
        color: #656565;
    }
    .table tr {
        border-bottom: 1px solid #CCCCCC;
    }
    .table th {
        border-collapse: collapse;
        padding-top: 12px;
        padding-bottom: 12px;
        border: 1px solid #656BF2;
        background-color: #656BF2;
        color: white;
        text-align: center;
        font-size: 12px;
        font-weight: normal;
    }
</style>
