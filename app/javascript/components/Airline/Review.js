//rafc -> react arrow function component

import React from 'react'
import Rating from '../Rating/Rating'
import styled from 'styled-components'

const Card = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 20px;
    margin: 0 20px 20px 0;

`
const RatingContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const Title = styled.div`
    padding-top: 20px;
    font-size: 18px;

`
const Description = styled.div`
    padding-bottom: 20px;
    font-size: 14px;
`

export const Review = (props) => {

    const {score, title, description} = props.attributes

    return (
        <Card>
            <RatingContainer>
                <Rating score={score} />
            </RatingContainer>
            <Title>{title}</Title>
            <Description>{description}</Description>
        </Card>
    )
}

export default Review
