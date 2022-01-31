<template>
  <div>
    <table class="table">
      <thead>
        <tr>
          <th>Assest Name</th>
          <th>Department</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in json_data" :key="data.Asset_Name">
          <td>{{ data.Asset_Name }}</td>
          <td>{{ data.Department }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <button @click="unparse">Download CSV</button>
</template>

<script>
import {ref} from 'vue'

let jsonData = [
    {
      "Asset_Name": "Printer",
      "Department": "HR"
    },
    {
      "Asset_Name": "Monitor",
      "Department": "IT"
    },
    {
      "Asset_Name": "Barcode Scanner",
      "Department": "ACCOUNT"
    }
  ]

export default {
    name: 'App',
    setup() {
        let json_data = ref(jsonData);

        return {
            json_data
        };
    },
    methods: {
    unparse () {
      let csv = this.$papa.unparse(jsonData);
      let csvData = new Blob([csv], {type: 'text/csv;charset=utf-8;'});
      let csvURL =  null;
      if (navigator.msSaveBlob)
      {
          csvURL = navigator.msSaveBlob(csvData, 'download.csv');
      }
      else
      {
          csvURL = window.URL.createObjectURL(csvData);
      }

      var tempLink = document.createElement('a');
      tempLink.href = csvURL;
      tempLink.setAttribute('download', 'download.csv');
      tempLink.click();
      this.unparsedResults = this.$papa.unparse(this.json_data, {
        delimiter: ","
      })
    }
  }
}
</script>

