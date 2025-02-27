let lists=document.getElementsByClassName("list");
let rightbox=document.getElementById("right");
let leftbox=document.getElementById("left");



for(let list of lists)
{
    list.addEventListen("dragstart",function(e){
        let selected=e.target;

        rightbox.addEventListener('dragover',function(e)
    {
        e.preventDefault();
    })
    })
}