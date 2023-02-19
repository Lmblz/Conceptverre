<template>
    <div class="history">
        <PageHeader
            srcHeader="../assets/header-history"
            titleHeader="Notre histoire"
        />
        <p>
            <b>Concept Verre</b> voir le jour en 2007, quintessence d'un travail passionnant et passionné. <br>
            Dans notre atelier basé à Nice, nous concevons des <b>luminaires d'intérieur au design épuré.</b>
        </p>
        <StairsImages 
            srcImageLeft="../assets/stairs-img-1"
            srcImageCenter="../assets/stairs-img-2"
            srcImageRight="../assets/stairs-img-3"
            stairsTitle="Un travail"
            stairsTitleI="passionné"
            stairsP="Depuis plus de 15 ans, nous mettons notre passion et notre savoir-faire au 
            service de votre intérieur. Nos luminaires sont soigneusement réalisé à la main, dans notre 
            atelier par nos propres artisans verriers expérimentés. Cette rigueur nous a peu à peu permis 
            de nous imposer comme l’atelier de création dont vous avez besoin pour habiller votre intérieur."
            stairsBtn="Découvrir notre boutique"
            stairsBtnLink="/boutique"
        />
        <FinitionsBlocs
            finitionsImgLeft="../assets/finitions-img-1"
            finitionsImgCenter="../assets/finitions-img-2"
            finitionsImgRight="../assets/finitions-img-3"
            finitionsTitleLeft="Produits d'exception"
            finitionsTitleCenter="Noblesse des matériaux"
            finitionsTitleRight="Finitions personnalisables"
            finitionsPLeft="Tous nos produits intègrent les dernières évolutions technologiques. Ils reflètent notre savoir-faire en terme d’originalité et de qualité de fabrication. Depuis 2017, nous associons le verre à des matériaux naturels comme le marbre, la pierre et le bois."
            finitionsPCenter="La matière est l’essence de nos créations. Elle les sublime et leur confère un caractère unique. Nous avons pris le parti de marier des matériaux nobles et anciens pour magnifier nos luminaires au design moderne et raffiné."
            finitionsPRight="Nous proposons également une personnalisation de nos luminaires, afin d’adapter nos designs à tous les projets. Aujourd’hui, nous diffusons nos créations internationalement et celles-ci ornent les espaces des lieux les plus prestigieux."
         />
        <StairsImages 
            srcImageLeft="../assets/stairs-img-4"
            srcImageCenter="../assets/stairs-img-5"
            srcImageRight="../assets/stairs-img-6"
            stairsTitle="Vos projets"
            stairsTitleI="sur-mesure"
            stairsP="Lors de la fabrication de nos œuvres, les idées de nos designers se marient au talent
            des artisans du verre pour créer des modèles à la fois authentiques et intemporels.
            Les croquis et les schémas deviennent de la matière brute, façonnée grâce à des méthodes traditionnelles, 
            pour donner corps à nos produits. Nous utilisons ensuite les dernières innovations technologiques pour allumer dans 
            cette enveloppe matérielle l’étincelle qui finira de donner vie à l’ensemble."
            stairsBtn="Personnaliser mon luminaire"
            stairsBtnLink="/personnalisation"
        />
    </div>
</template>

<script>
    import FinitionsBlocs from '@/components/FinitionsBlocs.vue';
    import PageHeader from '@/components/PageHeader.vue';
    import StairsImages from '@/components/StairsImages.vue';
    export default {
        name: 'HistoryView',
        components: {
            PageHeader,
            StairsImages,
            FinitionsBlocs
        }
    }
</script>

<style scoped lang="scss">
    .history {
        text-align: center;

        > p {
            margin-bottom: 6rem;
        }

        .stairs-images, .finitions-blocs {
            margin-bottom: 10rem;
        }
    }
</style>