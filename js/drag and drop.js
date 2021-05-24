console.log("drag and drop ");

const fill = document.querySelector('.fill');

const empties = document.querySelectorAll('.empty');
// it will have multiple node list as we have 5 empty classes

// fill listener 
fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend' ,dragEnd);

// Drag functions

function dragStart(){
console.log('dragstart');
this.className += ' hold'; // when u append , there is a space see hold 
// we want when we drag , our fill class which is our image should get invisible;
setTimeout(()=>( this.className = 'invisible'), 0);

}

function dragEnd(){
console.log('dragEnd');
this.className = 'fill';
}