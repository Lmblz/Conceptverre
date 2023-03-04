<template>
    <div>
        <h1>Se connecter</h1>
        <form @submit.prevent="submitForm">
            <label>
                Nom d'utilisateur ou adresse email :
                <input type="text" v-model="usernameOrEmail" />
            </label>
            <br />
            <label>
                Mot de passe :
                <input type="password" v-model="password" />
            </label>
            <br />
            <button type="submit">Se connecter</button>
        </form>
    </div>
</template>

<script>
import { client } from "../utils/axios";

export default {
    data() {
        return {
            usernameOrEmail: "",
            password: "",
        };
    },
    name: "FormConnectAccount",
    methods: {
        async submitForm() {
            try {
                const response = await client.post(
                    "https://conceptverre.lambolezth.fr/wp-json/jwt-auth/v1/token",
                    {
                        username: this.usernameOrEmail,
                        password: this.password,
                    }
                );
                const token = response.data.token;
                localStorage.setItem("token", token);
                console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
