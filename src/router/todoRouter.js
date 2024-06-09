

import MainPage from "../pages/todo/MainPage.vue";
import ListPage from "../pages/todo/ListPage.vue";
import AddPage from "../pages/todo/AddPage.vue";

function checkCookie(to, from, next) {

    console.log("check login with cookie")

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
            component: ListPage,

        },
        {
            path: 'add',
            component: AddPage,
        }

    ],
    beforeEnter: checkCookie,
}


export default todoRouter