import React from 'react'
import style from './styles.css'

export default function Pagination(props){
    const {page, totalPages, previus, next} = props

    return(
        <div className='Pagination-container'>
            <button onClick={previus}>◀</button>
            <p>
                {page} of {totalPages}
            </p>
            <button onClick={next}>▶</button>
        </div>
    )
}