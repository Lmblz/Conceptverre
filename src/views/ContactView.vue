<template>
    <div class="contact">
        <div class="contact__background">
            <picture>
                <source
                    srcset="../assets/background-contact.webp"
                    type="image/webp"
                />
                <img src="../assets/background-contact.jpg" alt="Contact" />
            </picture>
        </div>
        <h1 class="contact__title">Restons en contact</h1>
        <div class="contact__contacts">
            <div class="contact__contacts__canals">
                <div class="contact__contacts__canals__image">
                    <img src="../assets/logo-mail.png" alt="mail" />
                </div>
                <div class="contact__contacts__canals__content">
                    <p><b>Écrivez-nous</b></p>
                    <p>contact@conceptverre.com</p>
                </div>
            </div>
            <div class="contact__contacts__canals">
                <div class="contact__contacts__canals__image">
                    <img src="../assets/logo-clock.png" alt="mail" />
                </div>
                <div class="contact__contacts__canals__content">
                    <p><b>Du Lundi au Vendredi</b></p>
                    <p>
                        08h30 - 12h30 <br />
                        14h00 - 17h00
                    </p>
                </div>
            </div>
            <div class="contact__contacts__canals">
                <div class="contact__contacts__canals__image">
                    <img src="../assets/logo-phone.png" alt="mail" />
                </div>
                <div class="contact__contacts__canals__content">
                    <p><b>Appelez-nous</b></p>
                    <p>04 92 07 70 78</p>
                </div>
            </div>
        </div>
        <div class="contact__form">
            <form action="">
                <div class="contact__form__field">
                    <input type="text" name="name" placeholder="Votre nom" />
                </div>
                <div class="contact__form__field">
                    <input
                        type="email"
                        name="email"
                        placeholder="Votre adresse mail"
                    />
                </div>
                <div class="contact__form__field">
                    <textarea
                        type="textarea"
                        name="message"
                        placeholder="Votre message"
                    />
                </div>
            </form>

            <button type="submit" class="btn-white">Envoyer</button>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
};
</script>

<style lang="scss" scoped>
.contact {
    position: relative;
    color: white !important;

    &__background {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: -1;

        img {
            max-width: 100%;
            max-height: 100%;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    h1 {
        padding-top: 155px !important;
        text-align: center;
    }

    &__contacts {
        margin-top: 5rem;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        &__canals {
            text-align: center;
            p {
                margin: 0;
            }
        }
    }

    &__form {
        max-width: 90%;
        margin: auto;
        padding: 5rem 0;
        text-align: center;

        form {
            display: grid;
            grid-template-rows: 1fr 1fr;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
        }

        &__field {
            display: flex;
            flex-direction: column;

            &:first-of-type {
                grid-row: 1/2;
            }

            &:nth-of-type(2) {
                grid-row: 1/2;
            }

            &:last-of-type {
                grid-row: 2/3;
                grid-column: 1/3;
            }

            label {
                background: none !important;
            }

            input,
            textarea {
                height: 4rem;
                padding-left: 2rem;
                font-family: "Silk Serif", Arial, Helvetica, sans-serif !important;
                font-size: 1.5rem !important;
                border-bottom: solid 1px white;
                border-left: 0;
                border-top: 0;
                border-right: 0;
                outline: none;
                background: none;
                color: white;

                &::placeholder {
                    color: white !important;
                }
            }
        }
    }

    button {
        margin-top: 3rem;
    }
}
</style>
