const BASE_URL = "http://127.0.0.1:8000/";

const login = async (data) => {
  const res = await fetch(`${BASE_URL}login/all`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const dataF = await res.json();

  return dataF;
};



const addUser = async (data ) => {
  const res = await fetch(`${BASE_URL}user/all/` , data);
  const dataF = await res.json();
  console.log(dataF)
  return dataF;
};

export { login , addUser };
