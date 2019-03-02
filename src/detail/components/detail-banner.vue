<template>
	<div>
		<div class="detail-banner" @click="handleBannerGally">
			<img src="http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg" class="banner-img"/>
			<div class="banner-info">
				<div class="banner-title">北京欢乐谷(AAAA景区)</div>
				<div class="banner-number">
					<span class="iconfont banner-icon">&#xe617;</span>
					22
				</div>
			</div>
		</div>
		<common-gally :imgs="imgs" v-show="showBannerGally" @close="close"></common-gally>
	</div>
	
</template>

<script>
	import CommonGally from 'common/gally/Gally'
	export default {
		data(){
			return {
				showBannerGally: false,
				imgs : ['http://img1.qunarzz.com/sight/p0/1709/e9/e9b7ae23f567806ea3.img.jpg_r_800x800_07570307.jpg',
					'http://img1.qunarzz.com/sight/p0/1709/8c/8c90d360e818ed38a3.img.jpg_r_800x800_bcee8771.jpg']
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
			CommonGally
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