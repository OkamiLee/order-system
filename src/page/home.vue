<template>	
	<div>
		<search></search>
    <div class="border_bottom">
      <div class="search_line box_1200">
        <span class="all_shop">全部商品</span>
        <span class="shop_price">价格<i class="p_top"></i></span>
      </div>
    </div>
    <ul class="shoplist box_1200 clearfix">
      <li v-for="(i,index) in list " :key="index" class="shopitem" :class="{'border_show':ind===index}" @mouseover = "show(index)" @mouseout = "hide" >
          <router-link :to="{ path: '/shopdetail', query: { id: index }}" class="link_box"> 
            <img v-lazy="i.src"  class="shop_img"/>
            <p class="price">￥123</p>
            <p class="title">我是佩琪</p>
          </router-link>
          <div class="clearfix">
            <div class="fl num_box">
              <span @click="sub(index)">-</span
              ><input type="type" :value="i.value" disabled 
              /><span @click="add(index)">+</span>
            </div>
            <div class="fr add_shop_car" :data-index="index" @click="addCar">加入购物车
              <div class="animate_car" v-show="i.ishidden"  :style="{left:i.pos.x+'px',top:i.pos.y+'px',transform: 'scale('+i.pos.scale+')'}" v-html="carStr"></div>
            </div>

          </div>
      </li>
    </ul>
    <div class="back_top" @click="back"><i class="top"></i></div>
    
	</div>
</template>

<script>
import search from '../components/search.vue'
export default {
  name: 'App',
  data(){
  	return {
      ind:"",
      list:[
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
        {src:"",title:'',value:0,pos:{x:0, y:0,scale:1},ishidden:false},
      ],
      carStr:"",
      endX:0,//顶部购物车横纵坐标
      endY:0,
      timer1:null,
      timer2:null,
      allNUm:0
    }
  },  
  components: {search},
  mounted(){
    
  },
  methods:{
    addCar(e){
      let nowIndex = e.target.dataset.index;//当前点击索引
      let x = e.clientX;//当前点击横坐标
      let y = e.clientY;//当前点击纵坐标
      this.list[nowIndex].pos.x = x;
      this.list[nowIndex].pos.y = y;
      this.list[nowIndex].ishidden = true;
      var _this = this;
      this.timer1 = setTimeout(function(){
        _this.list[nowIndex].pos.x = document.getElementsByClassName('shop_car')[0].offsetLeft;
        _this.list[nowIndex].pos.y = document.getElementsByClassName('shop_car')[0].offsetTop - document.documentElement.scrollTop||document.body.scrollTop;
        _this.list[nowIndex].pos.scale = 0;
        _this.timer1 = setTimeout(function(){
          _this.list[nowIndex].ishidden = false;
          _this.list[nowIndex].pos.x = 0;
          _this.list[nowIndex].pos.y = 0;
          _this.list[nowIndex].pos.scale = 1;
          _this.$store.commit("addShopCount");//点击实现购物车商品累加
        },1000);
      },1000/60);
    },
    sub(index){
      this.list[index].value>0?this.list[index].value-=1:0;
    },
    add(index){
      this.list[index].value+=1;
    },
    show(index){
      this.ind = index;
    },
    hide(){
      this.ind = "";
    },
    goto(){
      this.$router.push({
        path: '/shopdetail',
        params: {
          id:1
         }
      })
    },
    back(){
      var isTop = true;
      var timer=setInterval(function(){
        //获取滚动条距离顶部的高度
        var osTop=document.documentElement.scrollTop|| document.body.scrollTop;
        var ispeed=Math.floor(-osTop / 5);
        isTop = true;
        document.documentElement.scrollTop=document.body.scrollTop = osTop+ispeed;
        if(osTop==0){
            clearInterval(timer);
        }
      },1000/60);
    }
  }
}
</script>

<style scoped>	
  .add_shop_car span,.add_shop_car em{display:inline-block;vertical-align:center;}
  .shop_num{padding:5px 7px; background:#c0000f; color:#fff;}
  .animate_car{ position:fixed;width:100px;height:80px;background:#c0000f;transition:all 1s;}
	.link_box{display:block;width:100%;margin-bottom:15px;}
  .shoplist{margin-bottom:50px}
  .shopitem{float:left;width:270px;height:410px; margin-right:40px;padding:15px;box-sizing:border-box;border:1px solid #ddd;margin-top:40px;}
  .shopitem:nth-child(4n+4){margin-right:0}
  .price{ color:#c30011;font-weight:bold;font-size:18px;margin:5px 0 15px;}
  .border_show{border:1px solid #c0000f;}
  .back_top{position:fixed;right:50px;bottom:100px;width:42px;height:42px; background:#bbb; border-radius:10px;cursor:pointer;}
  .shop_img{height:240px; border:1px solid #ddd}
  .title{overflow:hidden; text-overflow:ellipsis;display:-webkit-box; -webkit-box-orient:vertical;-webkit-line-clamp:2;color:#333;line-height:20px}
  .num_box span,.num_box input{display:inline-block;vertical-align:middle;height:30px;line-height:30px;text-align:center;}
  .num_box{width:75px;height:30px;border:1px solid #ddd;}
  .num_box input{width:37px;border:none;border-left:1px solid #ddd; border-right:1px solid #ddd;}
  .num_box span{width:18px;font-xize:16px;cursor:pointer;moz-user-select: -moz-none; 
-moz-user-select: none; 
-o-user-select:none; 
-khtml-user-select:none; 
-webkit-user-select:none; 
-ms-user-select:none; 
user-select:none;}
  .add_shop_car{width:105px;height:30px; background:#bf000f; color:#fff;line-height:30px;text-align:center;cursor:pointer;transition:all 0.3s;}
  .add_shop_car:hover,.add_shop_car:active{background:#dd1e2d}
    .search_line span{display: inline-block; vertical-align: middle;}
  .all_shop{width: 155px; background: #c0000f; color: #fff; text-align: center;line-height: 45px;font-size: 16px;}
  .shop_price{width:80px; color: #c0000f;text-align: center;font-size: 16px;position: relative;line-height:45px; cursor:pointer;}
  .p_top{
   position: absolute;
   transform: rotateZ(180deg);
   right:0px;
   top:34px;
  }
  .p_top:before,.p_top:after{
   position: absolute;
   content: '';
   border-top: 8px transparent dashed;
   border-left: 8px transparent dashed;
   border-right: 8px transparent dashed;
   border-bottom: 8px #fff solid;
  }
  .p_top:before{
   border-bottom: 8px #c0000f solid;
  }
  .p_top:after{
   top: 2px; /*覆盖并错开1px*/
   border-bottom: 8px #fff solid;
  }
  .top{
   position: absolute;
   left:12px;
   top:5px;
  }
  .top:before,.top:after{
   position: absolute;
   content: '';
   border-top: 10px transparent dashed;
   border-left: 10px transparent dashed;
   border-right: 10px transparent dashed;
   border-bottom: 10px #bbb solid;
  }
  .top:before{
   border-bottom: 10px #fff solid;
  }
  .top:after{
   top: 2px; /*覆盖并错开1px*/
   border-bottom: 10px #bbb solid;
  }
  .border_bottom{border-bottom:2px solid #c0000f;}


</style>
