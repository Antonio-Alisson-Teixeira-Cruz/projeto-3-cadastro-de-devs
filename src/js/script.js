const form = document.getElementById('devForm')
form.addEventListener('submit', function(noDefault) {
    noDefault.preventDefault()
})

const techList = document.getElementById('technologyList')
const btnNewTechnology = document.getElementById('newTechnology')

function newRow() {
    const div = document.createElement('div')
    div.innerHTML = '<label for="technology">Nova Tecnologia</label><br> <input type="text" name="technology"><br> <p>Nova tecnologia</p> <input type="radio" id="zeroTwo" name="experience" value="0-2 anos"> <label for="zeroTwo">0-2 anos</label> <input type="radio" id="threeFour" name="experience" value="3-4 anos"> <label for="threeFour">3-4 anos</label> <input type="radio" id="fiveMore" name="experience" value="5+ anos"> <label for="fiveMore">5+anos</label><br>     <button class="removeTechnology" type="button">Remover tecnologia</button>'

    techList.appendChild(div)

    const removeButton = div.querySelector('.removeTechnology')
    removeButton.addEventListener('click', function() {
        techList.removeChild(div)
    })
}

btnNewTechnology.addEventListener('click', newRow)
