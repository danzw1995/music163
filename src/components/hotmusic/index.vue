<template>
	<div :class="$style.container">
		<div :class="$style.fix">
			<cm-header></cm-header>
			<cm-navbar></cm-navbar>
		</div>
		<cm-poster></cm-poster>
		<cm-list :hot-list="hotList"></cm-list>
		<cm-loading v-show="!hotList.length"></cm-loading>
	</div>
</template>
<script>
import cmHeader from '../public/header'
import cmNavbar from '../public/navbar'
import cmPoster from './poster'
import cmList from './hotlist'
import cmLoading from '../base/loading'
import {getHotMusic} from 'api/hot'
export default {
	data () {
		return {
			hotList: []
		}
	},
	components: {
		cmHeader,
		cmNavbar,
		cmPoster,
		cmList,
		cmLoading
	},
	created () {
		getHotMusic().then(res => {
			if (res.data.code === 200) {
				this.hotList = res.data.items
			}
		}).catch(err => {
			console.log(err)
		})
	}
}
</script>
<style lang="scss" module>
	.container {
		.fix {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 2;
			width: 100%;
			background-color: #fff;
		}
	}

</style>
