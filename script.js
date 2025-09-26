let time = document.querySelector('#inputTime');
let text = document.querySelector('#inputText');
let btn = document.querySelector('#btn');
let tile = document.querySelector('.itemsUncomplete');
let ctile = document.querySelector('.itemscomplete');
let RtaskCount = document.querySelector('#task1');
let CtaskCount = document.querySelector('#task2');
let arr = [];
let cArr = [];
RtaskCount.innerText = '0';
CtaskCount.innerText = '0';
btn.addEventListener('click', () => {
    let textValue = text.value;
    let timeValue = (time.value != "") ? time.value : "Not set";
    arr.unshift({
        time: timeValue,
        content: textValue
    })
    text.value = "";
    time.value = "";
    update(arr, cArr);
});
function update(arr, cArr) {
    tile.innerHTML = "";
    ctile.innerHTML = "";
    RtaskCount.innerText = arr.length;
    CtaskCount.innerText = cArr.length;
    arr.forEach(function (item, i) {
        tile.innerHTML += `
    <div cardId="${i}" class="card">
            <div class="time">
                <h1>${item.time}</h1>
            </div>
            <div class="content">
                <h3>${item.content}</h3>
            </div>
            <div class="iCatch">
            <i id='${i}' onClick="completeTask(${i})" class="ri-check-double-line"></i>
            <i id='${i}' onClick="deleteTask(${i})" class="ri-delete-bin-2-fill"></i>
            </div>

            </div>
    `;
    })
    cArr.forEach(function (item, i) {
        ctile.innerHTML += `
    <div cardId="${i}" class="card">
            <div class="time">
                <h1>${item.time}</h1>
            </div>
            <div class="content">
                <h3>${item.content}</h3>
            </div>
            <i id='${i}' onClick="deleteTaskComp(${i})" class="ri-delete-bin-2-fill"></i>
            </div>
    `;
    })
    document.querySelector('.card').style.backgroudColor = "black";

}
function deleteTask(id){
    arr.splice(id,1);
    update(arr,cArr);
}
function deleteTaskComp(id){
    cArr.splice(id,1);
    update(arr,cArr);
}

function completeTask(id){
    cArr.unshift(arr[id]);
    arr.splice(id,1);
    update(arr , cArr);
}






// function deleteCard(id) {
//     cArr.unshift(arr[id])
//     arr.splice(id, 1);
//     update(arr, cArr);
// }
// function compCards(id) {
//     cArr.splice(id, 1);
//     update(arr, cArr);
// }
