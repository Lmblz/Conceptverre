<template>
    <div class="customs">
        <div class="error">
            <h2>Vous n'avez pas de personnalisation(s)</h2>
            <RouterLink to="/personnalisation">
                <button class="btn-black">
                    Personnaliser un produit
                </button></RouterLink
            >
        </div>
    </div>
</template>

<script>
export default {
    name: "MyCustoms",
};
</script>

<style lang="scss">
.customs {
    margin-bottom: 6rem;
}
</style>
