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

- Dispatch korlei product store e jabe means **devtool** e pabo state ta.

- jekane use korte chabo sekane useSelector diye anbo

`3. Handling business logic inside an action reducer`

- useAppSelector() in the *cart.tsx* file to add the cart
- Handle the product quantity part in the **cartSlice**
--  //todo: push korar age check kore nibo j product ta age theke exist kore ki na


```javascript
  addToCart:(state, action:PayloadAction<IProduct>)=>{
            // state.products.push(action.payload)
            //todo: push korar age check kore nibo j product ta age theke exist kore ki na

            const existing =state.products.find((product)=>product._id ===action.payload._id);
            if(existing){
                // console.log('product is  already exist');
                existing.quantity=existing.quantity! +1

            }else{
                //unique product added then quatity=1
                //  state.products.push(action.payload)
                state.products.push({...action.payload ,quantity:1})
               
            }
        },
```
`4. add and remove cart features`


