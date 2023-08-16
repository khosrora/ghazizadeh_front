import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PublicLayout from '../../components/layout/public'
import SearchIndex from '../../components/pages/SearchPage/SearchIndex'
import { getFirstProduct } from '../../store/public/publicSlice';
import { BASE_API } from '../../utils/baseApi';
import { buildURLQuery } from '../../utils/functions';


function index(props) {

    const count = props.products.count;
    const products = props.products.results;
    const [hasMore, setHasMore] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        setHasMore(count <= 6 ? false : true)
        dispatch(getFirstProduct(products))
    }, [products])

    return (
        <PublicLayout>
            <SearchIndex
                hasMore={hasMore}
                setHasMore={setHasMore}
                props={props} />
        </PublicLayout>
    )
}

export async function getServerSideProps({ query }) {

    const params = buildURLQuery(query);

    const resProducts = await fetch(`${BASE_API}/store/search_products?${params}`);
    const resCategories = await fetch(`${BASE_API}/store/categories/`);

    const products = await resProducts.json()
    const categories = await resCategories.json()

    return {
        props: {
            products,
            categories
        }
    }
}

export default index