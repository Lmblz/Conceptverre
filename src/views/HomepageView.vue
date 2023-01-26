<template>
    <div class="homepage">
        <HomepageHeader />
        <main class="homepage__content">
            <TopCreations />
        </main>
    </div>
</template>

<script>
    import HomepageHeader from '@/components/HomepageHeader.vue'; 
    import TopCreations from '@/components/TopCreations.vue';
    export default {
        name: 'HomepageView',
        components: {
            HomepageHeader,
            TopCreations
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