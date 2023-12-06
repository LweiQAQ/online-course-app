<template>
	<view class="content" >
		<Header></Header>
		<view class="toBar">
			<u-tabs :list="toBar" :current="current"
			:activeStyle="{
				color: '#333333',
				fontWeight: 'bold',
				transform: 'scale(1.05)'
			}" 
			:inactiveStyle="{
				color: '#b0b3ba',
				transform: 'scale(1)'
			}"
			@change="changeTabs"
			></u-tabs>
		</view>
		<view class="swiper">
			<swiper :duration="500" :current="current" @change="changeSwiper" :style="'height:'+swiperHeight+'px'" disabled=false>
				<swiper-item v-for="(item,index) in toBar" :key="index" @touchmove.stop >
					<scroll-view scroll-y="true" :style="'height:'+swiperHeight+'px'">
						<component :is="activeCom" v-if="index === current"></component>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>

import Header from '../../components/Header.vue'
import Recommend from '../../components/home/Recommend.vue'
import Free from '../../components/home/Free.vue'
import actualCombat from '../../components/home/actualCombat.vue'

	export default {
		components: {
			Header,
			Recommend,
			Free,
			actualCombat
		},
		data() {
			return {
				swiperHeight:0,
				title: 'Hello',
				toBar: [{
					name: '今日推荐'
				}, {
					name: '免费课程',
					badge: {
						isDot: true
					}
				}, {
					name: '实战课程',
					badge: {
						value: 5,
					}
				}],
				current:0,
				activeCom: Recommend
			}
		},
		onLoad() {
			
		},
		onReady() {
			let searchHeight = 0;
			let tabsHeight = 0;
			let searchView = uni.createSelectorQuery().select('.header-search');
			searchView.boundingClientRect(data =>{
				searchHeight = data.height; 
			}).exec();
			let toBarView = uni.createSelectorQuery().select('.toBar');;
			toBarView.boundingClientRect(data =>{
				tabsHeight = data.height; 
			}).exec();
			let that = this;
			uni.getSystemInfo({
				success(res) {
					that.swiperHeight = res.windowHeight - searchHeight - tabsHeight
				}
			})
		},
		methods: {
			changeTabs({index}){
				this.current = index
				this.tabsCom(index)
			},
			changeSwiper(e){
				this.current = e.detail.current
				this.tabsCom(e.detail.current)
			},
			tabsCom(index){
				switch(index){
					case 0:
						this.activeCom = Recommend;
						break;
					case 1: 
						this.activeCom = Free;
						break;
					case 2:
						this.activeCom = actualCombat;
						break;
				}
			}
		}
	}
</script>

<style>
/deep/ .u-tabs__wrapper__nav__item__text{
	font-size: 29rpx;
	font-weight: 400;
}
	
	
	/deep/ ::-webkit-scrollbar{
		display: block;
		width: 0px !important;
		height: 0px !important;
	}
</style>