This is start up branch only front end design part is done. [copyright]

Resource Link:[https://ui.shadcn.com/docs/components/]


###   Steps:

`1. fix the project structure`

- Make the **store**
- connect store to **main.tsx** file
- copy the **hook.ts** file and add it to the **redux/hook.ts** file. this is Apphooks

`2. Make cart slice and handle product`

- Make **cart/cartSlice**
- export cart reducer / actions
- add the reducer to the store
- next go to the products page and see the devtool is cart is exist in the redux store
- make the reducer(**addToCart**) in cartSlice and export it
- use the function to the **ProductCart.tsx** 

