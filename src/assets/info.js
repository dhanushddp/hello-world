export default {
    name: "PersonalInfo",
    data() {
        return {
            prod_list: [
                { image: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", brand: "Apple", model: "iPhone13", ram: "8GB", memory: "128GB", rating: "3.0", price: "60999", stock: 4 },
                { image: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", brand: "Vivo", model: "Y15", ram: "12GB", memory: "128GB", rating: "3.9", price: "64599", stock: 41 },
                { image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1661958160494", brand: "Oppo", model: "Note5", ram: "8GB", memory: "256GB", rating: "4.0", price: "30999", stock: 0 },
                { image: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", brand: "Samsung", model: "Galaxy13", ram: "8GB", memory: "64GB", rating: "4.0", price: 45999, stock: 4 },
                { image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1661958160494", brand: "Apple", model: "iPhone12", ram: "4GB", memory: "128GB", rating: "3.0", price: "44999", stock: 14 },
                { image: "https://image.oppo.com/content/dam/oppo/in/mkt/phonelist/products/reno4-pro-white.png", brand: "Redmi", model: "Pixle12", ram: "8GB", memory: "64GB", rating: "3.0", price: "28809", stock: 4 },
                { image: "https://m.media-amazon.com/images/I/617MPEZB5mL._SX679_.jpg", brand: "Poco", model: "Note13", ram: "12GB", memory: "128GB", rating: "5.0", price: "30999", stock: 42 },
                { image: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", brand: "Vivo", model: "V20", ram: "8GB", memory: "128GB", rating: "3.0", price: "35999", stock: 2 },
                { image: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", brand: "Realme", model: "Hex13", ram: "8GB", memory: "64GB", rating: "3.0", price: "16000", stock: 24 },
                { image: "https://image.oppo.com/content/dam/oppo/in/mkt/phonelist/products/reno4-pro-white.png", brand: "Oppo", model: "Note Pro", ram: "4GB", memory: "128GB", rating: "2.0", price: "40099", stock: 4 },
                { image: "https://m.media-amazon.com/images/I/617MPEZB5mL._SX679_.jpg", brand: "Oneplus", model: "Promax", ram: "8GB", memory: "256GB", rating: "3.0", price: "70999", stock: 4 }
            ],
            fil_list: [
                { image: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", brand: "Apple", model: "iPhone13", ram: "8GB", memory: "128GB", rating: "3.0", price: "60999", stock: 4 },
                { image: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", brand: "Vivo", model: "Y15", ram: "12GB", memory: "128GB", rating: "3.9", price: "64599", stock: 41 },
                { image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1661958160494", brand: "Oppo", model: "Note5", ram: "8GB", memory: "256GB", rating: "4.0", price: "30999", stock: 0 },
                { image: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", brand: "Samsung", model: "Galaxy13", ram: "8GB", memory: "64GB", rating: "4.0", price: 45999, stock: 4 },
                { image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone14-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1661958160494", brand: "Apple", model: "iPhone12", ram: "4GB", memory: "128GB", rating: "3.0", price: "44999", stock: 14 },
                { image: "https://image.oppo.com/content/dam/oppo/in/mkt/phonelist/products/reno4-pro-white.png", brand: "Redmi", model: "Pixle12", ram: "8GB", memory: "64GB", rating: "3.0", price: "28809", stock: 4 },
                { image: "https://m.media-amazon.com/images/I/617MPEZB5mL._SX679_.jpg", brand: "Poco", model: "Note13", ram: "12GB", memory: "128GB", rating: "5.0", price: "30999", stock: 42 },
                { image: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", brand: "Vivo", model: "V20", ram: "8GB", memory: "128GB", rating: "3.0", price: "35999", stock: 2 },
                { image: "https://rukminim1.flixcart.com/image/312/312/kzd147k0/mobile/d/1/b/-original-imagbe5qddy9xr6y.jpeg?q=70", brand: "Realme", model: "Hex13", ram: "8GB", memory: "64GB", rating: "3.0", price: "16000", stock: 24 },
                { image: "https://image.oppo.com/content/dam/oppo/in/mkt/phonelist/products/reno4-pro-white.png", brand: "Oppo", model: "Note Pro", ram: "4GB", memory: "128GB", rating: "2.0", price: "40099", stock: 4 },
                { image: "https://m.media-amazon.com/images/I/617MPEZB5mL._SX679_.jpg", brand: "Oneplus", model: "Promax", ram: "8GB", memory: "256GB", rating: "3.0", price: "70999", stock: 4 }
            ],
            searchitem: {
                brand: "", model: "", ram: "", memory: "", price: ""
            }
        }





    },
    methods: {
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
                (this.searchitem.brand ? product.brand === this.searchitem.brand : true) &&
                (this.searchitem.model ? product.model === this.searchitem.model : true) &&
                (this.searchitem.ram ? product.ram === this.searchitem.ram : true) &&
                (this.searchitem.memory ? product.memory === this.searchitem.memory : true) &&
                (this.searchitem.price ? product.price >= this.searchitem.price : true)
            )


        }
    }
}