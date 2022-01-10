<template>
	<view class="categoryContainer">
		<view class="header">
			<view class="searcb">搜索商品</view>
		</view>
		<view class="main">
			<view class="left">
				<view @click="currentIndex = index" :class="currentIndex===index && 'active'" class="item" v-for="(cate,index) in categoryList" :key="cate.id">{{cate.name}}</view>
			</view>
			<view class="right">
				<scroll-view scroll-y="true" enable-flex class="rightScroll">
					
					<view class="rightMain">
						<image :src="currentCategory1.imgUrl" class="titleImg"></image>
					</view>
					
					<view class="subCateList">
						<view class="subCate" v-for="(item,index) in currentCategory1.subCateList" :key="item.id">
							<image class="subCateImg" :src="item.wapBannerUrl"></image>
							<text class="subCateName">{{item.name}}</text>
						</view>
					</view>
					
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from "vuex"
	export default {
		data() {
			return {
				currentIndex: 0
			};
		},
		mounted(){
			this.getCategoryList()
		},
		methods:{
			getCategoryList(){
				this.$store.dispatch('getCategoryList')
			}
		},
		computed:{
			...mapState({
				categoryList: state=>state.category.categoryList
			}),
			//计算当前点击的一级分类
			currentCategory1(){
				return this.categoryList[this.currentIndex] || {}
			}
		}
	}
</script>

<style lang="stylus">
	.categoryContainer{
		height 100%
		.header{
			height 80rpx
			display flex
			justify-content center
			align-items center
			border-bottom 1rpx solid black
			box-sizing border-box
			.search{
				text-align center
				line-height 60rpx
				height 60rpx
				width 90%
				// background-color #aaa
				font-size 28rpx
				color #4CD964
			}
		}
		.main{
			display flex
			.left{
				width 150rpx
				// background-color red
				.item{
					width 100%
					height 80rpx
					text-align center
					line-height 80rpx
					font-size 28rpx
					&.active{
						background-color #bfa
					}
				}
			}
			.right{
				// height 400rpx
				flex 1
				// width calc(100vw - 150rpx)
				border-left 1px solid black
				box-sizing border-box
				.rightScroll{
					height calc(100vh - 80rpx)
					.titleImg{
						display block
						margin 20rpx auto
						width 520rpx
						height 190rpx
					}
					.subCateList{
						display flex
						flex-wrap wrap
						.subCate{
							// height 80rpx
							display flex
							flex-direction column
							justify-content space-between
							align-items center
							width 33.33333%
							// text-align center
							.subCateImg{
								width 100%
								height 144rpx
							}
							.subCateName{
								font-size 28rpx
							}
						}
					}
				}
			}
		}
	}
</style>
