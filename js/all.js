$(document).ready(function () {
    $('.folder-1 > li').hover(function (e) {
            // over  滑鼠移入  新增.active
            $(this).addClass('active');
            // folder-1 > li >> folder-2 打開
            $(this).children('ul').stop().slideDown(800);
        }, function () {
            // out   滑鼠移出  移除.active
            $(this).removeClass('active');
            $(this).find('li').removeClass('active');
            // folder-1 > li >> ul全收
            $(this).find('ul').stop().slideUp(800);
            // icon 回預設值
            $(this).find('.fas.fa-plus').show();
            $(this).find('.fas.fa-minus').hide();
        }
    );

    $('.folder-2 > li').on('click', function () {
        // 自己以外的 folder-3 全收
        event.preventDefault();
        $(this).siblings().children('ul').stop().slideUp(800);
        // 自己的 folder-3 打開 / 收起
        $(this).children('ul').stop().slideToggle(800);
        // 自己的 icon + 轉換 -
        $(this).find('.fas.fa-plus').toggle();
        $(this).find('.fas.fa-minus').toggle();
        // 自己以外的 icon 全變 +
        $(this).siblings().find('.fas.fa-plus').show();
        $(this).siblings().find('.fas.fa-minus').hide();
        // 自己新增 / 移除 .active
        $(this).toggleClass('active');
        // 自己以外 移除 .active
        $(this).siblings().removeClass('active');

    });

    $('.folder-2 > li').hover(function () {
            // over
            $(this).children().children('i').addClass('animate__animated animate__wobble')
        }, function () {
            // out
            $(this).children().children('i').removeClass('animate__animated animate__wobble')
        }
    );

    $('.folder-3 li').hover(function () {
            // over
            $(this).addClass('active'); 
        }, function () {
            // out
            $(this).removeClass('active');
        }
    );
    

    // swiper
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 3000,
          },
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          hideOnClick: true,
          clickable: true,
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
      })

    //   swiper + animation
    mySwiper.on('slideChange', function () {
        var index = mySwiper.activeIndex;
        // console.log(index);
        var aniType = $('.swiper-slide div').eq(index).data('ani');
        // console.log(aniType);
        if (index == 1){
            $('.swiper-slide div').eq(4).removeClass();
        }
        $('.swiper-slide div').eq(index-1).removeClass();
        $('.swiper-slide div').eq(index).addClass('animate__animated ' + aniType);
    });

    $('.banner').hover(function () {
            // over
            mySwiper.autoplay.stop();
        }, function () {
            // out
            mySwiper.autoplay.start();
        }
    );
    // lightbox
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true,
        disableScrolling: true,
        loop: true,
    })
    
    // top
    $('.top').on('click', function () {
        event.preventDefault;
        $('html,body').animate({
            scrollTop: 0
        },1000);
    });

    // btn
    $('.btn a').on('click', function () {
        event.preventDefault;
        var href = $(this).attr('href');
        // console.log(href);
        $('html,body').animate({
            scrollTop: $(href).offset().top-90
        },500);
    });
});