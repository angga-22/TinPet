const initialState = {
	error: null,
    loading: false,
    countMessage: []
}



const mesCount = (state = initialState, action) => {

	const {type, payload} = action;
	switch (type){
        case 'GET_COUNT_MESSAGE_SUCCESS':
            return{
                ...state,
                countMessage:payload
            }
        case 'GET_COUNT_MESSAGE_FAILED':
            return{
                ...state,
            }
		default:
			return {...state};
	}
}

export default mesCount;