const button = document.getElementById('submit')
const input = document.querySelector('input')
const list = document.querySelector('ul')

button.addEventListener('click', () => {
    const listItem = document.createElement('li')
    listItem.innerText = input.value
    list.appendChild(listItem)
    input.value = ''

    listItem.addEventListener('click', function () {
        listItem.style.textDecoration = 'line-through'
    })

    const deleteBtn = document.createElement('btn')
    deleteBtn.innerText = " Remove"
    deleteBtn.classList.add('deleteBtn')
    listItem.appendChild(deleteBtn)

    deleteBtn.addEventListener('click', () => {
        list.removeChild(listItem)
    })
})

