const BASE_URL = "http://127.0.0.1:8000/";

const getAllAzmayesh = async () => {
  const res = await fetch(`${BASE_URL}azmayesh/all/`);
  const data = await res.json();

  return data;
};

const addAzmayesh = async (data) => {
  const res = await fetch(`${BASE_URL}azmayesh/all/`, data);
  const dataF = await res.json();
  console.log(dataF);
  return dataF;
};

const responseAzmayesh = async (id , data) => {
  const res = await fetch(`${BASE_URL}azmayesh/GetId/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const dataF = await res.json();

  return dataF;
};
export { addAzmayesh, getAllAzmayesh , responseAzmayesh};
