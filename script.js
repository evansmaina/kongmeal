//search part
const productContainer=document.querySelector('#foodproducts ul');

const searchBox=document.forms['search-food'].querySelector('input');

searchBox.addEventListener('keyup',function(e){
    
    const term=e.target.value.toLowerCase();
    const food=productContainer.getElementsByTagName('li')
    Array.from(food).forEach(function(container){
        const foodName=container.lastElementChild.textContent;
        if(foodName.toLowerCase().indexOf(term)!=-1){
            container.style.display='block';
        }
        else{
            container.style.display='none';
        }
    })
});

//addcomment part
const commmentslist=document.querySelector('#commments')
const addComment=document.forms['add-comment'];
addComment.addEventListener('submit',function(e){
    e.preventDefault();
    const value=addComment.querySelector('input[type="text"]').value;
    
const comment=document.createElement('div');
const textComment=document.createElement('span')
const deleteBtn=document.createElement('span')

textComment.textContent=value;
deleteBtn.textContent="delete";

textComment.classList.add("textComment")
deleteBtn.classList.add("delete");
comment.classList.add("comment")

comment.appendChild(textComment);
comment.appendChild(deleteBtn);
commmentslist.appendChild(comment);
    value.textContent="";
    
})

//add delete button function
commmentslist.addEventListener('click',function(e){
    if(e.target.className=='delete'){
        const div=e.target.parentElement;
        div.parentNode.removeChild(div);
    }
})

//tabbed area

const navPills=document.querySelector('.nav-pills');
const panels=document.querySelector('.panel');

navPills.addEventListener('click',function(e){
    if(e.target.className=='nav-link'){
    const targetPanel=document.querySelector(e.target.dataset.target);
    panels.forEach(function(panel){
        if(panel==targetPanel){
            panel.classList.add('active');
        }
        else{
            panel.classList.remove('active');
        }
    })
    
    }
})