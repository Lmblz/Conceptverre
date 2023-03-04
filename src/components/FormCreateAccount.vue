<template>
    <div>
        <h1>Créer un nouveau compte</h1>
        <form @submit.prevent="submitForm">
            <label>
                Nom d'utilisateur :
                <input type="text" v-model="username" />
            </label>
            <br />
            <label>
                Adresse email :
                <input type="email" v-model="email" />
            </label>
            <br />
            <label>
                Mot de passe :
                <input type="password" v-model="password" />
            </label>
            <br />
            <button type="submit">Créer un compte</button>
        </form>
    </div>
</template>

<script>
import { client } from "../utils/axios";

export default {
    data() {
        return {
            username: "",
            email: "",
            password: "",
        };
    },
    name: "FormCreateAccount",
    methods: {
        async submitForm() {
            try {
                const response = await client.post(
                    "https://conceptverre.lambolezth.fr/wp-json/wp/v2/users",
                    {
                        username: this.username,
                        email: this.email,
                        password: this.password,
                    },
                    {
                        headers: {
                            Authorization: `Basic ${btoa(
                                `${process.env.VUE_APP_WP_USERNAME}:${process.env.VUE_APP_WP_PASSWORD}`
                            )}`,
                        },
                    }
                );
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
