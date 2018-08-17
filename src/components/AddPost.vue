<template>
    <div v-if="post" class="container">
         <form @submit.prevent="onSubmit" class="jumbotron">
          <div class="form-group row">
            <label class="col-4 col-form-label" for="title">Title</label> 
            <div class="col-8">
              <input id="title" name="title" type="text" class="form-control here" v-model="post.title">
            </div>
          </div>
          <div class="form-group row">
            <label for="text" class="col-4 col-form-label">Text</label> 
            <div class="col-8">
              <input id="text" name="text" type="text" class="form-control here" v-model="post.text">
            </div>
          </div>
          <button type="submit" class="btn">Submit</button>
          
        </form>
    </div>
</template>

<script>

export default {
    data(){
      return {
        post: {}
      }
    },

    methods: {
      onSubmit(){
        this.$emit('addPost', this.post)

      }
    }
}
</script>