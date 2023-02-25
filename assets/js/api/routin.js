const BASE_URL = "http://127.0.0.1:8000/";

const getAllRoutin = async () => {
  const res = await fetch(`${BASE_URL}routin/all/`);
  const data = await res.json();

  return data;
};

const getAllRavand = async() =>{
    const res = await fetch(`${BASE_URL}ravand/all/`)
    const  data = await res.json()


    return data
}


const addRoutin = async (data) => {
  const res = await fetch(`${BASE_URL}routin/all/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const dataF = await res.json();

  return dataF;
};

const addRavand = async (data) => {
  const res = await fetch(`${BASE_URL}ravand/all/`, data);
  const dataF = await res.json();
  return dataF;
};

export { getAllRoutin, addRoutin ,addRavand , getAllRavand};
