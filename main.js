const countiner = document.querySelector('.countiner')
let m = 0
let meals = [
  {
    strMeal: 'Chick-Fil-A Sandwich',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg',
    price: '15$',
    category: 'Fast Food',
    ingredients: 'bread/cheese/chicken',
    idMeal: '53016',
  },
  {
    strMeal: 'Chicken Couscous',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg',
    price: '18$',
    category: 'Healthy Food',
    ingredients: 'chiken/onion/mashroom',
    idMeal: '52850',
  },
  {
    strMeal: 'Pasta',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg',
    price: '19$',
    category: 'Classy Food',
    ingredients: 'pasta/chicken/tomatos/cheese',
    idMeal: '52818',
  },
  {
    strMeal: 'Chicken Ham and Leek Pie',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg',
    price: '20$',
    category: 'Traditional Food',
    ingredients: 'chicken/butter/salt',
    idMeal: '52875',
  },
  {
    strMeal: 'Chicken Quinoa Greek Salad',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg',
    price: '8$',
    category: 'Traditional Food',
    ingredients: 'chicken/salad',
    idMeal: '53011',
  },
  {
    strMeal: "General Tso's Chicken",
    strMealThumb: 'https://www.themealdb.com/images/media/meals/1529444113.jpg',
    price: '13$',
    category: 'Traditional Food',
    ingredients: 'Rice/chiken',
    idMeal: '52951',
  },
  {
    strMeal: 'Honey Balsamic Chicken with Crispy Broccoli & Potatoes',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg',
    price: '22$',
    category: 'Healthy Food',
    ingredients: 'Chiken/Broklie/Botato',
    idMeal: '52993',
  },
  {
    strMeal: 'Katsu Chicken curry',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg',
    price: '12$',
    category: 'Healthy Food',
    ingredients: 'Rice/Chicken/Sous',
    idMeal: '52820',
  },
  {
    strMeal: 'Rappie Pie',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg',
    price: '10$',
    category: 'Traditional Food',
    ingredients: 'Chiken/bread',
    idMeal: '52933',
  },
]
let search = document.createElement('div')
countiner.appendChild(search)
let btnSearch = document.createElement('button')
let add = document.createElement('button')
let inp = document.createElement('input')
inp.setAttribute("placeholder","Search by the meals' name")
search.setAttribute('class', 'search')
search.appendChild(inp)
search.appendChild(btnSearch)
btnSearch.textContent = 'Search'
search.appendChild(add)
add.textContent = 'ADD'
let cards = document.createElement('div')
countiner.appendChild(cards)
cards.setAttribute('class', 'cards')

add.addEventListener('click', () => {
  let form = document.createElement('div')
  let closeForm = document.createElement('button')
  form.appendChild(closeForm)
  closeForm.setAttribute('class', 'closeform')
  closeForm.addEventListener('click', () => {
    form.remove()
  })
  closeForm.textContent = 'X'
  let titleForm = document.createElement('h2')
  titleForm.textContent = 'Form'
  form.appendChild(titleForm)
  countiner.appendChild(form)
  form.setAttribute('class', 'form')
  let formT = document.createElement('form')
  form.appendChild(formT)
  let labelName = document.createElement('label')
  formT.appendChild(labelName)
  labelName.textContent = 'name'
  let inpName = document.createElement('input')
  formT.appendChild(inpName)

  let labelPrice = document.createElement('label')
  formT.appendChild(labelPrice)
  labelPrice.textContent = 'price'
  let inpPrice = document.createElement('input')
  formT.appendChild(inpPrice)

  let labelCategory = document.createElement('label')
  formT.appendChild(labelCategory)
  labelCategory.textContent = 'Category'
  let inpCategory = document.createElement('input')
  formT.appendChild(inpCategory)

  let labelIngredients = document.createElement('label')
  formT.appendChild(labelIngredients)
  labelIngredients.textContent = 'Ingredients'
  let inpIngredients = document.createElement('input')
  formT.appendChild(inpIngredients)

  let labelImg = document.createElement('label')
  formT.appendChild(labelImg)
  labelImg.textContent = 'Img'
  let inpImg = document.createElement('input')
  formT.appendChild(inpImg)

  let buttonForm = document.createElement('button')
  formT.appendChild(buttonForm)
  buttonForm.setAttribute('class', 'submit')
  buttonForm.textContent = 'Submit'

  buttonForm.addEventListener('click', (e) => {
    e.preventDefault()
    if (
      inpName.value == '' ||
      inpImg.value == '' ||
      inpPrice.value == '' ||
      inpCategory.value == '' ||
      inpIngredients.value == ''
    ) {
      return
    }
    let obj = {
      strMeal: inpName.value,
      strMealThumb: inpImg.value,
      price: inpPrice.value,
      category: inpCategory.value,
      ingredients: inpIngredients.value,
    }
    meals.push(obj)

    let card = document.createElement('div')
    cards.appendChild(card)
    let cardImg = document.createElement('img')
    cardImg.setAttribute('src', obj.strMealThumb)
    card.setAttribute('class', 'card')

    card.appendChild(cardImg)

    let cardTitle = document.createElement('h3')
    card.appendChild(cardTitle)
    cardTitle.textContent = 'name : ' + obj.strMeal

    let price = document.createElement('h3')
    card.appendChild(price)
    price.textContent = 'price : ' + obj.price

    let category = document.createElement('h3')
    card.appendChild(category)
    category.textContent = 'category : ' + obj.category

    let ingredients = document.createElement('h3')
    card.appendChild(ingredients)
    ingredients.textContent = 'ingredients :  ' + obj.ingredients

    form.remove()
    console.log(meals)
  })
})

btnSearch.addEventListener('click', () => {
  if (inp.value !== '' && m == 0) {
    let cardsSearch = document.createElement('div')
    countiner.appendChild(cardsSearch)
    cardsSearch.setAttribute('class', 'cardsSearch')
    let close = document.createElement('button')
    cardsSearch.appendChild(close)
    close.textContent = 'X'
    m = 1
    close.addEventListener('click', () => {
      cardsSearch.remove()
      cards.style.display = 'flex'
      m = 0
    })

    meals
      .filter(
        (meal) =>
          meal.strMeal.toLowerCase().includes(inp.value) ||
          meal.strMeal.toUpperCase().includes(inp.value),
      )
      .forEach((meal) => {
        let card = document.createElement('div')
        cardsSearch.appendChild(card)
        card.setAttribute('class', 'card')
        let cardImg = document.createElement('img')
        cardImg.setAttribute('src', meal.strMealThumb)

        card.appendChild(cardImg)

        let cardTitle = document.createElement('h3')
        card.appendChild(cardTitle)
        cardTitle.textContent = 'name :' + meal.strMeal

        let price = document.createElement('h3')
        card.appendChild(price)
        price.textContent = 'price:' + meal.price

        let category = document.createElement('h3')
        card.appendChild(category)
        category.textContent = 'category' + meal.category

        let ingredients = document.createElement('h3')
        card.appendChild(ingredients)
        ingredients.textContent = 'ingredients :' + meal.ingredients
      })
    cards.style.display = 'none'
  }
  inp.value = ''
})

meals.forEach((meal) => {
  let card = document.createElement('div')
  cards.appendChild(card)
  let cardImg = document.createElement('img')
  cardImg.setAttribute('src', meal.strMealThumb)
  card.setAttribute('class', 'card')

  card.appendChild(cardImg)

  let cardTitle = document.createElement('h3')
  card.appendChild(cardTitle)
  cardTitle.textContent = 'name : ' + meal.strMeal

  let price = document.createElement('h3')
  card.appendChild(price)
  price.textContent = 'price : ' + meal.price

  let category = document.createElement('h3')
  card.appendChild(category)
  category.textContent = 'category : ' + meal.category

  let ingredients = document.createElement('h3')
  card.appendChild(ingredients)
  ingredients.textContent = 'ingredients :  ' + meal.ingredients
})
