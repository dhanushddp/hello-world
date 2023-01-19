import { mapActions } from 'vuex'
export default {
    name: "LoginPage",
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
        checkLogin(user) {
            if (localStorage.getItem('user') === null || localStorage.getItem('user') === "{}") {
                localStorage.setItem('user', JSON.stringify(user))

            }
            return JSON.parse(localStorage.getItem('user'))

        },
        loginCheck() {

            let userFound = this.user_data.find(user => this.users.name === user.name && this.users.pass == user.pass)

            if (userFound) {

                this.getUser(userFound)
                let data = this.checkLogin(userFound)
                if (data) {
                    this.$router.push({ name: "PersonalInfo", query: { user_name: data.name } })
                }

            } else {
                alert('incorrect')
            }

            // this.$emit('loggedin',userFound)
            // this.$emit('user',userFound.name)
        },
        onSuccess() {

        }
    }
}