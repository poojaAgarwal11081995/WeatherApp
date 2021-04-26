/** @format */
const initialState = {};
const reducer = (state = initialState, action) => {
	// alert(JSON.stringify(state));
	if (action !== undefined && action.type !== undefined) {
		if (
			!(typeof action === "undefined") &&
			!(typeof action.payload === "undefined")
		) {
			return action.payload;
		}
	} else {
		return state;
	}
};
export default reducer;
