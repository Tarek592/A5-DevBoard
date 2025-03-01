// color btn start

let color=document.getElementById("colorBtn").addEventListener("click", function(){
    getColor()
})

function getColor(){
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

// color btn close

 
 document.getElementById("cardBtn-1").addEventListener('click',function(){
    let taskNumber=parseInt(document.getElementById("taskNumber").innerText);
    let task=taskNumber-1;
    document.getElementById("taskNumber").innerText=task;
    let updateNumber=parseInt(document.getElementById("updateNumber").innerText);
    let update=updateNumber+1
    document.getElementById("updateNumber").innerText=update;
    alert("board updated successfully")
   
    let title=document.getElementById("title").innerText
    const d = new Date();
    let time = d.toLocaleTimeString();


let activities=document.getElementById("activity");
activities.innerHTML=`
<h1 class="bg-gray-300 rounded-lg m-2 p-2">You have Complete The Task ${title} at ${time}</h1>
`


 })
 function disableButton(button) {
    button.disabled = true;
}



