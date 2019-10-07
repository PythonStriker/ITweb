let pointFather = document.getElementById('point');
let pointList = pointFather.children;
let i = pointList.length;
let run;
let index = 0;

function addEvent() {
    for(let j=0;j<i;j++){
        pointList[j].addEventListener('click',dot);}
}
addEvent();

function myRun() {
    run = setInterval(()=>{
    pointList[index].removeAttribute('id');
    index++;
    if (index==i-1){
        index=0;
    }
    pointList[index].setAttribute('id','active');
    },4000)

}
myRun();

function dot(e){
    clearInterval(run);
    var event = e.target;
    var ev = event.getAttribute('class').split('p');
    if(ev[1]==0||ev[1]==1){
        pointList[index].removeAttribute('id');
        index = Number(ev[1]);
        pointList[index].setAttribute('id', 'active');
        myRun();
   }
    else{
        pointList[index].removeAttribute('id');
        index = Number(ev[1]);
        pointList[index-1].setAttribute('id', 'active');
        index = index -1;
        myRun();
    }

}