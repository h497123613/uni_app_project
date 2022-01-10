<template>
	<view class="indexContainer">
		<view class="header">
			<image class="logo" src="/static/images/logo.png"></image>
			<view class="search">
				<text class="iconfont icon-sousuo"></text>
				<input class="searchInput" placeholder="搜索商品" type="text" placeholder-class="place">
			</view>
			<button class="btn">hhhh</button>
		</view>
		<!-- Nav-scroll-view -->
		<scroll-view scroll-x enable-flex class="navScroll">
			<view @click="currentId = -1" class="navItem" :class="currentId === -1 && 'active'" >推荐</view>
			<view @click="currentId = nav.L1Id" class="navItem" :class="currentId === nav.L1Id && 'active'" v-for="(nav,index) in navList" :key="nav.L1Id">{{nav.text}}</view>
		</scroll-view>
		<!-- scroll-view主要内容 -->
		<scroll-view scroll-y="true" class="mainScroll" enable-flex>
			<view class="mainItem" v-show="currentId === -1">
				<swiper class="mainSwiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item>
						<view class="swiper-item">
							<image src="../../static/images/swiper/swiper1.jpg"></image>
						</view>
					<!-- </swiper-item><swiper-item>
						<view class="swiper-item">
							<image src="../../static/images/swiper/swiper2.jpg"></image>
						</view>
					</swiper-item><swiper-item> -->
						<view class="swiper-item">
							<image src="../../static/images/swiper/swiper3.jpg"></image>
						</view>
					</swiper-item>
				</swiper>
				<view class="iconList">
					<view class="iconItem" v-for="(icon,index) in iconList" :key="index">
						<image class="iconImg" :src="icon.icon"></image>
						<text class="iconText">{{icon.desc}}</text>
					</view>
				</view>
				<view class="categoryList">
					<view class="category" v-for="(category,index) in navList" :key="index">
							<image class="categoryImg" :src="category.picUrl"></image>
							<text class="categoryText">{{category.text}}</text>
					</view>
				</view>
				<Floor v-for="(floor,index) in floorList" :key="index" :floor="floor"></Floor>
			</view>
			
			<view v-show="currentId !== -1">
				<Card :currentId="currentId"></Card>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import Floor from "./components/Floor"
	import Card from "./components/Card"
	import {mapGetters} from 'vuex'
	export default{
		data(){
			return {
				currentId:-1
			}
		},
		components:{
			Floor,Card
		},
		mounted(){
			this.getIndexData()
		},
		methods:{
			getIndexData(){
				this.$store.dispatch('getIndexData')
			}
		},
		computed:{
			...mapGetters(['navList','iconList','floorList'])
		}
	}
</script>

<style lang="stylus">
	.indexContainer {
		height: 100%;
		.header {
			display: flex;
			height: 80rpx;
			align-items center
			.logo{
				width 120rpx;
				height 40rpx;
				margin 0 20rpx
			}
			.search{
				.iconfont{
					margin 0 10rpx
				}
				display flex
				align-items center
				box-sizing border-box
				height 60rpx
				flex 1;
				border 1px solid #aaa
				.searchInput{
					font-size 28rpx
				}
				.place{
					color red
				}
			}
			.btn{
				// border none
				padding 0 10rpx
				width 140rpx
				height 60rpx
				font-size 28rpx
				text-align center
				line-height 60rpx
				margin 0 10rpx
			}
		}
		.navScroll{
			display flex
			height 80rpx
			.navItem{
				flex-shrink 0
				width 140rpx
				font-size 28rpx
				text-align center
				line-height 80rpx
				box-sizing border-box
				&.active{
					border-bottom 1px solid red
				}
			}
		}
		.mainScroll{
			height calc(100vh - 160rpx)
			.mainSwiper image{
					width 100%
					height 300rpx
			}
			.iconList{
				display flex
				justify-content space-around
				margin-top 10rpx
				.iconItem{
					display flex
					align-items center
					.iconImg{
						width 32rpx
						height 32rpx
					}
					.iconText{
						font-size 28rpx
					}
				}
			}
			.categoryList{
				display flex
				flex-wrap wrap
				justify-content space-around
				.category{
					width 20%
					display flex
					flex-direction column
					align-items center
					.categoryImg{
						width 110rpx
						height 110rpx
						margin 20rpx 0
					}
					.categoryText{
						font-size 28rpx
					}
				}
			}
		}
	}
</style>
