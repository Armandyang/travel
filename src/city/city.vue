<template>
	<div class="citylist">
		<city-header></city-header>
		<city-search></city-search>
		<city-list :cities="cities" :hotCities="hotCities"
			:mes="mes"></city-list>
		<city-alpha :cities="cities" @change="handleClickChange"></city-alpha>
	</div>
</template>

<script>
	import CityHeader from './components/city-header'
	import CitySearch from './components/city-search'
	import CityList from './components/city-list'
	import CityAlpha from './components/city-alpha'
	import axios from 'axios'
	export default {
		data(){
			return {
				cities: {},
				hotCities : [],
				mes : ''
			}
		},
		components : {
			CityHeader,
			CitySearch,
			CityList,
			CityAlpha
		},
		methods: {
			getCityInfo(){
				axios.get('/api/city.json')
					.then(this.handleGetCityInfoSucc)
			},
			handleGetCityInfoSucc(res){
				let resquest = res.data
				if( resquest.ret && resquest.data ){
					const data = resquest.data
					this.cities = data.cities
					this.hotCities = data.hotCities
				}
			},
			handleClickChange(mes){
				this.mes = mes
			}
		},
		mounted(){
			this.getCityInfo()
		}
	}
</script>

<style scoped lang="stylus">
</style>