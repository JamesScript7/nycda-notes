export const ADD_STATUS = "ADD_STATUS";

export default function(statusText) {
	return {
		"type": ADD_STATUS,
		"newStatus": statusText
	}
}