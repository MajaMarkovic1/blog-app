<template>
    <div>
        <Posts :count="count" v-for="(post, index) in posts" :key="post.id" :index="index" :post="post" :suggested="suggested" @deletePost="deletePost" @select="select"/>
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
            suggested: false
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
        deletePost(data){
            posts
            .delete(data.id)
            .then(response => {
                this.posts.splice(data.index, 1)
            })
            .catch(err => console.log(err))
    
        },
        select(post){
            this.count++
            
        },
       
    }


}

</script>

<style>

</style>