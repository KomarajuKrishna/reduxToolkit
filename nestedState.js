const redux = require('redux')
const createStore = redux.createStore
const produce = require('immer').produce

const intialState = {
	name: "Komaraju Bablu",
	address:{
		street: "state bank bazar",
		city: "Dachepalle",
		state: "Andhra Pradesh"

	}
}

// Creating Action ::

const streetUpdated = "streetUpdated"
const updateStreet = (street)=>{
	return{
		type: "streetUpdated",
		playload: street
	}
}

// creating a reducer::

const reducer = (state = intialState, action) =>{
	switch(action.type){
		case streetUpdated:
			// return{
			// 	...state,
			// 	address:{
			// 		...state.address,
			// 		street: action.playload
			// 	}
			// }

		// Using Immer Package ::::
			return produce(state, (draft) =>{
				draft.address.street = action.playload
			})
		default:
			return state
	}
}

// Creating a Store::

const store = createStore(reducer)
console.log("Initial State", store.getState())
const unSubscribe = store.subscribe(()=>(
	console.log("updated State", store.getState())
))

store.dispatch(updateStreet('8-71, Near Rice Mill'))

unSubscribe()