<template>
	<div class="citylist">
		<city-header></city-header>
		<city-search></city-search>
		<city-list></city-list>
		<city-alpha></city-alpha>
	</div>
</template>

<script>
	import CityHeader from './components/city-header'
	import CitySearch from './components/city-search'
	import CityList from './components/city-list'
	import CityAlpha from './components/city-alpha'
	export default {
		components : {
			CityHeader,
			CitySearch,
			CityList,
			CityAlpha
		}
	}
</script>

<style scoped lang="stylus">
</style>