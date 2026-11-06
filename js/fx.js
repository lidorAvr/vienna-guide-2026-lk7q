(function(){
/* countdown to the flight (17.12.2026 06:00 Israel time, UTC+2) */
var cd=document.getElementById('cd');
if(cd){var t=Date.UTC(2026,11,17,4,0,0)-Date.now(),d=Math.ceil(t/864e5);
 if(d>1){cd.textContent='עוד '+d+' ימים';cd.hidden=false}
 else if(d===1){cd.textContent='מחר טסים';cd.hidden=false}
 else if(Date.now()<Date.UTC(2026,11,23,18,0,0)){cd.textContent='הטיול התחיל';cd.hidden=false}}
/* snow */
var cv=document.getElementById('snow');
if(cv&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 var x=cv.getContext('2d'),W=0,H=0,F=[],vis=true;
 function size(){var r=cv.getBoundingClientRect();W=cv.width=r.width;H=cv.height=r.height;
  var n=Math.round(W/9);F=[];for(var i=0;i<n;i++)F.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*2+.6,s:Math.random()*.7+.3,d:Math.random()*Math.PI*2})}
 function tick(){if(vis){x.clearRect(0,0,W,H);x.fillStyle='rgba(255,255,255,.85)';
  for(var i=0;i<F.length;i++){var f=F[i];f.y+=f.s;f.d+=.012;f.x+=Math.sin(f.d)*.35;
   if(f.y>H){f.y=-4;f.x=Math.random()*W}
   x.beginPath();x.arc(f.x,f.y,f.r,0,6.283);x.fill()}}
  requestAnimationFrame(tick)}
 size();window.addEventListener('resize',size);
 if('IntersectionObserver' in window)new IntersectionObserver(function(e){vis=e[0].isIntersecting}).observe(cv);
 tick();}
/* active chip */
var links=document.querySelectorAll('nav.chips a'),map={};
for(var i=0;i<links.length;i++){var id=links[i].getAttribute('href').slice(1);map[id]=links[i]}
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){for(var k in map)map[k].classList.remove('on');var a=map[e.target.id];if(a){a.classList.add('on');var n=a.parentNode;n.scrollTo({left:a.offsetLeft-n.clientWidth/2+a.clientWidth/2,behavior:'smooth'})}}})},{rootMargin:'-30% 0px -60% 0px'});
 for(var k in map){var el=document.getElementById(k);if(el)io.observe(el)}}
})();
