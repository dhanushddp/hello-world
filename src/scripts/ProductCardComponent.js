import { mapActions, mapGetters } from "vuex";

export default {

    name: "ProductCardComponent",
    data() {
        return {
            cartComponents: []
        }
    },
    props: {
        productobj: {
            type: Object,
            default: {}
        }
    },
    computed: {
        ...mapGetters('cartStore', ['getCart'])
    },
    methods: {
        ...mapActions('cartStore', ['setProduct', 'cartCountAdd']),
        added(prod) {
            if (prod.itemCount > 0) {
                prod.itemCount -= 1;
            }

            if (!this.getCart.some(data => data.id === prod.id)) {
                prod["quantity"] = 1
                const cartItem = { ...prod, quantity: 1 };
                this.setProduct(cartItem)
            } else {
                const arr = this.getCart
                const index = arr.findIndex(object => {
                    return object.name === prod.name;
                });

                this.cartCountAdd(index)
            }





            window.alert("Stock Left:" + prod.itemCount);
            console.log(this.getCart)

        },
        showDescription() {
            this.$router.push({ name: "ProductDescription", query: { productBrand: this.productobj } })
        }
    }

}