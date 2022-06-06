let btn = document.querySelector('.discover__btn');
let animation = document.querySelector('.discover__animation');
let vr_player = document.querySelector('#discover__vr_player');
let discover_block = document.querySelector('.discover');
let img_container = document.querySelector('.img_container');
let neon = document.querySelector('.img_container span');
let menu_btn = document.querySelector('.menu__btn');
let glasses_menu = document.querySelector('#glasses__menu');
let glasses_items = document.querySelectorAll('.menu__items span');
let glasses_items_cards = document.querySelectorAll('.glasses__item-card');
let show_header_menu = document.querySelector('#header__show-menu-btn');


btn.onmouseover = () => {
  animation.classList.add('hover');
}
btn.onmouseout = () => {
  animation.classList.remove('hover');
}
btn.onclick = () => {
  animation.classList.toggle('press');
}

discover_block.onmousemove = (event) => {
  var x = event.pageX;
  var y = event.pageY;
  var width_block = discover_block.offsetWidth;
  var height_block = discover_block.offsetHeight;
  var x_rotate = (discover_block.offsetWidth / 2 - event.pageX) / 60;
  var y_rotate = (discover_block.offsetHeight / 2 - event.pageY) / 60;
  if (x > width_block/2) {
    x = -(x/2);
  }
  if (y > height_block/2) {
    y = -(y/2);
  }
  vr_player.style = '--x:' + x + ';--y:' + y;
  neon.style = '--x:' + x + ';--y:' + y;
  img_container.style.transform = `rotateX(${y_rotate}deg) rotateY(${x_rotate}deg)`;
}

menu_btn.onclick = () => {
  glasses_menu.classList.toggle('menu_open');
  document.querySelector(".glasses__default-img").classList.remove('hide_default_img');// add when one of the glasses selected
  hideGlassesItem();


}
glasses_items.forEach((item, i) => {
  item.addEventListener("click", () => {
    document.querySelector(".glasses__default-img").classList.add('hide_default_img');// add when one of the glasses selected
    hideGlassesItem();
    document.querySelector(`.glasses__item-card:nth-child(${i + 1})`).classList.add('show_selected_glasses');

  });
});

 function hideGlassesItem() {
   document.querySelectorAll('.glasses__item-card').forEach((item, i) => {
     item.classList.remove('show_selected_glasses');
   });
}

show_header_menu.onclick = () => {
  document.querySelector('.header__menu').classList.toggle('show_header_menu');
}
