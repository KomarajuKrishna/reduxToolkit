const redux = require('redux')
const thunkMiddleWare = require('redux-thunk').default
const axios = require('axios')

const createStore = redux.createStore
const applyMiddleWare = redux.applyMiddleware

const intialState = {
	loading: false,
	users: [],
	error: ""
}

const fetchUseresRequested = "fetchUseresRequested"
const fetchUseresSucceeded = "fetchUseresSucceeded" 
const fetchUseresFailed = "fetchUseresFailed"

const fetchUseresRequest = ()=>{
	return{
		type: fetchUseresRequested
	}
}

const fetchUseresSuccess = (users)=>{
	return{
		type: fetchUseresSucceeded,
		playload: users
	}
}

const fetchUseresFailure = (error) =>{
	return{
		type: fetchUseresFailed,
		playload: error
	}
}

const reducer = (state = intialState, action)=>{
	switch(action.type){
		case fetchUseresRequested:
			return{
				...state,
				loading: true
			}
		case fetchUseresSucceeded :
			return{
				loading: false,
				users: action.playload,
				error:''
			}
		case fetchUseresFailed:
			return{
				loading: false,
				users:[],
				error:action.playload
			}
		default:
			return state
	}
}

const fetchUsers = () =>{
	return function(dispatch){
		dispatch(fetchUseresRequest())
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then((response)=>{
			//response.data is the users
			const users = response.data.map((user) => user.id)
			dispatch(fetchUseresSuccess(users))
		}).catch((error) =>{
			//error.message is the error message
			dispatch(fetchUseresFailure(error.message))
		})
	}
}

const store = createStore(reducer, applyMiddleWare(thunkMiddleWare))
store.subscribe(()=>{
	console.log(store.getState())
})

store.dispatch(fetchUsers())