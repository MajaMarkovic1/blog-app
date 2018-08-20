<template>
    <div  class="container">
        <ul class="list-group list-group-flush"
            v-for="post in posts" :key="post.id">
            <li class="list-group-item">
                {{ post.title }}
                <div id="buttons">
                    <router-link 
                        :to="{ name: 'single-post', params: { id: post.id } }" 
                        class="btn btn-success">
                        View post
                    </router-link>
                    <router-link 
                        :to="{ name: 'edit-post', params: { id: post.id } }" 
                        class="btn btn-primary">
                        Edit
                    </router-link>
                    <button class="btn btn-danger" @click="deletePost(post)">Delete</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        posts: Array,
    },

    methods: {
        deletePost(post){
            this.$emit('deletePost', post)
        }
    }


}

</script>

<style>
 .list-group-item {
     font-size: 1.5rem;
     display: flex;
     justify-content: space-between
 }
.btn {
     margin-right: 0.5rem;
 }
</style>