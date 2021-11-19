<template>
  <div>
    <Switch :value="selected" @update:value="selected = $event"/>
  </div>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import {ref} from "vue";
export default {
  name: "SwitchDemo",
  components: {Switch},
  setup(){
    const selected = ref(false);
    return {selected}
  }
}
</script>

<style lang="scss" scoped>
</style>