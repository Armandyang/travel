<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont back-icon">&#xe6ff;</span>
		</div>
		<div class="header-input">
			<span class="iconfont">&#xe613;</span>
			输入城市/景点/游玩主题
		</div>
		<div class="header-right">
			三亚
			<span class="iconfont arrow-down">&#xe62b;</span>
		</div>
	</div>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="stylus">
	@import "~css/varibles.styl"
	.header
		font-size:14px;
		line-height:.86rem
		display:flex
		background:$bgColor
		color:#fff
		.header-left
			width:.64rem
			float:left
			text-align:center
			.back-icon
				font-size:0.4rem
		.header-input
			flex:1
			background:#ffffff
			border-radius:.1rem
			margin:.12rem 0 0 .2rem
			height:.64rem
			line-height:.64rem
			color:#ccc
			padding-left:0.2rem
		.header-right
			width:1.24rem
			float:right
			text-align:center
			.arrow-down
				margin-left:-.06rem
				font-size:0.24rem
</style>