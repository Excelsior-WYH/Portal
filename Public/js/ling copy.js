/*! zeroling 20-11-2014 */
!function(a){function b(b,c){b.on("click",function(){a("html,body").animate({scrollTop:c.offset().top})})}function c(b,c,d){c.each(function(e,f){a(f).on("click",function(){b.hide(),c.removeClass("z-active"),a(this).addClass("z-active"),a(b[e]).show(),d.css("top",120*e+"px")})})}b(a(".hot"),a(".m-alir")),b(a(".school"),a(".m-origin")),b(a(".find"),a(".m-sechand")),b(a(".study-help"),a(".m-chairs"));var d=a(".m-alir").find(".m-slider-con, .m-news-con, .m-teach-con"),e=a(".tab-hot, .tab-cqupt-news, .tab-teach-news");c(d,e,a(".m-alir .z-cover"));var f=a(".m-origin").find(".m-slider-con, .m-films, .m-novels"),g=a(".tab-album, .tab-film, .tab-novel");c(f,g,a(".m-origin .z-cover"));var h=a(".m-sechand").find("#m-elec, #m-life, #m-study"),i=a(".tab-products, .tab-daily, .tab-learn");c(h,i,a(".m-sechand .z-cover"))}(jQuery);