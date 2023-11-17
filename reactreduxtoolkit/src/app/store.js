import cakeReducer from '../features/cake/cakeSlice'
import iceCreamReducer from '../features/icecream/icecream'
import {configureStore} from '@reduxjs/toolkit'
const store = configureStore({
	reducer:{
		cake: cakeReducer,
		icecream: iceCreamReducer
	}
})

export default store