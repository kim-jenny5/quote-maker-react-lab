import React, { Component } from "react";
import { connect } from "react-redux";
import { downvoteQuote, removeQuote, upvoteQuote } from "../actions/quotes";
import QuoteCard from "../components/QuoteCard";

class Quotes extends Component {
	render() {
		return (
			<div>
				<hr />
				<div className="row justify-content-center">
					<h2>Quotes</h2>
				</div>
				<hr />
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							{/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}
							{this.props.quotes.map((quote) => (
								<QuoteCard
									key={quote.id}
									quote={quote}
									removeQuote={this.props.removeQuote}
									upvoteQuote={this.props.upvoteQuote}
									downvoteQuote={this.props.downvoteQuote}
								></QuoteCard>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ quotes: state.quotes });

const mapDispatchToProps = (dispatch) => ({
	removeQuote: (quote) => dispatch(removeQuote(quote)),
	upvoteQuote: (quote) => dispatch(upvoteQuote(quote)),
	downvoteQuote: (quote) => dispatch(downvoteQuote(quote))
});

//add arguments to connect as needed
// export default connect(mapStateToProps, {
// 	downvoteQuote,
// 	removeQuote,
// 	upvoteQuote
// })(Quotes);

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
