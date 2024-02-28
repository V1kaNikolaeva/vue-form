<template>
  <small class="error-text" v-if="errorType === 'required'">Поле {{ labelName }} обязательно для заполнения</small>
  <small class="error-text" v-else-if="errorType === 'length'">Поле {{ labelName }} неверной длины</small>
  <small class="error-text" v-else-if="errorType === 'onlyText'">Поле {{ labelName }} не может содержать число (и знаки)</small>
  <small class="error-text" v-else-if="errorType === 'onlyNums'">Поле {{ labelName }} может содержать только цифры (без знаков)</small>
  <small class="error-text" v-else-if="errorType === 'date'">Поле {{ labelName }} превышает текущюю дату</small>
  <small class="error-text" v-else-if="errorType === 'phone'">Поле {{ labelName }} должно начинаться с цифры 7</small>
</template>

<script>
export default {
  name: "UiErrorMessage",

  props: {
    labelName: {
      type: String,
      required: true,
    },

    errorType: {
      type: [String, Boolean],
      required: true,
    },
  },
};
</script>

<style scoped lang="sass">
.error-text 
  display: block
  color: $error-color

</style>
