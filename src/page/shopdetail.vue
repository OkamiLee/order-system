<template>	
	<div>
		<search></search> 
    <div class="border_bottom">
      <div class="search_line box_1200">
        <span class="all_shop">乔府大院</span>
      </div>
    </div>
    <div class="box_1200 clearfix">
      <div class="fl zoom_box clearfix">
        <zoom class="zoom_ele fl" :previewImg="url" :zoomImg="bigImg"></zoom>
        <div class="shopdetail fl">
          <h1>我是标题</h1>
          <div class="shop_standard">
            <div class="shop_price"><span>价格</span>&nbsp;<em class="price_color">￥75.00</em></div>
            <div class="s_item clearfix">
              <em>规格</em>
              <em>50kg</em>
            </div>
            <div class="s_item clearfix">
              <em>数量</em>
              <div class="num_box ">
                <span @click="sub">-</span><input type="type" :value="num" disabled /><span @click="add">+</span>
              </div>
            </div>
            <div class="s_item clearfix">
              <em>品系</em>
              <em>鸭稻</em>
            </div>
            <p class="activity">促销活动 买一赠十</p>
            <div class="pay_box clearfix">
              <div class="add_car_btn fl" @click="addCar">加入购物车</div>
              <div class="now_pay_btn fl">立即购买</div>
            </div>
          </div>
        </div>
      </div>
      <div class="fr side_shop">
        <div class="side_title clearfix">
          <span class="fl">看了还看</span>
          <span class="fr">换一换</span>
        </div>
        <ul class="side_shop_list">
          <li>
            <img src="" />
            <h2>我是佩琪我是佩琪我是佩琪</h2>
            <p>￥256</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="clearfix shop_introduce box_1200">
      <span class="fl">商品介绍</span>
      <p class="fl"></p>
    </div>
    <div class="box_1200 shop_detail_info">
      <h3>商品规格</h3>
      <ul class="clearfix">
        <li class="sdi_item">
          <span>生产许可证编号：</span>
          <span></span>
        </li>
        <li class="sdi_item">
          <span>生产许可证编号：</span>
          <span></span>
        </li>
        <li class="sdi_item">
          <span>生产许可证编号：</span>
          <span></span>
        </li>
      </ul>
    </div>
    <img src="" class="detail_img" />
    <div class="animate_car" v-show="ishidden"  :style="{left:pos.x+'px',top:pos.y+'px',transform: 'scale('+pos.scale+')'}"></div>
	</div>
</template>

<script>
import search from '../components/search.vue'
import zoom from '../components/magnify.vue'
export default {
  name: 'App',
  data(){
  	return {
  		list:[],
      url:'../../static/default.jpg',
      bigImg:'../../static/big.jpg',
      num:0,
      pos:{
        x:0,
        y:0,
        scale:1
      },
      ishidden:false
  	}
  },  
  components: {search,zoom},
  methods:{
    add(){
      this.num+=1;
    },
    sub(){
      this.num>0?this.num-=1:0;
    },
    addCar(e){
      let nowIndex = e.target.dataset.index;//当前点击索引
      let x = e.clientX;//当前点击横坐标
      let y = e.clientY;//当前点击纵坐标
      this.pos.x = x;
      this.pos.y = y;
      this.ishidden = true;
      var _this = this;
      this.timer1 = setTimeout(function(){
        _this.pos.x = document.getElementsByClassName('shop_car')[0].offsetLeft;
        _this.pos.y = document.getElementsByClassName('shop_car')[0].offsetTop - document.documentElement.scrollTop||document.body.scrollTop;
        _this.pos.scale = 0;
        _this.timer1 = setTimeout(function(){
          _this.ishidden = false;
          _this.pos.x = 0;
          _this.pos.y = 0;
          _this.pos.scale = 1;
          _this.$store.commit("addShopCount");//点击实现购物车商品累加
        },1000);
      },1000/60);
    }
  },
  mounted(){
    
    console.log(this.$route.query.id)
  }


}
</script>

<style scoped>	
.animate_car{ position:fixed;width:100px;height:80px;background:#c0000f;transition:all 1s;}
h1{font-size:24px}
.border_bottom{border-bottom:2px solid #c0000f;}
.search_line span{display: inline-block; vertical-align: middle;}
.all_shop{width: 155px; background: #c0000f; color: #fff; text-align: center;line-height: 45px;font-size: 16px;}
.shop_price{width:80px; color: #c0000f;text-align: center;font-size: 16px;position: relative;}
.side_shop{width:190px; border:1px solid #ddd;margin-top:40px;}
.zoom_box{margin-top:70px;min-height:600px}
.shopdetail{margin-left:15px;width:540px;}
.shopdetail h1{margin-bottom:20px;}
.shop_price{height:70px;background:#fde5e1;line-height:70px;width:100%;text-align:left;padding-left:10px;box-sizing:border-box; color:#333;font-size:15px;margin-bottom:10px}
.price_color{display:inline-block;vertical-align:middle; font-size:36px;font-weight:bold; color:#c2000f; line-height:70px;}
.shop_price span,{display:inline-block;vertical-align:middle; }
.s_item em{margin-right:30px;float:left;}
.s_item{padding-left:10px;line-height:30px;margin-bottom:10px;}
.num_box span,.num_box input{display:inline-block;vertical-align:middle;height:30px;line-height:30px;text-align:center;}
.num_box{float:left; width:85px;height:30px;border:1px solid #ddd;}
.num_box input{width:41px;border:none;border-left:1px solid #ddd; border-right:1px solid #ddd;}
.num_box span{width:21px;font-xize:16px;cursor:pointer;moz-user-select: -moz-none; 
-moz-user-select: none; 
-o-user-select:none; 
-khtml-user-select:none; 
-webkit-user-select:none; 
-ms-user-select:none; 
user-select:none;}
.activity{color:#c0000f;padding-left:10px;font-size:16px}
.pay_box{padding-left:10px;margin-top:30px;}
.add_car_btn{width:160px;height:40px;background:#c0000f; color:#fff;line-height:40px; text-align:center;cursor:pointer;transition:all 0.3s;font-size:16px}
.add_car_btn:hover,.add_car_btn:active{background:#e01e2d;}
.now_pay_btn{width:140px;line-height:38px;background:#fde5e1; color:#c0000f;border:1px solid #c2000f; text-align:center;margin-left:20px;cursor:pointer;transition:all 0.3s;font-size:16px}
.now_pay_btn:hover,.now_pay_btn:active{background:#f5a99d;}
.side_title{ border-bottom:1px solid #ddd;background:#f5f5f5;padding:0 10px;}
.side_title span{line-height:30px;}
.side_shop_list{width:120px;margin:15px auto ;}
.side_shop_list li{cursor:pointer;}
.side_shop_list img{width:120px;height:120px;}
.side_shop_list h2{overflow:hidden;text-overflow:ellipsis; line-height:36px;height:36px;white-space: nowrap;}
.side_shop_list p{text-align:center; color:#c0000f;}
.shop_introduce{border:1px solid #ddd;border-top:none;border-left:none;margin-bottom:30px;background:#f5f5f5}
.shop_introduce span{ line-height:36px; border-top:3px solid #c0000f;width:100px;text-align:center;border-left:1px solid #ddd;}
.shop_introduce p{border-top:1px solid #ddd;width:1099px;}
.shop_detail_info{
  background:#f5f5f5;
  padding:20px 30px;
  border:1px solid #ddd;
  box-sizing:border-box;
}
.shop_detail_info h3{
    font-weight:bold
}
.sdi_item{
  float:left;
  width:20%;
}
.sdi_item span{line-height:36px}
.detail_img{display:block;width:900px;margin:20px auto 0;}
</style>