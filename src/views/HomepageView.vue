<template>
    <div class="homepage">
        <HomepageHeader />
        <main class="homepage__content">
            <TopCreations />
            <HomepageFluxleft />
            <HomepageFluxright />
            <HomepageTagline />
        </main>
    </div>
</template>

<script>
    import HomepageHeader from '@/components/HomepageHeader.vue'; 
    import TopCreations from '@/components/TopCreations.vue';
    import HomepageFluxleft from '@/components/HomepageFluxleft.vue';
    import HomepageFluxright from '@/components/HomepageFluxright.vue';
    import HomepageTagline from '@/components/HomepageTagline.vue';
    import {client} from '@/utils/axios'
    export default {
        name: 'HomepageView',
        components: {
            HomepageHeader,
            TopCreations,
            HomepageFluxleft,
            HomepageFluxright,
            HomepageTagline,
        },
        async mounted() {

            console.debug('abc')
            // Get all wordpress posts
            const response = await client.get("/wp/v2/posts")
            this.posts = response.data
            console.log(this.posts)

            // Get all woocommerce products
            const productResponse = await client.get("/wc/v3/products")
            this.products = productResponse.data
            console.log(this.products)

            // Get all woocommerce categories
            const categoriesResponse = await client.get("/wc/v3/products/categories")
            this.categories = categoriesResponse.data
            console.log(this.categories)

            // Get homepage data
            const homepageResponse = await client.get("/wp/v2/pages/20")
            this.page = homepageResponse.data
            console.log(this.page.id)


        }
    }
</script>

<style scoped lang="scss">
    .homepage {
        &__content {
            transform: translateY(-7.5rem);
        }
    }
</style>