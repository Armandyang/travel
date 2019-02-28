<template>
	<div class="header">
		城市选择
		<router-link to='/'>
			<span class="iconfont header-back">&#xe6ff;</span>
		</router-link>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style lang="stylus" scoped>
	@import '~css/varibles.styl'
	.header
		position:relative
		font-size:0.32rem
		height:$headerHeight
		line-height:$headerHeight
		overflow:hidden
		text-align:center
		color:#fff
		background:$bgColor
		.header-back
			position:absolute
			width:.64rem
			top:0
			left:0
			text-align:center
			font-size:.4rem
			color:#fff
</style>