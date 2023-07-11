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

- jekane use korte chabo sekane useSelector diye store the data ante dekhabo UI te

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

- cart.tsx file e jabo 

- plus button er onclick e dispatch er vitore function call kore er vitore product take rap kore dibo

- remove korte chaile filter use kore same vabe button e korbo.

```ts
        removeCart:(state,action:PayloadAction<IProduct>)=>{
            state.products=state.products.filter(p=>p._id !==action.payload._id)
        }
```

```ts
                <Button onClick={()=>dispatch(removeCart(product))}>
                  <HiMinus size="20" />
                </Button>
```


`5. Total Count and Checkout`

`6. Product filters with vanila redux`

- make a **productSlice**.ts inside features/products
- 
- `8.  create api slice and add to the store`

**apiSlice.ts**

```powershell
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'apidada',
  baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:5000' }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/product',
    }),
  }),
});

export const { useGetProductsQuery } = api;
```
**store.ts**

```typescript
import { api } from './api/apiSlice';

const store = configureStore({
    reducer: {
        cart:cartReducer,
        product:producReducer,
        [api.reducerPath]:api.reducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(api.middleware)
});

// fix the type error 
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
```

 `9.  create api slice and add to the store`


 `10.  create api slice and add to the store`

 `11.  create api slice post comment mutation`

 - make the usePostCommentMutation hook

 `12.  handle  post comment using mutation hook`
 
- go to the productReview component for using the hoook.