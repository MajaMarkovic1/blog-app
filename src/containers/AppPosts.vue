<template>
    <div>
        <Posts :posts="posts"/>
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
   


}

</script>

<style>

</style>