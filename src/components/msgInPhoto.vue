<template>
    <div class="msg">
        <p>たくさん思い出できたね</p>
        <p>ロードされるまで時間かかっちゃうのは許して＾ー＾</p>
        <p>ゆっくり下にスクロールして</p>
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