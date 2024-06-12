<script setup>
import {useRoute, useRouter} from 'vue-router'
import {computed, onMounted, ref, watch,} from "vue";
import {getTodos} from "../../api/todoApi.js";

const route = useRoute()
const moveRouter = useRouter()

const refData = ref({
  content:[],
  number:0,
  totalPages:0,
})

const getData = () => {
  getTodos(route.query.page, route.query.size).then(data => {
    refData.value = data
  })
}

onMounted(() => {
  getData()
})


const pageNums = computed(() => {

  console.log("computed pageNums ")

  let arr = []

  const current = refData.value.number
  //이전 2 다음 2
  console.log("current", current)

  for (let i = current -1 ; i <= current + 3   ; i++) {
    if(i <= 0 || i > refData.value.totalPages) {
      continue
    }
    arr.push(i)
  }
  return arr
})

const handleClickPage = (num) => {
  console.log("handleClickPage", num)
  moveRouter.push({query: {page:num, size:10, time:Date.now()}})

}

const handleClickRead = (mno) => {
  console.log("handleClickRead", mno)
  moveRouter.push({
    path: `/todo/read/${mno}`,
    query: route.query
  })
}

watch(
    () => route.query,
    (newVal, oldVal) => {
        console.log("watch", newVal, oldVal)
        getData()
    },
    {deep: true}
)

</script>

<template>
  <h1>Todo List Component</h1>
  <ul>
    <li v-for="todo in refData.content" :key="todo.mno" @click="() => handleClickRead(todo.mno)">
      {{todo.mno}} ------------- {{todo.title}}
    </li>
  </ul>

  <ul class="flex m-3 p-2 justify-center">
    <li v-for="num in pageNums" :key="num"  class="p-2">
      <div @click="() => handleClickPage(num)" >{{num}}</div>
    </li>
  </ul>
</template>

<style scoped>

</style>