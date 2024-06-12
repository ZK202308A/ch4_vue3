<script setup>

import {ref} from "vue";
import ResultModal from "../common/ResultModal.vue";
import {addTodo} from "../../api/todoApi.js";
import {useRouter} from "vue-router";


const initTodoData = {
  title: "",
  writer: "",
  dueDate: "2024-12-12",
}
const initResult = {
  title: "",
  content: "",
  complete: false,
}

const router = useRouter()

const todoData = ref({...initTodoData});

const result = ref({...initResult} )

const handleClick = () => {
  console.log("handleClick")
  console.log(todoData.value)

  addTodo(todoData.value).then(data => {

    //mno, title, writer, dueDate
    result.value.title = `등록성공`
    result.value.content = ` ${data.mno} 번으로 등록되었습니다. `
    result.value.complete = true

  });

}

const closeModal = () => {
  console.log("closeModal")
  todoData.value = {...initTodoData}
  result.value = {...initResult}
  router.push({path: "/todo/list"})
}

</script>

<template>

  <ResultModal v-if="result.complete" :title="result.title" :content="result.content"  @close="closeModal"/>

  <div>

    <h1 class="text-3xl">Todo Add Component</h1>
    <div>
      <div class="flex m-2 p-2">
        <div class="w-1/6 p-2" >TITLE</div>
        <input class="w-5/6 border-2 p-2" type="text" v-model="todoData.title" />
      </div>
    </div>
    <div>
      <div class="flex m-2 p-2">
        <div class="divTitle" >WRITER</div>
        <input class="divInput" type="text"   v-model="todoData.writer" />
      </div>
    </div>
    <div>
      <div class="flex m-2 p-2">
        <div class="divTitle" >DUE DATE</div>
        <input class="divInput" name="dueDate" type="date"   v-model="todoData.dueDate" />
      </div>
    </div>
    <div>
      <div class="flex m-2 p-2 justify-end mr-5">
        <button type="button" class="addBtn" @click="handleClick">REGISTER</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.addBtn {
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 10px 24px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.divTitle {
  @apply w-1/6 p-2
}

.divInput {
  @apply w-5/6 border-2 p-2
}

</style>