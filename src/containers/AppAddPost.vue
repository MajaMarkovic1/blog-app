<template>
    <div class="container">
        <AddPost @addPost="onSubmit"/>
    </div>
</template>

<script>
import AddPost from '../components/AddPost'
import { posts } from '../services/Posts'

export default {
    name: 'AppAddPost',
    components: {
        AddPost
    },
    methods: {
        onSubmit(post){
            posts
            .add(post)
            .then(response => {
                this.$router.push('/posts')
            })
            .catch(err => console.log(err))
        }
    }
    
}
</script>