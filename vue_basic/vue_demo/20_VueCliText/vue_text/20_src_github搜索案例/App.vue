<template>
    <div class="container">
        <Search></Search>
        <MyList></MyList>
    </div>
</template>

<script>
    import Search from './components/Search'
    import MyList from './components/MyList'
    // import axios from "axios";
    export default {
        name: 'App',
        components: { Search,MyList },
    }
</script>

<style>
    


</style>