
const initialState = {
	token: localStorage.getItem('token'),
	loading: true,
	PetId : []
}

const searchPet = (state= initialState, action) => {
	const {type, payload, loading} = action;
	switch(type) {
		case 'SEARCH_PET_SUCCESS':
			return{
				...state,
				PetId: payload, 
				loading
			}
		default:
			return state
	}
}

export default searchPet;
