<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(icons,index) in pages" :key="index" class="swipper">
				<div class="icon" v-for="item in icons">
					<div class="icon-img">
						<img :src="item.imgUrl" alt=""/>
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		 </swiper>
	</div>
</template>

<script>
	export default {
		props : {
			icons : Array
		},
		data(){
			return {
				swiperOption: {
					autoplay:false,
					pagination: {
						el: '.swiper-pagination'
					}
				}
			}
		},
		computed: {
			pages (){
				const pages = [];
				this.icons.forEach((item,index)=>{
					const page = Math.floor( index/8 );
					if( !pages[page] ){
						pages[page] = [];
					}
					pages[page].push( item )
				})
				return pages
			}
		}
		
		
	}
</script>

<style scoped lang="stylus">
	@import '~css/varibles.styl'
	.icons >>> .swipper
		padding-bottom:10%
	.icons >>> .swiper-pagination-bullet
		width:.2rem
		height:.1rem
	.icons >>> .swiper-pagination-bullet-active
		background:$bgColor
	.icons
		font-size:0.28rem
		.icon
			float:left
			overflow:hidden
			position:relative
			width:25%
			padding-bottom:24%
			margin-bottom:-.27rem
			.icon-img
				position:absolute
				top:0
				left:0
				right:0
				bottom:0.33rem
				box-sizing:border-box
				padding:0.1rem
				img
					height:100%
					display:block
					margin:0 auto
					transform:scale(.82)
			.icon-desc
				position:absolute
				left:0
				right:0
				bottom:0
				height:0.60rem	
				line-height:0.60rem	
				text-align:center
				color:$darkTextColor
				ellipsis()	
</style>