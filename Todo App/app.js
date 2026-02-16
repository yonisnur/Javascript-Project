const inputField = document.querySelector('.input-text')
const form = document.querySelector('.input-submit')
const searchInput = document.querySelector('.search')
const task = document.querySelector('.task')
const clearButton = document.querySelector('.clear')
let msg = document.querySelector('.msg')


// all event listener
form.addEventListener('click', addTask)
task.addEventListener('click',removeItems)
clearButton.addEventListener('click',clearButtons)
searchInput.addEventListener('keyup',search)



function addTask(e){
    if(inputField.value === ''){
        alert('Empty task')
    }

    else {
        // create list element
        const li = document.createElement('li')
        li.classList = 'text'
        li.appendChild(document.createTextNode(inputField.value))

        // create div element
        const div = document.createElement('div')
        div.classList = 'icon'

        // create icons 

        const remove = document.createElement('a')
        remove.classList = 'remove'
        remove.innerHTML = '❌'

        const done = document.createElement('a')
        done.classList = 'done'
        done.innerHTML = '✔'

        // icon in to div element
        div.appendChild(remove)
        div.appendChild(done)
        // div in to li element
        li.appendChild(div)

        // li in to ul element
        task.appendChild(li)
        inputField.value = ''
        msg.style.display = 'none'


    }
    e.preventDefault()

}
function removeItems(e){
    if(e.target.classList.contains('remove')){
        e.target.parentElement.parentElement.remove() 
    }
    
    else if(e.target.classList.contains('done')){
        e.target.parentElement.parentElement.style.background = 'green'
         e.target.parentElement.parentElement.style.color = '#fff'
    }
}

function clearButtons(){
    if(confirm('Are you sure!')){
        while(task.firstChild){
            task.removeChild(task.firstChild)
            msg.style.display = 'block'
        }
    }
    
    
}

function search(e){
    const textInput = e.target.value.toLowerCase()

    document.querySelectorAll('.text').forEach(
        function(items){
            const item = items.firstChild.textContent
            if(item.toLowerCase().indexOf(textInput) != -1) {
                items.style.display = 'block'
            }
            else {
                items.style.display = 'none'
            }
        }
    )
}
