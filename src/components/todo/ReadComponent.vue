<script setup>

import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getTodo} from "../../api/todoApi.js";

const route = useRoute()
const todoData = ref({
  mno:0,
  title:"",
  writer:"",
  dueDate:"",
})

const mno = route.params.mno


onMounted(() => {
  console.log("mno: ", mno)
  getTodo(mno).then(data => {
    console.log("data: ", data)
    todoData.value = data
  })
})

const router = useRouter()

const handleClickList = () => {
  console.log("handleClickList")
  router.push({path: "/todo/list", query: route.query})
}

const handleClickModify = () => {
  console.log("handleClickModify")
  router.push({path: `/todo/modify/${mno}`, query: route.query})
}

</script>

<template>
  <div>
    <h1>Todo Read Component </h1>
    <div>
      <div class="flex m-2 p-2">
        <div class="w-1/6 p-2" >MNO</div>
        <input class="w-5/6 border-2 p-2" type="text" :value="todoData.mno" readonly />
      </div>
    </div>

    <div>
      <div class="flex m-2 p-2">
        <div class="w-1/6 p-2" >TITLE</div>
        <input class="w-5/6 border-2 p-2" type="text" :value="todoData.title" readonly />
      </div>
    </div>
    <div>
      <div class="flex m-2 p-2">
        <div class="w-1/6 p-2" >WRITER</div>
        <input class="w-5/6 border-2 p-2" type="text" :value="todoData.writer" readonly />
      </div>
    </div>
    <div>
      <div class="flex m-2 p-2">
        <div class="w-1/6 p-2" >DUE DATE</div>
        <input class="w-5/6 border-2 p-2" name="dueDate" type="date"   :value="todoData.dueDate" readonly/>
      </div>
    </div>
    <div>
      <div class="flex m-2 p-2 justify-end">
        <button type="button" class="listBtn" @click="handleClickList">List</button>
        <button type="button" class="modifyBtn" @click="handleClickModify">Modify</button>
      </div>
    </div>
  </div>

</template>

<style scoped>
.listBtn {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.modifyBtn {
  background-color: #008CBA; /* Blue */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

</style>