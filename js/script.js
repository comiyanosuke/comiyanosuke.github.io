$(document).ready(function () {
  // トップへ戻る
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) {
      $(".to-top").fadeIn();
    } else {
      $(".to-top").fadeOut();
    }
  });

  // ドロワーメニュー
  jQuery(".drawer-icon").on("click", function (e) {
    e.preventDefault();

    jQuery(".drawer-icon").toggleClass("is-active");
    jQuery(".drawer-nav").toggleClass("is-active");
    jQuery(".drawer-background").toggleClass("is-active");
    return false;
  });

  $(".drawer-background").on("click", function () {
    $(this).toggleClass("is-active");
    $(".drawer-nav").toggleClass("is-active");
    $(".drawer-icon").toggleClass("is-active");
  });


  // スムーススクロール
  jQuery('a[href^="#"').click(function () {
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    let position = jQuery(target).offset().top;
    console.log(position);
    jQuery("html, body").animate(
      {
        scrollTop: position - $("#js-header").outerHeight(),
      },
      speed
    );
    return false;
  });

  // アコーディオンメニュー
  jQuery(".accordion-head").click(function () {
    jQuery(this).next().slideToggle(200);
    jQuery(this).children(".accordion-icon").toggleClass("is-open");
  });

  // formの入力確認
  let $submit = $("#js-submit");
  $("#js-form input, #js-form textarea, #js-form select").on(
    "change",
    function () {
      if (
        $('#js-form input[type="text"]').val() !== "" &&
        $('#js-form input[type="kana"]').val() !== "" &&
        $("#js-form .contact-privacy-input").prop("checked") === true
      ) {
        $submit.prop("disabled", false);
        // $submit.addClass('-active');
        // console.log("成功");
      } else {
        $submit.prop("disabled", true);
      }
    }
  );
});

// swiper設定
let mySwiper = new Swiper(".swiper", {
  loop: true,
  loopedSlides: 6,
  slidesPerView: 1,
  width: 290,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },

  breakpoints: {
    768: {
      spaceBetween: 40,
      width: 400,
    },
  },
});


// formの入力確認
let $submit = $('#js-submit');
$("#js-form input, #js-form textarea").on("change", function () {
  if (
    $('#js-form input[type="text"]').val() !== "" &&
    $('#js-form input[type="email"]').val() !== "" &&
    $('#js-form textarea[name="entry.1329888499"]').val() !== "" &&
    $('#js-form input[name="entry.1669214127"]').prop("checked") === true
  ) {
    $submit.prop('disabled', false)
    $submit.addClass('-active');
    console.log("成功");

  } else {
    $submit.prop('disabled', true)
    // $submit.removeClass("-active");
    console.log($submit);

  }
});

  // google form
  let $form = $("#js-form");
  $form.submit(function (e) {
    $.ajax({
      url: $form.attr("action"),
      data: $form.serialize(),
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          //送信に成功したときの処理
          $form.slideUp();
          $("#js-success").slideDown();
        },
        200: function () {
          //送信に失敗したときの処理
          $form.slideUp();
          $("#js-error").slideDown();
        },
      },
    });
    return false;
  });
