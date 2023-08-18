import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PublicLayout from '../../components/layout/public'
import SearchIndex from '../../components/pages/SearchPage/SearchIndex'
import { getFirstProduct } from '../../store/public/publicSlice';
import { BASE_API } from '../../utils/baseApi';
import { buildURLQuery } from '../../utils/functions';


function Index(props) {

    const count = props.products.count;
    const products = props.products.results;
    const [hasMore, setHasMore] = useState();

    const dispatch = useDispatch();

    useEffect(() => {
        setHasMore(count <= 6 ? false : true)
        dispatch(getFirstProduct(products))
    }, [products])

    return (
        <>
            <Head>
                <title>گروه خودرویی غازی زاده | فروشگاه قطعات و لوازم جانبی خودرو</title>
                <meta property="url" content="https://ghazizadeh.co/products" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="fa_IR" />
                <meta property="og:site_name" content="فروشکاه قطعات خودرو" />
                <meta name="description" content="خرید اینترنتی قطعات و لوازم جانبی خودرو" />
                <meta name="robots" content="index, follow" />
            </Head>
            <PublicLayout>
                <SearchIndex
                    hasMore={hasMore}
                    setHasMore={setHasMore}
                    props={props} />
            </PublicLayout>
        </>
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

export default Index