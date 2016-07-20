var cart;

function setCart(newCart) {
  cart = newCart;
}

function getCart() {
  return cart
}

function addToCart(item) {
  var price = Math.floor(100*Math.random())
  cart.push({[item]: price})
  console.log(`${item} has been added to your cart.`)
  return cart
}

function viewCart() {
  var string
  var item
  var price
    if (cart.length > 0) {
      string = "In your cart, you have "
      for (let i = 0; i < cart.length; i++) {
        item = Object.keys(cart[i])
        price = cart[i][item]
        string += `${item} at $${price}, `
      }
      string = string.slice(0, string.length - 2)
      string += "."
    } else {
      string = "Your shopping cart is empty."
    }
  console.log(string)
  return string
}

function removeFromCart(item) {
  var deleted_item
  for (let x = 0; x < cart.length; x++) {
    if (Object.keys(cart[x])[0] === item) {
      delete cart[x]
      deleted_item = true
    }
  }
  if (deleted_item !== true) {
    console.log("That item is not in your cart.")
  }
  // for (let x = 0; x < cart.length; x++) {
  //   if (cart[x] === undefined) {
  //     cart.splice(x, 1)
  //   }
  // }
}

function total() {
  let t = 0

  for (var i = 0, l = cart.length; i < l; i++) {
    for (var item in cart[i]) {
      t += cart[i][item]
    }
  }

  return t
}

function placeOrder(argument) {
  if (argument === undefined) {
    console.log("We don't have a credit card on file for you to place your order.")
  } else {
    console.log(`Your total cost is $${total()}, which will be charged to the card ${argument}.`)
    cart = []
  }
}
