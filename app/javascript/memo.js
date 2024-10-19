function post (){
  const form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    console.log('送信ボタンを押しました')
    e.preventDefault();
    console.log('送信のデフォルト処理を停止しました')
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
  });
};

window.addEventListener('turbo:load', post);