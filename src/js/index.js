var $ = require('jquery');


var Carousel = require('./carousel.js'),
    LazyLoad = require('./lazyload.js');

//首屏轮播
var clientWidth = document.documentElement.clientWidth;
$('.carousel-imgs li').each(function(index,item){
  $(item).css('width',clientWidth);
})
console.log($('.carousel-imgs li').width())
console.log($('.carousel-imgs li').height())
console.log('----')
console.log($('.carousel-imgs li img').width())
console.log($('.carousel-imgs li img').height())
console.log('----')
new Carousel($('.part1 .top'));

//图片懒加载

LazyLoad.init($('.lazynode').not('loaded'),function($img){
  showImg($img);
});
function showImg($img){
  var imgUrl = $img.attr('data-src');
  $img.css('background-image',"url('"+imgUrl+"')");
  $img.addClass('loaded');
} 











