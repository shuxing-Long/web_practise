<template>
    <div class="container">
        <Category title="美食">
            <img slot="center" src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
            <a slot="footer" href="www.bing.com">更多链接</a>
        </Category>
        <Category title="游戏" >
            <ul  slot="center">
                <li v-for="(item,index) in games" :key="index">{{item}}</li>
            </ul>
            <div class="foot" slot="footer">
                <a slot="footer" href="www.bing.com">更多链接</a>
                <a slot="footer" href="www.bing.com">更多链接</a>
            </div>
        </Category>
        <Category title="电影">
            <video slot="center" controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
            <div class="foot"  slot="footer">
                <a slot="footer" href="www.bing.com">经典</a>
                <a slot="footer" href="www.bing.com">入门</a>
                <a slot="footer" href="www.bing.com">推荐</a>
            </div>
            <h4 slot="footer">欢迎前来观看</h4>
        </Category>
    </div>
</template>

<script>
    import Category from './components/Category'
    export default {
        name: 'App',
        components: { Category },
        data() {
            return {
                foods:['火锅','烧烤','小龙虾','牛排'],
                games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
                films:['《教父》','《拆弹专家》','《尚硅谷》','《哈哈哈》']
            }
        },
    }
</script>

<style>
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }
    h4{
        text-align: center;
    }

</style>