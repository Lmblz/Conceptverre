<template>
    <div class="form__connect">
        <h2>Se connecter</h2>
        <form @submit.prevent="submitForm">
            <input
                type="text"
                name="id"
                v-model="usernameOrEmail"
                placeholder="Nom d'utilisateur ou adresse e-mail"
            />
            <input
                type="password"
                name="password"
                v-model="password"
                placeholder="Mot de passe"
            />
            <button type="submit" class="btn-black">Se connecter</button>
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
                this.$emit("loggedIn", response.data);
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style scoped lang="scss">
.form__connect {
    margin-bottom: 5rem;
    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;

        input {
            height: 4rem;
            padding-left: 2rem;
            font-family: "Silk Serif", Arial, Helvetica, sans-serif !important;
            font-size: 1.5rem !important;
            border: solid 1px black;
            outline: none;

            &::placeholder {
                font-family: "Silk Serif", Arial, Helvetica, sans-serif;
            }

            &:first-of-type {
                grid-column: 1/2;
            }

            &:last-of-type {
                grid-column: 2/3;
            }
        }

        button {
            grid-row: 2/3;
            grid-column: 1/3;
            width: fit-content;
            margin: auto;
        }
    }
}
</style>
