(function(doc,win){
    var docEI = doc.documentElement,
        resizeEvt = 'orientationchange' in window?'orientataionchange':'resize',
        recalc = function(){
            var clientWidth = docEI.clientWidth;
            if(!clientWidth) return;
            //100是字体大小，1536是开发时浏览器窗口的宽度，等比计算
            docEI.style.fontSize = 16*(clientWidth/1400)+'px';
            //console.log(docEI.style.fontSize);
        }
    if(!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document,window);
