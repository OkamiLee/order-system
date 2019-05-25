<template>
	<div>
		<timeline></timeline>
		<div class="box_1200">
			<h2 class="write_order_info">填写并核对订单信息</h2>
			<div class="adress_box">
				<div class="adress_title clearfix">
					<span class='change_adress fl'>选择收货地址</span>
					<em class="new_adress fr">使用新地址</em>
				</div>
				<ul class="adress_list clearfix">
					<li class='adress_item' v-for="(i,index) in list" @click="changeAdress(index)" :class="{' adress_special':ind===index}">{{i.name}}</li>
				</ul>
				<h1 class="order_confirmed">确认订单信息</h1>
				<ul class="oc_thead clearfix">
					<li class="oc_shop_info ">商品信息</li>
					<li>单价</li>
					<li>数量</li>
					<li>含税金额</li>
					<li>重量</li>
				</ul>
				<div class="oc_item clearfix">
					<div class="clearfix oc_item_info">
						<img src="" class="fl" />	
						<p class="fl">你好佩琪</p>
					</div>
					<div class="lh_ele">￥75</div>
					<div class="lh_ele">100</div>
					<div class="lh_ele">￥75</div>
					<div class="lh_ele">1000kg</div>
				</div>
				<div class="remark">
					<h2>备注</h2>
					<textarea class="remark_text"></textarea>
				</div>
				<div class="pay_kind">
					<h2>支付方式</h2>
					<label><input class="radio" type="radio" name="radio" checked >&nbsp;现付</label>
					<label><input class="radio" type="radio" name="radio" >&nbsp;预付</label>
					<label><input class="radio" type="radio" name="radio" >&nbsp;后付</label>
				</div>
			</div>
		</div>
		<div class="box_1200">
			<div class="clearfix">
				<div class="fr submite_order">
					订单详细信息
				</div>
			</div>
			<div class="clearfix">
				<div class="fr sub_btn" @click="submit">提交订单</div>
			</div>
		</div>
		<div class="mask" v-show="isSubmit">
			<div class="confirm">
				<h1>是否确认提交订单</h1>
				<div class='clearfix con_btn_box'>
					<div class="fl" @click="cancle">取消</div>
					<div class="fr" @click="goto">确定</div>
				</div>
			</div>
		</div>
		<div class="sub_success" v-show="isTime">
			<h1>订单提交成功（<em>{{time}}s</em>）</h1>
			<div class="ss_btn">确定</div>
		</div>
	</div>
</template>

<style scoped>
	.mask{width: 100%;height:100%;position:fixed; top:0;left:0; background: rgba(147,147,147,0.4)}
	.confirm{width: 400px;height: 260px;background: #fff;position: absolute; left: 50%;top: 50%;margin: -130px 0 0 -200px;}
	.con_btn_box{width: 260px;margin:40px auto 0;}
	.con_btn_box div{width: 80px;height: 40px; border:1px solid #c0000f;line-height: 42px;text-align: center;border-radius: 10px;cursor: pointer;}
	.con_btn_box div:first-child{ color: #c0000f;}
	.con_btn_box div:last-child{background: #c0000f; color: #fff;}
	.confirm h1{font-size: 20px; text-align: center;padding-top: 70px}
	.sub_success{position: fixed;top: 50%;left:50%;width:400px;height: 200px;border:1px solid #ddd; margin: -100px 0 0 -200px;background: #fff}
	.sub_success h1{font-size: 20px;padding-top: 70px;text-align: center;}
	.sub_success em{color: #c0000f}
	.ss_btn{width: 80px;height: 40px;margin: 30px auto; background: #c0000f; color:#fff;line-height: 40px; text-align: center; border-radius: 10px;cursor:pointer; }



	body{background: #f5f5f5;}
	.adress_box{padding:20px 30px; box-sizing: border-box;border:1px solid #ddd;background: #fff;}
	.change_adress{font-size: 18px;font-weight: bold; line-height: 30px;}
	.write_order_info{font-size: 20px;margin-bottom: 15px}
	.new_adress{border:1px solid #ddd;width: 90px;height: 30px;text-align: center; line-height: 30px;cursor:pointer;}
	.adress_list{margin-top: 10px}
	.adress_item{float:left; width: 258px;height: 110px; border:2px dashed #ddd;margin-right: 30px;}
	.adress_item:last-child{margin-right: 0;}
	.adress_special{border-color:#c0000f;}
	.order_confirmed{ line-height: 50px; border-top: 1px solid #ddd;margin-top: 20px;font-size: 18px;font-weight: bold;}
	.oc_thead{ border-bottom: 5px solid #c0000f;margin-bottom: 20px; }
	.oc_thead li{width: 15%;float: left; text-align: center;padding-bottom: 10px;}
	.oc_thead .oc_shop_info{width: 40%;}
	.oc_item{background: #fdf3f1;border:1px dashed #ff7872;height: 150px;margin-bottom: 15px;}
	.oc_item div{width: 15%;float:left;}
	.oc_item div:first-child{width:40%; margin-top:45px;}
	.oc_item_info img{ width: 60px;height: 60px;margin-left:50px;}
	.oc_item_info p{line-height: 25px;height: 50px;margin-left: 30px;margin-top:10px;width: 300px;overflow:hidden; text-overflow:ellipsis;display:-webkit-box; -webkit-box-orient:vertical;-webkit-line-clamp:2;}
	.lh_ele{line-height: 150px;text-align: center;font-size: 16px}
	.remark h2,.pay_kind h2{margin-bottom: 15px;font-size: 18px;font-weight: bold;}
	.remark_text{border:1px solid #ddd;height: 90px;border:1px solid #ddd;display: block;width: 100%;resize: none;padding:10px;box-sizing: border-box;margin-bottom: 15px}
	input{
        outline: none;
    }
    .radio{
        width: 1.2rem;
        height: 1.2rem;
        background-color: #ffffff;
        border: solid 1px #dddddd;
        -webkit-border-radius: 0.6rem;
        border-radius: 0.6rem;
        font-size: 0.8rem;
        margin: 0;
        padding: 0;
        position: relative;
        display: inline-block;
        vertical-align: top;
        cursor: default;
        -webkit-appearance: none;  /**隐藏原生控件**/
        transition: all 0.3s;
    }
    /**选择后的样式**/
    .radio:checked{
        background-color: #ff5c4b;
        border: solid 1px #ff5c4b;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
        text-align: center;
        background-clip: padding-box;
    }
     /**选择后 里面小对勾样式**/
    .radio:checked:before{
        content: '';
        width: 0.5rem;
        height: 0.3rem;
        border: 1px solid #ffffff;
        border-top: none;
        border-right: none;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -0.25rem;
        margin-top: -0.25rem;
        -webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
    }
    .pay_kind label{margin-right: 10px}
    .pay_kind{border-bottom: 1px solid #ddd;padding-bottom: 15px}
    .submite_order{border:1px solid #c0000f;width: 550px;height: 120px;margin-top: 20px;background: #fff}
    .sub_btn{width: 180px;height: 40px;line-height: 40px;text-align: center; color: #fff;background: #c0000f;font-size: 16px;}
    .sub_btn:hover,.sub_btn:active{background: #d62331;cursor: pointer;}

</style>

<script>
	import timeline from '../components/timeline.vue'
	export default {
		name: 'App',
		data(){
			return{
				ind:0,
				list:[{name:1},{name:2},{name:3},{name:4}],
				allChecked:false,//当前是否全选
				num:0,
				isSubmit:false,//显示订单确定框
				time:3,
				isTime:false//显示订单确定倒计时
			}
		},
		components:{timeline},
		methods:{
			changeAdress(index){
				this.ind = index;
			},
			submit(){//提交订单
				this.isSubmit = true;
			},
			cancle(){//取消订单
				this.isSubmit = false;
			},
			goto(){//去支付
				this.isSubmit = false;
				this.isTime = true;
				var _this = this;
				var timer = setInterval(function(){
					if(_this.time>0){
						_this.time-=1;
					}else{
						clearInterval(timer);
						_this.isTime = false;
						_this.time = 3;
					};
					
				},1000);
			}
		}
	}

</script>

