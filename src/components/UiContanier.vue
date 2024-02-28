<template>
    <div class="main__wrapper">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "UiContanier"
}
</script>

<style scoped lang="sass">
.main__wrapper 
    padding-top: 10px
    padding-bottom: 10px
    margin: 0 auto
    max-width: 350px
    height: 100%

</style>