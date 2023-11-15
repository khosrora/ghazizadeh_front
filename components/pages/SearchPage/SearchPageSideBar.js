import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { buildURLQuery } from '../../../utils/functions';
import Search from '../../sharedUi/Search'


function SearchPageSideBar({ categories, query }) {

    const [list, setList] = useState(null);
    const [search, setSearch] = useState('')

    function handleOpenBox(id) {
        if (list === id) {
            setList(undefined)
        } else {
            setList(id)
        }
    }

    const router = useRouter();

    const handleChangeFilter = id => {
        delete query.category;
        const params = buildURLQuery(Object.assign(query, { category: id }));
        router.push(`/products?${params}`)
    }

    return (
        <div className='bg-[#FFFFFF] h-full w-full rounded-xl p-4'>
            <div className="">
                <p className='font-bold'>جست وجو محصول</p>
                <Search />
            </div>

            <div className="flex flex-col p-4 w-full gap-y-4">
                {
                    categories.map(cate =>
                        <div key={cate.id}>
                            <div className="flex justify-between items-center py-3" onClick={() => handleOpenBox(cate.id)}>
                                <p className='font-bold'>{cate.title}</p>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.2802 10L12.9335 14.3467C12.4202 14.86 11.5802 14.86 11.0669 14.3467L6.72021 10" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <hr />
                            {
                                list === cate.id ?
                                    <>
                                        {/* <div className="my-2">
                                            <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder='جست و جو کنید ... ' className='bg-[#FFFFFF] w-full p-2 text-xs rounded-full' />
                                        </div> */}
                                        {

                                            cate.subs.map(cateSub =>
                                                <div div key={cateSub.id} className="flex mb-2" >
                                                    <div className="form-control w-full">
                                                        <label className="cursor-pointer label justify-start items-center">
                                                            <input type="radio" name="radio-1" className="radio" onChange={() => handleChangeFilter(cateSub.id)} />
                                                            <span className="label-text mr-4">{cateSub.title}</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </>
                                    : null
                            }
                        </div>
                    )
                }
            </div>
            {/* <div className="flex justify-between items-center p-4 w-full gap-y-4">
                <p className='font-bold'>فقط کالا های موجود</p>
                <input type="checkbox" className="toggle toggle-success" />
            </div> */}
            {/* <div className="btn w-full bg-[#EA0028] text-white">اعمال فیلتر</div> */}
        </div >
    )
}

export default SearchPageSideBar