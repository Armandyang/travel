<template>
	<div class="search">
		<div class="city-search">
			<input type="text" 
				placeholder="输入城市名或拼音" 
				class="search-input" 
				v-model="keyword"/>
		</div>
		<div class="search-content" ref="search" v-show="keyword">
			<ul>
				<li v-for="item in list" class="search-item border-bottom">{{item.name}}</li>
				<li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
			</ul>
		</div>
	</div>
	
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		props:{
			cities: Object
		},
		data(){
			return {
				keyword: '',
				list: [],
				timer: null
			}
		},
		computed : {
			hasNoData(){
				return !this.list.length
			}
		},
		watch: {
			keyword(){
				this.list[0] = ''
				if( this.timer ){
					clearTimeout( this.timer )
				}
				if(!this.keyword){
					this.list = []
					return
				}
				this.timer = setTimeout(()=>{
					const result = []
					for ( let i in this.cities ){
						this.cities[i].forEach((item)=>{
							if( item.spell.indexOf(this.keyword) != -1 ||
							item.name.indexOf(this.keyword) != -1){
								result.push( item )
							}
						})
					}
					this.list = result
				},10)
			}
		},
		mounted (){
			this.scroll = new BScroll(this.$refs.search)
		}
	}
</script>

<style scoped lang="stylus">
	@import '~css/varibles.styl'
	.search
		font-size:.28rem
		.city-search
			font-size:0.28rem
			height:0.72rem
			background:$bgColor
			padding:0 .1rem
			.search-input
				box-sizing:border-box
				padding:0 .1rem
				width:100%
				height:.62rem
				line-height:.62rem
				text-align:center
				border-radius:.06rem
				color:#666
		.search-content
			position:absolute
			top:1.58rem
			right:0
			left:0
			bottom:0
			overflow:hidden
			z-index:1	
			background:rgba(0,0,0,.5)
			.search-item
				height:.62rem
				line-height:.62rem
				background:#fff
			
</style>