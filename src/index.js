import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompliteList(inputText);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

//未完了リストから指定の要素を削除
const deliteFromIncompliteList = (target) => {
  document.getElementById("incomplite-list").removeChild(target);
};

const createIncompliteList = (innerText) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = innerText;

  //未完了リストに追加
  document.getElementById("incomplite-list").appendChild(div);

  //button(完了)タグ生成
  const compliteButton = document.createElement("button");
  compliteButton.innerText = "完了";
  compliteButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ(div)を未完了リストから削除
    deliteFromIncompliteList(compliteButton.parentNode);
    //完了リストに追加する要素
    const addTarget = compliteButton.parentNode;
    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;
    //divタグを再利用するため中身を初期化
    addTarget.textContent = null;
    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ(div)を完了したリストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complite-list").removeChild(deleteTarget);
      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      //未完了リストに追加
      createIncompliteList(text);
    });
    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //完了リストに追加
    document.getElementById("complite-list").appendChild(addTarget);
  });

  //button(削除)タグ生成
  const deliteButton = document.createElement("button");
  deliteButton.innerText = "削除";
  deliteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ(div)を未完了リストから削除
    deliteFromIncompliteList(deliteButton.parentNode);
  });

  //divタグの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(compliteButton);
  div.appendChild(deliteButton);
};
