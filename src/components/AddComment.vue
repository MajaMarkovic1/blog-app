<template>
  <div>
    <h5>Add comment</h5>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <div>
          <textarea id="text" name="text" class="form-control here" v-model="comment.text" required="required"></textarea>
        </div>
        <captcha 
          @verify="verify"
          @expired="expired"
          ref="captcha"/>
        <button name="submit" type="submit" class="btn btn-primary" :disabled="!captchaPassed">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import Captcha from '../captcha/Captcha'

export default {
  
  components: {
    Captcha
  },
  data () {
    return {
      comment: {
        text: ''
      },
      captchaPassed: false
    }
  },
   methods: {
    onSubmit () {
      if (!this.captchaPassed){
        return
      }
      this.$emit('commentAdded', this.comment)
      this.comment = {}
      this.$refs.captcha.reset()
    },
    verify(){
      this.captchaPassed = true
    },
    expired(){
      this.captchaPassed = false
    }
  }
}
</script>

<style>

</style>
