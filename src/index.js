import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText;

  //未完了リストに追加
  document.getElementById("incomplite-list").appendChild(div);

  //button(完了)タグ生成
  const compliteButton = document.createElement("button");
  compliteButton.innerText = "完了";
  compliteButton.addEventListener("click", () => {
    alert("完了");
  });

  //button(完了)タグ生成
  const deliteButton = document.createElement("button");
  deliteButton.innerText = "削除";
  deliteButton.addEventListener("click", () => {
    alert("削除");
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(compliteButton);
  div.appendChild(deliteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
