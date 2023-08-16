import React from 'react'
import { useDispatch } from 'react-redux';
import { getProducts } from '../../../store/public/publicSlice';
import CardAddToBasket from '../../sharedUi/CardAddToBasket'
import InfiniteScroll from 'react-infinite-scroll-component';
import CustomLoader from '../../sharedUi/CustomLoader';

function SearchBarCards({ products, count, hasMore, setHasMore, nextPage }) {

    const dispatch = useDispatch();

    const fetchMoreData = () => {
        if (products.length >= count) {
            setHasMore(false);
        } else {
            dispatch(getProducts(nextPage))
        }
    };

    return (
        <>
            <InfiniteScroll
                dataLength={products.length} //! This is important field to render the next data
                next={fetchMoreData}
                hasMore={hasMore}
                loader={<CustomLoader />}
                endMessage={''}
            >
                <div className='grid grid-cols-2 mt-2 gap-2 lg:grid-cols-3 lg:gap-4'>
                    {
                        products.map((i, index) => <CardAddToBasket key={index} product={i} />)
                    }
                </div>
            </InfiniteScroll>
        </>
    )
}

export default SearchBarCards