import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useBasket = create(
  persist(
    (set) => ({
      cart: [],

      addToBasket: (product) =>
        set((state) => {
          const exists = state.cart.find((item) => item.id === product.id);

          if (exists) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id
                  ? {
                      ...item,
                      quantity: item.quantity + product.quantity,
                    }
                  : item,
              ),
            };
          }

          return {
            cart: [...state.cart, product],
          };
        }),

      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== id),
        })),
        
        updateQuantity: (id, type)=>
          set((state)=>({
            cart:state.cart.map((item)=>{
              if(item.id===id){
                if(type==='inc'){
                  return {...item, quantity:item.quantity + 1};
                }
                if(type==='dec'){
                  return{
                    ...item,
                    quantity:item.quantity > 1 ? item.quantity -1: 1,
                  }
                }
              }

              return item
            })
          }))
        
    }),
    { name: "basket" },
  ),
);
