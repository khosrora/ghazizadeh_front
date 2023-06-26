import React from 'react'
import CardAddToBasket from '../../sharedUi/CardAddToBasket'

function SearchBarCards() {
    return (
        <div className='grid grid-cols-2 mt-2 lg:grid-cols-3 lg:gap-4'>
            {
                [1, 2, 3, 4, 5, 6].map((i , index) => <CardAddToBasket key={index} />)
            }
        </div>
    )
}

export default SearchBarCards