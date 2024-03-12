let splitCharArr = document.querySelectorAll('.split-text');

function splitString(str){
  let splittedTextHtml='',generatedHTML='';
  let string = str.textContent;
  let i;
  for(i=0;i<string.length;i++){
    splittedTextHtml += `<span char="${string[i]}" style="--delay:${i*100}ms;--duration:${string.length*100}ms">${string[i]}</span>`;
  }
  
  generatedHTML = `<div>${splittedTextHtml}</div>`
  str.innerHTML = generatedHTML;
}

splitCharArr.forEach((str)=>{
  splitString(str);
})

function disintegrate(event){
  //console.log(this.event.target.children.length);
  let i=0;
  for(i=0;i<this.event.target.children.length;i++){
    this.event.target.children[i].classList.add('disintegrate');
  }
}
