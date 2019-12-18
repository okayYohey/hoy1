<style scoped>

.cards {
    display: flex;
    flex-wrap: wrap;
}

</style>

<template>

<div class="cards">
    <favCardInPhoto title="熱海の足湯">
        <template v-slot:title1>竹芝でとわがふたり</template>
        <template v-slot:desc1>なんでこんなとこ行ったんだっけ。あ、お昼ご飯食べるときにたまたま近かったから海みてみよーと思って行ったんだった。この冬羽の絶妙な引きつった用にも、自然な微笑みにも見えるこの表情が好き＾＾結構歩かせちゃったよね。あのあとは横浜行ったんだよね？その前のホテルは冬羽は嫌だったポイけどそのあとは喜んでくれて良かった。変なケンカしてたけどね( ´∀｀ )それも含めていい思い出♡</template>
        <template v-slot:title2>グランパル公園</template>
        <template v-slot:desc2>ここの思い出もすぐ思いだせる。冬羽は全然行きたがらなかったし、雨も降ってて、電車とバスの移動でも疲れてたけど、俺が行きたがったから冬羽がついてきてくれた。入ったら想像以上で、人も少なくて、音楽も不思議で凄い綺麗だったよね。あの動画もすぐ思いだせるしょ？冬羽が頑張って字幕付けたもんね。あの温泉の貸し切り混浴は最高だったね。なんか豪華で贅沢でエロくて、外は寒かったけど、長くいたかった。ちょっと語ったよね。最高だった。翌日の帰りは熱海で足湯入って、横浜のデパ地下で買い物してでっかいホテルで泊まったよね。あのあたりで俺はめっちゃ冬羽がNZ行っちゃうことの実感が湧いてきてたんだなぁって今になって思う。帰って来てくれてありがとう。(人''▽｀)</template>
        <template v-slot:title3>みなとみらいwithあまいちカップル</template>
        <template v-slot:desc3>この写真を選んだ理由はめっちゃ雰囲気良いなぁって思ったから。でもこのダブルデートがめちゃくちゃ充実してたよね。今までとは違う感じで刺激的だったなぁ。赤レンガで写真撮ったり、海に向かって写真撮ったり、楽しかった。少し文系の頃の関係を思いだしてうれしかった。いまは「冬羽がようへい～」ってたたくこともほとんどないからね、懐かしいなぁ。この写真にもそういう関係性が表れてる感じがして好き。冬羽のところにちょっかいかけに行って、追い返される、今思い出してもにやけちゃうわ～。はやくデート行きたいなぁ、受験勉強頑張って！</template>
    </favCardInPhoto>
</div>

</template>

<script>

import favCardInPhoto from '@/components/favCardInPhoto.vue'



export default {
    name: 'cardsInPhoto.vue',
    props: {
        msg: String
    },
    components: {
        favCardInPhoto
    }
}

</script>
