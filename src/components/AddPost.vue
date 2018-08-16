<template>
    <div class="container">
        <form id="form">
          <div class="form-group row">
            <label for="brand" class="col-4 col-form-label">Title</label>
            <div class="col-8">
              <div class="input-group">
                <input id="title" name="title" type="text" class="form-control here" 
                     v-model="post.title">
              </div>
            </div>
          </div>

          <div class="form-group row">
            <label for="model" class="col-4 col-form-label">Text</label>
            <div class="col-8">
              <div class="input-group">
                <input id="text" name="text" type="text" class="form-control here" 
                    v-model="post.text">
              </div>
            </div>
          </div>
          <div class="form-group row">
            <div class="offset-4 col-8">
              <button name="submit" type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
    </div>
</template>

<script>

export default {
    props: {
        post: Object
    },
    
}
</script>