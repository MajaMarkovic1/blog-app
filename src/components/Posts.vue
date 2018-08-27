<template>
    <div  class="container">
        <div>You selected {{ count }} posts</div>
        <ul
            v-for="post in posts" :key="post.id"
             >
            <li class="list-group-item" :class="{ red: post.selected }"> 
                <div>
                    <div>{{ post.title }}</div>
                    <div class="createdAt">{{ post.createdAt | formatDate }}</div>
                </div>
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
                    <button class="btn btn-danger" @click="select(post)">Select</button>
                    
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { DateMixin } from '../mixins'

export default {
    props: {
        posts: Array,
        count: Number,
    },
    mixins: [ DateMixin ],
    methods: {
        deletePost(post){
            this.$emit('deletePost', post)
        },
        select(post){
            this.$emit('select', post)
            
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
 .createdAt {
     font-style: italic;
     font-size: 0.8rem;
 }
 .red {
     background-color: grey
 }
</style>