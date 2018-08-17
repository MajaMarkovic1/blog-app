<template>
    <div  class="container">
        <ul class="list-group list-group-flush"
            v-for="post in posts" :key="post.id">
            <li class="list-group-item">
                {{ post.title }}
                <div>
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
                </div>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    props: {
        posts: Array,
    }


}

</script>

<style>
 .list-group-item {
     font-size: 1.5rem;
     display: flex;
     justify-content: space-between
 }
</style>