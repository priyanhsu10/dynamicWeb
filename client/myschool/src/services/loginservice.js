import axios from "axios";
const base = "http://localhost:9009/api";
const axios2 = axios.create();
const login = async (loginrequest) => {
  const url = base + "/user/authenticate";
  try {
    const rep = await axios2.post(url, loginrequest);
    console.log(rep.data);
    return rep.data;
  } catch (exp) {
    console.error(exp);
    alert("fail to login");
  }
};

export { login };
