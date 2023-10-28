var doubtElements = document.querySelectorAll('.doubt')

doubtElements.forEach(function (doubt) {
    doubt.addEventListener('click', function () {
        doubt.classList.toggle('active')
    })
})
