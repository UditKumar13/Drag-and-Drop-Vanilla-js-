console.log("drag and drop ");

const fill = document.querySelector('.fill');

const empties = document.querySelectorAll('.empty');
// it will have multiple node list as we have 5 empty classes

// fill listener 
fill.addEventListener('dragstart',dragStart);
fill.addEventListener('dragend' ,dragEnd);

// Loop through empties and call drag events
for (const empty of empties){
    empty.addEventListener('dragover' ,dragOver );
    empty.addEventListener('dragenter',dragEnter);
    empty.addEventListener('dragleave',dragLeave);
    empty.addEventListener('drop', dragDrop);

}

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

//  over will work when we  are on the empty class elements
function dragOver(e){
    //we have to prevent the defaullt behavior or drop will not work 
    e.preventDefault();
console.log('over');

}
// enter will work when we enter in a different empty class ele
function dragEnter(e){
   e.preventDefault();
   this.className += ' hovered';

}
//leave will work when we have left the current empty class
function dragLeave(){
   console.log('leave');
   this.className = 'empty';  // just empty 
}
// drop will keep on registering till we have dropped that fill class ele
function dragDrop(){
   console.log('drop');
   this.className = 'empty';
   // append will introduce the fill class in this current empty class 
   // where u wanna drop , so image will show in that box at the end
   this.append(fill);
} 
