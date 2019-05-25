<template>
	<div>
		<timeline></timeline>
		<div class="box_1200">
			<h1 class="order_title">商品订购单</h1>
			<div class="order_list">
				<ul class='order_thead clearfix'>
					<li>
						<input type="checkbox" id="cbtest" @change="test" />
    					<label for="cbtest" class="check-box"></label>
						<span>全选</span>
					</li>
					<li class="order_special">
						<span>商品信息</span>
					</li>
					<li>
						<span>单价</span>
					</li>
					<li>
						<span>数量</span>
					</li>
					<li>
						<span>含税金额</span>
					</li>
					<li>
						<span>重量</span>
					</li>
					<li>
						<span>操作</span>
					</li>
				</ul>
				<div class="order_line"></div>
				<div class="order_shop_item">
					<div class="os_check">
						<input type="checkbox" id="1" />
						<label for="1" class="check-box"></label>
					</div>
					<div class="os_detail clearfix">
						<img src="">
						<p>是我佩琪是我佩琪是我佩琪是我佩琪是我佩123123琪是我佩琪是我佩琪是我佩琪是我佩琪</p>
					</div>
					<div class="os_price">￥75</div>
					<div class="os_num">
						<p class="num_box ">
			                <span @click="sub">-</span><input type="type" :value="num" disabled /><span @click="add">+</span>
		              	</p>
					</div>
					<div class="os_tax">￥75</div>
					<div>100kg</div>
					<div>删除</div>
				</div>
			</div>
		</div>

		<div class="clear_footbox">
			<div class="box_1200 clearfix">
				<div class="fl cf_checkBox">
					<input type="checkbox" id="cbtest" @change="test" />
					<label for="cbtest" class="check-box"></label>
					<span>全选</span>
				</div>
				<div class="fr clearfix">
					<router-link to="/result" class="result_btn fr">去结算</router-link>
					<div class="fr result_price">
						<p>&nbsp;&nbsp;&nbsp; 含税总计：<em>￥255</em></p>
						<p>合计总重量：100000kg</p>
					</div>
					<h5 class="fr selected_num">已选中<em> 5 </em>件</h5>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	body{background:#f5f5f5;}
	.clear_footbox{position: fixed; bottom:0;width: 100%;left: 0; height:75px;box-shadow: -3px 0 5px rgba(0,0,0,0.5)}
	.order_title{border-bottom: 3px solid #c0000f; line-height: 30px;width:90px;font-size: 16px;font-weight: bold;}
	.order_list{padding:30px;box-sizing: border-box;border:1px solid #ddd;margin-top: 10px;margin-bottom:75px;}
	.order_thead{width: 1100px;margin:0 auto;}
	.order_thead span,.check-box{display: inline-block;vertical-align: middle;}
	.order_thead span{margin-left: 5px;}
	.order_thead li{float:left; color: #b1b1b1;width: calc( (100% - 340px)  / 6);text-align: center;}
	.order_thead .order_special{width: 340px;}
	.order_thead li:first-child{text-align:left;}
	.order_line{height: 5px;background: #c0000f;margin:10px 0;}
	.order_shop_item{margin:0 auto; padding: 15px;box-sizing: border-box;  border:1px dashed #c0000f;height: 150px;background: #fdf3f1;line-height: 110px}
	.order_shop_item div{float:left;height:120px;width:calc((100% - 340px) / 6);text-align: center;}
	.order_shop_item div:first-child{text-align: left;}
	.num_box span,.num_box input{display:inline-block;vertical-align:middle;height:30px;line-height:30px;text-align:center;}
	.num_box{margin-left: 20px;margin-top:40px; width:85px;height:30px;border:1px solid #ddd;line-height: 30px}
	.num_box input{width:41px;border:none;border-left:1px solid #ddd; border-right:1px solid #ddd;}
	.num_box span{width:21px;font-xize:16px;cursor:pointer;moz-user-select: -moz-none; 
	-moz-user-select: none; 
	-o-user-select:none; 
	-khtml-user-select:none; 
	-webkit-user-select:none; 
	-ms-user-select:none; 
	user-select:none;}
	.os_detail{height:100%; line-height: 120px;}
	.os_detail img{float:left; width:60px;height:60px;margin-top:25px; margin-right:20px;}
	.os_detail p{float:left;line-height: 24px;width:260px;margin-top:32px;overflow:hidden; text-overflow:ellipsis;display:-webkit-box; -webkit-box-orient:vertical;-webkit-line-clamp:2;}
	.order_shop_item .os_detail{width:340px;}
	.result_btn{display: block; width:155px; background: #c0000f; line-height: 75px; height: 100%; color: #fff; text-align: center;letter-spacing: 2px;font-size: 18px;transition: all 0.3s;}
	.result_btn:hover,.result_btn:active{background: #da2c31;}
	.selected_num{line-height: 75px; color: #bababa;}
	.selected_num em{ color: #c0000f;}
	.result_price{margin:0 20px;padding: 13px 0;}
	.result_price p{line-height: 25px;}
	.result_price em{font-size: 24px; color: #c0000f}
	.cf_checkBox{margin-top:24px;}
	.cf_checkBox span{display: inline-block;vertical-align: middle; line-height: 20px;margin-left: 5px}
</style>

<script>
	import timeline from '../components/timeline.vue'
	export default {
		name: 'App',
		data(){
			return{
				list:[],
				allChecked:false,//当前是否全选
				num:0
			}
		},
		components:{timeline},
		methods:{
			test(e){
				e.target.checked ? this.allChecked = true : this.allChecked = false;
			},add(){
		      this.num+=1;
		    },
		    sub(){
		      this.num>0?this.num-=1:0;
		    }
		}
	}

</script>

