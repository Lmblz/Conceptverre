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
                                Les appliques ont ??t?? livr??es dans les temps et
                                elles ??taient parfaitement emball??es. Concept
                                Verre a su r??pondre en mes attentes en
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
                                les d??lais et un emballage soign?? pour prot??ger
                                le luminaire, je ne regrette pas mon achat.
                                C???est un bel investissement qui vient embellir
                                mon int??rieur. Merci.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="feedbacks-faq__faq">
                <h3>Questions fr??quentes</h3>
                <div class="separator"></div>
                <div
                    v-for="(question, index) in this.questions"
                    :key="question.title"
                >
                    <div
                        @click="() => handleAccordion(index)"
                        class="feedbacks-faq__faq__question"
                        :class="{ active: isExpanded }"
                    >
                        <p>
                            {{ question.title }}
                        </p>
                    </div>
                    <Collapse
                        :when="questions[index].isExpanded"
                        class="collapse feedbacks-faq__faq__reponse"
                    >
                        <p>
                            {{ question.answer }}
                        </p>
                    </Collapse>
                </div>
            </div>
        </div>
        <div class="help">
            <h3>
                Vous ne trouvez pas de <br />
                r??ponse ?? votre question ?
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
import { Collapse } from "vue-collapsed";
import $ from "jquery";
import { client } from "../utils/axios";
import PageHeader from "@/components/PageHeader.vue";
import ThreeImagesFW from "@/components/ThreeImagesFW.vue";
import { reactive } from "vue";
export default {
    data() {
        return {
            questions: reactive([
                {
                    title: "Quels sont vos d??lais de livraison ?",
                    answer: "Nos d??lais de livraison sont d'habituellement ... jours pour un produit en stock. Si le produit doit ??tre produit ?? la demande, le d??lais peut aller jusq'?? ... semaines, dans ce cas nous vous invitons ?? nous contacter.",
                    isExpanded: false, // Initial value
                },
                {
                    title: "Comment personnaliser mon luminaire ?",
                    answer: "Il vous suffit de vous rendre sur la page de personnalisation et de vous laisser guider par votre imagination.",
                    isExpanded: false,
                },
                {
                    title: "Comment installer ma suspension ?",
                    answer: "Nos suspensions sont livr??es avec un syst??me breuvet?? de fixation, il vous suffit de percer un trou de la largeur de la cheville fournie avec votre luminaire, puis d'y visser votre applique.",
                    isExpanded: false,
                },
            ]),
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
                    "Le luminaire Maestro se distingue par un socle rond et un verre ??lanc??, comme fig?? en plein travail du souffleur. En suspension, le mod??le Maestro mise sur ses reflets or, cuivre ou chrome pour habiller votre int??rieur. Une cr??ation ??lanc??e et design qui garde l???esprit de simplicit?? et d?????l??gance de la marque.";
                this.addCollContent(contentDescColl);
                break;
            default:
                contentDescColl = "Super collection";
                this.addCollContent(contentDescColl);
        }

        setTimeout(() => {
            $("bdi")[0].style.fontSize = "50px";
            $("bdi")[0].children[0].style.fontSize = "50px";
        }, 50);
    },
    methods: {
        addCollContent(content) {
            document.querySelector(".collection-info__content").innerHTML =
                content;
        },
        handleAccordion(selectedIndex) {
            this.questions.forEach((_, index) => {
                this.questions[index].isExpanded =
                    index === selectedIndex
                        ? !this.questions[index].isExpanded
                        : false;
            });
        },
    },
    components: { PageHeader, ThreeImagesFW, Collapse },
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

            & > p {
                height: 100%;
                margin: 0;
            }
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

    &__faq {
        & > div {
            &:last-of-type {
                border-bottom: solid 1px #d6d6d6;
            }
        }

        &__question {
            border: solid 1px #d6d6d6;
            border-bottom: 0;
            cursor: pointer;

            &:hover {
                p {
                    opacity: 0.7;
                }
            }

            p {
                margin: 0;
                padding: 1rem;
                text-decoration: underline;
                transition: all 0.5s;
                text-align: left;
                text-transform: uppercase;
                position: relative;

                &:after {
                    position: absolute;
                    content: "";
                    right: 20px;
                    top: 45%;
                    width: 10px;
                    height: 10px;
                    border: solid 1px black;
                    border-left: none;
                    border-top: none;
                    transform: rotate(-45deg);
                }
            }
        }

        &__reponse {
            transition: height 600ms cubic-bezier(0.3, 0, 0.6, 1);
            p {
                border-left: solid 1px #d6d6d6;
                border-right: solid 1px #d6d6d6;

                margin: 0;
                padding: 1rem;
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
