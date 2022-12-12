# Reels
[Click here to view!](https://reels.onrender.com/)

## Background
Reels is a full-stack, multi-page application clone of an award winning ecommerce site, called Rollies, where users can do online shopping and leave a review of products they bought. This project utilized Rails and postgreSQL for the backend, React/Redux and CSS3 for the frontend.
Reels is heavily focused on front-end animation and UI/UX design to mimic the original site which won a Site of The Day awards by awwwards.com.  

## Features
### User Authentication - Login/Signup
Reels user auth features allow user create an account or login, either with their own account or as a demo user. A login modal will popup when they are attempting to purchase an item, check their cart, or create a review without logged in. This authentication modal gives an easy access to try the site features without the need to leave their current page.

![image login](https://user-images.githubusercontent.com/110148438/207139652-0fe302aa-66c8-44b4-a444-e871c9d9292a.png)

### Product Pages
Each product page shows product details where users can purchase the product. Users will be able to select the size options before they add item to the cart, check the size measurement using the Size Chart modal, and check the Material and Shipping details through the accordion section of the page

![image product page](https://i.ibb.co/b1DjR9v/screencapture-reels-onrender-products-2-2022-12-12-12-39-30.png)

### Reviews
Review section located underneath product details of Product Pages. It shows the average rating of the reviews and star ratings. If user is logged in, they can create, update, or delete their reviews. Each user is only allowed to leave one review per product. If the review exists, user will only be able to update or delete their review.

!![gif review](https://i.ibb.co/NsxnTL5/reviews.gif)

The code snippet below handles the logic whether the review is created or updated. If a user doesn't leave any review, a button of "Write Review" will appear and shows a "Create Review" modal. In the other hand, if a review exists, a button of "Update Review" and "Delete Review" will be shown. Whenever user clicks the Update Review, an "Update Review" modal will popup with prepopulated form.

![image code snippet](https://user-images.githubusercontent.com/110148438/207154884-38649284-e263-4d50-9f24-b08cb88f4c29.png)

### Cart
When the user add an item to the cart on product page, a shopping cart modal will appear to signify successful completion. The cart item quantity can be updated using the +/- button. Each cart item can also be deleted by clicking the remove button or reduce the quantity to 0. The price of each item and subtotal are dynamically updated according to each user's cart. Additionally, whenever the user click the checkout button, user's cart will be cleared, a Thank You modal will appear and redirect the user to the Home Page.

![gif add to cart](https://i.ibb.co/s1s89nD/product-atc.gif)

### Search Bar
User can perform a search product function through the search bar that is located on the navbar. If the search yield results, list of products with matching query will show up and user can click through each product to their corresponding pages.

![image search bar](https://i.ibb.co/gVbCbPT/search.png)
