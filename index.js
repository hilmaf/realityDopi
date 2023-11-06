function moveleft() {    
    document.querySelector('#firstslide').addEventListener('click', function(){
        const secondslide = document.querySelector('#secondslide');
        secondslide.style.backgroundColor = 'white';
        secondslide.style.color = 'black';

        const firstslide = document.querySelector('#firstslide');
        firstslide.style.backgroundColor = 'black';
        firstslide.style.color = 'white';
        document.querySelector('.container').style.transform = 'translate(0px)';
    })
}

function moveright() {
    document.querySelector('#secondslide').addEventListener('click', function(){
        const firstslide = document.querySelector('#firstslide');
        firstslide.style.backgroundColor = 'white';
        firstslide.style.color = 'black';

        const secondslide = document.querySelector('#secondslide');
        secondslide.style.backgroundColor = 'black';
        secondslide.style.color = 'white';
        document.querySelector('.container').style.transform = 'translate(-1170px)';
    })
}

