<template>
    <div class="container">
        <AddPost :post="post" @onSubmit="onSubmit" @reset="reset"/>
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
    data(){
      return {
        post: {}
      }
    },
       created(){
            if(this.$route.params.id){
                posts
                .get(this.$route.params.id)
                .then(response => {
                    this.post = response.data
                })
            }
        },
    
    methods: {
        onSubmit(){
           this.$route.params.id ? this.edit() : this.add()
        },
        add(){
            posts
            .add(this.post)
            .then(response => {
                this.$router.push('/posts')
            })
            .catch(err => console.log(err))
        },
        edit(){
            posts
            .edit(this.post)
            .then(response => {
                this.$router.push('/posts')
            })
            .catch(err => console.log(err))
        },
        reset(){
            this.post = {}
        }
    }
    
}
</script>