import { mapActions, mapGetters } from "vuex"

export default {
    name: "cartComponent",
    data() {
        return {
            isPlaced: false,

        }
    },
    computed: {
        ...mapGetters('cartStore', ['getCart', 'getOrder']),
        ...mapGetters('userStore', ['user']),
        // add(product){
        //     const arr = this.getCart
        //     const index = arr.findIndex(object => {
        //         return object.name === product.name;
        //       });

        //    this.cartCountAdd(index)
        // }

    },
    methods: {
        ...mapActions('cartStore', ['removeCart', 'clearCart', 'cartCountAdd']),
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
            this.clearCart()
            console.log(this.getOrder)
            this.isPlaced = true
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