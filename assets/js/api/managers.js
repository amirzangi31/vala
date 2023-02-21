const BASE_URL = "http://127.0.0.1:8000/";

const getAllManagers = async () => {
  const res = await fetch(`${BASE_URL}manager/all/`);
  const data = await res.json();

  return data;
};
const getManager = async (id) => {
  const res = await fetch(`${BASE_URL}manager/GetId/${id}`);
  const data = await res.json();

  return data;
};

const addOprator = async (data) => {
  const res = await fetch(`${BASE_URL}manager/all/`, data);

  const dataF = await res.json();

  return dataF;
};

const getAllFood = async (id) => {
  const res = await fetch(`${BASE_URL}program/food/all`);
  const data = await res.json();

  const foods = data.filter((item) => item.oprator === id);
  return foods;
};

const updateManager = async (id, data) => {
  const res = await fetch(`${BASE_URL}manager/GetId/${id}/`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const dataF = await res.json();
  return dataF;
};

const getProgram = async (id) => {
  const res = await fetch(`${BASE_URL}program/program/GetId/${id}`);
  const data = await res.json();

  return data;
};

export { getAllManagers, addOprator, getManager, getAllFood, getProgram,updateManager };
