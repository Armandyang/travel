<template>
	<div class="fade">
		<transition>
			<slot></slot>
		</transition>
	</div>
</template>

<script>
	export default {
		name : 'fade'
	}
</script>

<style scoped lang="stylus">
	.v-enter,.v-leave-to
		opacity:0
	.v-enter-active, .v-leave-active
		transition:all .5s
</style>