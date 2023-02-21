const BASE_URL = "http://127.0.0.1:8000/";

const getAllTickets = async () => {
  const res = await fetch(`${BASE_URL}ticket/all`);

  const data = await res.json();

  return data;
};

const sendTicket = async (data) => {
  const res = await fetch(`${BASE_URL}ticket/all/`, {
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

const replyTicket = async (data) => {
  fetch(`${BASE_URL}ticket/reply/all/`, data)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

const updateTicket = async (data) => {};

const getReplyTicket = async () => {
  const res = await fetch(`${BASE_URL}ticket/reply/all/`);
  const data = await res.json();

  return data;
};

const getAllReplyTicket = async() => {
  const res = await fetch(`${BASE_URL}ticket/reply/all/`)
  const data = await res.json()

  return data

}


export { getAllTickets, replyTicket, getReplyTicket ,sendTicket,getAllReplyTicket};
