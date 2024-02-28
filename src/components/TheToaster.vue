<template>
  <div class="toasts">
    <div 
      v-for="(toast, index) in toasts" 
      :key="index" 
      class="toast" 
      :class="{ 'toast_success' : toast.type === 'success' }"
    >
      <UiToast :toast="toast"/>
    </div>
  </div>
</template>

<script>
import UiToast from './UiToast.vue'

export default {
  name: "TheToaster",

  components: { UiToast },

  data() {
    return {
      toasts: [],
    }
  },

  methods: {
    success(message) {
      this.toasts.push({ message, type: 'success' });
      this.clearToast();
    },

    clearToast() {
      setTimeout(() => {
        this.toasts.shift();
      }, 5000)
    },
  },
};
</script>

<style scoped lang="sass">
.toasts 
  position: fixed
  bottom: 8px
  right: 8px
  display: flex
  flex-direction: column
  justify-content: flex-end
  white-space: pre-wrap
  z-index: 9

@media all and (min-width: 992px) 
  .toasts 
    bottom: 72px
    right: 112px
  
.toast 
  display: flex
  flex: 0 0 auto
  flex-direction: row
  align-items: center
  padding: 16px
  background: $main-bg-color
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15)
  border-radius: 10px
  font-size: 18px
  line-height: 28px
  width: auto

.toast + .toast 
  margin-top: 20px

.toast.toast_success 
  color: $success-color

</style>