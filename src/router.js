import Vue from 'vue'
import Router from 'vue-router'
import Posts from './components/Posts.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    
    routes: [
        { path: '/', redirect: 'posts'},
        { path: '/posts', component: Posts},

    ]

    
})

