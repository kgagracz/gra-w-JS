document.addEventListener('DOMContentLoaded', (event) => {

    const gameFields = document.querySelectorAll('table td button')
    let didPlayerClicked = false; 
    const xClass = 'X';
    const circleClass = 'O';
    const winningCombinations = [
        [0, 1 , 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8]
    ];
    const winningP = document.getElementById('winning-message');
    const winningMessage = ' zwycięża!' 

    for(let i=0; i<gameFields.length; i++) {
        
        gameFields[i].addEventListener('click',  () => {

            const currentClass = didPlayerClicked ? circleClass : xClass;

            gameFields[i].classList.add(currentClass);

            if (didPlayerClicked === false) {
                gameFields[i].style.backgroundImage = 'url(img/x.png)';
                didPlayerClicked = true;
            }
            else if (didPlayerClicked === true) {
                gameFields[i].style.backgroundImage = 'url(img/o.png)';
                didPlayerClicked = false;
            }
            
            if (checkWin(currentClass)) {
                winningP.innerText = currentClass + winningMessage;
                winningP.style.backgroundColor = 'lightgreen';
                document.getElementById('feta').play();
            }
        }, {once: true})

        
    }
    
    checkWin = (currentClass) => {
        return winningCombinations.some(combination => {
            return combination.every(index => {
                return gameFields[index].classList.contains(currentClass)
            })
        })
    }
});