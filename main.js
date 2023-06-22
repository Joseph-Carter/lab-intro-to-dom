const section = document.querySelectorAll("section");

section[0].classList.add("featured")

let article = document.createElement("article")

section[1].append(article)

const allArticles = document.querySelectorAll("article")

let article3 = allArticles[3]

let image = document.createElement("img")

article3.append(image)

image.classList.add("src")

image.src = "./images/paul-gilmore-unsplash.jpg"

image.classList.add("alt")

image.alt = "Image of a mountain in front of a lake."

let h3 = document.createElement("h3")

article3.append(h3)

h3.textContent = "Stop Planning"

let p = document.createElement("p")

article3.append(p)

p.textContent = `You -- yes you! You're an over-planner, I can tell. It's time to stop
planning so much and instead focusing on relaxing. Taking a break at all is
so stressful these days; why add to the stress by overworking yourself?`

let aside = document.createElement("aside")

let p2 = document.createElement("p")

article3.append(aside)

aside.appendChild(p2)

let span = document.createElement("span")

p2.appendChild(span)
span.textContent = `4 Minutes`

let strong = document.createElement("strong")

span.prepend(strong)

strong.textContent = `Read Time:`

let a = document.createElement("a")

p2.appendChild(a)

a.setAttribute('href', '#')

a.textContent = "Read more..."

let firstArticle = allArticles[1]
let secondArticle = allArticles[2]

firstArticle.setAttribute('id', 'first')
secondArticle.setAttribute('id', 'second')

let first = document.querySelector('#first')
let second = document.querySelector('#second')

first.before(second)

let link = document.querySelector('a')

link.remove()

let removeSpan = document.querySelector('span')

removeSpan.remove()

let stopPlanning = allArticles[3]

stopPlanning.remove()

let allH3 = document.querySelectorAll("h3")

allH3.forEach((titles) => titles.remove())