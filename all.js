// 待辦事項清單功能
// 使用 JavaScript 實現一個簡單的待辦事項清單功能
let data = [];

const txt = document.querySelector(".txt");
const save = document.querySelector(".save");

// 新增待辦功能
// 當點擊儲存按鈕時，將輸入框的值加入到 data 陣列中
// 並清空輸入框，然後重新渲染待辦事項列表
save.addEventListener("click", function (e) {
    if (txt.value == "") {
        alert("請輸入待辦事項");
        return;
    }
    let obj = {};
    obj.content = txt.value;
    data.push(obj);
    txt.value = "";
    renderData();
})

// 刪除待辦功能
// 當點擊刪除按鈕時，根據 data 陣列中的索引刪除對應的待辦事項
const list = document.querySelector(".list");
list.addEventListener("click", function (e) {
    if (e.target.getAttribute("class") !== "delete") {
        alert("請點擊刪除待辦按鈕");
        return;
    }else {
        let num = e.target.getAttribute("data-num");
        data.splice(num, 1);
        renderData();
    }
})

// 初始化渲染待辦事項列表
// 將 data 陣列中的待辦事項渲染到頁面上
function renderData(){
    let str = '';
    data.forEach(function (item, index) {
    str += `
    <li>${item.content}<input type="button" data-num="${index}" class="delete" value="刪除"/>
    </li>`
})
    // console.log(str);
    const list = document.querySelector(".list");
    list.innerHTML = str;
}

renderData();
