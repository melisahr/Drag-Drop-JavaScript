/*https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API*/

const lists = document.querySelectorAll('.list');
const listItems = document.querySelectorAll('.list-item');
const btnClear = document.querySelector('.reset');

let draggedItem = null;

for (let i = 0; i < listItems.length; i++){
    const item = listItems[i];
    //console.log(item);

    //Drag start
    item.addEventListener('dragstart', function(){
        draggedItem = item;
        setTimeout(function(){
            item.style.display='none';
        },50);
    });
    
    //drag end
    item.addEventListener('dragend', function(){
        setTimeout(()=>{
            item.style.display = "block";
            draggedItem = null;
        },50);
    });

for(let x = 0; x < lists.length; x++){
    const list = lists[x];
    //console.log(list);

    list.addEventListener('dragover', function (e){
        e.preventDefault();
    });

    list.addEventListener('dragenter', function (e){
        e.preventDefault();
        list.style.backgroundColor = 'rgba(255,255,255,0.7)'
    });

    list.addEventListener('dragleave', function (){
        list.style.backgroundColor= 'rgba(88,65,83,0.5)';
    });

    list.addEventListener('drop', function() {
        list.append(draggedItem);
        list.style.backgroundColor= 'rgba(88,65,83,0.5)';
    });
}
}


