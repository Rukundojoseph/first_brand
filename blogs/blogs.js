var LIKE=document.querySelector("#like")
var COMMENT=document.querySelector("#like")
var printdiv=document.querySelector("#printdiv")
var comment_clone=""



function likethis(this_id){
    
 var Elem=document.getElementById(this_id)
 
  Elem.addEventListener('click',()=>{
    var Elem2=document.getElementById(this_id).nextElementSibling;
    console.log(parseInt(Elem2.innerHTML))
    Elem2.innerHTML=parseInt(Elem2.textContent)+1
    
  })
  
}
