<template>
	<div class="search_form box_1200">
		<div class="logo">
			<img src="../assets/logo.png" />
			<h1>乔府大院订货平台</h1>
		</div>
		<div class="search_input clearfix">
			<input type="text" placeholder="请输入商品名称或商品品系的关键字" />
			<span></span>
		</div>
		<div class="shop_car" @click="gotoCar"><span>购物车</span><em class="sub_num">{{getUserIcons}}</em></div>
	</div>
</template>

<script>
	export default {
	  	name: 'App',
	  	data(){
		  	return {
		  		list:[],
		  		num:0
	  		}
	  	},  
	  	methods:{
	  		gotoCar(){
	  			this.$router.push({path:'/shopcar'});
	  		}
	  	},
	  	mounted(){
	  		
	  	},
	  	computed: {
		    getUserIcons() {
		        return this.$store.state.shopCount;
		    }
		},
		watch: {
		    getUserIcons(val) {
		        this.num = this.$store.state.shopCount;
		    }
		}

	}
</script>

<style scoped>
	.search_form{height: 145px;line-height: 145px;}
	.search_line{height: 45px;border-bottom: 2px solid #c0000f;}
	.search_input{width: 530px;}
	.shop_car em,.shop_car span{display:inline-block;vertical-align:middle;}
	.shop_car em{width:26px;height:20px;border-radius:10px; background:#c0000f; color:#fff; text-align:center; line-height:20px;margin-left:10px;}
	.shop_car{width: 145px;height: 49px;border:1px solid #ddd; margin-left: 20px; border-radius: 25px; line-height: 50px;text-align: center;cursor:pointer;}
	.shop_car span{font-size:16px}
	.logo,.search_input,.shop_car{display: inline-block;vertical-align: middle;}
	.logo h1{line-height: 30px;font-size: 20px;margin-top: 5px;}
	.search_input{margin-left: 180px;border: 1px solid #c0000f; border-radius: 25px;width:525px;height: 50px;}
	.search_input input{float:left; width: 420px;padding-left: 10px; border:none;height: 100%;box-sizing: border-box;border-radius:25px 0 0  25px;font-size: 16px;}
	.search_input span{float:right;width: 70px;background: #c0000f; border-radius: 0 25px 25px 0;height: 100%;cursor:pointer;}

</style>