<template>
    <div class="msg">
        <p>{{ msg }}</p>
    </div>
</template>

<script>
export default {
    name: 'msgInPhoto',
    props: {
        msg: String
    }
}
</script>

<style>
.msg{
    margin-top: 100px;
}
</style>