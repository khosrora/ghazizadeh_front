import React from 'react'
import Search from '../../sharedUi/Search'

function SearchBar() {
    return (
        <div className='p-4 text-center max-w-2xl m-auto'>
            <p className='font-bold text-[16px]'>محصول مورد نظر خود را جست وجو کنید</p>
            <Search />
        </div>
    )
}

export default SearchBar