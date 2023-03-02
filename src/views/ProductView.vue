<template>
    <PageHeader srcHeader="../assets/header-shop" titleHeader="Boutique" />
    <main>
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
                <div class="fiche-produit__description__price">
                    <div v-html="this.currentProduct.price_html"></div>
                    <p>TTC</p>
                </div>
                <div
                    class="fiche-produit__description__info"
                    v-html="this.currentProduct.description"
                ></div>
                <button class="btn-black">Ajouter au panier</button>
            </div>
        </div>
        <div class="collection-info">
            <h3>
                La collection
                <i>{{ this.currentProduct.attributes[0].options[0] }}</i>
            </h3>
            <p class="collection-info__content"></p>
        </div>
        <div class="feedbacks-faq">
            <div class="feedbacks-faq__feedbacks">
                <h3>Vos avis</h3>
                <div class="separator"></div>
                <h3>4.5/5</h3>
                <div class="feedbacks-faq__feedbacks__user-feedbacks">
                    <div
                        class="feedbacks-faq__feedbacks__user-feedbacks__feedback"
                    >
                        <div
                            class="feedbacks-faq__feedbacks__user-feedbacks__feedback__note"
                        >
                            <p class="note">5/5</p>
                            <p>Juliette H.</p>
                        </div>
                        <div
                            class="feedbacks-faq__feedbacks__user-feedbacks__feedback__comment"
                        >
                            <p>
                                Les appliques ont été livrées dans les temps et
                                elles étaient parfaitement emballées. Concept
                                Verre a su répondre en mes attentes en
                                personnalisant ce luminaire en fonction de mes
                                envies. Je recommande !
                            </p>
                        </div>
                    </div>
                    <div
                        class="feedbacks-faq__feedbacks__user-feedbacks__feedback"
                    >
                        <div
                            class="feedbacks-faq__feedbacks__user-feedbacks__feedback__note"
                        >
                            <p class="note">4/5</p>
                            <p>Jacques W.S</p>
                        </div>
                        <div
                            class="feedbacks-faq__feedbacks__user-feedbacks__feedback__comment"
                        >
                            <p>
                                Un service client disponible, une livraison dans
                                les délais et un emballage soigné pour protéger
                                le luminaire, je ne regrette pas mon achat.
                                C’est un bel investissement qui vient embellir
                                mon intérieur. Merci.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="feedbacks-faq__faq">
                <h3>Questions fréquentes</h3>
                <div class="separator"></div>
                <p>FAQ</p>
            </div>
        </div>
        <div class="help">
            <h3>
                Vous ne trouvez pas de <br />
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
    </main>
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

        const collectionProduct =
            this.currentProduct.attributes[0].options[0].toLowerCase();
        let contentDescColl = "";
        switch (collectionProduct) {
            case "maestro":
                contentDescColl =
                    "Le luminaire Maestro se distingue par un socle rond et un verre élancé, comme figé en plein travail du souffleur. En suspension, le modèle Maestro mise sur ses reflets or, cuivre ou chrome pour habiller votre intérieur. Une création élancée et design qui garde l’esprit de simplicité et d’élégance de la marque.";
                this.addCollContent(contentDescColl);
                break;
            default:
                contentDescColl = "Super collection";
                this.addCollContent(contentDescColl);
        }
    },
    methods: {
        addCollContent(content) {
            document.querySelector(".collection-info__content").innerHTML =
                content;
        },
    },
    components: { PageHeader, ThreeImagesFW },
};
</script>

<style lang="scss" scoped>
.fiche-produit {
    display: flex;
    padding: 0 5vw;
    gap: 5vw;
    margin-bottom: 8rem;

    > * {
        width: 50%;
    }

    &__images {
        &__big {
            img {
                width: 100%;
                height: auto;
                max-width: 772px;
            }
        }
    }

    &__description {
        padding-right: 2vw;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        h2 {
            font-size: 5rem !important;
            margin: inherit !important;
        }

        &__price {
            display: flex;
            align-items: center;
        }

        button {
            width: fit-content;
        }
    }
}
.collection-info {
    margin-bottom: 8rem;
    h3 {
        text-align: center;
    }

    &__content {
        max-width: 90%;
        margin: auto;
        text-align: center;
    }
}

.feedbacks-faq {
    display: flex;
    padding: 0 5vw;
    gap: 5vw;

    > * {
        width: 50%;
        text-align: center;

        h3 {
            margin: inherit !important;
        }

        .separator {
            height: 1px;
            width: 7.5rem;
            background: black;
            margin: auto;
            margin-top: 2rem;
        }
    }

    &__feedbacks {
        &__user-feedbacks {
            &__feedback {
                display: flex;
                gap: 2rem;
                border: solid 1px #d6d6d6;
                margin: 2rem 0;
                padding: 0.5rem;

                &__note {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    max-width: 130px;
                    width: 100%;
                    p.note {
                        font-family: "Silk Serif", Arial, Helvetica, sans-serif !important;
                        font-size: 2.5rem !important;
                        text-align: center;
                    }

                    p {
                        margin: inherit !important;
                        white-space: pre;
                    }
                }

                &__comment {
                    p {
                        text-align: left;
                    }
                }
            }
        }
    }
}

.help {
    text-align: center;
    max-width: 90%;
    margin: 0 auto 2rem auto;
}

.three-images-fw {
    margin-bottom: 2rem;
}
</style>
