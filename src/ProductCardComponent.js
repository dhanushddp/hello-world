export default {
   
    name: "ProductCardComponent",
    data() {
        return {}
    },
    props: {
        productobj : {
                type:Object,
                default:{}
        }
    },
    methods:{
        added(prod) {
            if (prod.itemCount > 0) {
                prod.itemCount -= 1;
            }
            window.alert("Stock Left:" + prod.itemCount);

        },
        showDescription(){
            this.$router.push({name:"ProductDescription",query:{productBrand : this.productobj}})
        }
    }
   
}