import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, reStocked } from './cakeSlice'
export const CakeView = () => {
	const numOfCakes = useSelector((state) => state.cake.numOfCakes)
	const dispatch = useDispatch()
	const orderedButton = () => {
		dispatch(ordered())
	}
	const reStockedButton = () => {
		dispatch(reStocked(5))
	}
	
	return (
		<div>
			<h2>Number of Cakes: {numOfCakes}</h2>
			<button onClick={orderedButton}>Order Cake</button>
			<button onClick={reStockedButton}>Restock Cakes</button>
		</div>
	)
}