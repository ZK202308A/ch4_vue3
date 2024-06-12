<script setup>

import {useRoute, useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import {getTodo, modifyTodo, removeTodo} from "../../api/todoApi.js";
import ResultModal from "../common/ResultModal.vue";

const route = useRoute()
const router = useRouter();

const initTodo = {
  mno:0,
  title:"",
  writer:"",
  dueDate:"",
}

const initResult = {
  mno:0,
  title: "",
  content: "",
  callback: null
}

const todoData = ref({...initTodo})
const mno = route.params.mno

const result = ref({...initResult})

onMounted(() => {
  console.log("mno: ", mno)
  getTodo(mno).then(data => {
    console.log("data: ", data)
    todoData.value = data
  })
})

const handleClickList = () => {
  console.log("handleClickList")
  router.push({path: "/todo/list", query: route.query})
}

const handleClickModify = () => {
  console.log("handleClickModify")
  modifyTodo(todoData.value).then(data => {
    console.log("modifyTodo data: ", data)
    result.value.mno = data.mno
    result.value.title = "수정성공"
    result.value.content = `${data.mno} 번이 수정되었습니다.`
    result.value.callback = () => {
      router.push({path:`/todo/read/${mno}`, query: route.query})
      result.value = {...initResult}
    }
  })
}

const handleClickDelete = () => {
  console.log("handleClickDelete")
  removeTodo(mno).then(data => {
    console.log("modifyTodo data: ", data) //{result:success}

    result.value.mno = mno
    result.value.title = "삭제성공"
    result.value.content = `${mno} 번이 삭제되었습니다.`
    result.value.callback = () => {
      router.push({path:"/todo/list", query: route.query})
      result.value = {...initResult}
    }
  })
}


</script>

<template>
  <div>
    <h1>Todo Modify Component</h1>

    <ResultModal v-if="result.mno !== 0" :title="result.title" :content="result.content" @close="result.callback"/>

    <div>
      <div class="flex m-2 p-2">
        <div class="w-1/6 p-2" >MNO</div>
        <input class="w-5/6 border-2 p-2" type="text" :value="todoData.mno" readonly/>
      </div>
    </div>
    <div>
      <div class="flex m-2 p-2">
        <div class="w-1/6 p-2" >TITLE</div>
        <input class="w-5/6 border-2 p-2" type="text" v-model="todoData.title" />
      </div>
    </div>
    <div>
      <div class="flex m-2 p-2">
        <div class="w-1/6 p-2" >WRITER</div>
        <input class="w-5/6 border-2 p-2" type="text" v-model="todoData.writer" />
      </div>
    </div>
    <div>
      <div class="flex m-2 p-2">
        <div class="w-1/6 p-2" >DUE DATE</div>
        <input class="w-5/6 border-2 p-2" name="dueDate" type="date"   v-model ="todoData.dueDate" />
      </div>
    </div>
    <div>
      <div class="flex m-2 p-2 justify-end">
        <button type="button" class="modifyBtn" @click="handleClickModify">MODIFY</button>
        <button type="button" class="deleteBtn" @click="handleClickDelete">DELETE</button>
        <button type="button" class="listBtn" @click="handleClickList">LIST</button>
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

.deleteBtn {
  background-color: #f44336; /* Red */
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