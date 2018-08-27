<template>
    <div>
        <vue-recaptcha
            sitekey="6Le-bmoUAAAAADgF0Xt3EqIdDr332AfG5lAviX6Z"
            @verify="onVerify"
            @expired="onExpired"
            ref="captcha"/>
    </div>
</template>

<script>
import VueRecaptcha from 'vue-recaptcha'
export default {
    components: { 
        VueRecaptcha 
        },
    methods: {
        onVerify(data) {
            this.$emit('verify', data)
        },
        onExpired(data) {
            this.$emit('expired', data)
        },
        reset() {
            this.$refs.captcha.reset()
        }

    }
    
}
</script>

<style>

</style>


