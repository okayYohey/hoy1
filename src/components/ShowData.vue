<template>
  <div class="show-data">
      <h2>データの表示</h2>
    <ul class="collection">
        <li class="collection-header"></li>
        <li class="collection-item" v-for="employee in emploees" v-bind:key="employee.id">
            Employee ID#: {{employee_id}}
        </li>
    </ul>
      <i class="fa fa-plus"></i>
  </div>
</template>

<script>
import db from 'firebase'
export default {
    name: 'show-data',
    data(){
        return{
            employees:[]
        }
    },
    created(){

            db.collection('employees')
                .get()
                .then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                    console.log(doc)
                    const data = {
                        'id' : doc.id,
                        'user_id' :doc.data().user_id,
                        'users': doc.data().name,
                        'age': doc.data().age,
                        'gender':doc.data().gender
                    }
                this.employees.push(data)
            })
        })
    }
}
</script>

<style>
.fa-plus{
    color: aliceblue;
    font-size: 4vw;
    background-color: aqua;
    border-radius: 50%;
    padding: 1vw;
    filter: drop-shadow(5px 5px 4px rgba(22,100, 200,0.5));
    cursor: pointer;
}
.fa-plus:hover{
    position: relative;
    top: 3px;
}
</style>