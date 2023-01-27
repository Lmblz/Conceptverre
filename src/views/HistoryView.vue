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
        />
    </div>
</template>

<script>
    import PageHeader from '@/components/PageHeader.vue';
    import StairsImages from '@/components/StairsImages.vue';
    export default {
        name: 'HistoryView',
        components: {
            PageHeader,
            StairsImages
        }
    }
</script>

<style scoped lang="scss">
    .history {
        text-align: center;

        > p {
            margin-bottom: 6rem;
        }
    }
</style>