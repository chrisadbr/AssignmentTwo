<template>
  <div v-for="student of students" :key="student.id">
    <div>
      <div>Firstname: {{ student.firstname }}</div>
      <div>Middlename: {{ student.middlename }}</div>
      <div>Lastname: {{ student.lastname }}</div>
      <div>Student Id: {{ student.id }}</div>
      <div>Course: {{ student.program }}</div>
    </div>
    <br />
  </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "StudentInfo",
  data() {
    return {
      students: [],
    };
  },
  mounted() {
    fetch("http://localhost:5000/")
      .then((res) => res.json())
      .then((data) => (this.students = data))
      .catch((err) => console.log(err));
  },
};
</script>
<style scoped></style>
