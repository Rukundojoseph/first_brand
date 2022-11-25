var POST=document.querySelector("#add_blog")
var POSTTEXT=document.querySelector("#blog_txt_input")
var POSTIMAGE=document.querySelector("#blog_input_image")
var SENDP=document.querySelector("#submitt")
var CANCELP=document.querySelector("#cancel")
var INPUT_DIV=document.querySelector(".add_input")
var PTABLE=document.querySelector(".p_table")
var dele
var image=""
var postid=0;
var count=0;
var dblog=document.querySelector(".delete")
var blogs=[]

POST.addEventListener('click',()=>{
    
if(count==0){
    INPUT_DIV.classList.add('add_input2');
    count=1
}
else{
    INPUT_DIV.classList.remove('add_input2');
    count=0
}    
})
SENDP.addEventListener('click',()=>{
    postid++
    
   PTABLE.innerHTML+=`<tr id='parent${postid}' ><td>${POSTTEXT.value}</td><td>0</td><td>0</td><td><button class='update'>update</butto><button id='${postid}' onClick="bdelete(this.id)" class='delete'>delete</button></td></tr>`
   blogs.push={
    "blogtext": `${POSTTEXT.value}`;
    "blogimage": `${POSTIMAGE.value}`

}
    INPUT_DIV.classList.remove('add_input2');
})
function bdelete(clicked){    
    document.getElementById(`parent${clicked}`).remove()

}
CANCELP.addEventListener('click' ,()=>{
    POSTTEXT.value=""
    POSTIMAGE.value=""
    INPUT_DIV.classList.remove('add_input2');

})