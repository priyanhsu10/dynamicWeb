import axios from "axios";
const baseURL = "http://localhost:9009/api";
axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = localStorage.getItem("token");
    return config;
  },
  (error) => Promise.reject(error)
);
//------org------

const getAllOrgs1 = async () => {
  const url = `${baseURL}/org`;
  try {
    const headers = new Headers({
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token"),
    });

    // const rep = await axios.get(url, config);
    const res1 = await fetch(url, { method: "GET", headers: headers });
    const data = await res1.json();
    console.log(data);
    return data;
  } catch (exp) {
    console.error(exp);
    alert("fail to login");
  }
};
const getAllOrgs = async () => {
  const url = `${baseURL}/org`;
  return await get(url);
};
const createOrg = async (data) => {
  const url = `${baseURL}/org`;
  return post(url, data);
};
const udpateOrg = async (id, data) => {
  const url = `${baseURL}/org/${id}`;
  return put(url, data);
};

const errorHandler = async (fn) => {
  try {
    return await fn();
  } catch (exp) {
    console.error(exp);
  }
};
//------------event
const getEvets = async () => {
  const orgId = getLoginData().organizationId;
  const url = `${baseURL}/events/${orgId}`;
  return get(url);
};
const createEvent = async (data) => {
  data.organizationId = getLoginData().organizationId;
  const url = `${baseURL}/events`;
  return post(url, data);
};
const updateEvent = async (id, data) => {
  const orgId = getLoginData().organizationId;
  const url = `${baseURL}/events/${orgId}/${id}`;
  return put(url, data);
};
//--------------Announcement
const getAnnouncenent = async () => {
  const orgId = getLoginData().organizationId;
  const url = `${baseURL}/announcement/${orgId}`;
  return get(url);
};
const createAnnouncenent = async (data) => {
  data.organizationId = getLoginData().organizationId;
  const url = `${baseURL}/announcement`;
  return post(url, data);
};
const updateAnnouncenent = async (id, data) => {
  const orgId = getLoginData().organizationId;
  const url = `${baseURL}/announcement/${orgId}/${id}`;
  return put(url, data);
};

//-----------pages
const getPages = async () => {
  const orgId = getLoginData().organizationId;
  const url = `${baseURL}/pages/${orgId}`;
  return get(url);
};
const createPage = async (data) => {
  data.organizationId = getLoginData().organizationId;
  const url = `${baseURL}/pages`;
  return post(url, data);
};
const updatePage = async (id, data) => {
  const orgId = getLoginData().organizationId;
  const url = `${baseURL}/pages/${orgId}/${id}`;
  return put(url, data);
};

//-----------quick links
const getLinks = async () => {
  const orgId = getLoginData().organizationId;
  const url = `${baseURL}/quicklinks/${orgId}`;
  return get(url);
};
const createLink = async (data) => {
  data.organizationId = getLoginData().organizationId;
  const url = `${baseURL}/quicklinks`;
  return post(url, data);
};
const updateLink = async (id, data) => {
  const orgId = getLoginData().organizationId;
  const url = `${baseURL}/quicklinks/${orgId}/${id}`;
  return put(url, data);
};
// ----------------menu
const getMenu = async () => {
  const orgId = getLoginData().organizationId;
  const url = `${baseURL}/menu/${orgId}`;
  return get(url);
};
const createMenu = async (data) => {
  data.organizationId = getLoginData().organizationId;
  const url = `${baseURL}/menu`;
  return post(url, data);
};
const updateMenu = async (id, data) => {
  const orgId = getLoginData().organizationId;
  const url = `${baseURL}/menu/${orgId}/${id}`;
  return put(url, data);
};

function put(url, data) {
  return errorHandler(async () => {
    const res = await axios.put(url, data);
    return res.data;
  });
}
function get(url) {
  return errorHandler(async () => {
    const res = await axios.get(url);
    return res.data;
  });
}

function post(url, data) {
  return errorHandler(async () => {
    const res = await axios.post(url, data);
    return res.data;
  });
}

export {
  getAllOrgs,
  createOrg,
  udpateOrg,
  getEvets,
  createEvent,
  updateEvent,
  getAnnouncenent,
  createAnnouncenent,
  updateAnnouncenent,
  getPages,
  createPage,
  updatePage,
  getAllOrgs1,
  createLink,
  updateLink,
  getLinks,
  getMenu,
  createMenu,
  updateMenu,
};

const getLoginData = () => {
  return JSON.parse(localStorage.getItem("loginData")).userDto;
};
