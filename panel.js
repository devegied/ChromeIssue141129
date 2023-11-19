window.srbidt = new Set();
function cbClick(event){
  if(event.target.checked)
	window.srbidt.add(event.target.id.substring(2));
  else
    window.srbidt.delete(event.target.id.substring(2));
}
for (const cb of document.querySelectorAll("input[type='checkbox']")){
  cb.addEventListener("click", cbClick);
}
