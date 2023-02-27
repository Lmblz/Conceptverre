<template>
    <aside class="shop-filters">
        <div class="shop-filters__container">
            <div class="shop-filters__container__dropdown collection">
                <p class="shop-filters__container__dropdown__filter" @click="this.openFilter('collection')">Collection</p>
                <div class="shop-filters__container__dropdown__entries">
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
            <div class="shop-filters__container__dropdown color">
                <p class="shop-filters__container__dropdown__filter" @click="this.openFilter('color')">Couleur</p>
                <div class="shop-filters__container__dropdown__entries">
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
            <div class="shop-filters__container__dropdown price">
                <p class="shop-filters__container__dropdown__filter" @click="this.openFilter('price')">Prix</p>
                <div class="shop-filters__container__dropdown__entries">
                    <ul>
                        <li>Moins de 500€</li>
                        <li>Entre 500€ et 1.000€</li>
                        <li>Entre 1.000€ et 2.000€</li>
                        <li>Plus de 2.000€</li>
                    </ul>
                </div>
            </div>
            <div class="shop-filters__container__dropdown type">
                <p class="shop-filters__container__dropdown__filter" @click="this.openFilter('type')">Type</p>
                <div class="shop-filters__container__dropdown__entries">
                    <ul>
                        <li>Applique</li>
                        <li>Lampadaire</li>
                        <li>Lustre</li>
                        <li>Suspension</li>
                        <li>Lampe à poser</li>
                    </ul>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
    export default {
        name: 'ShopFilters',
        methods: {
            openFilter(el) {
                let filterDropdown = document.querySelector(`.${el}`)
                filterDropdown.classList.contains('open')
                    ? filterDropdown.classList.remove('open')
                    : filterDropdown.classList.add('open')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .shop-filters {
        max-width: 455px;
        margin: 0 2%;

        &__container {
            &__dropdown {
                background: white;
                &__filter {
                    border-top: solid 1px black;
                    margin: 0;
                    text-transform: uppercase;
                    padding: 0.5rem;
                    cursor: pointer;
                    position: relative;

                    &::after {
                        position: absolute;
                        right: .5rem;
                        top: 30%;
                        content: '';
                        border-bottom: 1px black solid;
                        border-right: 1px black solid;
                        width: 12px;
                        height: 12px;
                        transform: rotateZ(45deg);
                        transition: all .5s;
                    }
                }
                &__entries {
                    height: 0;
                    visibility: hidden;

                    ul {
                        margin: 0;
                        display: flex;
                        flex-wrap: wrap;

                        li {
                            list-style: none;
                            width: calc(50% - .5rem);
                            cursor: pointer;
                            padding: .5rem .25rem;
                        }
                    }
                }
            
                &.open {
                    .shop-filters__container__dropdown__filter {
                        border-bottom: solid 1px black;

                        &:after {
                            transform: rotateZ(45deg) rotate(180deg);
                            top: 40%;
                        }
                    }
                    .shop-filters__container__dropdown__entries {
                        height: inherit;
                        visibility: visible;
                    }
                }

                &.type {
                    .shop-filters__container__dropdown__filter {
                        border-bottom: solid 1px black;
                    }
                }
            }
        }
    }
</style>