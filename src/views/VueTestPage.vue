<script lang="ts">
import { ref } from "vue";

export default {
  name: "VueTestPage",
  props: {},
  methods: {},
  setup() {
    const numberA = ref(1);
    const numberB = ref(1);
    const addition = (a, b) => {
      return a + b;
    };

    const result = addition(numberA.value, numberB.value);
    return { result };
  },
};
</script>

<template lang="pug">
main
  .bg-slate-200.mt-20.page.p-20
    h1 VueTestComponent: {{ result }}
</template>

<style scoped></style>
