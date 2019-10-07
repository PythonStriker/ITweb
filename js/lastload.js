let pointFather = document.getElementById('point');
let ppFlag = 0;          //痛点选中标志
let pp1 = document.getElementsByClassName('pp1')[0];
let pp2 = document.getElementsByClassName('pp2')[0];
let pointList = pointFather.children;
let i = pointList.length;
let run;
let index = 0;

function addEvent() {
    pp1.addEventListener('click',ppfunction);
    pp2.addEventListener('click',ppfunction);
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
//痛点选择函数
function ppfunction(e) {
    let event=e.target;
    let ev =  Number(event.getAttribute('class').split('pp')[1]);
    if (ppFlag==0 && ev==2){
        pp1.removeAttribute('id');
        pp2.setAttribute('id','d_active');
        ppFlag = 1;
    }
    else if (ppFlag==1 && ev==1){
        pp2.removeAttribute('id');
        pp1.setAttribute('id','d_active');
        ppFlag = 0;
    }
}
//轮播点点击函数
function dot(e){
    clearInterval(run);
    let event = e.target;
    let ev = event.getAttribute('class').split('p');
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
//--------------------------------------------------------------------------------//
