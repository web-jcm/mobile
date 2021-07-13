<template>
    <div class="login-page page">
        <h1>Login Page.</h1>
    </div>
</template>
<script>
import types from '@/store/constants/types'
export default {
    name: 'LoginPage',
    created () {
        const that = this
        const store = that.$store
        store.commit(types.LOADING, false)
        store.commit(types.POP_MESSAGE, 'this is login page')
    }
}
</script>
<style lang="scss">
@import "@/style/page/login.scss";
</style>
