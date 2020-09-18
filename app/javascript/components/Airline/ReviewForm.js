import React from 'react'

const ReviewForm = (props) => {
    return (
        <div className="wrapper">
            <form onSubmit={props.handleSubmit}>
                <div>Have an experience with {props.attributes.name}? Share your review!</div>
                <div className="field">
                    <input onChange={props.handleChange} type={props.review.title} name="title" placeholder="Review Title"/>
                </div>
                <div className="field">
                    <input onChange={props.handleChange} type={props.review.description} name="description" placeholder="Review Description"/>
                </div>
                <div className="field">
                    <div className="rating-container">
                        <div className="rating-title-text">Rate This Airline.</div>
                        [Start Rating Goes Here]
                    </div>
                </div>
                <button type="submit">Sumbit Your Review</button>
            </form>
        </div>
        
    )
}

export default ReviewForm