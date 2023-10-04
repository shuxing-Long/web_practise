<template>
    <div>
        <MyCount>
        </MyCount>
    </div>
</template>

<script>
    import MyCount from './components/MyCount'
    export default {
        name: 'App',
        components: { MyCount },
        
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