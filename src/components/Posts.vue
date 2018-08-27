<template>
    <div v-if="post" class="container">
        <ul :index="index">
            <li class="list-group-item"> 
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
                        v-if="!suggested"
                        :to="{ name: 'edit-post', params: { id: post.id } }" 
                        class="btn btn-primary">
                        Edit
                    </router-link>
                    <button  v-if="!suggested" class="btn btn-danger" @click="deletePost(post.id)">Delete</button>
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
        post: Object,
        count: Number,
        index: Number,
        suggested: Boolean
    },
    mixins: [ DateMixin ],
    methods: {
        deletePost(id){
            this.$emit('deletePost', [ id, index = this.index ])
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