// 该文件专门用于创建整个应用的路由器
import VueRouter from "vue-router";
// 引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

// 创建一个路由器
const router =  new VueRouter({
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component:About,
            meta:{title:'首页'},
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            meta:{title:'关于'},
            children:[
                {
                    nema:'xiaoxi',
                    path:'news',
                    component:News,
                    meta:{isAuth:true,title:'新闻'},
                },
                {
                    name:'xiangqing',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true,title:'信息'},
                    children:[
                        {
                            name:'hahaha',
                            path:'detail',
                            component:Detail,
                            meta:{title:'详细'},
                            // 第一种写法,值为对象,该对象中的所有key-value都会以props的形式传给Detail组件
                            // props:{a:1,b:'hello'},

                            // 第二种写法,值为布尔值,若布尔值为真,就会把该路由组件收到的所有params参数,以props的形式传给Detail组件
                            // props:true,

                            // 第三种写法,值为函数
                            props($route){
                                return {id:$route.query.id,title:$route.query.title}
                            }
                            // props({query}){
                            //     return {id:query.id,title:query.title}
                            // }
                        }
                    ]
                },
            ]
        },
    ]
})

// 全局前置路由守卫--初始化的时候被调用、每次路由切换之前被调用
router.beforeEach((to,from,next) =>{
    console.log('前置路由守卫')
    
    // 判断是否需要鉴权
    if(to.meta.isAuth){
        if(localStorage.getItem('school') === 'atguigu'){
            next()
        }
        else{
            console.log('无权限')
        }
    }else{
        next()
    }
    
})

// 全局后置路由守卫--初始化的时候被调用、每次路由切换之后被调用
router.afterEach((to,from) => {
    document.title = to.meta.title || '尚硅谷'
    console.log('后置路由守卫')
})

export default router