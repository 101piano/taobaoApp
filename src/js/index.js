var $ = require('jquery');

var Carousel = require('./carousel.js'),
    LazyLoad = require('./lazyload.js');

//首屏轮播
new Carousel($('.part1 .top'));

//图片懒加载

LazyLoad.init($('.lazynode').not('loaded'),function($img){
  showImg($img);
});
function showImg($img){
  var imgUrl = $img.attr('data-src');
  console.log(imgUrl)
  $img.css('background-image',"url('"+imgUrl+"')");
 // $img.css('background-image','url("src/images/part3/1.jpg")')
  $img.addClass('loaded');
} 











