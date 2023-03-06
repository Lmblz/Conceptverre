<template>
    <PageHeader srcHeader="../assets/header-account" titleHeader="Mon compte" />
    <main class="account">
        <AsideAccount
            @myaccount="this.entryAccount()"
            @mycustoms="this.entryCustoms()"
            @mypurchases="this.entryPurchases()"
            @logout="this.logOut()"
            v-if="isLogged"
        />
        <div class="content" v-if="isLogged">
            <MyAccount v-if="account" />
            <MyCustoms v-if="customs" />
            <MyPurchases v-if="purchases" />
        </div>
        <div class="login" v-if="!isLogged">
            <div class="login__noaccount" v-if="showMessage">
                <h2>Vous n'êtes pas identifié</h2>
                <div class="login-button">
                    <button
                        class="btn-black"
                        @click="
                            choiceLogin = true;
                            showMessage = false;
                        "
                    >
                        Se connecter
                    </button>
                    <p>
                        Pas de compte ?
                        <u
                            @click="
                                choiceSignup = true;
                                showMessage = false;
                            "
                            >Créer un compte</u
                        >
                    </p>
                </div>
            </div>
            <div class="login__form" v-if="choiceLogin">
                <FormConectAcount @loggedIn="userLoggedIn" />
            </div>
            <div class="login__signup-form" v-if="choiceSignup">
                <FormCreateAccount @loggedIn="userSignedUp" />
            </div>
        </div>
    </main>
</template>

<script>
import FormCreateAccount from "@/components/FormCreateAccount.vue";
import FormConectAcount from "@/components/FormConnectAccount.vue";
import PageHeader from "@/components/PageHeader.vue";
import AsideAccount from "@/components/AsideAccount.vue";
import MyAccount from "@/components/MyAccount.vue";
import MyCustoms from "@/components/MyCustoms.vue";
import MyPurchases from "@/components/MyPurchases.vue";

export default {
    components: {
        /* eslint-disable */
        FormCreateAccount,
        FormConectAcount,
        PageHeader,
        AsideAccount,
        MyAccount,
        MyCustoms,
        MyPurchases,
    },
    data() {
        return {
            isLogged: false,
            account: true,
            customs: false,
            purchases: false,
            choiceLogin: false,
            choiceSignup: false,
            showMessage: true,
            userData: {},
        };
    },
    methods: {
        entryAccount() {
            this.$data.account = true;
            this.$data.customs = false;
            this.$data.purchases = false;
            return;
        },
        entryCustoms() {
            this.$data.account = false;
            this.$data.customs = true;
            this.$data.purchases = false;
            return;
        },
        entryPurchases() {
            this.$data.account = false;
            this.$data.customs = false;
            this.$data.purchases = true;
            return;
        },
        logOut() {
            location.reload();
        },
        userLoggedIn(data) {
            this.isLogged = true;
            this.userData = data;
        },
        userSignedUp(data) {
            this.userData.user_email = data.email;
            this.userData.user_display_name = data.name;
            this.isLogged = true;
        },
    },
};
</script>

<style lang="scss">
.account {
    display: flex;

    .aside-account {
        max-width: 455px;
        width: 100%;
    }

    .content {
        width: 100%;
        margin: 0 5vw 0 2vw;
    }
    .login {
        width: 90%;
        margin: auto;
        text-align: center;

        &__noaccount {
            u {
                cursor: pointer;
            }
        }
    }
}
</style>
