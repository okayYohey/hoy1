<style>

.data-upload {
    margin: 30px 0 0;
}

.form {
    display: flex;
    flex-direction: column;
    margin: 30px auto;
}

.row {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.row input {
    width: 40vw;
    ;
}

.save {
    width: 100px;
    margin: 30px auto 0;
}

</style>

<template>

<div class="data-upload">
    <h2>文字のアップロード</h2>
    <form class="form">
        <div class="row">
            <label for="email">メールアドレスを入力</label>
            <input type="email" name="email" id="email-input" v-model="email">
        </div>
        <div class="row">
            <label for="nick-name">ニックネーム</label>
            <input type="name" name="nick-name" id="nick-name" v-model="nickName">
        </div>
        <div class="row">
            <label for="welcome-message">ウェルカムメッセージ</label>
            <input type="text" name="welcome-message" id="welcome-message">
        </div>
        <div class="row">
            <label for="message">ウェルカムメッセージ</label>
            <textarea rows="4" name="message" id="welcome-message" v-model="welcomeMessage">
        </div>
        <button class="save" type="button">保存する</button>
    </form>
</div>

</template>

<script>

export default {
    name: 'data-upload',
    data() {
        return {
            email: null,
            nickName: null,
            welcomeMessage: null,
        }
    },
    methods: {
        onUpload() {
            this.email
            this.nickName
            this.welcomeMessage
            const emailStoreRef = firebase.firestore()
        }

    }
}

</script>
