const initialState = {
	token: localStorage.getItem('token'),
	error: null,
    loading: false,
    detailNotif:[],
    countNotif:(null)
}



const notif = (state = initialState, action) => {

	const {type, payload} = action;
	switch (type){
		case 'GET_NOTIF_SUCCESS':
			return{
				...state,
				detailNotif: payload
			};
		case 'GET_NOTIF_FAILED':
			return{
				...state,
            }
        case 'GET_NOTIF_COUNT_SUCESS':
            return{
                ...state,
                countNotif:payload
            }
        case 'GET_NOTIF_COUNT_FAILED':
			return{
				...state,
			}
		default:
			return {...state};
	}
}

export default notif;