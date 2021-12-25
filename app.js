// Selectors

const input=document.querySelector(".todo-input");
const list=document.querySelector(".todo-list");
const form=document.querySelector("form");

 
//Event Listeners  

form.addEventListener('submit',function(e){
    e.preventDefault();
    inputVal=input.value;  
    if(inputVal.trim()){      
        // console.log(inputVal);    
            const todoDiv=document.createElement('div');
            todoDiv.classList.add('todo-div');  

            const newList=document.createElement('li'); 
            newList.classList.add('todo-item'); 
            todoDiv.appendChild(newList); 
            newList.innerText=inputVal.trim();

            list.appendChild(todoDiv)
            
            input.value='';
        
    }
})


list.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    const item=e.target;
    if(item.classList[0]==='todo-item'){
        item.remove();
    }
})

list.addEventListener('dblclick', (e) => {
    e.preventDefault();
    const item=e.target;
    if(item.classList[0]==='todo-item'){
       const todo = item.parentElement;
       todo.classList.toggle('completed');
    }
})










