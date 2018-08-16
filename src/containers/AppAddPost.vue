<template>
    <div class="container">
        <AddPost />
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

        }
    }
    
}
</script>