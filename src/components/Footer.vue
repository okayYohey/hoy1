<template>
    <footer>
        <small>&copy;Towa and Yohei<br>All Rights Reserved about our love</small>
    </footer>
</template>

<script>
export default {
    name:'Footer',
    props:{

    }
}
</script>

<style scoped>
footer{
    height: 50vw;
    display: flex;
    justify-content: center;
    padding: 10px;    
    padding-top: 100px;
}
small{
    position: relative;
    display: inline-block;
    height: 20px;
    color: #fff
}
</style>