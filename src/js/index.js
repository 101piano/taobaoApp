var $ = require('jquery');


var Carousel = require('./carousel.js'),
    LazyLoad = require('./lazyload.js');

//首屏轮播

var mainWidth = $('.main').width()
$('.carousel-imgs li').each(function(index,item){
  $(item).css('width',mainWidth);
})
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











