import axios from "axios";

const testAPI = "https://localhost:44351/api/";
const official = "https://bst-clinic:2020/api/";
export default axios.create({
  baseURL: testAPI,
  // headers: { "Access-Control-Allow-Origin": "*" },
});
