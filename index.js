const redux = require('redux')
const createStore = redux.createStore

//Creating a Action ::

const CakeOrdered = "cakeOrdered"
const CakeRestock = "CakeRestock"

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
//Creating of reducer::

const intialState = {
	 numOfCakes: 10
}

const reducer = (state = intialState, action) =>{
	switch(action.type){
		case CakeOrdered:
			return {
				numOfCakes: state.numOfCakes -1
			}
		case CakeRestock:
			return{
				numOfCakes: state.numOfCakes + action.playload
			}
		default:
			return state
	}
}

//Creating Store::

const store = createStore(reducer)
// Getting of intial statefrom the Reducer::
console.log('Initial State', store.getState())

const unSubscribe = store.subscribe(()=>(
	console.log("updated State", store.getState())
))

store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(orderCake())
store.dispatch(restockCake(quantity=3))

unSubscribe()



