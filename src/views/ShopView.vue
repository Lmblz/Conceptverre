<template>
    <div class="shop">
        <PageHeader srcHeader="../assets/header-shop" titleHeader="Boutique" />
        <div class="content">
            <ShopFilters />
            <main>
                <div class="products">
                    <!-- eslint-disable -->
                    <div
                        class="products__product"
                        v-for="product in products"
                        key="id"
                        :data-cat="product.attributes[0].options[0]"
                        :data-col="product.attributes[1].options[0]"
                        :data-pri="product.price"
                        :data-typ="product.categories[0].slug"
                    >
                        <router-link :to="'/boutique/' + product.id">
                            <div class="products__product__container">
                                <div
                                    class="products__product__container__image"
                                >
                                    <img :src="product.images[0].src" alt="" />
                                </div>
                                <div
                                    class="products__product__container__title"
                                >
                                    <p>{{ product.name }}</p>
                                </div>
                                <div
                                    class="products__product__container__price"
                                >
                                    <p>{{ product.price }}€</p>
                                </div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
import ShopFilters from "@/components/ShopFilters.vue";
import { client } from "../utils/axios";
export default {
    components: {
        PageHeader,
        ShopFilters,
    },
    data() {
        return {
            products: [],
        };
    },
    async mounted() {
        // Get all woocommerce products
        const productResponse = await client.get("/wc/v3/products");
        this.products = productResponse.data;
        console.log(this.products);

        // Get all woocommerce categories
        // const categoriesResponse = await client.get("/wc/v3/products/categories")
        // this.categories = categoriesResponse.data
        // console.log(this.categories)
    },
};
</script>

<style lang="scss" scoped>
.content {
    display: flex;

    @media all and (max-width: 1024px) {
        flex-direction: column;

        .shop-filters {
            margin: 0 auto 5rem auto;
        }
    }

    main {
        width: 100%;
    }

    .products {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin: 0 auto 5rem auto;
        width: 92%;

        @media all and (max-width: 900px) {
            grid-template-columns: repeat(2, 1fr);
        }

        &__product {
            max-width: 300px;
            width: 100%;

            & > a {
                color: inherit;
                text-decoration: none;
            }

            &:hover {
                p {
                    text-decoration: underline;
                }
            }

            &.search {
                display: none;

                &__result {
                    display: block !important;
                }
            }

            &__container {
                text-align: center;

                &__image {
                    img {
                        width: 100%;
                    }
                }

                &__title {
                    p {
                        font-family: "Silk Serif Regular", Arial, Helvetica,
                            sans-serif !important;
                        font-size: 1.25rem !important;
                    }
                }

                &__price {
                    p {
                        font-family: "Silk Serif Regular", Arial, Helvetica,
                            sans-serif !important;
                        font-family: "Darker Grotesque Light", Arial, Helvetica,
                            sans-serif !important;
                    }
                }

                p {
                    margin: 0;
                }
            }
        }
    }
}
</style>
