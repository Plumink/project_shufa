<template>
  <div id="app">
  <v-app id="inspire">
      <v-bottom-sheet v-model="sheet" persistent>
        <v-sheet class="text-center" height="200px">
          <v-btn
            class="mt-6"
            text
            color="error"
            @click="sheet = !sheet"
          >close</v-btn>
          <div class="py-3">This is a bottom sheet using the persistent prop</div>
        </v-sheet>
      </v-bottom-sheet>
  </v-app>
</div>
</template>

<script>
export default {
data(){
    return {
        sheet: false,
    }
}
}
</script>

<style>

</style>