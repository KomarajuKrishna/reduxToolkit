const createSlice = require('@reduxjs/toolkit').createSlice
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
		},
		 extraReducers: {
			['cake/ordered']: (state) => {
				state.numOfIcecreams--
			}
		 }

	}
})

module.exports = iceCreamSlice.reducer
module.exports.icecreamActions = iceCreamSlice.actions