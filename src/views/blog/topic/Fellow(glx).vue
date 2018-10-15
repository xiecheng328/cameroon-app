<template>
    <div>
        <fellowList></fellowList>
        <fellowList></fellowList>
        <fellowList></fellowList>
        <fellowList></fellowList>

    </div>

</template>

<script>
    import fellowList from './fellow_component/fellowDetails'
    export default {
        name: "fellow",
        components:{
            fellowList
        }
    }
</script>

<style scoped>

</style>
