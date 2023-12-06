<template>
	<view class="header-search">
		<view class="header-search-left">
			<view class="search-text">
				<u-icon name="search" size="21"></u-icon>
				<text>搜索</text>
			</view>
			<view>
				<u-icon name="scan" size="21"></u-icon>
			</view>
		</view>
		<view class="header-search-right">
			<view>
				<u-icon name="chat"  size="21"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Header",
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.header-search{
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 29rpx;
	}
	
	.header-search-left{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 610rpx;
		height: 61rpx;
		background-color: rgba(240,241,243,0.39);
		border-radius: 31rpx;

	}
	
	.search-text{
		display: flex;
		padding: 0rpx 20rpx;
	}
	
	.search-text text{
		color: #d8d8d8;
	}
</style>