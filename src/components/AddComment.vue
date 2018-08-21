<template>
  <div>
    <h5>Add comment</h5>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <div class="col-sm-6">
          <textarea id="text" name="text" class="form-control here" v-model="comment.text" required="required"></textarea>
        </div>
      </div>
      <button name="submit" type="submit" class="btn btn-primary">Submit</button>
  
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comment: {
        text: ''
      }
    }
  },
   methods: {
    onSubmit () {
      this.$emit('commentAdded', this.comment)
    }
  }
}
</script>