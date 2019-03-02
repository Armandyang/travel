<template>
	<div class="detail-header">
		<router-link tag="div" to="/" class="header-abs" v-show="showAbs"><span class="iconfont back-icon">&#xe6ff;</span></router-link>
		<div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
			<router-link to="/"><span class="iconfont header-fixed-back">&#xe6ff;</span></router-link>
			景点详情
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DetailHeader',
		data(){
			return {
				showAbs:true,
				opacityStyle: {
					opacity: 0
				}
			}
		},
		methods:{
			handleScroll(){
				const top = document.documentElement.scrollTop
				if( top > 60 ){
					let opacity = top / 140
//					opacity = opacity > 1 ? 1 : opacity
					this.opacityStyle = {
						opacity
					}
					this.showAbs = false
				}else{
					this.showAbs = true
				}
			}
		},
		activated(){
			window.addEventListener('scroll', this.handleScroll)
		},
		deactivated(){
			window.removeEventListener('scroll', this.handleScroll)
		}
	}
</script>

<style scoped lang="stylus">
	@import '~css/varibles.styl' 
	.detail-header
		font-size:.28rem
		.header-abs
			position:absolute
			left:.2rem
			top:.2rem
			width:.8rem
			height:.8rem
			border-radius:.4rem
			background:rgba(0,0,0,.6)
			text-align:center
			line-height:.8rem
			color:#fff
		.header-fixed
			position:fixed
			left:0
			top:0
			right:0
			font-size:0.32rem
			height:$headerHeight
			line-height:$headerHeight
			text-align:center
			color:#fff
			background:$bgColor
			z-index:9
		.header-fixed-back
			position:absolute
			width:.64rem
			top:0
			left:0
			text-align:center
			font-size:.4rem
			color:#fff
</style>