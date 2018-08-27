<template>
    <div>
        <Posts :post="post" />
    </div>
</template>
<script>
import Posts from '../components/Posts'
export default {
    components: {
        Posts
    },
    props: {
        post: Object,
    }
}
</script>
