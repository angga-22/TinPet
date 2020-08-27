
const initialState = {
	token: localStorage.getItem('token'),
	error: null,
	loading: true,
	updateStatus: "initial",
	post: [],
	pets: [],
	likeCounter: (null),
}



const post = (state = initialState, action) => {

	const {type, payload, loading} = action;
	switch (type){
		case 'GET_ALL_POST':
			return{
				...state,
				pets: payload,
				loading
			};
		case 'LIKE':
			return{
				...state,
				likeCounter:payload
			}
		default:
			return {...state};
	}
}

export default post;


