import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ordered, reStocked } from './icecream'

export const IcecreamView = () => {
	const iceCreams = useSelector((state) => state.icecream.numOfIcecreams)
	const dispatch = useDispatch()
	const orderedButton = () => {
		dispatch(ordered())
	}
	const reStockedButton = () => {
		dispatch(reStocked(5))
	}

	return (
		<div>
			<h2>Number of Ice creams: {iceCreams}</h2>
			<button onClick={orderedButton}>Order Ice cream</button>
			<button onClick={reStockedButton}>Restock Ice creams</button>
		</div>
	)
}


