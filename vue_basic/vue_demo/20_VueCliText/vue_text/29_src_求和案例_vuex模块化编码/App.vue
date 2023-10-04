<template>
    <div>
        <MyCount>
        </MyCount>
        <PerSon></PerSon>
    </div>
</template>

<script>
    import MyCount from './components/MyCount'
    import PerSon from './components/PerSon'
    export default {
        name: 'App',
        components: { MyCount,PerSon },
        
    }
</script>

<style scoped>
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }
    h4{
        text-align: center;
    }

</style>