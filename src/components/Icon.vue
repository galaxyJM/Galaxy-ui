<template>
  <svg class="icon">
    <use :xlink:href="`#icon-${id}`"></use>
  </svg>
</template>

<script>
export default {
  name: "Icon",
  props:{
    id:{
      type: String
    }
  }
}
</script>

<style scoped>

</style>