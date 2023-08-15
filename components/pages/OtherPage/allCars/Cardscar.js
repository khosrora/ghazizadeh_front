import Link from 'next/link'
import React from 'react'
import Alert from '../../../sharedUi/Alert';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../../../store/public/publicSlice';
import CustomLoader from '../../../sharedUi/CustomLoader';

function Cardscar({ nextPage, hasMore, setHasMore, count }) {

    const { cars } = useSelector(state => state.public);

    const dispatch = useDispatch();

    const fetchMoreData = () => {
        if (cars.length >= count) {
            setHasMore(false);
        } else {
            dispatch(getCars(nextPage))
        }
    };


    return (
        <div className="">
            {
                cars.length === 0 ?
                    <div className="mt-8">
                        <Alert message='در این دسته هیج محصولی ثبت نشده است' />
                    </div>
                    :
                    <InfiniteScroll
                        dataLength={cars.length} //! This is important field to render the next data
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={<CustomLoader />}
                        endMessage={''}
                    >
                        {
                            <div className='px-4 mt-8 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4'>
                                {
                                    cars.map(car =>
                                        <div key={car.id} className="card bg-[#F8F9FA] h-[270px] lg:h-[324px]">
                                            <figure className='h-[180px] '>
                                                <img className='rounded-xl h-full w-full object-cover' src={car.image} alt={car.title} />
                                            </figure>
                                            <div className="card-body p-2">
                                                <h2 className="card-title text-[14px]">{car.title}</h2>
                                                <p className='text-[12px]'>مدل {car.title}</p>
                                                <Link href={`/all_cars/${car.id}`}>
                                                    <div className="card-actions btn text-white rounded-full text-center bg-[#FFFFFF] flex justify-center items-center">
                                                        <div className="card-actions w-full flex justify-center items-center">
                                                            <span className="text-[#EA0028] text-[12px]">مشاهده محصولات</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        }
                    </InfiniteScroll>
            }
            {/* <div className="">
                <div className="">next</div>
                <div className="">prev</div>
            </div> */}
        </div>
    )
}

{/* <div className='px-4 mt-8 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4'>
    {
        cars.map(car =>
            <div key={car.id} className="card bg-[#F8F9FA] h-[270px] lg:h-[324px]">
                <figure className='h-[180px] '>
                    <img className='rounded-xl h-full w-full object-cover' src={car.image} alt="Shoes" />
                </figure>
                <div className="card-body p-2">
                    <h2 className="card-title text-[14px]">{car.title}</h2>
                    <p className='text-[12px]'>{car.title} مدل</p>
                    <Link href="/">
                        <div className="card-actions btn text-white rounded-full text-center bg-[#FFFFFF] flex justify-center items-center">
                            <div className="card-actions w-full flex justify-center items-center">
                                <span className="text-[#EA0028] text-[12px]">مشاهده محصولات</span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
</div> */}
export default Cardscar