export function fetchBooze(results){
	return {
		type: 'FETCH_BOOZE',
		payload: results
	}
}

export function handleStarter(starter){
	return {
		type: 'HANDLE_STARTER',
		payload: starter
	}
}