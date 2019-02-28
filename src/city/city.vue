<template>
	<div class="city">
		<city-header></city-header>
		<city-search></city-search>
	</div>
</template>

<script>
	import CityHeader from './components/city-header'
	import CitySearch from './components/city-search'
	export default {
		components : {
			CityHeader,
			CitySearch
		}
	}
</script>

<style scoped lang="stylus">
</style>