<template>
	<div class="school">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	export default {
		name:'SChool',
		props:['getSchoolName'],
		data() {
			return {
				name:'尚硅谷',
				address:'北京',
			}
		},
		mounted() {
			console.log('school',this)
			// 绑定一个事件到事件总线上
			this.$bus.$on('hello',(data)=>{
				console.log('我是school组件,收到了数据:',data)
			})
		},
		beforeDestroy(){
			// 取消挂载
			this.$bus.$off('hello')
		}
	}
</script>

<style scoped>
	.school{
		background-color: skyblue;
		padding: 5px;
	}
</style>