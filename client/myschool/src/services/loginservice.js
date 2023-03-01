import axios from "axios";
const base = "http://localhost:9009/api";

const login = async (loginrequest) => {
  const url = base + "/user/authenticate";
  try {
    const rep = await axios.post(url, loginrequest);
    console.log(rep.data);
    return rep.data;
  } catch (exp) {
    console.error(exp);
    alert("fail to login");
  }
};

export { login };
