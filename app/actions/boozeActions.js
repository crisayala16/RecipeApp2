export function fetchBooze(starter){
	return {
		type: 'FETCH_BOOZE',
		payload: starter
	}
}

export function handleStarter(starter){
	return {
		type: 'HANDLE_STARTER',
		payload: starter
	}
}