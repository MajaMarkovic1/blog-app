<template>
    <div  class="container">
        <div><strong>Title:</strong><br> {{ post.title }}</div><br>
        <div><strong>Text:</strong><br> {{ post.text }}</div><br>
        <add-comment @commentAdded="addComment"></add-comment><br>
        <comment-list :comments="comments"></comment-list>
    </div>
</template>

<script>
import AddComment from './AddComment.vue'
import CommentList from './CommentList.vue'
import { posts } from '../services/Posts'

export default {
    components: {
        AddComment,
        CommentList
    },
    data(){
        return {
            post: {
                title: '',
                text: '',
                createdAt: ''
            }
        }
    },
    created(){
        if (this.$route.params.id){
            posts
            .get(this.$route.params.id)
            .then(response => {
                (this.post = response.data)
            })
            .catch(err => console.log(err))
        }
    },
    methods: {
        addComment (comment) {
            posts
            .addComment(comment, this.post.id)
            .then((response) => {
                posts
                .get(this.post.id)
                .then((response) => {
                    this.post = response.data
                })
            })
            }
        },
    computed: {
        comments () {
            return this.post.comments ? this.post.comments.reverse() : []
        }
    },
  
    

    
}

</script>