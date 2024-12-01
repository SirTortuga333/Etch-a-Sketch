// Function declarations
function createGrid(size){

    const grid = document.querySelector('.grid');

    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            const newDiv = document.createElement('div');

            newDiv.classList.toggle('grid-element');
            newDiv.style.paddingBottom = 'calc(100% / ' + size + ')';
            newDiv.style.flexBasis = 'calc(100% / ' + size + ')';
            newDiv.style.backgroundColor = 'rgb(255,255,255)';
            newDiv.style.opacity = '0';
            
            grid.appendChild(newDiv);

        }
    }
}

function addHoverInteractivity(){
    const gridElements = document.querySelectorAll('.grid-element');
    gridElements.forEach((gridItem) => {
        gridItem.addEventListener('mouseenter', (Event) => {
            Event.target.style.backgroundColor = 'rgb('+ Math.floor(Math.random()*255)+', '+ Math.floor(Math.random()*255)+', '+ Math.floor(Math.random()*255)+')';
            Event.target.style.opacity = parseFloat(getComputedStyle(Event.target).opacity) + 0.1;
        });
    })
}

function deleteGrid(){
    const grid = document.querySelector('.grid');
    const gridElements = document.querySelectorAll('.grid-element');
    
    gridElements.forEach((gridItem) => {
        grid.removeChild(gridItem);
    });

}


// Main
createGrid(16);
addHoverInteractivity();

const btnGrid = document.querySelector('.newGrid')
btnGrid.addEventListener('click', () => {

    let newSize = parseInt(prompt('Enter the size of the grid: (Must be between 1 and 100)')); 

    console.log((typeof(newSize)==='number' &&  newSize>0 && newSize < 101))
    while(!(typeof(newSize)==='number' &&  newSize>0 && newSize < 101)){
        newSize = parseInt(prompt('Enter the size of the grid: (Must be between 1 and 100)'));
    }

    deleteGrid();
    createGrid(newSize);
    addHoverInteractivity();



});