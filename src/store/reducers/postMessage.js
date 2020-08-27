const initialState = {
	token : localStorage.getItem('token'),
	error: null,
	loading: false,
	postMessage: []

}

const postMessage = (state = initialState, action ) => {
	const {type, payload} = action;
	switch (type) {
		case  'POST_MESSAGE_SUCCESS': 
			return {
				...state,
				postMessage: payload
			}
		case 'POST_MESSAGE_FAILED':
			return {
				...state,
			}
		default: 
		return{
			...state,
		}
	}
}