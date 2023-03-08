<template>
    <aside class="aside-account">
        <div class="aside-account__container">
            <div
                class="aside-account__container__entry"
                @click="$emit('myaccount')"
            >
                <p>Mon compte</p>
            </div>
            <div
                class="aside-account__container__entry"
                @click="$emit('mycustoms')"
            >
                <p>Mes personnalisations</p>
            </div>
            <div
                class="aside-account__container__entry"
                @click="$emit('mypurchases')"
            >
                <p>Mes commandes</p>
            </div>
            <div
                class="aside-account__container__entry"
                @click="$emit('logout')"
            >
                <p>Déconnexion</p>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    name: "AsideAccount",
};
</script>

<style lang="scss" scoped>
.aside-account {
    max-width: 455px;
    margin: 0 2%;

    @media all and (max-width: 1024px) {
        max-width: 95% !important;
        margin-bottom: 3rem;
    }

    &__container {
        &__entry {
            background: white;
            border-top: solid 1px black;
            margin: 0;
            text-transform: uppercase;
            padding: 0.5rem;
            cursor: pointer;
            position: relative;
            transition: all 0.5s;

            &:hover {
                opacity: 0.7;
            }

            &:last-of-type {
                border-bottom: solid 1px black;
            }

            p {
                margin: 0;
            }
        }
    }
}
</style>
