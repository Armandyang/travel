<template>
	<div class="recommend">
		<div class="title">热销推荐</div>
		<ul>
			<router-link class="item border-bottom" v-for="item in list" tag="li" :to="'/detail/'+item.id" :key="item.id">
				<div class="item-img-wrapper">
					<img :src="item.imgUrl" class="item-img"/>
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</router-link>
		</ul>
	</div>
</template>

<script>
export default {
	props:{
		list :Array
	}
}
</script>

<style scoped lang="stylus">
	@import '~css/varibles.styl'
	.recommend
		font-size:.28rem
		.title
			margin-top:.2rem
			background:#eee
			line-height:.8rem
			text-indent:.2rem
		.item
			display:flex
			height:1.9rem
			overflow:hidden
			.item-img
				width:1.7rem
				height:1.7rem
				padding:.1rem
			.item-info
				flex:1
				min-width:0
				padding:.1rem
				.item-title
					line-height:.54rem
					font-size:.32rem
					ellipsis()
				.item-desc
					line-height:.4rem
					color:#ccc
					ellipsis()
				.item-button
					margin-top:.2rem
					color:#fff
					background:#ff9300
					padding:.1rem .2rem
					border-radius:.06rem
					border:none
				
</style>