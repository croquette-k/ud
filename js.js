$(function(){
    
    /* ナビゲーション */
    $(".openbtn").click(function () {
        $(this).toggleClass('active');
        $("#g-nav").toggleClass('panelactive');
        $("#container").toggleClass('mainblur');
    });
    
    $("#g-nav a").click(function () {
        $(".openbtn").removeClass('active');
        $("#g-nav").removeClass('panelactive');
        $("#container").removeClass('mainblur');
    });
    var beforePos = 0;

    function ScrollAnime() {
        var elemTop = $('#container').offset().top;
        var scroll = $(window).scrollTop();

        if(scroll == beforePos) {

        }else if(elemTop > scroll || 0 > scroll - beforePos){
            //ヘッダーが上から出現する
            $('#header').removeClass('UpMove');	
            $('#header').addClass('DownMove');
        }else {
            //ヘッダーが上に消える
            $('#header').removeClass('DownMove');
            $('#header').addClass('UpMove');
        }
        
        beforePos = scroll;
    }


    
    $(window).scroll(function () {
        ScrollAnime();
    });

    
    $(window).on('load', function () {
        ScrollAnime();
    });
        
    });


// ロール
gsap.to('.about-roll', {
    x: -1400,
    scrollTrigger: {
      trigger: '.about-roll',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });
  gsap.to('.contact-roll', {
    x: 1400,
    scrollTrigger: {
      trigger: '.contact-roll',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    }
  });

  gsap.from('.about-img1', {
    y: 800,
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.about-wrap',
        start: 'top 20%'
    }
  });
  gsap.from('.about-img2', {
    x: 400,
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    delay: 0.3,
    scrollTrigger: {
        trigger: '.about-wrap',
        start: 'top 20%'
    }
  });
  gsap.from('.about-img3', {
    y: 800,
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.about-wrap',
        start: 'top 20%'
    }
  });

  gsap.from(".item", {
    y: 10,
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    stagger: 0.1,
    scrollTrigger: {
        trigger: '.business-item',
        start: '70% bottom'
    }
  });

  gsap.from(".line", {
    height: 0,
    autoAlpha: 0,
    duration: 1,
    ease: "power4.out",
    scrollTrigger: {
        trigger: '.news-box',
        start: '70% bottom'
    }
  });