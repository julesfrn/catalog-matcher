<template>
  <Button label="Import produit national" icon="pi pi-upload" class="p-button-text" role="open-national-product-dialog" @click="displayNationalProductDialog"/>
  <Dialog header="Import produit national" v-model:visible="displayNationalProduct">
    <FileUpload name="demo[]" :customUpload="true" @uploader="uploader" role="uploader"></FileUpload>
  </Dialog>
  <DataTable :value="variants" showGridlines scrollable :loading="loading" scrollHeight="flex" paginator :rows="10">
   <Column class="column" v-for="col of headers" :field="col" :header="col" :key="col" :sortable="true"></Column>
  </DataTable>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import Papa from 'papaparse'
import HelloWorld from './components/HelloWorld.vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import FileUpload from 'primevue/fileupload'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'
import {NationalProduct} from "./domain/nationalProduct.entity";

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    DataTable,
    Column,
    FileUpload,
    Button,
    Dialog
  },
  data() {
    return { variants: [], headers: [], loading: false, displayNationalProduct:false }
  },
  methods: {
    uploader(event: any) {
      this.loading = true
      this.displayNationalProduct = false
      Papa.parse(event.files[0], {
        header: true,
        delimiter: ';',
        newline: '\n',
	      complete: (results) => {
          // @ts-ignore
          this.variants = results.data.map(data => new NationalProduct(data))
          // @ts-ignore
          this.headers = Object.keys(this.variants[0])
          this.loading = false
	      },
      });
    },
    displayNationalProductDialog(){
      this.displayNationalProduct = true
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

.column {
  min-width: 200px;
}
</style>