<template>
	<div class="gally" @click="handleGallyClick">
		<div class="wrapper">
			<swiper class="swiper" :options="swiperOption">
				<!-- slides -->
				<swiper-slide v-for="(item,index) in imgs" :key="index">
					<img class="gally-img" :src="item" />
				</swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</div>
	</div>
</template>

<script>
	export default {
		props: {
			imgs: {
				type: Array,
				default(){
					return []
				}
			}
		},
		data(){
			return {
				swiperOption: {
					pagination: {
						el:'.swiper-pagination',
						type:'fraction'
					},
					observer:true,
    				observeParents:true
				}
			}
		},
		methods: {
			handleGallyClick(){
				this.$emit('close')
			}
		}
	}
</script>

<style scoped lang="stylus">
	.gally >>> .swiper-container 
		overflow:inherit
	.gally
		font-size:.32rem
		display:flex
		flex-direction:column
		justify-content:center
		position:fixed
		left:0
		right:0
		bottom:0
		top:0
		background:#111
		z-index:99
		.wrapper
			width:100%
			height:0
			padding-bottom:100%
			.gally-img
				width:100%
			.swiper-pagination
				color:#fff
				bottom:-1rem
			
</style>