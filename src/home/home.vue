<template>
	<div class="wrap">
		<home-header></home-header>
		<home-swiper :list="swiperList"></home-swiper>
		<home-icons :icons="icons"></home-icons>
		<home-recommend :list="recommendList"></home-recommend>
		<home-weekend :list="weekendList"></home-weekend>
	</div>
	
</template>

<script>
	import HomeHeader from './components/header/header'
	import HomeSwiper from './components/swiper/swiper'
	import HomeIcons from './components/icons/icons'
	import HomeRecommend from './components/recommend/recommend'
	import HomeWeekend from './components/weekend/weekend'
	import axios from 'axios'
	export default {
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		},
		data(){
			return  {
				lastCity: '',
				swiperList: [],
				icons:[],
				recommendList:[],
				weekendList:[]
			}
		},
		methods:{
			getHomeInfo(){
				axios.get( '/api/index.json?city='+this.$store.state.city )
				.then( this.getHomeInfoSucc )
			},
			getHomeInfoSucc(res){
				let resquest = res.data
				if(resquest.ret && resquest.data){
					const data = resquest.data
					this.swiperList = data.swiperList
					this.icons = data.iconList
					this.recommendList = data.recommendList
					this.weekendList = data.weekendList
				}
			}
		},
		mounted(){
			this.lastCity = this.$store.state.city
			this.getHomeInfo()
		},
		activated(){
			if( this.lastCity !== this.$store.state.city){
				this.lastCity = this.$store.state.city
				this.getHomeInfo()
			}
		}
	}
</script>

<style scoped>

</style>