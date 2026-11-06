(function(){var cs=document.querySelectorAll('.car');for(var c=0;c<cs.length;c++){(function(car){
var t=car.querySelector('.trk'),sl=t.children;if(sl.length<2)return;
var dots=document.createElement('div');dots.className='dots';for(var k=0;k<sl.length;k++){dots.appendChild(document.createElement('i'));}
car.appendChild(dots);var cur=0;
function mark(){var r=t.getBoundingClientRect(),mid=r.left+r.width/2,best=0,bd=1e9;for(var k=0;k<sl.length;k++){var q=sl[k].getBoundingClientRect(),dd=Math.abs(q.left+q.width/2-mid);if(dd<bd){bd=dd;best=k;}}cur=best;for(var k2=0;k2<dots.children.length;k2++)dots.children[k2].className=k2===best?'on':'';}
function go(n){n=Math.max(0,Math.min(sl.length-1,n));var q=sl[n].getBoundingClientRect(),r=t.getBoundingClientRect();t.scrollBy({left:q.left-r.left,behavior:'smooth'});}
var a=document.createElement('button');a.className='nv pv';a.type='button';a.setAttribute('aria-label','הבא');a.textContent='\u203A';a.onclick=function(){go(cur+1)};
var b=document.createElement('button');b.className='nv nx';b.type='button';b.setAttribute('aria-label','הקודם');b.textContent='\u2039';b.onclick=function(){go(cur-1)};
car.appendChild(a);car.appendChild(b);t.addEventListener('scroll',function(){clearTimeout(t._w);t._w=setTimeout(mark,60)});mark();})(cs[c]);}
})();
