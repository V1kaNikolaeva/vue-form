<template>
    <div class="select-group">
        <label for="">{{ label }}</label>
        <select 
          v-bind="$attrs" 
          @change="$emit('input', selected)"
          :class="{ 'invalid' : invalid }"
          v-model="selected"
        >
          <option 
            v-for="(option, index) in options" 
            :key="index"
            :value="option.name || option"
            >
            {{ option.name || option }}
          </option>
        </select>   
    </div>
</template>

<script>
export default {
  name: "UiSelect",

  inheritAttrs: false,

  props: {
    label: {
      type: String,
    },

    options: {
        type: [Array, Object],
        required: true,
    },
    
    invalid: {
      type: Boolean,
      default: false,
    },

  },

  data() {
    return {
      selected: []
    }
  }

};
</script>

<style scoped lang="sass">
select 
  width: 100%
  margin: 10px 0px 10px 0px
  padding: 10px
  background-color: #fff
  outline: 1px solid $outline-color
  border: none
  border-radius: 10px
  overflow: hidden
  -webkit-box-shadow: 0px 11px 29px 0px rgba(0,0,0,0.15)
  -moz-box-shadow: 0px 11px 29px 0px rgba(0,0,0,0.15)
  box-shadow: 0px 11px 29px 0px rgba(0,0,0,0.15)

select:focus 
  outline: 1px solid $outline-focus-color

select:hover 
  cursor: pointer

.invalid 
  outline: 1px solid $error-color

.invalid:focus 
  outline: 1px solid $error-color

</style>