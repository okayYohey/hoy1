<template>
<header>
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script:700&display=swap" rel="stylesheet">
    <router-link to="/"><h1 class="title">Happy 1st Anniversary!!</h1></router-link>
</header>
</template>

<script>
export default{
    name: 'Header'
    }
</script>

<style scoped>

.header{
    text-align: center;
    width: 100%;
    color: #fff;
    padding: 10px 0;   
}
.title{
    font-family: 'Dancing Script', cursive;
    font-size: 8vw;
    color: #fff;
    position: relative;
    z-index: 3;
    width: 100%;
}

@media screen and (min-width:768px) {
    .title{
        font-size: 7vw;
    }
}
</style>
