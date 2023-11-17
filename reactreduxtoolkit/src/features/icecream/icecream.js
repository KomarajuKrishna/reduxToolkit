import {createSlice} from '@reduxjs/toolkit'
// import { ordered as CakeOrdered } from '../cake/cakeSlice'
const initialState = {
	numOfIcecreams: 10
}

const iceCreamSlice = createSlice({
	name: 'icecream',
	initialState: initialState,
	reducers:{
		ordered:(state)=>{
			state.numOfIcecreams--
		},
		reStocked: (state, action) =>{
			state.numOfIcecreams += action.payload
		}
		//  extraReducers: {
		// 	['cake/ordered']: (state) => {
		// 		state.numOfIcecreams--
		// 	}
		//  }

	}
})

export default iceCreamSlice.reducer
 export const {ordered, reStocked} = iceCreamSlice.actions