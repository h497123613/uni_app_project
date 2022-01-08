<template>
	<view class="floor">
		<image class="floorImg" :src="floor.titlePicUrl"></image>
		<scroll-view scroll-x="true" enable-flex class="floorScroll">
			<view class="scrollItem" v-for="(item,index) in floor.itemList" :key="item.id">
				<image class="itemImg" :src="item.primaryPicUrl"></image>
				<text class="itemText">{{item.name}}</text>
			</view>
			<view class="scrollItem single">
				>>>查看更多
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		name:'Floor',
		props:['floor']
	}
</script>

<style lang="stylus">
	.floor{
		.floorImg{
			height:350rpx;
			width 100%
		}
		.floorScroll{
			display flex
			height 300rpx
			.scrollItem{
				width 200rpx
				display flex
				flex-direction column
				margin-right 20rpx
				&.single{
					width 200rpx
					height 300rpx
					flex-shrink 0
					text-align center
					line-height 300rpx
				}
				.itemImg{
					width 200rpx
					height 200rpx
				}
				.itemText{
					display:-webkit-box;
					-webkit-box-orient:vertical;
					-webkit-line-clamp:2;
					overflow:hidden;
					// display block
					font-size 28rpx
				}
			}
		}
	}
</style>
