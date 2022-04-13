const add = (text, div, className) => {
    const p = document.createElement('p')
    p.innerHTML = text
    p.className = className
    const img = document.createElement('span')
    img.innerHTML = `<img src='images/${text}.png' width="100%"></img>`
    img.className = div + "img"
    const container = document.createElement('div')
    container.className = "container"
    container.appendChild(p)
    container.appendChild(img)
    document.getElementById(div).appendChild(container)
}

jsProjects.forEach(name => add(name, 'projectContentJS', 'jsContent'))