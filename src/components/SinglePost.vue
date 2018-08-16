<template>
    <div  class="container">
        <div><strong>Title:</strong><br> {{ post.title }}</div>
        <div><strong>Text:</strong><br> {{ post.text }}</div>
        
    </div>
</template>

<script>

export default {
    props: {
        post: Object
    },
    
}
</script>

<style>

</style>