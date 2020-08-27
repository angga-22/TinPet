const initialState = {
	token: localStorage.getItem('token'),
	error: null,
	loading: false,
	petsDetail:[]
}

const getSinglePets = (state = initialState, action) => {

	const {type, payload} = action;
	switch (type){
		case 'GET_OWN_PETS':
			return{
				...state,
				petsDetail: payload
			}
		default:
			return {...state};
	}
}

export default getSinglePets; 