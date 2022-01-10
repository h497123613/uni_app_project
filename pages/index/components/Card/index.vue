<template>
	<view class="card">
		<swiper class="cardSwiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(banner,index) in currentCategory.bannerUrlList" :key="index">
				<view class="swiperItem">
					<image class="swiperImg" :src="banner"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="cardTitle">{{currentCard.frontDesc}}</view>
		<view class="cardTitle">{{currentCard.frontName}}</view>
		<view class="goodsList">
			<view @click="toDetail(item)" class="goodsItem" v-for="(item,index) in currentCard.itemList" :key="item.id">
				<image class="goodsImg" :src="item.primaryPicUrl"></image>
				<view class="goodsName">{{item.name}}</view>
				<view class="goodsPrice">￥{{item.retailPrice}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		props: ['currentId'],
		name: 'Card',
		mounted() {
			this.getCardList()
		},
		methods: {
			getCardList() {
				this.$store.dispatch('getCardList')
			},
			//点击去往详情页
			toDetail(goods){
				//方式一
				// wx.navigateTo({
				// 	url:"/pages/detal/detail?goodsInfo=" + JSON.stringify(goods)
				// })
				//方式二
				wx.setStorageSync('goodsInfo_key',goods)
				wx.navigateTo({
					url:"/pages/detail/detail"
				})
			}
		},
		computed: {
			...mapState({cardList: state => state.home.cardList}),
			//计算点击的这个nav对应的显示内容
			//根据点击的nav的l1Id和cardList当中的每一项的parentId进行对比
			currentCard(){
				// console.log(this.cardList)
				return this.cardList.find(item => item.category.parentId === this.currentId) || {}
			},
			currentCategory(){
				return this.currentCard.category || {}
			}
		}
	}
</script>

<style lang="stylus">
	.card {
		.cardSwiper {
			// height 300rpx
			.swiperItem {
				// width 100%
				.swiperImg {
					width 100% 
					height 300rpx
				}
			}
		}

		.cardTitle {
			text-align center
		}
	}

	.goodsList {
		display flex 
		flex-wrap wrap 
		justify-content space-around 
		&::after {
			display block 
			content ''
			width 344rpx
		}

		.goodsItem {
			width 344rpx 
			.goodsImg {
				width 344rpx 
				height 344rpx
			}

			.goodsName {}
		}
	}
</style>
