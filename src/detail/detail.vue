<template>
	<div class="detail">
		<detail-banner></detail-banner>
		<detail-header></detail-header>
		<div class="content"></div>
	</div>
</template>

<script>
	import DetailBanner from './components/detail-banner'
	import DetailHeader from './components/detail-header'
	export default {
		components: {
			DetailBanner,
			DetailHeader
		}
	}
</script>

<style scoped lang="stylus">
	.content
		height:50rem
</style>