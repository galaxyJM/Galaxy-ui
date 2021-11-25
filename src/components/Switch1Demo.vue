<demo>
常规用法
</demo>

<template>
  <Switch :value="selected" @update:value="selected = $event"/>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';


export default {
  name: 'Switch1Demo',
  components: {Switch},
  setup() {
    const selected = ref(false);
    return {selected};
  }
};
</script>