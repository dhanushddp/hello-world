import { mapActions } from 'vuex'
export default {
    name: "LoginComponent",
    data() {
        return {
            users: { name: "", pass: "" },
            user_data: [
                { name: "dhanushddp", pass: "12345" },
                { name: "nagadeepan", pass: "67890" },
                { name: "harihari", pass: "09090" }]
        }

    },
    methods: {
        ...mapActions(['getUser']),
        loginCheck() {

            let userFound = this.user_data.find(user => this.users.name === user.name && this.users.pass == user.pass)

            if (userFound) {
                this.getUser(userFound)

            } else {
                alert('incorrect')
            }

            // this.$emit('loggedin',userFound)
            // this.$emit('user',userFound.name)
        }
    }
}