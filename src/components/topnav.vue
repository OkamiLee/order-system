<template>
	<div class="top_nav">
		<ul class="box_1200">
			<li>你好 佩琪</li>
			<li><router-link to="/">首页&nbsp;|</router-link></li>
			<li><router-link to="/shopcar"> 购物车&nbsp;|</router-link></li>
			<li><router-link to="/"> 我的订单&nbsp;|</router-link></li>
			<li><router-link to="/"> 我的地址&nbsp;|</router-link></li>
			<li><router-link to="/"> 公告&nbsp;|</router-link></li>
			<li><router-link to="/"> 帮助中心</router-link></li>
		</ul>
	</div>
	
</template>
<script type="text/javascript">
	
	export default {
		name: 'App',
		data(){
			return{
				list:[]
			}
		}
	}
</script>


<style scoped>	
	.top_nav{text-align:right;height: 60px; line-height: 60px; border-bottom: 2px solid #ddd;}
	.top_nav li{display:inline-block;color: #7d7d7d ;margin-right: 5px;cursor:pointer;}
	.top_nav a{color: #7d7d7d}
</style>