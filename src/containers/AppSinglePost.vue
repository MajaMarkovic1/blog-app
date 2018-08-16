<template>
    <div>
        <SinglePost :post="post"/>
    </div>
</template>

<script>
import SinglePost from '../components/SinglePost'
import { posts } from '../services/Posts'

export default {
    name: 'AppSinglePost',
    components: {
        SinglePost
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
    }
    
}

</script>