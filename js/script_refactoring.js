$(document).ready(function () {
  // トップへ戻る
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 500) {
      $(".el_toTop").fadeIn();
    } else {
      $(".el_toTop").fadeOut();
    }
  });

  // ドロワーメニュー
  jQuery("#js_drawerIcon").on("click", function (e) {
    e.preventDefault();

    jQuery("#js_drawerIcon").toggleClass("is_active");
    jQuery("#js_drawerNav").toggleClass("is_active");
    jQuery("#js_overlay").toggleClass("is_active");
    return false;
  });

  $("#js_overlay, .js_drawerNav_link").on("click", function (e) {
    e.preventDefault();

    $(this).removeClass("is_active");
    $("#js_drawerNav").removeClass("is_active");
    $("#js_drawerIcon").removeClass("is_active");
    jQuery("#js_overlay").removeClass("is_active");
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
        scrollTop: position - $("#js_header").outerHeight(),
      },
      speed
    );
    return false;
  });

  // アコーディオンメニュー
  jQuery(".js_accordion_btn").click(function () {
    jQuery(this).parent().next().slideToggle(200);
    jQuery(this).toggleClass("is_active");
  });

  // formの入力確認
  let $submit = $("#js_submit");
  $(
    "#js_contactForm input, #js_contactForm textarea, #js_contactForm select"
  ).on("change", function () {
    if (
      $('#js_contactForm input[type="text"]').val() !== "" &&
      $('#js_contactForm input[type="kana"]').val() !== "" &&
      $("#js_contactForm .el_contact_privacyInput").prop("checked") === true
    ) {
      $submit.prop("disabled", false);
      // $submit.addClass('-active');
      // console.log("成功");
    } else {
      $submit.prop("disabled", true);
    }
  });
});

// swiper設定
let mySwiper = new Swiper(".swiper", {
  loop: true,
  loopedSlides: 6,
  slidesPerView: 1,
  width: 274,
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
let $submit = $("#js-submit");
$("#js_contactForm input, #js_contactForm textarea").on("change", function () {
  if (
    $('#js_contactForm input[type="text"]').val() !== "" &&
    $('#js_contactForm input[type="email"]').val() !== "" &&
    $('#js_contactForm textarea[name="entry.1329888499"]').val() !== "" &&
    $('#js_contactForm input[name="entry.1669214127"]').prop("checked") === true
  ) {
    $submit.prop("disabled", false);
    $submit.addClass("-active");
    console.log("成功");
  } else {
    $submit.prop("disabled", true);
  }
});

// google form
let $form = $("#js_contactForm");
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
        $("#js_success").slideDown();
      },
      200: function () {
        //送信に失敗したときの処理
        $form.slideUp();
        $("#js_error").slideDown();
      },
    },
  });
  return false;
});
