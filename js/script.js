const text = document.querySelector('#colorText');
const color = document.querySelector('#colorPicker');

const colorBg = () => {

  // カラーコード表示
  text.textContent = `カラーコード:${color.value}`;
}

// カラーピッカーが変更されたら colorBg を表示させる
color.addEventListener('input',colorBg);示