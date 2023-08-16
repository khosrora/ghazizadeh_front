import React from 'react'
import Search from '../../sharedUi/Search'
import FilterBar from './FilterBar'
import GridSearchPage from './GridSearchPage'
import SearchBreadCrumb from './SearchBreadCrumb'

function SearchIndex({ props , hasMore , setHasMore }) {
    return (
        <div className='p-2'>
            <SearchBreadCrumb />
            <div className="lg:hidden">
                <Search />
            </div>
            <FilterBar />
            <GridSearchPage
                hasMore={hasMore}
                setHasMore={setHasMore}
                props={props}
            />
        </div>
    )
}

export default SearchIndex