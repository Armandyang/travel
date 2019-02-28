<template>
	<ul class="alpha">
		<li class="item" 
			v-for="item in letters" 
			:key="item"
			@click="handleClick"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
			:ref="item"
			>{{item}}</li>
	</ul>
</template>

<script>
	export default {
		props : {
			cities : Object
		},
		computed : {
			letters(){
				const letters = []
				for( let i in this.cities ){
					letters.push(i)
				}
				return letters
			}
		},
		data(){
			return {
				touchStatus: false
			}
		},
		methods: {
			handleClick(e){
				this.$emit("change", e.target.innerHTML)
			},
			handleTouchStart(){
				this.touchStatus = true
			},
			handleTouchMove(e){
				if( this.touchStatus ){
					const startY = this.$refs['A'][0].offsetTop
					const touchY = e.touches[0].clientY - 79
					const index = Math.floor((touchY - startY)/20)
					if( index>=0 && index<this.letters.length){
						this.$emit('change', this.letters[index])
					}
				}
			},
			handleTouchEnd(){
				this.touchStatus = false
			}
			
		}
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