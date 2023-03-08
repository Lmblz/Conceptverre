<template>
    <div class="form__create">
        <h2>Créer un compte</h2>
        <form @submit.prevent="submitForm">
            <input
                type="text"
                v-model="username"
                class="username"
                placeholder="Nom d'utilisateur"
            />
            <input
                type="text"
                v-model="fname"
                class="fname"
                placeholder="Nom de famille"
            />
            <input
                type="text"
                v-model="lname"
                class="lname"
                placeholder="Prénom"
            />
            <input
                type="email"
                v-model="email"
                class="email"
                placeholder="Adresse e-mail"
            />
            <input
                type="password"
                v-model="password"
                class="password"
                placeholder="Mot de passe"
            />
            <button type="submit" class="btn-black">Créer un compte</button>
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
                        first_name: this.fname,
                        last_name: this.lname,
                    },
                    {
                        headers: {
                            Authorization: `Basic ${btoa(
                                `${process.env.VUE_APP_WP_USERNAME}:${process.env.VUE_APP_WP_PASSWORD}`
                            )}`,
                        },
                    }
                );
                this.$emit("loggedIn", response.data);
                //console.log(response.data);
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>

<style lang="scss">
.form__create {
    margin-bottom: 5rem;
    form {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 2rem;

        @media all and (max-width: 800px) {
            grid-template-columns: 1fr;

            input {
                grid-column: 1/2 !important;
                width: 100% !important;
            }

            button {
                grid-row: inherit !important;
            }
        }

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
                grid-column: 1/3;
                width: 50%;
                margin: auto;
            }
        }

        button {
            grid-row: 4/5;
            grid-column: 1/3;
            width: fit-content;
            margin: auto;
        }
    }
}
</style>
