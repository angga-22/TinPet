// import {GET_PROFILE} from '../actions/types';
const initialState = {
	token: localStorage.getItem('token'),
	error: null,
	loading: true,
	profileDetail: [],
}

const profile = (state = initialState, action) => {
	const {type, payload, loading} = action;
	switch (type){
		case 'GET_PROFILE':
			return{
				...state,
				profileDetail: payload,
				loading
			};
		default:
			return {...state};
	}
}

export default profile;


