<template>
	<div class="city-list" ref="wrapper">
		<div>
			<div class="area">
				<div class="title border-topbottom">当前城市</div>
				<div class="button-list">
					<div class="button-wrapper">
						<div class="button">{{this.$store.state.city}}</div>
					</div>
				</div>
			</div>
			<div class="area">
				<div class="title border-topbottom">热门城市</div>
				<div class="button-list">
					<div class="button-wrapper" v-for="item in hotCities" @click="handleCityClick(item.name)">
						<div class="button">{{item.name}}</div>
					</div>
				</div>
			</div>
			<div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
				<div class="title border-topbottom">{{key}}</div>
					<div class="item-list">
						<ul>
							<li class="item border-bottom" v-for="city in item" :key="item.id" @click="handleCityClick(city.name)">{{city.name}}</li>
						</ul>
					</div>
				</div>
			</div>
	</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		props : {
			hotCities : Array,
			cities : Object,
			mes : String
		},
		mounted(){
			this.scroll = new BScroll( this.$refs.wrapper )
		},
		watch: {
			mes(){
				if( this.mes ){
					const element = this.$refs[this.mes][0]
					this.scroll.scrollToElement( element,300 )					
				}
			}
		},
		methods:{
			handleCityClick(city){
				this.$store.dispatch('changeCity',city)
				this.$router.push('/')
			}
		}
	}
</script>

<style scoped lang="stylus">
	@import '~css/varibles.styl'
	.border-topbottom
		&:before
			border-color:#ccc
		&:after
			border-color:#ccc
	.border-bottom
		&:before
			border-color:#ccc
	.city-list
		overflow:hidden
		font-size:.28rem
		position:absolute
		top:1.58rem
		bottom:0
		right:0
		left:0
		.title
			font-size:.26rem
			line-height:.64rem
			background:#eee
			color:#666
			padding-left:.2rem
		.button-list
			overflow:hidden
			padding:.1rem .6rem .1rem .1rem
			display:flex
			flex-wrap: wrap
			.button-wrapper
				width:33.3%
				.button
					margin:.1rem
					padding:.1rem 0
					text-align:center
					border:.02rem solid #ccc
					border-radius:.06rem
		.item-list
			.item
				line-height:.76rem
				color:#666
				padding-left:.2rem
</style>