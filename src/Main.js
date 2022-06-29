import React, { useState } from 'react'
import Review from './Review'
import data from './Data'
export default function Main() {
    const [reviewIndex, setReviewIndex] = useState(0)

    function increment() {
        if (reviewIndex === data.length - 1) {
            setReviewIndex(0)
        }
        else {
            setReviewIndex(reviewIndex + 1)
        }
    }
    function decrement() {
        if (reviewIndex === 0) {
            setReviewIndex(data.length - 1)
        }
        else {
            setReviewIndex(reviewIndex - 1)
        }
    }
    function random() {
        let randomNumber = Math.floor(Math.random() * data.length)
        // ! to avoid repeating the same review
        while (randomNumber < 0 || randomNumber === reviewIndex) {
            randomNumber = Math.floor(Math.random() * (data.length))
        }
        setReviewIndex(randomNumber)
    }

    return (
        <main className='main'>
            <Review {...data[reviewIndex]} />
            <div className="buttons">
                <i onClick={increment} class="fa-solid fa-angle-left"></i>
                <i onClick={decrement} class="fa-solid fa-angle-right"></i>
            </div>
            <div className="random-btn">
                <div onClick={random}>
                    Surprise me
                </div>
            </div>
        </main>
    )
}
