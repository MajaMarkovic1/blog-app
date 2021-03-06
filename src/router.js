import Vue from 'vue'
import Router from 'vue-router'
import AppPosts from './containers/AppPosts.vue'
import SinglePost from './components/SinglePost.vue'
import AppAddPost from './containers/AppAddPost.vue'


Vue.use(Router)

export default new Router({
    mode: 'history',
    
    routes: [
        { path: '/', redirect: 'posts'},
        { path: '/posts', component: AppPosts},
        { path: '/post/:id', component: SinglePost, name: 'single-post'},
        { path: '/add', component: AppAddPost, name: 'add-post'},
        { path: '/edit/:id', component: AppAddPost, name: 'edit-post'},
        { path: '/delete/:id', component: AppPosts, name: 'delete-post'}
        
    ]

    
})

