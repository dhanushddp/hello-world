import { mapActions, mapGetters } from "vuex"

export default {
    name: "cartComponent",
    data() {
        return {
            isPlaced: false,

        }
    },
    mounted() {

    },
    computed: {
        ...mapGetters('cartStore', ['getCart', 'getOrder']),
        ...mapGetters('userStore', ['user']),
        totalCartPrice() {
            let total = 0;
            this.getCart.forEach((item) => {
                total += parseFloat(item.price.priceDisplay.split('p')[1]) * item.quantity;
            });
            return total;

        }

    },
    methods: {
        ...mapActions('cartStore', ['removeCart', 'clearCart', 'cartCountAdd', 'cartCountSub']),
        user_logout() {
            alert("logout")
            this.$store.dispatch('userStore/logOut')
            if (this.user) {
                this.$router.push({ name: 'LoginPage' })
            }

        },
        removeFromCart(product) {
            const arr = this.getCart
            const index = arr.findIndex(object => {
                return object.name === product.name;
            });
            console.log(index)
            this.removeCart(index)
            console.log(this.getCart)

        },
        placeOrder() {
            if (this.getCart.length) {
                this.clearCart()
                console.log(this.getOrder)

                this.isPlaced = true
            }

        },


        add(product) {
            const arr = this.getCart
            const index = arr.findIndex(object => {
                return object.name === product.name;
            });

            this.cartCountAdd(index)
        },

        reduce(product) {
            if (product.quantity == 1) {
                const arr = this.getCart
                const index = arr.findIndex(object => {
                    return object.name === product.name;
                });
                this.removeCart(index)
            }
            else {
                const arr = this.getCart
                const index = arr.findIndex(object => {
                    return object.name === product.name;
                });

                this.cartCountSub(index)
            }
        }
    },
    watch: {
        isPlaced: function () {
            if (this.isPlaced == true) {
                setTimeout(() => this.$router.push('/home'), 3000);

            }
        }
    }
}