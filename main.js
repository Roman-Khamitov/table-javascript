
let product1 = "iPhone 14" 
let productDesc1 = "Базовая модель флагманской линейки смартфонов Apple 2023-го года." 
let productPrice1 = 9000 


document.write(`<div class="body__main">`)

document.write(`<h1 class="title">Корзина</h1>`)

document.write(`<div class=container1>`)

document.write(`<h1 class="title__product1">${product1}</h1>`)

document.write(`<p class="advantages1">${productDesc1}</p>`)

document.write(`<p class="price1">${productPrice1}руб</p>`)

document.write(`</div>`)


let product2 = "Чехол для iPhone 14" 
let productDesc2 = "Защитный чехол для iPhone 14 - выполнен из качественного пластика." 
let productPrice2 = 700 

document.write(`<div class=container2>`)

document.write(`<h1 class="title__product2">${product2}</h1>`)

document.write(`<p class="advantages2">${productDesc2}</p>`)

document.write(`<p class="price2">${productPrice2}руб</p>`)

document.write(`</div>`)

let product3 = "Защитное стекло" 
let productDesc3 = "Прочное стекло защищает экран смартфона от царапин и повреждений." 
let productPrice3 = 1200 

document.write(`<div class=container3>`)

document.write(`<h1 class="title__product3">${product3}</h1>`)

document.write(`<p class="advantages3">${productDesc3}</p>`)

document.write(`<p class="price3">${productPrice3}руб</p>`)

document.write(`</div>`)

let deliveryPrice = 400 
let deliveryPriceTotal = productPrice1 + productPrice2 + productPrice3

document.write(`<div class="footer">`)

document.write(`<h3 class="delivery__price">Стоимость доставки: ${deliveryPrice} руб.</h3>`)

document.write(`<h2 class="delivery-total__price">Стоимость доставки: ${deliveryPriceTotal} руб.</h2>`)

