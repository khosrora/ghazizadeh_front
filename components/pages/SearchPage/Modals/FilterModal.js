import React, { useState } from 'react';

const items = [
    {
        id: 1,
        name: 'برند و نام خودرو',
        list: [
            { id: 1, name: 'لیفان' },
            { id: 2, name: 'تویوتا' },
            { id: 3, name: 'کیا' },
            { id: 4, name: 'هیوندای' },
        ]
    },
    {
        id: 2,
        name: 'لوازم یدکی',
        list: [
            { id: 1, name: 'لیفان' },
            { id: 2, name: 'تویوتا' },
            { id: 3, name: 'کیا' },
            { id: 4, name: 'هیوندای' },
        ]
    },
    {
        id: 3,
        name: 'لوازم مصرفی',
        list: [
            { id: 1, name: 'لیفان' },
            { id: 2, name: 'تویوتا' },
            { id: 3, name: 'کیا' },
            { id: 4, name: 'هیوندای' },
        ]
    },
    {
        id: 4,
        name: 'لوازم جانبی',
        list: [
            { id: 1, name: 'لیفان' },
            { id: 2, name: 'تویوتا' },
            { id: 3, name: 'کیا' },
            { id: 4, name: 'هیوندای' },
        ]
    },
]

function FilterModal() {

    const [list, setList] = useState(null);

    function handleOpenBox(id) {
        if (list === id) {
            setList(undefined)
        } else {
            setList(id)
        }
    }

    return (
        <dialog id="my_modal_4" className="modal p-2">
            <form method="dialog" className="modal-box w-full h-5/6 bg-[#F8FAFA] p-0 relative">
                <div className="flex justify-between items-center bg-[#FFFFFF] p-4 w-full">
                    <div className="flex justify-start items-center gap-x-2">
                        <button className="btn btn-sm btn-circle btn-ghost">✕</button>
                        <span className='font-bold'>فیلتر</span>
                    </div>
                    <div className="">
                        <span>پاک کردن همه</span>
                    </div>
                </div>

                <div className="flex flex-col p-4 w-full gap-y-4">
                    {
                        items.map(i =>
                            <div key={i.id}>
                                <div className="flex justify-between items-center py-3" onClick={() => handleOpenBox(i.id)}>
                                    <p className='font-bold'>{i.name}</p>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.2802 10L12.9335 14.3467C12.4202 14.86 11.5802 14.86 11.0669 14.3467L6.72021 10" stroke="#222222" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <hr />
                                {
                                    list === i.id ?
                                        <>
                                            <div className="my-2">
                                                <input type="text" placeholder='جست و جو کنید ... ' className='bg-[#FFFFFF] w-full p-2 text-xs rounded-full' />
                                            </div>
                                            {

                                                i.list.map(item =>
                                                    <div key={item.id} className="flex mb-2">
                                                        <div className="form-control w-full">
                                                            <label className="cursor-pointer label justify-start items-center">
                                                                <input type="checkbox" className="checkbox" dir='ltr' />
                                                                <span className="label-text mr-4">{item.name}</span>
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
                <div className="flex justify-between items-center p-4 w-full gap-y-4">
                    <p className='font-bold'>فقط کالا های موجود</p>
                    <input type="checkbox" className="toggle toggle-success" />
                </div>
            </form>
            <div className="btn fixed bottom-2 left-2 right-2 bg-[#EA0028] text-white">اعمال فیلتر</div>
        </dialog>
    )
}

export default FilterModal