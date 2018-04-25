import { ADD_STATUS } from '../actions/addStatus';

const defaultState = {
	statusUpdates: []
};

export default function reducer(state = defaultState, action) {
	switch (action.type) {
		case ADD_STATUS:
			const newStatusList = [
				...state,
				action.newStatus
			];

			return {
				...state,
				statusUpdates: newStatusList
			};
		default:
			return state;
	}
}
