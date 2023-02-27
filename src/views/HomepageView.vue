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
import HomepageHeader from "@/components/HomepageHeader.vue";
import TopCreations from "@/components/TopCreations.vue";
import HomepageFluxleft from "@/components/HomepageFluxleft.vue";
import HomepageFluxright from "@/components/HomepageFluxright.vue";
import HomepageTagline from "@/components/HomepageTagline.vue";
export default {
    name: "HomepageView",
    components: {
        HomepageHeader,
        TopCreations,
        HomepageFluxleft,
        HomepageFluxright,
        HomepageTagline,
    },
};
</script>

<style scoped lang="scss">
.homepage {
    &__content {
        transform: translateY(-7.5rem);
    }
}
</style>
