import PublicLayout from '../../components/layout/public'
import SearchIndex from '../../components/pages/SearchPage/SearchIndex'
import { BASE_API } from '../../utils/baseApi';
import { buildURLQuery } from '../../utils/functions';

function index(props) {

    return (
        <PublicLayout>
            <SearchIndex props={props} />
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