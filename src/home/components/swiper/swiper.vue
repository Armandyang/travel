<template>
	<div class="wrap">
		<swiper :options="swiperOption" class="swiper" v-if="showSwiper">
			<!-- slides -->
			<swiper-slide v-for="item in list" :key="item.id">
				<img :src="item.imgUrl" />
			</swiper-slide>
			
			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default {
		props : {
			list : Array
		},
		data () {
			return {
				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					},
					loop: true,
					autoplay: true
				}
			}
		},
		computed:{
			showSwiper(){
				return this.list.length
			}
		}
	}
</script>

<style scoped lang="stylus">
	.wrap >>> .swiper-pagination-bullet-active
		background:#fff
	.wrap
		overflow:hidden
		width:100%
		height:0		
		padding-bottom:30%
		background:#ddd
		.swiper
			font-size:14px
			img
				width:100%
	
</style>