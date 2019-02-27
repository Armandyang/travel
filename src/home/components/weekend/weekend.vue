<template>
	<div class="weekend">
		<div class="title">周末去哪</div>
		<ul>
			<li class="item border-bottom" v-for="item in recommendList">
				<div class="item-img-wrapper">
					<img :src="item.imgUrl" class="item-img"/>
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data() {
		return {
			recommendList: [{
					id: '0001',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
					title: '京城周末撒欢',
					desc: '在帝都过周末，不仅仅是城中游！'
				},
				{
					id: '0002',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
					title: '京城有好泉',
					desc: '细数北京温泉，温暖你的冬天'
				},
				{
					id: '0003',
					imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
					title: '帝都必打卡',
					desc: '来北京必去的景点非这些地方莫属'
				},
				{
					imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
					title: '寻找北京的皇城范儿',
					desc: '数百年的宫廷庙宇，至今依旧威严霸气'
				}
			]
		}
	}
}
</script>

<style scoped lang="stylus">
	@import '~css/varibles.styl'
	.weekend
		font-size:.28rem
		.title
			margin-top:.2rem
			background:#eee
			line-height:.8rem
			text-indent:.2rem
		.item-img-wrapper
			overflow:hidden
			height:0
			padding-bottom:33.9%
			.item-img
				width:100%
		.item-info
			padding:.1rem
			.item-title
				line-height:.54rem
				font-size:.32rem
				ellipsis()
			.item-desc
				line-height:.4rem
				color:#ccc
				ellipsis()
			
				
</style>