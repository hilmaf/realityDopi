function moveleft() {
    document.querySelector('#firstslide').addEventListener('click', function(){
        document.querySelector('.container').style.transform = 'translate(0px)';
    })
}

function moveright() {
    document.querySelector('#secondslide').addEventListener('click', function(){
        document.querySelector('.container').style.transform = 'translate(-1170px)';
    })
}