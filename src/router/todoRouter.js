

import MainPage from "../pages/todo/MainPage.vue";
import ListPage from "../pages/todo/ListPage.vue";
import AddPage from "../pages/todo/AddPage.vue";

function checkCookie(to, from, next) {

    console.log("check login with cookie")

    next()

}

const todoRouter =
{
    path: '/todo',
        component: MainPage,
    children:
    [
        {
            path: '',
            redirect: '/todo/list',
        },
        {
            path: 'list',
            component: () => import('../pages/todo/ListPage.vue')

        },
        {
            path: 'add',
            component: () => import('../pages/todo/AddPage.vue')
        },
        {
            path: 'read/:mno',
            component: () => import('../pages/todo/ReadPage.vue')
        },
        {
            path: 'modify/:mno',
            component: () => import('../pages/todo/ModifyPage.vue')
        }

    ],
    beforeEnter: checkCookie,
}


export default todoRouter