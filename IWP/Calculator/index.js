let screen= document.getElementById('screen');
buttons = document.querySelectorAll('button');
for(item of buttons){
    item.addEventListener('click',(fn)=>{
        btntxt=fn.target.innerText;
        if (btntxt=='=') {
            screen.value=eval(screen.value);
        }
        else if (btntxt=='C') {
            screen.value='';
        }
        else if (btntxt=='<<') {
            let sub= screen.value;
            screen.value=sub.substring(0,sub.length-1);
        }
        else{
            screen.value+=btntxt;
        }
    })
}