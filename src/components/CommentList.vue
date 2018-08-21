<template>
  <div class="list-group">
    <h4>Comments:</h4>    
    <li class="list-group-item" v-for="comment in comments" :key="comment.id">
      <div>
        <div>{{ comment.text }}</div>
        <div class="createdAt">{{ comment.createdAt | diffForHumans }}</div>
        
      </div>
      
    </li>
  </div>
</template>
 <script>
import { DateMixin } from '../mixins'
 
export default {
  props: {
    comments: Array
  },
  mixins: [ DateMixin ]
}
</script>

<style>
.createdAt {
    font-style: italic;
     font-size: 0.8rem;
}
</style>
