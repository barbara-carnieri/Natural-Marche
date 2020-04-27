# Natural Marché

React Supermarket E-Commerce Project. A natural supermarket where you can buy natural products and make the payment by the Paypal platform.
HTML, ES6, React, Express, Node.js, HTTP, Paypal REST API.

### `Deploy Link`

Open [https://natural-marche.herokuapp.com/](https://natural-marche.herokuapp.com/) to view it in the browser.

![Natural Marche Demo](https://www.canva.com/design/DAD6Rnm4ZmY/view)
<img src="/naturalmarchedemo.png" width="200" height="200">

## User Stories

-  **404:** As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
-  **See my Splash Page:** As a user I want to see my splash page with the App logo
-  **See my Home Page:** As a user I want to see my home page with the products list
-  **See my Product detail:** As a user I can see the product detail page with the information of the product
-  **Add product to the Cart:** As a user I can add a product to my shop cart
-  **See my shop Cart:** As a user I want to see my shop Cart page
-  **Edit products:** As a user I can edit my shop cart, adding and removing items number
-  **Delete products:** As a user I can delete a product from my Cart page
-  **Paypal Payment:** As a user I can finish my purchase and pay the total shop cart by Paypal platform


## Model
```
storeProducts = {
    id,
    title,
    img,
    price,
    company,
    info,
    inCart,
    count,
    total
  },

  detailProduct = {
    id,
    title,
    img,
    price,
    company,
    info,
    inCart,
    count,
    total
  },
```

## Components
```
- SplashPage

- HomePage

- DetailProduct

- CartPage

- Navbar

- DefaultPage
```


