<template>
	<view>
		<view class='re-swiper'>
			<u-swiper
				:list="swiperList"
				indicator
				indicatorMode="line"
				circular
				height='308rpx'
			></u-swiper>
		</view>
		<view class='re-new'>
			<view class='new-title'>
				<view class='new-title-name'>新上好课</view>
				<view class='new-title-more'>查看更多</view>
			</view>
			<view class='new-list'>
				<view 
					class='new-list-item'
					v-for='item in newList'
					:key='item.id'
				>
					<view class='new-item-img'>
						<image :src="item.courseCover"></image>
					</view>
					<view class='new-item-main'>
						<view class='new-item-title'>{{ item.courseName }}</view>
						<view class='new-item-type'>{{ item.courseLevel }}</view>
						<view class='new-item-total'>
							<view class='new-item-price'>
								<view>限时优惠</view>
								<view class='new-item-discountPrice'>¥ {{ item.discountPrice }}</view>
							</view>
							<view class='new-item-number'>{{ item.clicks }}人学习</view>
						</view>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
import { getSliders  } from '@/api/home.js'
import { mostNew } from '@/api/course.js'
export default{
	data () {
		return {
			swiperList:[],
			newList:[]
		}
	},
	mounted(){
		//查询轮播图
		getSliders().then(res=>{
			this.swiperList = res.list.map(v=>v.imageUrl);
		})
		//查询新上好课
		mostNew({
			pageNum:1,
			pageSize:3
		}).then(res=>{
			this.newList = res.pageInfo.list;
			console.log( res.pageInfo.list )
		})
	}
}
</script>

<style>
/deep/ .u-swiper__indicator{
	right:20rpx;
}
.new-title{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top:40rpx;
}
.new-title-name{
	font-size: 40rpx;
	font-weight: 400;
	color: #333333;
}
.new-title-more{
	font-size: 26rpx;
	font-weight: 400;
	color: #A0A4AD;
}
.new-list-item{
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top:40rpx;
}
.new-list-item:after{
	content: '';
	position: absolute;
	bottom:-20rpx;
	margin-top:40rpx;
	width: 100%;
	border-bottom: 1px solid #000000;
	opacity: 0.15;
}
.new-item-img{
	width: 237rpx;
	height: 186rpx;
	border-radius: 12rpx;
	background-color: #ccc;
}
.new-item-img image{
	width: 100%;
	height: 100%;
	border-radius: 12rpx;
}
.new-item-main{
	flex:1;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 186rpx;
	padding-left:23rpx;
}
.new-item-title{
	font-size: 29rpx;
	font-weight: 400;
	color: #191919;
}
.new-item-type{
	font-size: 24rpx;
	font-weight: 400;
	color: #C5C5C5;
}
.new-item-total{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.new-item-price{
	display: flex;
	font-size: 21rpx;
	color: #FF4B5C;
	font-weight: 600;
}
.new-item-number{
	font-size: 21rpx;
	font-weight: 400;
	color: #A0A4AD;
}
.new-item-discountPrice{
	padding-left:21rpx;
}
</style>