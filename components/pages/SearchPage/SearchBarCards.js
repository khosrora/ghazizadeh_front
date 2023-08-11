import React from 'react'
import CardAddToBasket from '../../sharedUi/CardAddToBasket'

function SearchBarCards({products}) {
    return (
        <div className='grid grid-cols-2 mt-2 lg:grid-cols-3 lg:gap-4'>
            {
                products.map((i , index) => <CardAddToBasket key={index} product={i} />)
            }
        </div>
    )
}

export default SearchBarCards