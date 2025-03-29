let imgBox=document.querySelector(".imgBox");
let inputBox=document.querySelector(".inputBox");
let btn=()=>{
    
imgBox.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputBox.value}`
}