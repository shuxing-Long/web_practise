<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	import pubsub from 'pubsub-js'
	export default {
		name:'SChool',
		props:['getSchoolName'],
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		methods: {
			demo(name,value){
				console.log('hello消息回调',name,value)
			}
		},
		mounted() {
			// this.pubId = pubsub.subscribe('hello',function(name,value){
			// 	console.log('hello消息回调',name,value)
			// })
			this.pubId = pubsub.subscribe('hello',this.demo)
		},
		beforeDestroy(){
			pubsub.unsubscribe(this.pubId)
		}
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>