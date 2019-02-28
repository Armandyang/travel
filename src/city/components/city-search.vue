<template>
	<div class="city-search">
		<input type="text" placeholder="输入城市名或拼音" class="search-input"/>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="stylus">
	@import '~css/varibles.styl'
	.city-search
		font-size:0.28rem
		height:0.72rem
		background:$bgColor
		padding:0 .1rem
		.search-input
			box-sizing:border-box
			padding:0 .1rem
			width:100%
			height:.62rem
			line-height:.62rem
			text-align:center
			border-radius:.06rem
			color:#666
		
		
			
</style>