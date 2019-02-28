<template>
	<ul class="alpha">
		<li class="item">A</li>	
		<li class="item">A</li>	
		<li class="item">A</li>
		<li class="item">A</li>		
		<li class="item">A</li>	
		<li class="item">A</li>	
		<li class="item">A</li>	
		<li class="item">A</li>	
		<li class="item">A</li>	
	</ul>
</template>

<script>
	export default {
		
	}
</script>

<style scoped lang="stylus">
	@import '~css/varibles.styl'
	.alpha
		display:flex
		flex-direction:column
		justify-content:center
		font-size:.28rem
		position:absolute
		right:0
		top:1.58rem
		bottom:0
		width:.4rem
		.item
			line-height:.4rem
			text-align:center
			color:$bgColor
</style>