<template>
  <el-table :data="tableData">
    <el-table-column label="domain" prop="domain" />
    <el-table-column label="website" prop="website" />
    <el-table-column label="username" prop="username" />
    <el-table-column label="password" prop="password" />
  </el-table>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { onMounted, ref } from 'vue';

const tableData = ref([]);

const fetchTableData = () => {
  axios
    .get(`${import.meta.env.VITE_APP_API_HOST}/query`)
    .then(({ data }) => {
      tableData.value = data;
    })
    .catch((reason) => {
      console.error(reason);
    });
};

const fetchProvinces = () => {
  axios
    .get(`${import.meta.env.VITE_APP_API_HOST}/administrative-provinces`)
    .then(({ data }) => {
      debugger;
    })
    .catch((reason) => {});
};

const fetchCities = (provinceCode: string) => {
  axios
    .get(`${import.meta.env.VITE_APP_API_HOST}/administrative-cities?provinceCode=${provinceCode}`)
    .then(({ data }) => {
      debugger;
    })
    .catch((reason) => {});
};

onMounted(() => {
  fetchTableData();
  fetchProvinces();
  fetchCities('35');
});
</script>
