(function(){
var el=document.getElementById('vmap');if(!el||!window.L||!window.PLACES)return;
var CAT={h:['מלון','#c8102e'],m:['שוק','#2e7d32'],s:['אתר','#1e5aa8'],c:['קפה','#8d5a2b'],f:['אוכל','#d17b00'],b:['בר','#7b3fa0'],n:['לילה','#222'],sh:['קניות','#d81b7a']};
var raw=window.PLACES,P=raw.filter(function(p){return p.lat>48.1&&p.lat<48.3&&p.lng>16.25&&p.lng<16.5;});
var nm=el.querySelector('.nomap');if(nm)nm.remove();
var map=L.map(el,{scrollWheelZoom:false}).setView([48.2085,16.3669],13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'© OpenStreetMap'}).addTo(map);
var layers={},fil=document.getElementById('mapfil'),on={};
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
P.forEach(function(p){
 var cc=CAT[p.c]||CAT.s,
 ic=L.divIcon({className:'mk',html:'<i style="background:'+cc[1]+'"></i>',iconSize:[18,18],iconAnchor:[9,9]}),
 href=p.u||('https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(p.n+' Vienna')),
 h='<b>'+esc(p.n)+'</b><br>'+(p.r?'<span class="stars" style="--r:'+p.r+'"></span> '+p.r+(p.v?' ('+p.v.toLocaleString('en')+')':''):'אין דירוג')+(p.a?'<br><small>מיקום משוער</small>':'')+'<br><a href="'+esc(href)+'" target="_blank" rel="noopener">פתח ב־Google Maps וקרא ביקורות</a>';
 var m=L.marker([p.lat,p.lng],{icon:ic,title:p.n}).bindPopup(h);
 (layers[p.c]=layers[p.c]||L.layerGroup()).addLayer(m);
});
Object.keys(layers).forEach(function(c){
 on[c]=true;layers[c].addTo(map);
 var b=document.createElement('button');b.type='button';b.className='on';b.setAttribute('aria-pressed','true');
 b.innerHTML='<i style="background:'+(CAT[c]||CAT.s)[1]+'"></i>'+(CAT[c]||CAT.s)[0];
 b.onclick=function(){on[c]=!on[c];b.classList.toggle('on',on[c]);b.setAttribute('aria-pressed',on[c]);on[c]?layers[c].addTo(map):map.removeLayer(layers[c]);};
 fil.appendChild(b);
});
})();
