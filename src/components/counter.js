import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from '../Features/Counter/counterslice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
            </div>
            <div>
                What do you like?
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    Cat
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    Dog
                </button>
            </div>
        </div>
    )
}