<template>
    <div class="checkbox-group">
      <label v-if="label" class="label" for="">{{ label }}</label>
      <input
        v-bind="$attrs"
        @change="$emit('input', $event.target.checked)"
      >
    </div>
  </template>

<script>
export default {
  name: "UiInputCheckbox",

  inheritAttrs: false,

  props: {

    label: {
      type: String,
    },

  },
};
</script>

<style scoped lang="sass">
input 
  width: 20px
  height: 20px

input:hover 
  cursor: pointer

.checkbox-group 
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center


</style>