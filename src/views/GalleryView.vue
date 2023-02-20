<template>
    <div class="gallery">
        <PageHeader 
            srcHeader="../assets/header-gallery"
            titleHeader="Galerie"
        />
        <p>Cliquez sur la collection de votre choix afin de pouvoir profiter du talent créatif de nos artisans</p>
        <div class="gallery__collections-slider">
            <div class="gallery__collections-slider__titles">
                <ul>
                    <li data-title="cascade" class="inactive">Cascade</li>
                    <li data-title="exceptional" class="inactive">Exceptional</li>
                    <li data-title="glass" class="inactive">Glass</li>
                    <li class="see-all"><h3>Voir tout</h3></li>
                    <li data-title="modern" class="inactive">Modern</li>
                    <li data-title="provence" class="inactive">Provence</li>
                    <li data-title="zen" class="inactive">Zen</li>
                </ul>
            </div>
        </div>

        <!-- TODO : Slider d'images par catégorie -->

    </div>
</template>

<script>
    import PageHeader from '@/components/PageHeader.vue';
    export default {
        components: {
            PageHeader
        }
    }
</script>

<style lang="scss" scoped>
    .gallery {
        p {
            text-align: center;
            max-width: 1100px;
            margin-left: auto;
            margin-right: auto;
        }
        &__collections-slider {
            &__titles {
                ul {
                    padding: 0;
                    margin: 0;
                    display: flex;
                    max-width: 80rem;
                    padding: 0 1rem;
                    justify-content: space-between;
                    margin: auto;

                    li {
                        cursor: pointer;
                        list-style: none;
                        padding: 0;
                        width: 8.5rem;
                        font-size: 2rem;
                        text-align: center;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        transition: all .5s;
                        font-family: "Silk Serif Regular", Arial, Helvetica, sans-serif !important;

                        &:hover {
                            opacity: .7;
                        }

                        &.inactive {
                            opacity: .7;
                        }

                        &.see-all {
                            width: auto;

                            h3 {
                                margin: 0;
                            }
                        }
                    }
                }
            }
        }
    }
</style>