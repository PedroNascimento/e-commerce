const wrapper = document.querySelector('.sliderWrapper')
const menuItems = document.querySelectorAll('.menuItem')

const products = [
  {
    id: 1,
    title: 'Whey Protein',
    //desc: 'Top Whey 3W Mais Performance Refil (1800g) Max Titanium contém três tipos de proteínas do soro do leite: concetrada (WPC), isolada (WPI) e hidrolisada (WPH), matéiras-primas com alta concetração de aminoácidos, principalmente BCAA. Essas características dessa fórmula exclusiva da Max Titanium, torma um produto extraordinário que auxilia na formação dos músculos e na recuperação muscular pós-treino. A linha Mais Performance fornce de 31g a 32g de proteínas por porção, contendo altas quantidades de aminoácidos essenciais (BCAA) e também é fortificada com 11 vitaminas e 6 minerais. Além disso, o Top Whey 3W é o suplemento proteíco mais premiado do Brasil.',
    price: 219,
    sabores: [
      {
        code: 'chocolate',
        img: './/src/assets/img/tw3w.png'
      },
      {
        code: 'strawberry',
        img: './src/assets/img/tw3w-morango.png'
      }
    ]
  },
  {
    id: 2,
    title: 'Pré-Treino',
    price: '109,90',
    desc: 'HÓRUS é um produto para ser consumido no pré treino. Para quem se exercita com intensidade, a fadiga é um dos principais fatores que influenciam o rendimento, por isso desenvolvemos o HÓRUS: com formulação altamente tecnológica e ingredientes de altíssima qualidade, para você ter um treino com muito mais eficiência.',
    sabores: [
      {
        code: 'lemon',
        img: './src/assets/img/pw-limao.png'
      },
      {
        code: 'ice',
        img: './src/assets/img/pw-ice.png'
      }
    ]
  },
  {
    id: 3,
    title: 'Creatina',
    desc: 'A Creatina é formada a partir da associação de três aminoácidos de alto valor biológico: arginina, glicina e metionina e está presente naturalmente em nosso organismo, onde cerca de 95% do conteúdo de creatina é armazenada no músculo esquelético.',
    price: '94,90',
    sabores: [
      {
        code: 'creatine',
        img: './src/assets/img/creatina.png'
      },
      {
        code: 'creatine-2',
        img: './src/assets/img/creatine-2.png'
      }
    ]
  }
]

let choosenProduct = products[0]

const currentProductImg = document.querySelector('.productImg')
const currentProductTitle = document.querySelector('.productTitle')
const currentProductPrice = document.querySelector('.productPrice')
const currentProductDesc = document.querySelector('.productDesc')
const currentProductFlavor = document.querySelectorAll('.sabor')

menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    //altera o slide atual
    wrapper.style.transform = `translateX(${-100 * index}vw)`

    //altera o produto escolhido
    choosenProduct = products[index]

    //altera os textos dos produtos atuais
    currentProductTitle.textContent = choosenProduct.title
    currentProductPrice.textContent = 'R$ ' + choosenProduct.price
    currentProductDesc.textContent = choosenProduct.desc
    currentProductImg.src = choosenProduct.colors[0].img

    //altera o sabor do produto
    currentProductFlavor.forEach((sabor, index) => {
      sabor.style.backgroundColor = choosenProduct.sabores[index].code
    })
  })
})

currentProductFlavor.forEach((sabor, index) => {
  sabor.addEventListener('click', () => {
    currentProductImg.src = choosenProduct.sabores[index].img
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
