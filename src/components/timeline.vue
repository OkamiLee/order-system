<template>
	<div class="search_form box_1200 clearfix">
		<div class="logo">
			<img src="../assets/logo.png" />
			<h1>乔府大院订货平台</h1>
		</div>
		<h1 class="shop_title">购物车</h1>
		<div class="timeline fr clearfix">
			<div class="time_item">
				<div class="line"></div>
				<span class="dot">1</span>
				<p class="time_text">1.我的购物车</p>
			</div>
			<div class="time_item">
				<div class="line"></div>
				<span class="dot">2</span>
				<p class="time_text">2.填写核对订单信息</p>
			</div>
			<div class="time_item">
				<div class="line"></div>
				<span class="dot">3</span>
				<p class="time_text">3.成功提交订单</p>
			</div>
		</div>
	</div>
</template>


<style scoped>
	.search_form{height: 145px;}
	.search_line{height: 45px;border-bottom: 2px solid #c0000f;}
	.logo{float: left;margin-top: 27px;}
	.logo h1{line-height: 30px;font-size: 20px;margin-top: 5px;}
	.shop_title{line-height: 145px; font-size: 24px;float:left;margin-left: 30px}
	.timeline{width: 480px;margin-top: 70px}
	.time_item{float: left}
	.time_item div,.time_item span{background:#ccc; color: #fff;}
	.time_item .time_text{color: #ccc;}
	.time_active div,.time_active span{background:#c0000f; color: #fff;}
	.time_active .time_text{color: #c0000f;}
	.time_item{position:relative;width:160px;}
	.line{height: 5px;}
	.dot{position: absolute;width: 20px;height: 20px; border-radius: 50%;top:-8px;left:50%;margin-left:-10px; line-height: 20px;text-align: center}
	.time_text{ line-height: 40px; text-align: center; }

</style>
<script>
	export default {
		name: 'App',
		data(){
			return{
				list:[]
			}
		}
	}

</script>

