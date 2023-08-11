import React from 'react'
import Search from '../../sharedUi/Search'
import FilterBar from './FilterBar'
import GridSearchPage from './GridSearchPage'
import SearchBreadCrumb from './SearchBreadCrumb'

function SearchIndex({ props }) {

    return (
        <div className='p-2'>
            <SearchBreadCrumb />
            <div className="lg:hidden">
                <Search />
            </div>
            <FilterBar />
            <GridSearchPage props={props} />
        </div>
    )
}

export default SearchIndex