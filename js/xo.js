document.addEventListener('DOMContentLoaded', (event) => {

    let gameFields = document.querySelectorAll('table td button')
    let didPlayerClicked = false; 
    for(let i=0; i<gameFields.length; i++) {
        
        //change a background of field after click 
        gameFields[i].addEventListener('click', () => {

            if (didPlayerClicked === false) {
                gameFields[i].style.backgroundImage = 'url(img/x.png)';
                console.log('zmieniono na krzyżyk');
                didPlayerClicked = true;
            }
            else if (didPlayerClicked === true) {
                gameFields[i].style.backgroundImage = 'url(img/o.png)';
                console.log('zmieniono na kółko');
                didPlayerClicked = false;
            }
            
        })
        
    }









});