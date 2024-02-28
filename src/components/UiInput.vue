<template>
  <div>
    <label v-if="label" class="label" for="">{{ label }}</label>
    <component
      :is="multiline ? 'textarea' : 'input'"
      v-bind="$attrs"
      :class="{ 'invalid' : invalid }"
      @input="$emit('input', $event.target.value)"
    >
    </component>
  </div>
</template>

<script>
export default {
  name: "UiInput",

  inheritAttrs: false,

  props: {
    multiline: {
      type: Boolean,
      default: false,
    },

    label: {
      type: String,
    },

    invalid: {
      type: Boolean,
      default: false,
    },
  },

};
</script>

<style scoped lang="sass">
input 
  font-family: "Nunito Sans", sans-serif
  border: none
  outline: 1px solid $outline-color
  font-size: 16px
  padding: 10px
  max-width: 100%
  width: 100%
  margin: 10px 0px 10px 0px
  background-color: $input-bg-color
  border-radius: 10px
  -webkit-box-shadow: 0px 11px 29px 0px rgba(0,0,0,0.15)
  -moz-box-shadow: 0px 11px 29px 0px rgba(0,0,0,0.15)
  box-shadow: 0px 11px 29px 0px rgba(0,0,0,0.15)


input:focus 
  outline: 1px solid $outline-focus-color

.invalid 
  outline: 1px solid $error-color

.invalid:focus 
  outline: 1px solid $error-color


</style>
