
const counters=document.querySelectorAll('.counter');

counters.forEach(counter=>{

const update=()=>{

const target=+counter.getAttribute('data-target');
const c=+counter.innerText;

const increment=target/100;

if(c<target){
counter.innerText=(c+increment).toFixed(1);
setTimeout(update,20);
}else{
counter.innerText=target;
}

};

update();

});
