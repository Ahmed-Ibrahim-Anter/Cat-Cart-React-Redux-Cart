import { createSlice,createEntityAdapter } from '@reduxjs/toolkit'
export const productAdapter = createEntityAdapter();
export const productSelectors = productAdapter.getSelectors((state) => state.product)



export const productSlice = createSlice({
  name: 'product',
  initialState: productAdapter.getInitialState(),
  reducers: {
   add:productAdapter.addOne,
   updateProduct:productAdapter.updateOne,
   deleteproduct:productAdapter.removeOne,
   deleteAll:productAdapter.removeAll,
  },
})


export const { add, updateProduct, deleteproduct,deleteAll } = productSlice.actions

export default productSlice.reducer