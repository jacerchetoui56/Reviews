import React from 'react'

export default function Review(props) {
    return (
        <div className='review'>
            <div className='review-image'>
                <img src={props.image} alt="" />
                <i class="fa-solid fa-quote-right"></i>
            </div>
            <div className="review-name">
                {props.name}
            </div>
            <div className="review-job">
                {props.job}
            </div>
            <p className="review-text">
                {props.text}
            </p>
        </div>
    )
}
