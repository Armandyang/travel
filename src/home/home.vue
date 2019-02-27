<template>
	<div class="wrap">
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<home-recommend></home-recommend>
		<home-weekend></home-weekend>
	</div>
	
</template>

<script>
	import HomeHeader from './components/header/header'
	import HomeSwiper from './components/swiper/swiper'
	import HomeIcons from './components/icons/icons'
	import HomeRecommend from './components/recommend/recommend'
	import HomeWeekend from './components/weekend/weekend'
	export default {
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			HomeRecommend,
			HomeWeekend
		}
	}
</script>

<style scoped>

</style>