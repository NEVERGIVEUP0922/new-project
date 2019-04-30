<template>
  <div class="header-top">
    <div id="jl-head" style="height:30px">
      <div class="jl-head-content" style="overflow:hidden">
        <div class="jl-head-left">
          <a href="/Home/Default/index.html" class="js-return-home"><i></i>返回首页</a>
          <span>Hi，欢迎来到小鹿芯城</span>
          <a class="js-login" style="margin-right: 3px;" href="/Home/Account/login.html">登录</a>

          <a style="margin-right:20px;" href="javascript:void(0);" class="solution"><!--三角图标-->
            <span style="display:inline-block;" class="sanjiao1" onmouseover="dianji()">▼</span>
          </a>
          <a class="js-register" href="/Home/Account/register.html">免费注册</a>            <!--<div class="purchase-manage"   onmouseover="dianji()">&lt;!&ndash;采购中心/项目管理中心&ndash;&gt;-->
          <div class="purchase-manage" onmouseover="dianji2()" onmouseout="dianji3()"><!--采购中心/项目管理中心-->
            <div style="border-top:0px;">
              <ul>
                <li style="border-bottom:1px solid #ddd"><a href="/Home/User/index.html">采购中心</a></li>
                <li style="border-bottom:1px solid #ddd"><a href="/Home/SolutionVip/vipProvider.html">项目管理中心</a></li>
              </ul>

            </div>
          </div>
        </div>
        <div class="jl-head-right">
          <a href="/Home/Account/login.html" class="js-search-cart">
            我的订单
          </a>
          <a href="/Home/Account/login.html" class="js-search-cart">
            我的购物车
          </a>
          <a class="jl-favorites" href="/Home/Account/login.html">
            收藏夹
          </a>
          服务时间：9:00-18:30
        </div>
      </div>
    </div>
  </div>>
</template>

<script>
import head from "../public/header-top";
export default {
  name: 'heads',
  components:{head},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  @import "../static/home/public/css/base.less";
  body{ min-width:1440px !important;}
  .solution:link{
    color:#777;
    text-decoration:none;}
  .solution:hover{
    color:#e84343;
  }
  .purchase-manage{
    margin-top:-4px;
    position:relative;
    box-sizing:border-box;
    padding-right:78px;
    padding-left:210px;
    display:none;
  }
  .purchase-manage>div{
    background: #fff;
    border:1px solid #ddd;padding:0 10px 0 10px;
  }
  .purchase-manage>div>ul>li{
    height:25px;
    /*background:#f0f0f0;*/
    margin-bottom:3px;
    line-height:25px;
    text-align: center;
  }
  .purchase-mange>div:hover{
    background:#e84343;
    color:#fff;
  }
  .clear{
    clear:both;
  }
</style>
