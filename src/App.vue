<template>
  <FileUpload name="demo[]" :customUpload="true" @uploader="uploader" role="uploader" />
  <DataTable :value="variants">
   <Column v-for="col of headers" :field="col" :header="col" :key="col"></Column>
  </DataTable>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Papa from 'papaparse'
import HelloWorld from './components/HelloWorld.vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import FileUpload from 'primevue/fileupload'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    DataTable,
    Column,
    FileUpload
  },
  data() {
    return { variants: [], headers: [] }
  },
  methods: {
    uploader(event: any) {
      Papa.parse(event.files[0], {
        header: true,
        delimiter: ';',
        newline: '\n',
	      complete: (results) => {
          // @ts-ignore
          this.variants = results.data
          // @ts-ignore
          this.headers = results.meta.fields
          console.log('headers', this.headers)
          console.log('variants', this.variants)
	      	console.log(results.data)
	      },
      });
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>