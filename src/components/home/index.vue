<template>
  <div :class="$style.container">
		<div :class="$style.fix">
				<cm-header></cm-header>
				<cm-navbar></cm-navbar>
		</div>
		<cm-recommend :recommend="recommend" :class="$style.recommend"></cm-recommend>
		<cm-music :list="latestMusic"></cm-music>
		<cm-loading v-show="!latestMusic.length"></cm-loading>
		<cm-footer></cm-footer>
  </div>
</template>
<script>
import cmHeader from '../public/header'
import cmNavbar from '../public/navbar'
import cmRecommend from './recommend'
import cmMusic from './music'
import cmFooter from './footer'
import cmLoading from '../base/loading'
import {getLatestMusic, getRecommendMusic} from 'api/home'
export default {
	data () {
		return {
			latestMusic: [],
			recommend: []
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
		this.getLatest()
		this.getRecommend()
	},
	methods:{
		getLatest () {
			getLatestMusic().then(res => {
				if (res.data.code === 200) {
					this.latestMusic = res.data.data
				}
			}).catch(err => {
				console.log(err)
			})
		},
		getRecommend () {
			getRecommendMusic().then(res => {
				if (res.data.code === 200) {
					this.recommend = res.data.recommend
				}
			}).catch(err => {
				console.log(err)
			})
		}
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
