<template>
	<div class="wrap">
		<swiper :options="swiperOption" class="swiper">
			<!-- slides -->
			<swiper-slide v-for="item in swiperList" :key="item.id">
				<img :src="item.imgurl" />
			</swiper-slide>
			
			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				swiperOption: {
					loop: true,
					autoplay: true,
					pagination: {
						el: '.swiper-pagination'
					}
				},
				swiperList: [
				{
					id: '000001',
					imgurl: 'static/image/01.jpg'
				},
				{
					id: '000002',
					imgurl: 'static/image/02.jpg'
				},
				{
					id: '000003',
					imgurl: 'static/image/03.jpg'
				},
				{
					id: '000004',
					imgurl: 'static/image/04.jpg'
				},
				{
					id: '000005',
					imgurl: 'static/image/05.jpg'
				}
				]
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
		padding-bottom:26%
		background:#ddd
		.swiper
			font-size:14px
			img
				width:100%
	
</style>