<template>
    <div v-if="post" class="container">
      <h1>Add post</h1>
      <form @submit.prevent="onSubmit" @reset="reset">
        <div class="form-group row">
          <label class="col-4 col-form-label" for="title">Title</label> 
          <div class="col-8">
            <input v-validate="'required|min:2'" id="title" name="title" type="text" class="form-control here" v-model="post.title">
          <div v-show="errors.has('title')" class="alert alert-warning">{{ errors.first("title")}}</div>
          
          </div>
        </div>
        <div class="form-group row">
          <label for="text" class="col-4 col-form-label">Text</label> 
          <div class="col-8">
            <textarea v-validate="'required|max:300'" rows="5" id="text" name="text" type="text" class="form-control here" v-model="post.text"></textarea>
          <div v-show="errors.has('text')" class="alert alert-warning">{{ errors.first("text")}}</div>
          
          </div>
        </div>
        <button type="submit" class="btn btn-success">Submit</button>
        <button type="reset" class="btn btn-danger">Reset</button>
        <button  type="submit" class="btn btn-danger">Edit</button>
      
    </form>
    </div>
</template>

<script>

export default {
    props: {
      post: Object
    },
 
    methods: {
      onSubmit()
        {
          this.$validator.validateAll()
            .then(() => {
              this.$emit('onSubmit')

          })
      },
      add(post){
        this.$emit('addPost')  

      },
    edit(post){
        this.$emit('editPost', this.post)  
      
    },
      reset(){
        this.$emit('reset')
      }
    }
}
</script>

<style>
form {
  margin-top: 1rem;
}
</style>