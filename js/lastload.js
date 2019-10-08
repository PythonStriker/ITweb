let pointFather = document.getElementById('point');
let ppFlag = 0;          //痛点选中标志
let understandFlag = -1;  //了解详情标志
let pp1 = document.getElementsByClassName('pp1')[0];
let pp2 = document.getElementsByClassName('pp2')[0];
let pp11 = document.getElementById('pp11');
let pp12 = document.getElementById('pp12');
let pointList = pointFather.children;
let i = pointList.length;
let understandButtom = document.getElementsByClassName('pain_div_buttom');
let run;
let index = 0;
function addEvent() {
    pp11.addEventListener('click',ppfunction);
    pp12.addEventListener('click',ppfunction);
    for (let k=0;k<3;k++){
        understandButtom[k].addEventListener('click',unbuttomFunction);
    }
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
//了解详情函数
function unbuttomFunction(e){
    let event=e.target;
    let ev =  Number(event.getAttribute('id').split('buttom')[1]);
    if (understandFlag==-1){
            let border = document.getElementsByClassName('pain_div')[ev]
            border.style.borderTop='none';
            border.style.borderBottom='0.31rem solid RGB(83, 211, 205)';
            console.log(border.children);
            for(let j=0;j<4;j++){
                border.children[j].style="display:block";
            }
            for(let j=4;j<8;j++){
                border.children[j].style="display:none";
            }
        understandFlag=ev;
}
    else{
            let aborder = document.getElementsByClassName('pain_div')[ev];
            let bborder = document.getElementsByClassName('pain_div')[understandFlag];
            bborder.style.borderBottom='none';
            bborder.style.borderTop='0.31rem solid RGB(83, 211, 205)';
            aborder.style.borderBottom='0.31rem solid RGB(83, 211, 205)';
            aborder.style.borderTop='none';
            for(let j=0;j<4;j++){
                aborder.children[j].style="display:block";
            }
            for(let j=4;j<8;j++){
                aborder.children[j].style="display:none";
            }
            for(let j=0;j<4;j++){
                bborder.children[j].style="display:none";
            }
            for(let j=4;j<8;j++){
                bborder.children[j].style="display:block";
            }
            understandFlag=ev;
    }
}
//痛点选择函数
function ppfunction(e) {
    let event=e.target;
    let painDiv = document.getElementsByClassName('pain_div');
    let centerDiv = document.getElementById('center_div1');
    let sideDiv = document.getElementsByClassName('side_div');
    let ev =  Number(event.getAttribute('id').split('pp')[1][1]);
    if (ppFlag==0 && ev==2){
        pp1.removeAttribute('id');
        pp2.setAttribute('id','d_active');
        ppFlag = 1;
        if(understandFlag!=-1){
            let border = document.getElementsByClassName('pain_div')[understandFlag]
            border.style.borderBottom='none';
            border.style.borderTop='0.31rem solid RGB(83, 211, 205)';
            for(let j=0;j<4;j++){
                border.children[j].style="display:none";
            }
            for(let j=4;j<8;j++){
                border.children[j].style="display:block";
            }
        }
        for(let i=0;i<3;i++){
            painDiv[i].style="display:none";
        }
        understandFlag = -1;
        centerDiv.style='display:block';
        sideDiv[0].style='display:block';
        sideDiv[1].style='display:block';
    }
    else if (ppFlag==1 && ev==1){
        centerDiv.style='display:none';
        sideDiv[0].style='display:none';
        sideDiv[1].style='display:none';
        pp2.removeAttribute('id');
        pp1.setAttribute('id','d_active');
        ppFlag = 0;
        for(let i=0;i<3;i++){
            painDiv[i].style='border-top:0.31rem solid RGB(83, 211, 205)';
        }
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

