const form = document.getElementById('devForm')
form.addEventListener('submit', function(noDefault) {
    noDefault.preventDefault()
})

const techList = document.getElementById('technologyList')
const btnNewTechnology = document.getElementById('newTechnology')

function newRow() {
    const div = document.createElement('div')
    div.innerHTML = `<label for="technology">Nova Tecnologia</label><br>
    <input type="text" name="technology"><br><br>
    
    <label for="experience">Tempo de experiência</label><br>
    <label>0-2 anos</label>
    <input type="radio" name="experienceTime" value="0-2 anos">
    <label>3-4 anos</label>
    <input type="radio" name="experienceTime" value="3-4 anos">
    <label>5+ anos</label>
    <input type="radio" name="experienceTime" value="5+ anos"><br><br>

    <button class="removeTechnology" type="button">Remover tecnologia</button>`

    techList.appendChild(div)

    const removeButton = div.querySelector('.removeTechnology')
    removeButton.addEventListener('click', function() {
        techList.removeChild(div)
    })
}

btnNewTechnology.addEventListener('click', newRow)
