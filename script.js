// color btn start

let color=document.getElementById("colorBtn").addEventListener("click", function(){
    getColor()
})

function getColor(){
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

// color btn close

//  card 1 start
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


//  card 1 close ;

// card 2 start
document.getElementById("cardBtn-2").addEventListener('click',function(){
    let taskNumber=parseInt(document.getElementById("taskNumber").innerText);
    let task=taskNumber-1;
    document.getElementById("taskNumber").innerText=task;
    let updateNumber=parseInt(document.getElementById("updateNumber").innerText);
    let update=updateNumber+1
    document.getElementById("updateNumber").innerText=update;
    alert("board updated successfully")
   
    let title=document.getElementById("title-1" ).innerText
    const d = new Date();
    let time = d.toLocaleTimeString();


    let activities=document.getElementById("activity-1");
    activities.innerHTML=`
    <h1 class="bg-gray-300 rounded-lg m-2 p-2 mt-3">You have Complete The Task ${title} at ${time}</h1>
`
 })
//  card 3 start
document.getElementById("cardBtn-3").addEventListener('click',function(){
    let taskNumber=parseInt(document.getElementById("taskNumber").innerText);
    let task=taskNumber-1;
    document.getElementById("taskNumber").innerText=task;
    let updateNumber=parseInt(document.getElementById("updateNumber").innerText);
    let update=updateNumber+1
    document.getElementById("updateNumber").innerText=update;
    alert("board updated successfully")
   
    let title=document.getElementById("title-2" ).innerText
    const d = new Date();
    let time = d.toLocaleTimeString();


    let activities=document.getElementById("activity-2");
    activities.innerHTML=`
    <h1 class="bg-gray-300 rounded-lg m-2 p-2 mt-3">You have Complete The Task ${title} at ${time}</h1>
`
 })
//  card 4 start
document.getElementById("cardBtn-4").addEventListener('click',function(){
    let taskNumber=parseInt(document.getElementById("taskNumber").innerText);
    let task=taskNumber-1;
    document.getElementById("taskNumber").innerText=task;
    let updateNumber=parseInt(document.getElementById("updateNumber").innerText);
    let update=updateNumber+1
    document.getElementById("updateNumber").innerText=update;
    alert("board updated successfully")
   
    let title=document.getElementById("title-3" ).innerText
    const d = new Date();
    let time = d.toLocaleTimeString();


    let activities=document.getElementById("activity-3");
    activities.innerHTML=`
    <h1 class="bg-gray-300 rounded-lg m-2 p-2 mt-3">You have Complete The Task ${title} at ${time}</h1>
`
 })
//  card 5 start
document.getElementById("cardBtn-5").addEventListener('click',function(){
    let taskNumber=parseInt(document.getElementById("taskNumber").innerText);
    let task=taskNumber-1;
    document.getElementById("taskNumber").innerText=task;
    let updateNumber=parseInt(document.getElementById("updateNumber").innerText);
    let update=updateNumber+1
    document.getElementById("updateNumber").innerText=update;
    alert("board updated successfully")
   
    let title=document.getElementById("title-4" ).innerText
    const d = new Date();
    let time = d.toLocaleTimeString();


    let activities=document.getElementById("activity-4");
    activities.innerHTML=`
    <h1 class="bg-gray-300 rounded-lg m-2 p-2 mt-3">You have Complete The Task ${title} at ${time}</h1>
`
 })
 //  card 6 start
 document.getElementById("cardBtn-6").addEventListener('click',function(){
    let taskNumber=parseInt(document.getElementById("taskNumber").innerText);
    let task=taskNumber-1;
    document.getElementById("taskNumber").innerText=task;
    let updateNumber=parseInt(document.getElementById("updateNumber").innerText);
    let update=updateNumber+1
    document.getElementById("updateNumber").innerText=update;
    alert("board updated successfully")
   
    let title=document.getElementById("title-5" ).innerText
    const d = new Date();
    let time = d.toLocaleTimeString();


    let activities=document.getElementById("activity-5");
    activities.innerHTML=`
    <h1 class="bg-gray-300 rounded-lg m-2 p-2 mt-3">You have Complete The Task ${title} at ${time}</h1>
`
 })