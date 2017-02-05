import {ADD_STATUS} from '../actions/addStatus';

const defaultState = { statusUpdates: [] };

export default function reducer(state=defaultState, action) {
	switch (action.type) {
		case ADD_STATUS:
			const newStatusList = [
				action.newStatus,
				...state.statusUpdates
			];

			return {
				...state,
				statusUpdates: newStatusList
			};
	}

	return state;
}