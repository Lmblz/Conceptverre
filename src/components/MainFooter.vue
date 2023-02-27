<template>
    <footer class="footer">
        <div class="footer__top">
            <div class="footer__top__infos">
                <img src="../assets/logo-old.png" />
                <div class="footer__top__infos__text">
                    <h3>Concept Verre</h3>
                    <h4>
                        Atelier basé à Nice, France <br />
                        Tous droits réservés
                    </h4>
                </div>
            </div>
            <div class="footer__top__separator"></div>
        </div>
        <div class="footer__bottom">
            <div class="footer__bottom__infos">
                <h3>HORAIRES & INFORMATIONS</h3>
                <p class="address">
                    Atelier de création<br />
                    54 Boulevard des jardiniers <br />
                    Traverse des pins <br />
                    06200 Nice
                </p>
                <p class="schedule">
                    Du lundi au vendredi <br />
                    De 8h30 à 17h00
                </p>
            </div>
            <div class="footer__bottom__sitemap">
                <h3>Plan du site</h3>
                <div class="footer__bottom__sitemap__links">
                    <router-link to="/">Accueil</router-link>
                    <router-link to="/boutique">Boutique</router-link>
                    <router-link to="/notre-histoire"
                        >Notre histoire</router-link
                    >
                    <router-link to="/sur-mesure">Sur-mesure</router-link>
                    <router-link to="/">Mentions légales</router-link>
                    <router-link to="/">CGV</router-link>
                </div>
            </div>
            <div class="footer__bottom__contact">
                <h3>Contact</h3>
                <p>
                    <a href="tel:+492077078">04 92 07 70 78</a> <br />
                    <a href="mailto:contact@concept-verre.com"
                        >contact@concept-verre.com</a
                    >
                </p>
                <div class="footer__bottom__contact__networks">
                    <a href="" class="instagram"
                        ><img src="../assets/instagram.png"
                    /></a>
                    <a href="" class="facebook"
                        ><img src="../assets/facebook.png"
                    /></a>
                    <a href="" class="pinterest"
                        ><img src="../assets/pinterest.png"
                    /></a>
                    <a href="" class="youtube"
                        ><img src="../assets/youtube.png"
                    /></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "MainFooter",
};
</script>

<style scoped lang="scss">
.footer {
    background: #1f1f1f;
    padding: 7.5rem;
    color: white;

    @media screen and (max-width: 800px) {
        padding: 4rem;
    }

    h3 {
        margin: 0;
        line-height: 1;
        text-transform: uppercase;
    }

    a {
        color: white;
        text-decoration: none;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 3rem;

        &__infos {
            display: flex;
            width: 100%;
            position: relative;

            img {
                width: 40px;
                height: 40px;
                position: absolute;
                top: 10px;
                left: -50px;
            }
        }

        &__separator {
            height: 1px;
            width: 7.5rem;
            background: white;

            @media screen and (max-width: 600px) {
                display: none;
            }
        }
    }

    &__bottom {
        display: flex;
        justify-content: space-between;
        gap: 2rem;

        @media screen and (max-width: 600px) {
            flex-direction: column;
        }

        h3 {
            font-size: 1.875rem !important;

            @media screen and (max-width: 1024px) {
                font-size: 1.25rem !important;
            }
        }

        &__infos {
            p {
                line-height: 1.1;
                margin: 1rem 0;
            }
        }

        &__sitemap {
            &__links {
                display: flex;
                flex-direction: column;
                line-height: 1.1;
                margin: 1rem 0;
                height: calc(100% - 30px - 2rem);
                justify-content: space-between;

                @media screen and (max-width: 1230px) {
                    height: calc(100% - 60px - 2rem);
                }

                a {
                    transition: all 0.5s;

                    &:hover {
                        opacity: 0.7;
                    }
                }
            }
        }

        &__contact {
            p {
                line-height: 1.1;
                margin: 1rem 0;
            }

            a {
                transition: all 0.5s;

                &:hover {
                    opacity: 0.7;
                }
            }

            &__networks {
                img {
                    width: 20px;
                    margin-right: 20px;
                    transition: all 0.5s;

                    @media screen and (max-width: 800px) {
                        margin-right: 10px;
                    }

                    &:hover {
                        opacity: 0.7;
                    }
                }
            }
        }
    }
}
</style>
