document.write(`<table border=1>`)
let totalPrice = 0
let index = 0
let product1 = "Вареники"
let productCount1 = 2
let productPrice1 = 130
let productGeneral1 = productCount1 * productPrice1
totalPrice = productGeneral1 + totalPrice


document.write(`<tr>
              <th>№</th>
              <th>Товар</th>
              <th>Кол-во</th>
              <th>Стоимость за еденицу</th>
              <th>Общую стоимость товара</th>
              </tr>`)

index = index + 1

document.write(`<tr>
              <th>${index}</th>
              <th>${product1}</th>
              <th>${productCount1}</th>
              <th>${productPrice1}</th>
              <th>${productGeneral1}</th>
              </tr>`)

let product2 = "Яблоки"
let productCount2 = 3
let productPrice2 = 60
let productGeneral2 = productPrice2 * productCount2
totalPrice = totalPrice + productGeneral2
index = index + 1

document.write(`
              <th>${index}</th>
              <th>${product2}</th>
              <th>${productCount2}</th>
              <th>${productPrice2}</th>
              <th>${productGeneral2}</th>
              `)
let product3 = "Молоко"
let productCount3 = 1
let productPrice3 = 90
let productGeneral3 = productPrice3 * productCount3
totalPrice = totalPrice + productGeneral3
index = index + 1

document.write(`<tr>
              <th>${index}</th>
              <th>${product3}</th>
              <th>${productCount3}</th>
              <th>${productPrice3}</th>
              <th>${productGeneral3}</th>
              </tr>`)

document.write(`<tr>
              <th colspan="4">Стоимость всех товаров</th>
              <th>${totalPrice}</th>
              </tr>`)
