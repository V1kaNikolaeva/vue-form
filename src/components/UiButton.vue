<template>
  <button 
    :class="{
      'save' : buttonType === 'save',
      'default' : buttonType === 'default'
    }"
    >
    <slot />
   </button>
</template>

<script>
export default {
  name: "UiButton",
  
  props: {
    buttonType: {
      type: String,
      required: false,
      default: "default",
      validator: (value) => ["save", "default"].includes(value),
    },
  },
};
</script>

<style scoped lang="sass">

button 
  border: none

button:hover 
    cursor: pointer

.default
.save 
  width: 100%
  height: 40px
  border-radius: 10px

.default 
  background-color: $button-default-bg-color

.save 
  background-color: $button-save-bg-color

</style>