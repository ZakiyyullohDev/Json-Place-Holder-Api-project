const infosTable = document.getElementById('infosTable')

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const datas = await response.json()
    for (const data of datas) {
        const newIdElement = document.createElement('td')
        newIdElement.classList.add('infos-body')
        newIdElement.textContent = data.id

        const newTitleElement = document.createElement('td')
        newTitleElement.classList.add('infos-body')
        newTitleElement.textContent = data.title

        const newMessageElement = document.createElement('td')
        newMessageElement.classList.add('infos-body')
        newMessageElement.textContent = data.body

        const newInfosTr = document.createElement('tr')
        newInfosTr.classList.add('infos-tr')

        newInfosTr.appendChild(newIdElement)
        newInfosTr.appendChild(newTitleElement)
        newInfosTr.appendChild(newMessageElement)

        infosTable.appendChild(newInfosTr)
    }
}

fetchData()
