'use strict';
$(window).scroll(function() {
  $(this).scrollTop() > 1 ? $('.fixed').addClass('sticky') : $('.fixed').removeClass('sticky')
}), $(document).ready(function() {
  function a() {
    var a = new Date('Jule 1, 2017 18:00:00 PDT'),
      a = Date.parse(a) / 1e3,
      e = new Date,
      e = Date.parse(e) / 1e3,
      s = a - e,
      t = Math.floor(s / 86400),
      o = Math.floor((s - 86400 * t) / 3600),
      n = Math.floor((s - 86400 * t - 3600 * o) / 60),
      l = Math.floor(s - 86400 * t - 3600 * o - 60 * n);
    o < '10' && (o = '0' + o), n < '10' && (n = '0' + n), l < '10' && (l = '0' + l), $('#days').html(t + '<span>Дней</span>'), $('#hours').html(o + '<span>Часов</span>'), $('#minutes').html(n + '<span>Минут</span>'), $('#seconds').html(l + '<span>Секунд</span>')
  }
  setInterval(function() {
      a()
    }, 1e3),
    function() {
      $('.hamburger-menu').on('click', function() {
        $('.bar').toggleClass('animate')
      })
    }(), $('.top').owlCarousel({
      loop: !0,
      margin: 0,
      nav: !1,
      items: 1,
      dots: !0,
      mouseDrag: !1
    }), $('.optimization-item').owlCarousel({
      loop: !0,
      margin: 0,
      items: 7,
      dots: !1,
      mouseDrag: !0,
      center: !0,
      nav: !0,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    }), $('.pay-owl').owlCarousel({
      loop: !0,
      margin: 0,
      items: 5,
      dots: !1,
      mouseDrag: !1,
      center: !0,
      nav: !0,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    })
});
