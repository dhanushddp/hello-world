import ProductCardComponent from '../components/ProductCardComponent.vue';
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex';
export default {
    components: {
        ProductCardComponent,
        

    },
    name: "HomePage",
    data() {
        return {
            searchResult: [],
            prod_list: [],
            fil_list: [],
            searchitem: {
                name: "", model: "", ram: "", memory: "", price: ""
            },
            search: "",
            loader: "",
            errorOccured: false,
            // cartEmpty:false,
        }
    },
    props: {
        name: String
    },
    created() {

    },
    mounted() {

        this.GET_ALL_PRODUCTS({
            success: this.onSuccess,
            fail: this.onFail
        })

    },
    computed: {
        ...mapGetters('userStore', ['user']),
        ...mapGetters('proStore', ['products']),
        ...mapGetters('cartStore', ['cart']),
        loggedin() {
            return this.$route.query.user_name
 }
    },
    methods: {
        ...mapActions('proStore', ['GET_ALL_PRODUCTS']),
        onSuccess(data) {
            this.errorOccured = false

            this.fil_list = data
        },
        onFail() {
            this.errorOccured = true
        },

        callApi() {
            axios.get(`https://www.blibli.com/backend/search/products?searchTerm=${this.search}&start=0&itemPerPage=30`).then(
                (res) => {
                    console.log(res);
                    // this.fil_list = res.data.data.products
                    this.onSearchSuccess(res.data.data.products)

                }
            ).catch((res) => {
                console.log('rejected', res)
            })
        },
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
            this.$store.dispatch('userStore/logOut')
            if (this.user) {
                this.$router.push({ name: 'LoginPage' })
            }


        },
        shoppingCart(){
           this.$router.push({name:'cartComponent'}) 
        }
    },
    watch: {
        search: function (oldvalue, newvalue) {
            console.log(oldvalue, newvalue)
            this.fil_list = this.prod_list.filter(product => (this.search ? product.name === this.search : true))
            this.callApi()
        },
        user: ()=>{
            if(Object.keys(this.user.length==0)){
                 this.$router.push('/login')
            }
        }
        // cart:()=>{
        //     if(!this.cart){
        //          this.cartEmpty=true
        //     }
        // }
    }
}