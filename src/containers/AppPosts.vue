<template>
    <div>
        <Posts :count="count" :posts="posts" @deletePost="deletePost" @select="select"/>
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
            posts: [],
            count: 0,
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
        },
        select(post){
            this.count++
            post.selected ? post.selected = false : post.selected = true
            
        }
    }


}

</script>

<style>

</style>