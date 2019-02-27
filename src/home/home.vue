<template>
	<div class="wrap">
		<home-header></home-header>
		<home-swiper></home-swiper>
		<home-icons></home-icons>
		<recommend></recommend>
	</div>
	
</template>

<script>
	import HomeHeader from './components/header/header'
	import HomeSwiper from './components/swiper/swiper'
	import HomeIcons from './components/icons/icons'
	import Recommend from './components/recommend/recommend'
	export default {
		components: {
			HomeHeader,
			HomeSwiper,
			HomeIcons,
			Recommend
		}
	}
</script>

<style scoped>

</style>