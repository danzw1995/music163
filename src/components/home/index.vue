<template>
  <div :class="$style.container">
		<div :class="$style.fix">
				<cm-header></cm-header>
				<cm-navbar></cm-navbar>
		</div>
		<cm-recommend :class="$style.recommend"></cm-recommend>
		<cm-music :list="latestMusic"></cm-music>
		<cm-loading v-show="!latestMusic.length"></cm-loading>
		<cm-footer></cm-footer>
  </div>
</template>
<script>
import cmHeader from '../public/header.vue'
import cmNavbar from '../public/navbar.vue'
import cmRecommend from './recommend.vue'
import cmMusic from './music.vue'
import cmFooter from './footer'
import cmLoading from '../base/loading'
import {getLatestMusic} from '../../api/home'
export default {
	data () {
		return {
			latestMusic: []
		}
	},
	components: {
		cmHeader,
		cmNavbar,
		cmRecommend,
		cmMusic,
		cmFooter,
		cmLoading
	},
	created () {
		getLatestMusic().then(res => {
			if (res.data.code === 200) {
				this.latestMusic = res.data.data
			}
		}).catch(err => {
			console.log(err)
		})
	}
}
</script>
<style lang="scss" module>
	.fix {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 2;
		width: 100%;
		background: #fff;
	}
	.recommend {
		margin-top: 208px;
	}
</style>
