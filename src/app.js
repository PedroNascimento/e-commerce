const wrapper = document.querySelector('.sliderWrapper')
const menuItems = document.querySelectorAll('.menuItem')

const products = [
  {
    id: 1,
    title: 'Air Force',
    price: 219,
    colors: [
      {
        code: 'black',
        img: './/src/assets/img/air.png'
      },
      {
        code: 'darkblue',
        img: './src/assets/img/air2.png'
      }
    ]
  },
  {
    id: 2,
    title: 'Air Jordan',
    price: 249,
    colors: [
      {
        code: 'lightgray',
        img: './src/assets/img/jordan.png'
      },
      {
        code: 'green',
        img: './src/assets/img/jordan2.png'
      }
    ]
  },
  {
    id: 3,
    title: 'Blazer',
    price: 209,
    colors: [
      {
        code: 'lightgray',
        img: './src/assets/img/blazer.png'
      },
      {
        code: 'green',
        img: './src/assets/img/blazer2.png'
      }
    ]
  },
  {
    id: 4,
    title: 'Crater',
    price: 229,
    colors: [
      {
        code: 'black',
        img: './src/assets/img/crater.png'
      },
      {
        code: 'lightgray',
        img: './src/assets/img/crater2.png'
      }
    ]
  },
  {
    id: 5,
    title: 'Hippie',
    price: 199,
    colors: [
      {
        code: 'gray',
        img: './src/assets/img/hippie.png'
      },
      {
        code: 'black',
        img: './src/assets/img/hippie2.png'
      }
    ]
  }
]

let choosenProduct = products[0]

const currentProductImg = document.querySelector('.productImg')
const currentProductTitle = document.querySelector('.productTitle')
const currentProductPrice = document.querySelector('.productPrice')
const currentProductColors = document.querySelectorAll('.color')
const currentProductSizes = document.querySelectorAll('.size')

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    //altera o slide atual
    wrapper.style.transform = `translateX(${-100 * index}vw)`

    //altera o produto escolhido
    choosenProduct = products[index]

    //altera os textos dos produtos atuais
    currentProductTitle.textContent = choosenProduct.title
    currentProductPrice.textContent = '$' + choosenProduct.price
    currentProductImg.src = choosenProduct.colors[0].img

    //altera a cor do produto
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code
    })
  })
})

currentProductColors.forEach((color, index) => {
  color.addEventListener('click', () => {
    currentProductImg.src = choosenProduct.colors[index].img
  })
})

currentProductSizes.forEach((size, index) => {
  size.addEventListener('click', () => {
    currentProductSizes.forEach(size => {
      size.style.backgroundColor = 'white'
      size.style.color = 'black'
    })
    size.style.backgroundColor = 'black'
    size.style.color = 'white'
  })
})

const productButton = document.querySelector('.productButton')
const payment = document.querySelector('.payment')
const close = document.querySelector('.close')

productButton.addEventListener('click', () => {
  payment.style.display = 'flex'
})

close.addEventListener('click', () => {
  payment.style.display = 'none'
})
