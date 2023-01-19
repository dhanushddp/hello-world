// import { mapActions } from "vuex";
import ProductCardComponent from '../src/components/ProductCardComponent.vue';
import axios from 'axios'
export default {
    components: {
        ProductCardComponent
    },
    name: "PersonalInfo",
    data() {
        return {
            searchResult: [],
            prod_list: [
                { images: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", name: "Apple", model: "iPhone13", ram: "8GB", memory: "128GB", rating: "3.0", price: "60999", stock: 4 },
                { images: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", name: "Vivo", model: "Y15", ram: "12GB", memory: "128GB", rating: "3.9", price: "64599", stock: 41 },
                { images: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1661958160494", name: "Oppo", model: "Note5", ram: "8GB", memory: "256GB", rating: "4.0", price: "30999", stock: 0 },
                { images: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", name: "Samsung", model: "Galaxy13", ram: "8GB", memory: "64GB", rating: "4.0", price: "45999", stock: 4 },
                { images: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1661958160494", name: "Apple", model: "iPhone12", ram: "4GB", memory: "128GB", rating: "3.0", price: "44999", stock: 14 },
                { images: "https://image.oppo.com/content/dam/oppo/in/mkt/phonelist/products/reno4-pro-white.png", name: "Redmi", model: "Pixle12", ram: "8GB", memory: "64GB", rating: "3.0", price: "28809", stock: 4 },
                { images: "https://m.media-amazon.com/images/I/617MPEZB5mL._SX679_.jpg", name: "Poco", model: "Note13", ram: "12GB", memory: "128GB", rating: "5.0", price: "30999", stock: 42 },
                { images: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", name: "Vivo", model: "V20", ram: "8GB", memory: "128GB", rating: "3.0", price: "35999", stock: 2 },
                { images: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", name: "Realme", model: "Hex13", ram: "8GB", memory: "64GB", rating: "3.0", price: "16000", stock: 24 },
                { images: "https://image.oppo.com/content/dam/oppo/in/mkt/phonelist/products/reno4-pro-white.png", name: "Oppo", model: "Note Pro", ram: "4GB", memory: "128GB", rating: "2.0", price: "40099", stock: 4 },
                { images: "https://m.media-amazon.com/images/I/617MPEZB5mL._SX679_.jpg", name: "Oneplus", model: "Promax", ram: "8GB", memory: "256GB", rating: "3.0", price: "70999", stock: 4 }
            ],
            fil_list: [
                { images: require("../src/assets/1.jpg"), name: "Apple", model: "iPhone13", ram: "8GB", memory: "128GB", rating: "3.0", price: "60999", stock: 4 },
                { images: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", name: "Vivo", model: "Y15", ram: "12GB", memory: "128GB", rating: "3.9", price: "64599", stock: 41 },
                { images: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1661958160494", name: "Oppo", model: "Note5", ram: "8GB", memory: "256GB", rating: "4.0", price: "30999", stock: 0 },
                { images: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", name: "Samsung", model: "Galaxy13", ram: "8GB", memory: "64GB", rating: "4.0", price: "45999", stock: 4 },
                { images: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1661958160494", name: "Apple", model: "iPhone12", ram: "4GB", memory: "128GB", rating: "3.0", price: "44999", stock: 14 },
                { images: "https://image.oppo.com/content/dam/oppo/in/mkt/phonelist/products/reno4-pro-white.png", name: "Redmi", model: "Pixle12", ram: "8GB", memory: "64GB", rating: "3.0", price: "28809", stock: 4 },
                { images: "https://m.media-amazon.com/images/I/617MPEZB5mL._SX679_.jpg", name: "Poco", model: "Note13", ram: "12GB", memory: "128GB", rating: "5.0", price: "30999", stock: 42 },
                { images: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", name: "Vivo", model: "V20", ram: "8GB", memory: "128GB", rating: "3.0", price: "35999", stock: 2 },
                { images: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", name: "Realme", model: "Hex13", ram: "8GB", memory: "64GB", rating: "3.0", price: "16000", stock: 24 },
                { images: "https://image.oppo.com/content/dam/oppo/in/mkt/phonelist/products/reno4-pro-white.png", name: "Oppo", model: "Note Pro", ram: "4GB", memory: "128GB", rating: "2.0", price: "40099", stock: 4 },
                { images: "https://m.media-amazon.com/images/I/617MPEZB5mL._SX679_.jpg", name: "Oneplus", model: "Promax", ram: "8GB", memory: "256GB", rating: "3.0", price: "70999", stock: 4 }
            ],
            searchitem: {
                name: "", model: "", ram: "", memory: "", price: ""
            },
            search: "Phones"

        }
    },
    props: {
        name: String
    },
    mounted() {
        //this.callApi();
    },
    computed: {
        // callApi(){
        //     axios.get(`https://www.blibli.com/backend/search/products?searchTerm=${this.search}&start=0&itemPerPage=24`).then(
        //          (res) => {
        //             console.log(res);
        //             this.fil_list=res.data.data.products
        //             this.onSearchSuccess(res.data.data.products)

        //         }
        //     ).catch({
        //         function(res) {
        //             console.log(res);
        //         }

        //     })
        // }

        loggedin() {
            return this.$route.query.user_name

        }
    },
    methods: {
        callApi() {
            axios.get(`https://www.blibli.com/backend/search/products?searchTerm=${this.search}&start=0&itemPerPage=24`).then(
                (res) => {
                    console.log(res);
                    this.fil_list = res.data.data.products
                    this.onSearchSuccess(res.data.data.products)

                }
            ).catch({
                function(res) {
                    console.log(res);
                }

            })
        },
        // ...mapActions["logOut"],
        onSearchSuccess(data) {
            this.fil_list = data;
        },
        added(prod) {
            if (prod.stock > 0) {
                prod.stock -= 1;
            }
            window.alert("Stock Left:" + prod.stock);

        },
        searchbox() {
            var pro2 = document.getElementById("search").value;
            window.alert("You have searched " + pro2);
        },
        update() {
            this.fil_list = this.prod_list.filter(product =>
                (this.searchitem.name ? product.name === this.searchitem.name : true) &&
                (this.searchitem.model ? product.model === this.searchitem.model : true) &&
                (this.searchitem.ram ? product.ram === this.searchitem.ram : true) &&
                (this.searchitem.memory ? product.memory === this.searchitem.memory : true) &&
                (this.searchitem.price ? product.price >= this.searchitem.price : true)
            )


        },
        user_logout() {
            alert("logout")
            this.$store.dispatch('logOut')
        }
    },
    watch: {
        search: function (oldvalue, newvalue) {
            console.log(oldvalue, newvalue)
            this.fil_list = this.prod_list.filter(product => (this.search ? product.name === this.search : true))
            this.callApi()
        }
    }
}