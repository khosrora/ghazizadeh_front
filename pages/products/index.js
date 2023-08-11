import PublicLayout from '../../components/layout/public'
import SearchIndex from '../../components/pages/SearchPage/SearchIndex'
import { BASE_API } from '../../utils/baseApi';

function index(props) {


    return (
        <PublicLayout>
            <SearchIndex props={props} />
        </PublicLayout>
    )
}

export async function getServerSideProps() {
    const resProducts = await fetch(`${BASE_API}/store/products/`);
    const resCategories = await fetch(`${BASE_API}/store/categories/`);

    const products = await resProducts.json()
    const categories = await resCategories.json()


    return {
        props: {
            products , 
            categories
        }
    }
}

export default index