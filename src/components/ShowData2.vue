<template>
    <div class="show-data">
      <h2>データの表示</h2>
    <ul class="collection">
        <li class="collection-item"></li>
    </ul>
  </div>
</template>

<script>
// import db from 'firebase'
import firebase from 'firebase'
import "firebase/firestore"
import { db } from './firebase';

export default {
    name:'show-data2',
    data(){
        return{
            citiesRef:db.collection("cities"),
            db: firebase.firestore(),
            docRef: []
        }
    },
    created(){
        

        this.docRef = this.db.collection("cities").doc("SF")
        this.docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            }).catch(function(error) {
                console.log("Error getting document:", error);
        });
    },
    methods:{
        add(){
            this.citiesRef.doc("SF").set({
                name: "San Francisco", state: "CA", country: "USA",
                capital: false, population: 860000,
                regions: ["west_coast", "norcal"] });
            this.citiesRef.doc("LA").set({
                name: "Los Angeles", state: "CA", country: "USA",
                capital: false, population: 3900000,
                regions: ["west_coast", "socal"] });
            this.citiesRef.doc("DC").set({
                name: "Washington, D.C.", state: null, country: "USA",
                capital: true, population: 680000,
                regions: ["east_coast"] });
            this.citiesRef.doc("TOK").set({
                name: "Tokyo", state: null, country: "Japan",
                capital: true, population: 9000000,
                regions: ["kanto", "honshu"] });
            this.citiesRef.doc("BJ").set({
                name: "Beijing", state: null, country: "China",
                capital: true, population: 21500000,
                regions: ["jingjinji", "hebei"] });
        
            
        },
        getSome:function(){
            this.db.collection("cities").where("capital", "==", true)
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, " => ", doc.data());
                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
        }
    }
}
</script>

<style scoped>
</style>