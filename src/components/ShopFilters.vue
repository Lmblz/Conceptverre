<template>
    <aside class="shop-filters">
        <div class="shop-filters__container">
            <div class="shop-filters__dropdown collection">
                <p class="shop-filters__dropdown__filter">Collection</p>
                <div class="shop-filters__dropdown__entries">
                    <ul>
                        <li>Maestro</li>
                        <li>Okio</li>
                        <li>Belladonna</li>
                        <li>Prisma</li>
                        <li>Senso</li>
                        <li>Vallons</li>
                    </ul>
                </div>
            </div>
            <div class="shop-filters__dropdown color">
                <p class="shop-filters__dropdown__filter">Couleur</p>
                <div class="shop-filters__dropdown__entries">
                    <ul>
                        <li>Bleu</li>
                        <li>Jaune</li>
                        <li>Rouge</li>
                        <li>Vert</li>
                        <li>Violet</li>
                        <li>Noir</li>
                    </ul>
                </div>
            </div>
            <div class="shop-filters__dropdown price">
                <p class="shop-filters__dropdown__filter">Prix</p>
                <div class="shop-filters__dropdown__entries">
                    <ul>
                        <li>Moins de 500€</li>
                        <li>Entre 500€ et 1.000€</li>
                        <li>Entre 1.000€ et 2.000€</li>
                        <li>Plus de 2.000€</li>
                    </ul>
                </div>
            </div>
            <div class="shop-filters__dropdown type">
                <p class="shop-filters__dropdown__filter">Type</p>
                <div class="shop-filters__dropdown__entries">
                    <ul>
                        <li>Applique</li>
                        <li>Lampadaire</li>
                        <li>Lustre</li>
                        <li>Suspension</li>
                        <li>Lampe à poser</li>
                    </ul>
                </div>
            </div>
            <div class="shop-filters__dropdown details">
                <p class="shop-filters__dropdown__filter">Détails</p>
                <div class="shop-filters__dropdown__entries">
                    <ul>
                        <li>Applique</li>
                    </ul>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
    export default {
        name: 'ShopFilters'
    }
</script>