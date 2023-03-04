<template>
    <!-- <FormCreateAccount />
    <FormConectAcount /> -->
    <PageHeader srcHeader="../assets/header-account" titleHeader="Mon compte" />
    <main class="account">
        <AsideAccount
            @myaccount="this.entryAccount()"
            @mycustoms="this.entryCustoms()"
            @mypurchases="this.entryPurchases()"
        />
        <div class="content">
            <MyAccount v-if="account" />
            <MyCustoms v-if="customs" />
            <MyPurchases v-if="purchases" />
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
            account: false,
            customs: false,
            purchases: true,
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
}
</style>
