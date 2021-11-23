export default (state = [], action) => {
	let foundQuote;

	switch (action.type) {
		case "ADD_QUOTE":
			return state.concat(action.quote);

		case "REMOVE_QUOTE":
			return state.filter((quote) => quote.id !== action.quoteId);

		case "UPVOTE_QUOTE":
			foundQuote = state.find((quote) => quote.id === action.quoteId);

			if (foundQuote) {
				const newState = state.filter((quote) => quote !== foundQuote);
				return [...newState, { ...foundQuote, votes: (foundQuote.votes += 1) }];
			}

		case "DOWNVOTE_QUOTE":
			foundQuote = state.find((quote) => quote.id === action.quoteId);
			if (foundQuote) {
				const newState = state.filter((quote) => quote !== foundQuote);
				return [
					...newState,
					{
						...foundQuote,
						votes:
							foundQuote.votes === 0
								? foundQuote.votes
								: (foundQuote.votes -= 1)
					}
				];
			}

		default:
			return state;
	}
};
