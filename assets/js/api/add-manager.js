const BASE_URL = "http://127.0.0.1:8000/";

const addManager = async (data) => {
  const res = await fetch(`${BASE_URL}manager/all/`, data);
  const dataF = await res.json();

  return dataF;
};

const addOLaser = async (data) => {
  const res = await fetch(`${BASE_URL}cortex/op/all/`, data);
  const dataF = await res.json();
  console.log(dataF);
  return dataF;
};

export { addManager, addOLaser };
