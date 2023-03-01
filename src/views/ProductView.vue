<template>
    <PageHeader srcHeader="../assets/header-shop" titleHeader="Boutique" />
    <div class="fiche-produit">
        <div class="fiche-produit__images">
            <div class="fiche-produit__images__big">
                <img
                    :src="this.imageProduct"
                    alt="Image du produit"
                    height="965"
                    width="772"
                />
            </div>
        </div>
        <div class="fiche-produit__description">
            <h2>{{ this.currentProduct.name }}</h2>
            <div v-html="this.currentProduct.price_html"></div>
            <div
                class="fiche-produit__description__info"
                v-html="this.currentProduct.description"
            ></div>
        </div>
    </div>
    <div class="collection-info">
        <h3>
            La collection
            <i>{{ this.currentProduct.attributes[0].options[0] }}</i>
        </h3>
    </div>
    <div class="feedbacks-faq">
        <div class="feedbacks-faq__feedbacks">
            <h3>Vos avis</h3>
            <div class="separator"></div>
            <h3>4.5/5</h3>
            <div class="feedbacks-faq__feedbacks__user-feedbacks">
                <div class="feedbacks-faq__feedbacks__user-feedbacks__feedback">
                    <div
                        class="feedbacks-faq__feedbacks__user-feedbacks__feedback__note"
                    >
                        <p>5/5</p>
                        <p>Juliette H.</p>
                    </div>
                    <div
                        class="feedbacks-faq__feedbacks__user-feedbacks__feedback__comment"
                    >
                        <p>
                            Les appliques ont été livrées dans les temps et
                            elles étaient parfaitement emballées. Concept Verre
                            a su répondre en mes attentes en personnalisant ce
                            luminaire en fonction de mes envies. Je recommande !
                        </p>
                    </div>
                </div>
                <div class="feedbacks-faq__feedbacks__user-feedbacks__feedback">
                    <div
                        class="feedbacks-faq__feedbacks__user-feedbacks__feedback__note"
                    >
                        <p>4/5</p>
                        <p>Jacques W.S</p>
                    </div>
                    <div
                        class="feedbacks-faq__feedbacks__user-feedbacks__feedback__comment"
                    >
                        <p>
                            Un service client disponible, une livraison dans les
                            délais et un emballage soigné pour protéger le
                            luminaire, je ne regrette pas mon achat. C’est un
                            bel investissement qui vient embellir mon intérieur.
                            Merci.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="feedbacks-faq__faq">
            <h3>Questions fréquentes</h3>
            <div class="separator">FAQ</div>
        </div>
        <h3>
            Vous ne truvez pas de <br />
            réponse à votre question ?
        </h3>
        <router-link to="/contact">
            <button class="btn-black">Contactez-nous</button>
        </router-link>
    </div>
    <ThreeImagesFW
        threeImgLeft="../assets/custom-img-1"
        threeImgCenter="../assets/custom-img-2"
        threeImgRight="../assets/custom-img-3"
    />
</template>

<script>
import { client } from "../utils/axios";
import PageHeader from "@/components/PageHeader.vue";
import ThreeImagesFW from "@/components/ThreeImagesFW.vue";
export default {
    data() {
        return {
            currentProduct: {
                images: [],
                attributes: [
                    {
                        options: [""],
                    },
                ],
            },
            imageProduct: "",
        };
    },
    async mounted() {
        this.$route.params;
        // Get all woocommerce products
        const productResponse = await client.get("/wc/v3/products");
        this.products = productResponse.data;
        console.log(this.products);
        let productId = this.$route.params.idproduct;
        this.currentProduct = this.products.find((e) => e.id === +productId);
        this.imageProduct = this.currentProduct.images[1].src;
        console.log(this.currentProduct);
        // Get all woocommerce categories
        // const categoriesResponse = await client.get("/wc/v3/products/categories")
        // this.categories = categoriesResponse.data
        // console.log(this.categories)
    },
    components: { PageHeader, ThreeImagesFW },
};
</script>
