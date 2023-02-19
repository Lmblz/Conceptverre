<template>
    <div class="custom">
        <PageHeader
            srcHeader="../assets/header-custom"
            titleHeader="Sur-mesure"
        />
        <p>
            Chacune de nos pièces est unique. Nos verres soufflés bouche adoptent chacun une forme propre, 
            et chaque série a sa propre nuance de couleurs. Au-delà de ces spécificités, tous nos modèles 
            sont personnalisables.
        </p>
        <p>
            Chaque verre est disponible en plusieurs coloris, chaque câble est adaptable même une fois la 
            structure installée, et chaque modèle se décline de une à 90 lumières. Vous ne trouvez pas le 
            luminaire adapté à votre projet ?
        </p>
        <ThreeImagesFW 
            threeImgLeft="../assets/custom-img-1"
            threeImgCenter="../assets/custom-img-2"
            threeImgRight="../assets/custom-img-3"
        />
        <h3>
            Le luminaire de <i>vos rêves</i>
        </h3>
        <div class="custom__separator"></div>
        <p>
            Lors de la fabrication de nos œuvres, les idées de nos designers se marient au talent des artisans 
            du verre pour créer des modèles à la fois authentiques et intemporels. Les croquis et les schémas 
            deviennent de la matière brute, façonnée grâce à des méthodes traditionnelles, pour donner corps 
            à nos produits. Nous utilisons ensuite les dernières innovations technologiques pour allumer dans 
            cette enveloppe matérielle l’étincelle qui finira de donner vie à l’ensemble.
        </p>
        <div class="custom__link">
            <router-link to="/">
                <button class="custom__button btn-black">Créer mon produit sur mesure</button>
            </router-link>
        </div>
        <CustomVideo 
            title="Concept Verre"
            titleI="en video"
            paragraph="Nous vous accompagnons dans la création de votre luminaire sur-mesure. Découvrez 
            la particularité de la conception de vos créations sur-mesure à travers cette courte vidéo 
            de présentation."
        />
    </div>
</template>

<script>
    import PageHeader from '@/components/PageHeader.vue';
    import ThreeImagesFW from '@/components/ThreeImagesFW.vue';
    import CustomVideo from '@/components/CustomVideo.vue';
    export default {
        components: {
            PageHeader,
            ThreeImagesFW,
            CustomVideo
        },
        mounted() {
        }
    }
</script>

<style lang="scss" scoped>
    .custom {
        > p {
            max-width: 64rem;
            padding: 0 1rem;
            text-align: center;
            margin: 3rem auto;

            &:nth-of-type(2) {
                margin-top: 1rem;
            }
        }

        h3 {
            text-align: center;
        }

        &__link {
            text-align: center;
        }

        &__separator {
            height: 1px;
            width: 7.5rem;
            background: black;
            margin: auto;
            margin-top: 2rem;
        }
    }
</style>