<template>
	<Panel :txt="txt">
		<cm-list :items="list"></cm-list>
	</Panel>
</template>
<script>
import Panel from '../base/panel.vue'
import cmList from '../base/list.vue'
export default {
	props: {
		list: {
			type: Array,
			default () {
				return []
			}
		}
	},
	components: {
		Panel,
		cmList
	},
	data () {
		return {
			txt: '最新音乐'
		}
	}
}
</script>
