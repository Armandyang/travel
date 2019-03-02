<template>
	<div class="detail">
		<detail-banner 
			:sightName="sightName" 
			:bannerImg="bannerImg" 
			:gallyImg="gallyImg"></detail-banner>
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
	import axios from 'axios'
	export default {
		name: 'Detail',
		components: {
			DetailBanner,
			DetailHeader,
			DetailList
		},
		data(){
			return {
				sightName:'',
				bannerImg:'',
				gallyImg:[],
				list :[]
			}
		},
		methods: {
			getDetailInfo(){
				axios.get('/api/detail.json', {
					params: {
						id: this.$route.params.id
					}
				}).then( this.handleGetDataSucc )
			},
			handleGetDataSucc(res){
				res = res.data
				if( res.ret && res.data){
					const data = res.data
					this.sightName = data.sightName
					this.bannerImg = data.bannerImg
					this.gallyImg = data.gallaryImgs
					this.list = data.categoryList
				}
			}
		},
		mounted (){
			this.getDetailInfo()
		}
	}
</script>

<style scoped lang="stylus">
	.content
		height:50rem
</style>