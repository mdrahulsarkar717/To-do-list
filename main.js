const text = document.querySelector('#text');
const listContainer = document.querySelector('.listContainer');

//add text function 

function addTask(){
    if (text.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement('li');
        li.innerHTML = text.value;
        listContainer.appendChild(li);
        
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
    text.value = '';
    saveData();
};

// remove added text

listContainer.addEventListener('click', function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("underline");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    } 
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
};

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
};

showTask();