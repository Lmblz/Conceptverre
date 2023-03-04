<template>
    <div class="purchases">
        <div class="error">
            <h2>Vous n'avez encore pas passé commande</h2>
            <RouterLink to="/boutique"
                ><button class="btn-black">
                    Visiter la boutique
                </button></RouterLink
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "MyPurchases",
};
</script>

<style lang="scss">
.purchases {
    margin-bottom: 6rem;
}
</style>
