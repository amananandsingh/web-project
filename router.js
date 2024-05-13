import { createRouter, createWebHistory } from 'vue-router';
import CourseCreate from './components/course/CourseCreate.vue';
import HelloWorld from './components/HelloWorld.vue';
import CourseList from './components/course/CourseList';
import CourseEdit from './components/course/CourseEdit';

// import SignUp from './components/SignUp.vue';
// import BookUp from './components/BookUp.vue';
// import UserList from './components/UserList.vue';
// import UserEdit from './components/UserEdit.vue';
// import Appliance from './components/Appliance.vue';
const routes=[
    {
        path: '/',
        name: 'hello',
        component:(HelloWorld)
    },
    {
        path: '/course/create',
        name: 'CourseCreate',
        component:(CourseCreate)
    },
    {
        path: '/courselist',
        name: 'CourseList',
        component:(CourseList)
    },
     {
        path: '/courseedit/:id',
        name: 'CourseEdit',
        component:(CourseEdit)
    },
    // {
    //     path: '/signup',
    //     name: 'SignUp',
    //     component:(SignUp)
    // },
    // {
    //     path: '/userlist',
    //     name: 'UserList',
    //     component:(UserList)
    // },
    // {
    //     path: '/useredit/:id',
    //     name: 'UserEdit',
    //     component:(UserEdit)
    // },
    // {
    //     path: '/appliance',
    //     name: 'appliance',
    //     component:(Appliance)
    // },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
  })
  
export default router;