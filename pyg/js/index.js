window.addEventListener('load', function () {
    const lunbo = this.document.querySelector('.lunbo');
    const arrowL = this.document.querySelector('#lists1');
    const arrowR = this.document.querySelector('#lists2');
    const imgLength = lunbo.children.length;
    const footList = this.document.querySelector('.footList')

    lunbo.addEventListener('mouseenter', function () {
        arrowL.style.display = 'block'
        arrowR.style.display = 'block'
    })
    lunbo.addEventListener('mouseleave', function () {
        arrowL.style.display = 'none'
        arrowR.style.display = 'none'
    })


    for (let index = 0; index < imgLength; index++) {
        const foots = this.document.createElement('li');
        footList.appendChild(foots);
        foots.setAttribute('index', index);

        foots.addEventListener('click', function () {
            const indexs = foots.getAttribute('index');

            for (let index = 0; index < footList.children.length; index++) {
                footList.children[index].className = '';
            }
            this.className = 'current'

            let step = lunbo.children[0].offsetWidth * indexs;
            animate(lunbo, -step)
        })
    }
    footList.children[0].className = 'current'

})