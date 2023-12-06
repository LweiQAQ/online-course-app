<template>
	<view>
		<view class="re-swiper">
			<u-swiper :list="list" indicator indicatorMode="line" circular ></u-swiper>
		</view>
		<view class="re-new">
			<h3>新上好课</h3>
			<span>查看更多</span>
		</view>
		<view class="re-new-list" v-for="item in newList" :key="item.id">
			<view class="re-new-list-img">
				<image :src="item.courseCover" ></image>
			</view>
			<view class="re-new-list-content">
				<view class="re-new-list-content-title">
					<p>{{item.courseName}}</p>
				</view>
				<view class="re-new-list-content-class">
					<span>零基础课程</span>
				</view>
				<view class="re-new-list-content-info">
					<view class="re-new-list-content-info-pay">
						<span>限时优惠</span>
						<span class="price">￥{{item.discountPrice}}</span>
					</view>
					<view class="re-new-list-content-info-people">
						<span>{{item.clicks}}人学习</span>
					</view>
				</view>
			</view>
		</view>
		<view class="course">
			<view class="course-title">
				<h3>推荐好课</h3>
				<span>查看更多</span>
			</view>
			<view class="course-class">
				<scroll-view scroll-x="true" class="nav-bar">
					<view class="nav-bar-wrap">
						<block v-for="(item,index) in reList" :key="index">
							<view class="nav-bar-item">
								<view class="nav-bar-item-img">
									<img :src="item.courseCover" />
								</view>
								<view class="nav-bar-item-text">
									<view class="nav-item-level">中级·{{item.clicks}}人报名</view>
									<view class="nav-bar-price">
										<span class="nav-bar-item-oprice">￥{{item.salePrice}}</span>
										<span class="nav-bar-item-tprice">￥{{item.salePrice}}</span>
									</view>
									<view class="nav-bar-item-xprice">限时优惠</view>
								</view>
							</view>
						</block>
					</view>
				</scroll-view>
			</view>
		</view>
		<view class="every-watch">
				<h3>大家都在看</h3>
				<span>查看更多</span>
		</view>
		<view class="re-new-list" v-for="(item,index) in everyList" :key="index">
			<view class="re-new-list-img">
				<image :src="item.courseCover" ></image>
			</view>
			<view class="re-new-list-content">
				<view class="re-new-list-content-title">
					<p>{{item.courseName}}</p>
				</view>
				<view class="re-new-list-content-class">
					<span>零基础课程</span>
				</view>
				<view class="re-new-list-content-info">
					<view class="re-new-list-content-info-pay">
						<span>限时优惠</span>
						<span class="price">￥{{item.discountPrice}}</span>
					</view>
					<view class="re-new-list-content-info-people">
						<span>{{item.clicks}}人学习</span>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {getSliders} from '../../api/home.js'
	import {getMostNew,searchCourse} from '../../api/course.js'
	export default {
		data() {
			return {
				list: [],
				newList:[],
				reList:[],
				everyList:[]
			}
		},
		created() {
			uni.showLoading({
				title:'加载中',
				mask:true
			})
			getSliders().then(res => {
				this.list = res.list.map(item => item.imageUrl)
			})
			getMostNew({pageNum:1,pageSize:3}).then(res =>{
				this.newList = res.pageInfo.list
			})
			getMostNew({pageNum:1,pageSize:10}).then(res =>{
				this.reList = res.pageInfo.list
			})
			searchCourse({pageNum:1,pageSize:3,entity:{sortBy:'click-asc'}}).then(res =>{
				this.everyList = res.pageInfo.list
				uni.hideLoading()
			})
		}
	}
</script>

<style lang="scss">
	.re-swiper{
		padding: 14rpx;
	}
	.re-new{
		padding: 14rpx;
		padding-top: 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		h3{
			font-weight: 400;
		}
		span{
			font-size: 25rpx;
			color: #9499a0;
		}
	}
	
	.re-new-list{
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		margin-top: 40rpx;
		padding: 14rpx;
		.re-new-list-img{
			width: 237rpx;
			height: 186rpx;
			border-radius: 12rpx;
			background-color: #9499a0;
			image{
				width: 100%;
				height: 100%;
				border-radius: 12rpx;
			}
		}
	}
	
	.re-new-list::after{
		content: '';
		position: absolute;
		bottom: -20rpx;
		margin-top: 20rpx;
		width: 100%;
		border-bottom: 1px solid #9499a0;
	}
	
	
	.re-new-list-content-info{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	
	.re-new-list-content-title{
		font-size: 29rpx;
		font-weight: 400;
		color: #191919;
	}
	
	.re-new-list-content-class{
		font-size: 24rpx;
		color: #9499a0;
	}
	
	.re-new-list-content{
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		height: 186rpx;
		padding-left: 24rpx;
	}
	
	.re-new-list-content-info-pay{
		display: flex;
		font-size: 25rpx;
		color: #FF4B5C;
		font-weight: 600;
	}
	
	.price{
		padding-left:21rpx;
	}
	
	.re-new-list-content-info-people{
		font-size: 19rpx;
		color: #9499a0;
	}
	
	.course{
		padding: 14rpx;
	}
	
	.course-title{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 45rpx;
		h3{
			font-weight: 400;
		}
		span{
			font-size: 25rpx;
			color: #9499a0;
		}
	}
	
	.nav-bar-item{
		width: 265rpx;
		height: 310rpx;
		margin-top: 15rpx;
		margin-right: 10rpx;
		border-radius: 15rpx;
		background-color: #f4f4f4;
		box-shadow: 1rpx 3rpx 3rpx rgba(27, 39, 94, 0.1)
	}
	
	.nav-bar-item-img{
		width: 265rpx;
		height: 160rpx;
		
	}
	
	.nav-bar-item-img img{
		width: 100%;
		height: 100%;
		border-radius: 15rpx 15rpx 0rpx 0rpx;
	}
	
	.nav-bar-wrap{
		display: flex;
		flex-flow: column wrap;
		height: 650rpx;
	}
	
	/deep/ ::-webkit-scrollbar{
		display: block;
		width: 0px !important;
		height: 0px !important;
	}
	
	.nav-bar-item-oprice{
		font-size: 29rpx;
		color: #FF4B5C;
		font-weight: 600;
	}
	
	.nav-bar-item-tprice{
		font-size: 23rpx;
		color: #9499a0;
		text-decoration: line-through;
		margin-left: 20rpx;
	}
	
	.nav-item-level{
		font-size: 25rpx;
		color: #9499a0;
	}
	
	.nav-bar-item-text{
		padding: 12rpx;
	}
	
	.nav-bar-item-xprice{
		color: #ff6e6e;
		font-size: 25rpx;
		font-weight: 600;
		margin-top: 10rpx;
	}
	
	.re-new{
		padding-top: 40rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		h3{
			font-weight: 400;
		}
		span{
			font-size: 25rpx;
			color: #9499a0;
		}
	}
	
	.every-watch{
		padding: 14rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		margin-top: 40rpx;
		h3{
			font-weight: 400;
		}
		span{
			font-size: 25rpx;
			color: #9499a0;
		}
	}
</style>