<template>
  <div id="app">
    <button @click="exportCsv">exportCsv</button>
    <button @click="exportExcel">exportExcel</button>
    <button @click="exportTxt">exportTxt</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      columns: [
        { label: 'ID', prop: 'id' },
        { label: '名称', prop: 'name' },
        { label: '创建日期', prop: 'creatDate' },
        { label: '地址', prop: 'address' },
        { label: '邮编', prop: 'zip' }
      ],
      data: [
        { is: 1, name: 'FairyEver', creatDate: '2018-12-16', address: '北京市', zip: '100000' }
      ]
    }
  },
  methods: {
    exportCsv (params = {}) {
      this.$export.csv({
        columns: this.columns,
        data: this.data
      })
        .then(() => {
          this.$message('导出CSV成功')
        })
    },
    exportExcel () {
      this.$export.excel({
        columns: this.columns,
        data: this.data,
        header: '导出 Excel',
        merges: ['A1', 'E1']
      })
        .then(() => {
          this.$message('导出表格成功')
        })
    },
    exportTxt () {
      this.$export.txt({
        text: 'Hello World',
        title: '文本'
      })
        .then(() => {
          this.$message('导出文本成功')
        })
    }
  }
}
</script>
