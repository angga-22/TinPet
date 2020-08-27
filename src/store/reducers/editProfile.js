import {EDIT_PROFILE_SUCCESS} from '../actions/types';
const initialState = {
	data: [],
}

const editProfile = (state = initialState, action) => {
	const {type, payload} = action;
	switch (type){
		case "EDIT_PROFILE_SUCCESS":
			return{
				...state,
				data: payload, 
			}
		default:
			return state;
	}
}

export default editProfile;


