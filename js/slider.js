// var slideNow = 1;
// var slideCount = $('#slidewrapper').children().length;
// var slideInterval = 3000;
// var navBtnId = 0;
// var translateWidth = 0;

// $(document).ready(function() {
//     var switchInterval = setInterval(nextSlide, slideInterval);

//     $('#viewport').hover(function() {
//         clearInterval(switchInterval);
//     }, function() {
//         switchInterval = setInterval(nextSlide, slideInterval);
//     });

//     $('#next-btn').click(function() {
//         nextSlide();
//     });

//     $('#prev-btn').click(function() {
//         prevSlide();
//     });

//     $('.slide-nav-btn').click(function() {
//         navBtnId = $(this).index();

//         if (navBtnId + 1 != slideNow) {
//             translateWidth = -$('#viewport').width() * (navBtnId);
//             $('#slidewrapper').css({
//                 'transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//                 '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//             });
//             slideNow = navBtnId + 1;
//         }
//     });
// });


// function nextSlide() {
//     if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
//         $('#slidewrapper').css('transform', 'translate(0, 0)');
//         slideNow = 1;
//     } else {
//         translateWidth = -$('#viewport').width() * (slideNow);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow++;
//     }
// }

// function prevSlide() {
//     if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
//         translateWidth = -$('#viewport').width() * (slideCount - 1);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow = slideCount;
//     } else {
//         translateWidth = -$('#viewport').width() * (slideNow - 2);
//         $('#slidewrapper').css({
//             'transform': 'translate(' + translateWidth + 'px, 0)',
//             '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
//             '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
//         });
//         slideNow--;
//     }
// }


var editBg = function(content__bg) {
  var contents__bg = $('.content').find('.content__bg');
  contents__bg.animate({opacity: 'hide'}, 500);
  setTimeout(function() {
    contents__bg.remove();
  }, 500);
  $('.content').prepend($('<div class="content__bg '+content__bg+'"></div>'));
};

$(function() {
  setTimeout(function() {
    editBg('content__bg_img--1');
  }, 3000);
  setTimeout(function() {
    editBg('content__bg_img--2');
  }, 6000);
  setTimeout(function() {
    editBg('content__bg_img--3');
  }, 9000);
    setTimeout(function() {
    editBg('content__bg_img--4');
  }, 12000);
      setTimeout(function() {
    editBg('content__bg_img--1');
  }, 15000);
  setTimeout(function() {
    editBg('content__bg_img--2');
  }, 18000);
  setTimeout(function() {
    editBg('content__bg_img--3');
  }, 21000);
    setTimeout(function() {
    editBg('content__bg_img--4');
  }, 24000);
      setTimeout(function() {
    editBg('content__bg_img--1');
  }, 27000);
  setTimeout(function() {
    editBg('content__bg_img--2');
  }, 30000);
  setTimeout(function() {
    editBg('content__bg_img--3');
  }, 33000);
    setTimeout(function() {
    editBg('content__bg_img--4');
  }, 36000);
      setTimeout(function() {
    editBg('content__bg_img--1');
  }, 39000);
  setTimeout(function() {
    editBg('content__bg_img--2');
  }, 42000);
  setTimeout(function() {
    editBg('content__bg_img--3');
  }, 45000);
    setTimeout(function() {
    editBg('content__bg_img--4');
  }, 48000);

});