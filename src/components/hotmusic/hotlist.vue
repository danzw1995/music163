<template>
	<div>
		<cm-list :items="hotList" :class="$style.list"></cm-list>
		<div v-show="hotList.length" :class="$style.more">查看完整榜单 ></div>
	</div>
</template>
<script>
import cmList from '../base/list.vue'
export default {
	props: {
		hotList: {
			type: Array,
			default () {
				return []
			}
		}
	},
	components: {
		cmList
	}
}
</script>

<style lang="scss" module>
	.list {
		li > div:nth-child(2) {
				max-width: calc(100% - 150px) !important;
		}
	}
	.more {
		height: 110px;
		line-height: 110px;
		text-align: center;
		font-size: 28px;
		color: #999;
	}
</style>


