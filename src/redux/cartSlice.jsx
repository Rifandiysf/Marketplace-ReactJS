import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, payload) => {

            const findProduct = state?.find(
                (product) => product.id === payload?.payload.id
            );

            if (state?.length === 0 || !findProduct) {
                let newProduct = { ...payload?.payload, stock: 1 };
                state.push(newProduct);
                return;
            }

            if(payload.payload?.stock === 0) return;

            state.map((product) => {
                if (product.id === payload?.payload.id) {
                    product.stock += 1;
                }
            });

        },
    }
})

export const { addToCart } = cartSlice.actions
export default cartSlice.reducer