// let mySwiper = new Swiper('.swiper-container', {
//   loop: true,  //ループ可能（ループモードを有効に）
//   slidesPerView:2,  //スライドを2つ（分）表示
//   centeredSlides : true,  //アクティブなスライドを中央に表示
//   // effect: 'coverflow',  //スライドのエフェクトを coverflow に

//   pagination: {  //ページネーションを表示
//     el: '.swiper-pagination',
//     clickable: true,  //アイコンをクリックすると対応するスライドに移動
//   },

//   navigation: {  //ナビゲーションボタンを表示
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   breakpoints: {
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 5,
//     },

//     980: {
//       slidesPerView: 3,
//       spaceBetween: 20,
//     }
//   },


// })

// const container = document.querySelector('#swiper01');
// const prev_button =  document.querySelector('#swiper01 .swiper-button-prev');
// const next_button =  document.querySelector('#swiper01 .swiper-button-next');
// //マウスオーバーイベント
// container.addEventListener('mouseenter', () => {
//   // hover クラスを追加
//   prev_button.classList.add('hover');
//   next_button.classList.add('hover');
// });
// //マウスアウトイベント
// container.addEventListener('mouseleave', () => {
//   // hover クラスを削除
//   prev_button.classList.remove('hover');
//   next_button.classList.remove('hover');
// });


let swiper2 = new Swiper('#swiper02', {
  loop: true,
autoplay: {delay: 3000},
  pagination: {
    el: '.swiper-pagination',

  },
});
