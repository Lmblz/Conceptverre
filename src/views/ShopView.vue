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
                    >
                        <div class="products__product__container">
                            <div class="products__product__container__image">
                                <img :src="product.images[0].src" alt="" />
                            </div>
                            <div class="products__product__container__title">
                                <p>{{ product.name }}</p>
                            </div>
                            <div class="products__product__container__price">
                                <p>{{ product.price }}€</p>
                            </div>
                        </div>
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

    main {
        width: 100%;
    }

    .products {
        display: flex;
        flex-wrap: wrap;
        margin: 2%;
        width: 96%;
        justify-content: center;

        &__product {
            max-width: 300px;
            margin: 0 30px;
            width: 100%;

            &__container {
                text-align: center;

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
