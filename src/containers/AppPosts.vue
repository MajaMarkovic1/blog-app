<template>
    <div>
        <Posts :posts="posts" @deletePost="deletePost"/>
    </div>
</template>

<script>
import Posts from '../components/Posts.vue'
import { posts } from '../services/Posts'

export default {
    name: 'AppPosts',
    components: {
        Posts,

    },
    data(){
        return {
            posts: []

        }
    },

    beforeRouteEnter(to, from, next){
        posts
        .getAll()
        .then(response => {
            next((vm) => {
                vm.posts = response.data
            })
        })
        .catch(err => {
            console.log(err)
        })
    },
   
    methods: {
        deletePost(post){
            posts
            .delete(post.id)
            .then(response => {
                let postIndex = this.posts.findIndex(p => p.id === post.id)
                this.posts.splice(postIndex, 1)
            })
            .catch(err => console.log(err))
        }
    }


}

</script>

<style>

</style>