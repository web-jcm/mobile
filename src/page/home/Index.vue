<template>
    <div class="home-page page">
        <h1>Home Page.</h1>
    </div>
</template>
<script>
import types from '@/store/constants/types'
export default {
    name: 'HomePage',
    created () {
        const that = this
        const store = that.$store
        store.commit(types.LOADING, false)
    }
}
</script>
<style lang="scss">
@import "@/style/page/home.scss";
</style>
