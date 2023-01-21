import axios from 'axios'

export default {

    getAllProducts({ success, fail }) {
        axios.get(`https://www.blibli.com/backend/search/products?searchTerm=samsung&start=0&itemPerPage=30`).then(
            (response) => {
                success(response.data.data.products)
            }
        ).catch(
            (error) => {
                fail(error)
            }
        )
    }

}