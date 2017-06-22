var $=require('jquery');
  function Exposure($target,callback){
    this.target=$target,
    this.callback=callback;
    this.bind();
  }
  Exposure.prototype={
    bind: function(){
      var _this=this;
      $(window).on('scroll',function(){

        if(_this.isShow()){
          _this.callback(_this.target);
        }        
      });
    },
    isShow:function(){
      var windowHeight=$(window).height();//窗口高度
      var scrollTop=$(window).scrollTop();//滚轮高度
      var offsetTop=this.target.offset().top;//元素距文档高度
      var nodeHeight=this.target.height();//元素高度
      if(scrollTop<(offsetTop+nodeHeight) && offsetTop<(windowHeight+scrollTop)){
        return true;
      }else {
        return false;
      }
    }   
  }
  
  var LazyLoad=(function(){
    return {
      init:function($nodes,callback){
        $nodes.each(function (index,node){
          new Exposure($(node),callback);
        })
      }   
    }
  })();
    
  module.exports=LazyLoad;