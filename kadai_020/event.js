// btnというidを持つHTML要素を取得し、定数に代入する
const Btn = document.getElementById('btn');

// textというidを持つHTML要素を取得し、定数に代入する
const text = document.getElementById('text');

// ボタンクリック時の処理
Btn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました';
});
