const header = document.createElement('div')
const img = document.createElement('div')
const yazi = document.createElement('div')

setTimeout(() => {
    header.style.width = '100%'
    header.style.height = '80px'
    header.style.backgroundColor = 'black'
    header.style.color = 'white'
    header.style.display = 'flex'
    header.style.justifyContent = 'center'
    header.style.alignItems = 'center'
    header.innerHTML = '<h1>Mitri</h1>'
}, 1000)
setTimeout(() => {
    img.style.width = '200px'
    img.style.height = '200px'
    img.style.backgroundImage = 'url(img1.jpeg)'
    img.style.backgroundSize = 'cover'
    img.style.backgroundPosition = 'center'
    img.style.margin = 'auto'
    img.style.marginTop = '20px'
}, 1000)
setTimeout(() => {
    yazi.innerHTML = 'Kylian Mbappé Lottin 20 dekabr 1998- ci ildə anadan olub , Parisin 19-cu rayonu , Paris , Fransa ) Paris Saint-Germain - in hücumçusu və Fransa millisinin kapitanı . Dünyanın ən yaxşı oyunçularından biri kimi tanınıb . Dünya çempionu və 2018 Dünya Kubokunun ən yaxşı gənc oyunçusu [10] . 2022-ci il dünya çempionatında ən çox qol vuran futbolçu oldu (8 qol).'
}, 1000)
setTimeout(() => {
    yazi.innerHTML = ''
}, 6000)
setTimeout(() => {
    yazi.innerHTML = 'Cristiano Ronaldo dos Santos Aveiro  — portuqaliyalı peşəkar futbolçu. Əl-Nəsr və Portuqaliya milli komandasında hücumçu və kapitan kimi çıxış edir. Ronaldo indiyə qədərki ən yaxşı oyunçulardan biri hesab olunur. Beş dəfə "Qızıl Top" mükafatı qazanıb.'
}, 11000)
setTimeout(() => {
    yazi.innerHTML = ''
}, 16000)
setTimeout(() => {
    yazi.style.width = '300px'
    yazi.style.height = '150px'
    yazi.style.margin = 'auto'
    yazi.style.marginTop = '20px'
}, 1000)
setTimeout(() => {
    header.innerHTML = '<h1>Nurlan</h1>'
}, 6000)
setTimeout(() => {
    img.style.backgroundImage = 'url(img2.jpeg)'
}, 6000)
setTimeout(() => {
    header.innerHTML = '<h1>Hemid</h1>'
}, 11000)
setTimeout(() => {
    img.style.backgroundImage = 'url(img3.jpeg)'
}, 11000)
setTimeout(() => {
    header.innerHTML = '<h1>Ramo</h1>'
}, 16000)
setTimeout(() => {
    img.style.backgroundImage = 'url(img4.jpeg)'
}, 16000)
setTimeout(() => {
    header.innerHTML = '<h1>Leyla</h1>'
}, 21000)
setTimeout(() => {
    img.style.backgroundImage = 'url(img5.jpeg)'
}, 21000)
setTimeout(() => {
    header.innerHTML = '<h1>Davud</h1>'
}, 26000)
setTimeout(() => {
    img.style.backgroundImage = 'url(img6.jpeg)'
}, 26000)

document.body.prepend(header)
document.body.append(img)
img.after(yazi)