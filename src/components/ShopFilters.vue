<template>
    <aside class="shop-filters">
        <div class="shop-filters__container">
            <div class="shop-filters__container__dropdown collection">
                <p
                    class="shop-filters__container__dropdown__filter"
                    @click="this.openFilter('collection')"
                >
                    Collection
                </p>
                <div class="shop-filters__container__dropdown__entries">
                    <ul>
                        <li id="maestro">Maestro</li>
                        <li id="okio">Okio</li>
                        <li id="belladonna">Belladonna</li>
                        <li id="prisma">Prisma</li>
                        <li id="senso">Senso</li>
                        <li id="vallons">Vallons</li>
                    </ul>
                </div>
            </div>
            <div class="shop-filters__container__dropdown color">
                <p
                    class="shop-filters__container__dropdown__filter"
                    @click="this.openFilter('color')"
                >
                    Couleur
                </p>
                <div class="shop-filters__container__dropdown__entries">
                    <ul>
                        <li id="bleu">Bleu</li>
                        <li id="jaune">Jaune</li>
                        <li id="rouge">Rouge</li>
                        <li id="vert">Vert</li>
                        <li id="violet">Violet</li>
                        <li id="noir">Noir</li>
                    </ul>
                </div>
            </div>
            <div class="shop-filters__container__dropdown price">
                <p
                    class="shop-filters__container__dropdown__filter"
                    @click="this.openFilter('price')"
                >
                    Prix
                </p>
                <div class="shop-filters__container__dropdown__entries">
                    <ul>
                        <li id="500-minus">Moins de 500€</li>
                        <li id="500-more">Entre 500€ et 1.000€</li>
                        <li id="1000-more">Entre 1.000€ et 2.000€</li>
                        <li id="2000-more">Plus de 2.000€</li>
                    </ul>
                </div>
            </div>
            <div class="shop-filters__container__dropdown type">
                <p
                    class="shop-filters__container__dropdown__filter"
                    @click="this.openFilter('type')"
                >
                    Type
                </p>
                <div class="shop-filters__container__dropdown__entries">
                    <ul>
                        <li id="applique">Applique</li>
                        <li id="lampadaire">Lampadaire</li>
                        <li id="lustre">Lustre</li>
                        <li id="suspension">Suspension</li>
                        <li id="lampe-a-poser">Lampe à poser</li>
                    </ul>
                </div>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    name: "ShopFilters",
    methods: {
        openFilter(el) {
            let filterDropdown = document.querySelector(`.${el}`);
            filterDropdown.classList.contains("open")
                ? filterDropdown.classList.remove("open")
                : filterDropdown.classList.add("open");
        },
        activateFilter(e) {
            let filterName = e.target.id.toLowerCase();
            let products = document.querySelectorAll(".products__product");
            //On fait une boucle dans tous les produits
            for (let i = 0; i < products.length; i++) {
                let productAttr = products[i].attributes;
                //On boucle dans les attributs pour voir si l'id et l'attribut match
                for (let j = 0; j < productAttr.length; j++) {
                    let currentAttr = productAttr[j].nodeValue.toLowerCase();
                    console.log(
                        "Attribut : " + currentAttr + ", Filtre : " + filterName
                    );
                    //Si il y a match
                    if (currentAttr == filterName) {
                        products[i].classList.add("search__result");
                        i++;
                    } else {
                        products[i].classList.add("search");
                    }
                }
            }
        },
        disactivateFilter() {
            let products = document.querySelectorAll(".products__product");
            for (let i = 0; i < products.length; i++) {
                let product = products[i];
                product.classList.contains("search__result")
                    ? product.classList.remove("search__result", "search")
                    : product.classList.remove("search");
            }

            console.log(document.querySelectorAll("aside li.active"));
        },
    },
    mounted() {
        let filters = document.querySelectorAll(".shop-filters__container li");
        let filterClicked = (e) => {
            //Contient la classe active ?
            if (e.target.classList.contains("active")) {
                //Oui, on enlève la classe
                e.target.classList.remove("active");
                this.disactivateFilter(e);
            } else {
                //Non, on lui attribue la classe
                e.target.classList.add("active");
                this.activateFilter(e);
            }
        };
        for (let filter of filters) {
            filter.addEventListener("click", filterClicked);
        }
    },
};
</script>

<style lang="scss" scoped>
.shop-filters {
    max-width: 455px;

    @media all and (max-width: 1600px) and (min-width: 1024px) {
        max-width: 24vw;
    }

    @media all and (min-width: 1025px) {
        margin: 0 2% !important;
    }

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
                    right: 0.5rem;
                    top: 30%;
                    content: "";
                    border-bottom: 1px black solid;
                    border-right: 1px black solid;
                    width: 12px;
                    height: 12px;
                    transform: rotateZ(45deg);
                    transition: all 0.5s;
                }
            }
            &__entries {
                height: 0;
                visibility: hidden;

                ul {
                    margin: 0;
                    display: flex;
                    flex-wrap: wrap;
                    padding-left: 1rem;

                    li {
                        list-style: none;
                        width: calc(50% - 2rem);
                        cursor: pointer;
                        padding: 0.5rem 1rem;
                        position: relative;

                        &:before {
                            content: "";
                            position: absolute;
                            left: -0.5rem;
                            top: 55%;
                            transform: translateY(-50%);
                            border: solid 1px #333;
                            width: 13px;
                            height: 13px;
                        }

                        &.active {
                            &:before {
                                background: #333;
                            }
                        }
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
