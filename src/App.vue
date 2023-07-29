<script setup>
import { onMounted, ref, watch } from "vue";
import { toFormal } from "./convertor";

const num_input = ref('') 
let formal_form = ref('')

watch(num_input, async (num_input) => {
  formal_form = toFormal(num_input);
})
</script>

<template>
  <main class="container mx-auto">
    <div class="grid">
      <img class="" src="@/assets/Logo.png" alt="Logo" width="150" height="150">
    <ul>
      <input type="text" class="mr-6" v-model="num_input">
      <!-- <button>转换</button> -->
      <p>{{ formal_form }}</p>
    </ul>
    </div>
    
  </main>
</template>

<style scoped>

</style>
