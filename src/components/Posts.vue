<template>
    <div>
        <ul class="list-group list-group-flush"
            v-for="post in posts" :key="post.id">
            <li class="list-group-item">{{ post.title }}</li>
           
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
 }
</style>