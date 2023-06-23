import Link from 'next/link'
import React from 'react'

const items = [
    {
        id: 1,
        image: 'https://dreamcharters.us/wp-content/uploads/2022/07/White-Rolls-Royce-Ghost-For-Rent-3-1024x683.webp',
        name: 'تویوتا'
    },
    {
        id: 2,
        image: 'https://all-andorra.com/wp-content/uploads/2018/09/Mercedes-AMG-GT-S-Coupe_-mat-grey-body.-4.0-LITER-V8-BITURBO-ENGINE-0-100-km_h-3.8-s.png',
        name: 'بنز'
    },
    {
        id: 3,
        image: 'https://www.topgear.com/sites/default/files/news-listicle/image/a80330.jpg',
        name: 'سانگ یانگ'
    },
    {
        id: 4,
        image: 'https://cfx-wp-images.imgix.net/2022/05/2022-Cadillac-CT4.jpg?auto=compress%2Cformat&fit=scale&h=682&ixlib=php-3.3.0&w=1024&wpsize=large&s=1e5bef1d726088e9362ebcca8019c683',
        name: 'کیا'
    },
    {
        id: 5,
        image: 'https://dreamcharters.us/wp-content/uploads/2022/07/White-Rolls-Royce-Ghost-For-Rent-3-1024x683.webp',
        name: 'ام جی'
    },
    {
        id: 6,
        image: 'https://images.opumo.com/wordpress/wp-content/uploads/2022/06/opumo-mercedes-1200x578.jpg',
        name: 'هیوندا'
    },
    {
        id: 7,
        image: 'https://dreamcharters.us/wp-content/uploads/2022/07/White-Rolls-Royce-Ghost-For-Rent-3-1024x683.webp',
        name: 'جک'
    },
    {
        id: 8,
        image: 'https://www.cartoq.com/wp-content/uploads/2022/06/yellow-bent-bentley-for-sale-1.jpg',
        name: 'لیفان'
    },
]


function Cardscar() {
    return (
        <div className='px-4 mt-8 grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4'>
            {
                items.map(i =>
                    <div key={i.id} className="card bg-[#F8F9FA] h-[270px] lg:h-[324px]">
                        <figure className='h-[180px] '>
                            <img className='rounded-xl h-full w-full object-cover' src={i.image} alt="Shoes" />
                        </figure>
                        <div className="card-body p-2">
                            <h2 className="card-title text-[14px]">{i.name}</h2>
                            <p className='text-[12px]'>{i.name} مدل</p>
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
        </div>
    )
}

export default Cardscar