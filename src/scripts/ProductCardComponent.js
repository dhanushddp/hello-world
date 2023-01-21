import { mapActions, mapGetters } from "vuex";

export default {

    name: "ProductCardComponent",
    data() {
        return {
            cartComponents:[]
        }
    },
    props: {
        productobj: {
            type: Object,
            default: {}
        }
    },
    computed:{
        ...mapGetters('cartStore',['getCart'])
    },
    methods: {
        ...mapActions('cartStore',['setProduct']),
        added(prod) {
            if (prod.itemCount > 0) {
                prod.itemCount -= 1;
            }
            this.setProduct(prod)
            window.alert("Stock Left:" + prod.itemCount);
            console.log(this.getCart)

        },
        showDescription() {
            this.$router.push({ name: "ProductDescription", query: { productBrand: this.productobj } })
        }
    }

}