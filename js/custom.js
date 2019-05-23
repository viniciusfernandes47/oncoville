$('.lista_depoimentos').slick({
    dots: true,
    arrows: false,
    infinite: false,
    speed: 300,
    rows: 0,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.linha').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  $('.slick-slide:first-child').addClass('linhafina');
  $('.slick-active:last-child').addClass('meuslick');
  $('.slick-slide').click(function() {
       $('.slick-slide').removeClass('linhafina');
         $(this).addClass('linhafina');
  }
  );
  
  
  $('.ano').click(function() {
      $('.ano > .linhaHover').hide('slow');
      $(this).children('.linhaHover').show('slow', function(){
      
      });
    });

    $('.cada_convenio').click(function(){
      $('.descricao_convenio').hide(500);
      $(this).find('.descricao_convenio').toggle(500);
      return false;
  });

  // Hover medico 
$('.cada_medico').click(function(){
    $(this).find('.hover_medico').show(500);
    return false;
});

$('.fechar').click(function(){
  $('.hover_medico').hide(500);
  return false;
});

// Custom Select

  $(".custom-select2").each(function() {
    var classes = $(this).attr("class"),
        id      = $(this).attr("id"),
        name    = $(this).attr("name");
    var template =  '<div class="' + classes + '">';
        template += '<span class="custom-select2-trigger">' + $(this).attr("name") + '</span>';
        template += '<div class="custom-options">';
        $(this).find("option").each(function() {
          template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
        });
    template += '</div></div>';
    
    $(this).wrap('<div class="custom-select2-wrapper"></div>');
    $(this).hide();
    $(this).after(template);
  });
  $(".custom-option:first-of-type").hover(function() {
    $(this).parents(".custom-options").addClass("option-hover");
  }, function() {
    $(this).parents(".custom-options").removeClass("option-hover");
  });
  $(".custom-select2-trigger").on("click", function() {
    $('html').one('click',function() {
      $(".custom-select2").removeClass("opened");
    });
    $(this).parents(".custom-select2").toggleClass("opened");
    event.stopPropagation();
  });
  $(".custom-option").on("click", function() {
    $(this).parents(".custom-select2-wrapper").find("select").val($(this).data("value"));
    $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    $(this).addClass("selection");
    $(this).parents(".custom-select2").removeClass("opened");
    $(this).parents(".custom-select2").find(".custom-select2-trigger").text( '' + $(this).text());
  });

  (function() {
  
    'use strict';
  
    $('.input-file').each(function() {
      var $input = $(this),
          $label = $input.next('.js-labelFile'),
          labelVal = $label.html();
      
     $input.on('change', function(element) {
        var fileName = '';
        if (element.target.value) fileName = element.target.value.split('\\').pop();
        fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
     });
    });
  
  })();

  var searchWrapper = document.querySelector('.search-wrapper'),
searchInput = document.querySelector('.search-input');

document.addEventListener('click', function (e) {
  if (~e.target.className.indexOf('search')) {
    searchWrapper.classList.add('focused');
    searchInput.focus();
  } else {
    searchWrapper.classList.remove('focused');
  }
});

$(".hamburger").click(function()
{
    $(".navigation").toggleClass("open_menu");
});

$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));

  $('li.nav-item a').removeClass('active');
  $(this).addClass('active');
  if( target.length ) {
      
      event.preventDefault();
      var top = (target.offset().top) - 140;
      $('html, body').stop().animate({
          scrollTop: top
      }, 1000);
  }
});   


/* slick na inicial only mobile */
$('.slick_mobile').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  mobileFirst: true,
  responsive: [
        {
                breakpoint: 768,
                settings: 'unslick'
        }
  ]
});

AOS.init();