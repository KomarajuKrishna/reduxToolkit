const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

//Creating a Action ::

const CakeOrdered = "CakeOrdered"
const CakeRestock = "CakeRestock"
const IcecreamOrdered ="IcecreamOrdered"
const IcecreamRestock = "IcecreamRestock"

function orderCake() {
	return{
		type: CakeOrdered,
		quantity: 1
	}
}

function restockCake (quantity = 1) {
	return{
		type: CakeRestock,
		playload: quantity

	}
}

function orderIcecream (quantity = 1){
	return{
		type:"IcecreamOrdered",
		playload: quantity
	}
}

function restockIcecream(quantity = 1){
	return{
		type: "IcecreamRestock",
		playload: quantity
	}

}
//Creating of reducer::

// const intialState = {
// 	 numOfCakes: 10,
// 	 numOfIcecreams: 10
// }

//Creating of mutliple Reducers::

const intialStateOfCake = {
	numOfCakes: 10
}

const intialStateOfIceCreams = {
	numOfIcecreams: 10
}
// const reducer = (state = intialState, action) =>{
// 	switch(action.type){
// 		case CakeOrdered:
// 			return {
// 				...state,
// 				numOfCakes: state.numOfCakes -1
// 			}
// 		case CakeRestock:
// 			return{
// 				...state,
// 				numOfCakes: state.numOfCakes + action.playload
// 			}
// 		case IcecreamOrdered:
// 			return {
// 				...state,
// 					numOfIcecreams: state.numOfIcecreams -1
// 			}
// 		case IcecreamRestock:
// 			return{
// 				...state,
// 				numOfIcecreams: state.numOfIcecreams + action.playload
// 			}

// 		default:
// 			return state
// 	}
// }


//Cake Reducer:::

const cakeReducer = (state = intialStateOfCake, action) =>{
	switch(action.type){
		case CakeOrdered:
			return {
				...state,
				numOfCakes: state.numOfCakes -1
			}
		case CakeRestock:
			return{
				...state,
				numOfCakes: state.numOfCakes + action.playload
			}
		default:
			return state
	}
}

const iceCreamReducer = (state = intialStateOfIceCreams, action) =>{
	switch(action.type){
		case IcecreamOrdered:
			return {
				...state,
					numOfIcecreams: state.numOfIcecreams -1
			}
		case IcecreamRestock:
			return{
				...state,
				numOfIcecreams: state.numOfIcecreams + action.playload
			}
		default:
			return state
	}
}

//combining Two Reducers::

const rootReducer = combineReducers({
	cake: cakeReducer,
	iceCream: iceCreamReducer
})

//Creating Store::

const store = createStore(rootReducer)
// Getting of intial statefrom the Reducer::
console.log('Initial State', store.getState())

const unSubscribe = store.subscribe(()=>(
	console.log("updated State", store.getState())
))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderIcecream())
store.dispatch(restockCake(quantity=3))
store.dispatch(restockIcecream(3))

unSubscribe()



 