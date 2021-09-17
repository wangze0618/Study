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
        // console.log(index);
        const foots = this.document.createElement('li');
        footList.insertBefore(foots, footList.children[0])
    }












})