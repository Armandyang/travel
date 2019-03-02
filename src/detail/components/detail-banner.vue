<template>
	<div>
		<div class="detail-banner" @click="handleBannerGally">
			<img :src="bannerImg" class="banner-img"/>
			<div class="banner-info">
				<div class="banner-title">{{this.sightName}}</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe617;</span>
					{{this.gallyImg.length}}
				</div>
			</div>
		</div>
		<fade>
			<common-gally :imgs="gallyImg" v-show="showBannerGally" @close="close"></common-gally>
		</fade>
	</div>
	
</template>

<script>
	import CommonGally from 'common/gally/Gally'
	import Fade from 'common/fade/fade'
	export default {
		props: {
			sightName: String,
			bannerImg: String,
			gallyImg: Array
		},
		data(){
			return {
				showBannerGally: false
			}
		},
		methods:{
			handleBannerGally(){
				this.showBannerGally = true
			},
			close(){
				this.showBannerGally = false
			}
		},
		components: {
			CommonGally,
			Fade
		}
	}
</script>

<style scoped lang="stylus">
	.detail-banner
		font-size:.28rem
		overflow:hidden
		height:0
		padding-bottom:55%
		position:relative
		.banner-img
			width:100%
		.banner-info
			display:flex
			position:absolute
			left:0
			right:0
			bottom:0
			line-height:.6rem
			color:#fff
			background-image:linear-gradient(top,
			rgba(0,0,0,0),
			rgba(0,0,0,.8))
			.banner-title
				flex:1
				font-size:.32rem
				padding:.1rem
			.banner-number
				height:.32rem
				margin-top:.24rem
				font-size:.24rem
				padding:0 .4rem
				line-height:.32rem
				border-radius:.2rem
				background:rgba(0,0,0,.5)
				.banner-icon
					font-size:.28rem
</style>