const BASE_URL = "http://127.0.0.1:8000/";

const getAllChat = async () => {
  const res = await fetch(`${BASE_URL}chat/all/`);
  const data = await res.json();

  return data;
};

const addChat = async (data) => {
  const res = await fetch(`${BASE_URL}chat/all/`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const dataF = await res.json();

  console.log(dataF);
  return dataF;
};

export { addChat, getAllChat };
