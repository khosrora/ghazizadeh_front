import React from 'react'
import CardBasket from '../../sharedUi/CardBasket'
import DetailBasket from './DetailBasket'
import TitleBasketPage from './TitleBasketPage'

function BasketIndex() {
    return (
        <div className='p-4 space-y-4'>
            <TitleBasketPage />
            <div className="lg:flex lg:justify-between lg:items-start lg:gap-x-12 lg:flex-row-reverse">
                <div className="lg:w-1/3 bg-[#FFFFFF] p-2 rounded-xl lg:p-8">
                    <DetailBasket />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 lg:mt-0 lg:grid-cols-3 lg:w-2/3">
                    {
                        [1, 2, 3, 4, 5, 6].map((i , index) =>
                            <CardBasket key={index} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default BasketIndex