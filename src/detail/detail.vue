<template>
	<div class="detail">
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div class="content">
			<detail-list :list="list"></detail-list>
		</div>
		
	</div>
</template>

<script>
	import DetailBanner from './components/detail-banner'
	import DetailHeader from './components/detail-header'
	import DetailList from './components/detail-list'
	export default {
		components: {
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data(){
			return {
				list :[
				{
					title: '成人票',
					children: [{
						title: '北京分区'
					},{
						title: '河南分区',
						children:[{
							title: '南阳分区',
							title: '郑州分区'
						}]
					}]
				},
				{
					title: '学生票'
				},
				{
					title: '儿童票'
				},
				{
					title: '特惠票'
				}]
			}
		}
	}
</script>

<style scoped lang="stylus">
	.content
		height:50rem
</style>