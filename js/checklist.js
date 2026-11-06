(function(){
  var boxes=document.querySelectorAll('.check input');
  for(var i=0;i<boxes.length;i++){(function(b){
    try{b.checked=localStorage.getItem('vienna-'+b.id)==='1';}catch(e){}
    b.addEventListener('change',function(){try{localStorage.setItem('vienna-'+b.id,b.checked?'1':'0');}catch(e){}});
  })(boxes[i]);}
})();
