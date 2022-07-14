const playDom = document.getElementById('play');
playDom.addEventListener('click', inizioGioco );
cellTotal = 100;
let bombsNumber = 16;
let numbers =[];

for (let i = 1; i < bombsNumber; i++) {
    let newRandomNumber = generateRandomNumber(1, cellTotal);
    console.log(i, newRandomNumber);

    while (numbers.includes(newRandomNumber)) {
        newRandomNumber = generateRandomNumber(1, cellTotal);
        console.log(i, newRandomNumber);
    }

    numbers.push(newRandomNumber);



}





function inizioGioco() {
    const difficult=parseInt(document.getElementById('difficult').value);

    let cellTotal;
    let cellPerSide;

    

    switch (difficult) {
        case 1:
            default:
                cellTotal = 100;
                cellPerSide = 10;
                break;
        case 2:
            cellTotal = 81;
            cellPerSide = 9;
            break;
        case 3:
            cellTotal = 49;
            cellPerSide = 7;
            break;
}

generatePlayground();

    function generatePlayground() {
        const gridDom = document.getElementById('grid');

        gridDom.innerHTML = ''; // svuota il playground

        for (let i = 1; i <= cellTotal; i++) {  //parto da 1

            const currentElement = createGridSquare(i, cellPerSide);





            currentElement.addEventListener('click',
                function () {
                    console.log(this.innerText);
                    this.classList.toggle('clicked');
                }
            );
                if (numbers.includes(i)) {
                    console.log('Cella con bomba' +i);
                    currentElement.classList.add('bomb');
                    gridDom.appendChild(currentElement);
                }
                else{
                    console.log('cella' + i);
                    currentElement.classList.add('safe');
                gridDom.appendChild(currentElement);
                }

                
        }


        /*document.getElementByClassName('bomb').addEventListener('click', function () {
            alert('Game Over');
           
        }
        ); */
    }

    function createGridSquare(numero, cellPerSide) {
        
        const currentElement = document.createElement('div');
        currentElement.classList.add('square');
        currentElement.append(numero);
        currentElement.style.width = `${100 / cellPerSide}%`;
        currentElement.style.height = `${100 / cellPerSide}%`;
        
        return currentElement;
    }
}

function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}
