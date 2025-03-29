let imgContainer=document.querySelector(".imgContainer");
let innerHtml="";
items.forEach((item)=>{
innerHtml+=`<div class="imgBox">
<img Loding=" lazy " src="${item.url}" alt="" width=200px height=200px>
<div class="imgName">${item.name} 
</div>
</div>`;
imgContainer.innerHTML=innerHtml;
})


function addToList() {
  // Get the value from the input box
  const inputValue = document.querySelector(".inputBox").value;

  // Only add if there is some value in the input box
  if (inputValue) {
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = inputValue;

    // Add the list item to the unordered list
    document.getElementById('textList').appendChild(li);

    // Clear the input box after adding the text
    document.querySelector(".inputBox").value = '';
  }}