<template>
    <div class="shop">
        <PageHeader 
            srcHeader="../assets/header-shop"
            titleHeader="Boutique"
        /> 
        <ShopFilters />
    </div>
</template>

<script>
    import PageHeader from '@/components/PageHeader.vue';
    import ShopFilters from '@/components/ShopFilters.vue';
    export default {
        components: {
            PageHeader,
            ShopFilters
        }
    }
</script>