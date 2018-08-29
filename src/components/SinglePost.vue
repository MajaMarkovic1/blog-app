<template>
    <div v-if="post" class="container">
        <div class="card" style="width: 100%;">
            <div><strong>Title:</strong><br> {{ post.title }}</div><br>
            <div v-html="post.text"></div><br>
        </div>
        
        <div class="addAndSuggested">
            <add-comment class="card" style="width: 45%;" @commentAdded="addComment"></add-comment><br>
            <div >
                <h5>Suggested post:</h5>
                <SuggestedPost :post="suggestedPost"/>
            </div>
        </div>
        <comment-list :comments="comments"></comment-list>
    </div>
</template>

<script>
import AddComment from './AddComment.vue'
import CommentList from './CommentList.vue'
import SuggestedPost from './SuggestedPost'
import { posts } from '../services/Posts'

export default {
    components: {
        AddComment,
        CommentList,
        SuggestedPost
    },
    data(){
        return {
            posts: [],
            post: {
                title: '',
                text: '',
                createdAt: '',
                selected: false
            },
            suggestedPost: {}
            
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

    beforeRouteEnter(to, from, next) {
        posts.getAll().then(response => {
        next(vm => {
            vm.setPosts(response, vm, to.params.id)
        })
        })
    },
    beforeRouteUpdate(to, from, next) {
        posts.getAll().then(response => {
        this.setPosts(response, this, to.params.id)
        next()
        })
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
            },

        setPosts(response, context, currId) {
            context.post = response.data.find(p => p.id === currId)
            context.posts = response.data
            let randomIndex = Math.floor(Math.random() * this.posts.length)
            this.suggestedPost = this.posts[randomIndex]
            }
           
        },
     
    computed: {
        comments () {
            return this.post.comments ? this.post.comments.reverse() : []
        },
        

    },
  
    

    
}

</script>

<style>
.card{
    padding: 1rem;
    margin-top: 1rem; 
}

.addAndSuggested{
    display: flex;
    justify-content: space-between;
}
</style>
