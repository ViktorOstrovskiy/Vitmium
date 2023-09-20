import { API } from "../../core/api";

export const createChart = () => async (dispatch) => {
  const options = {
    comment: "Привіт",
  };
  try {
    const { data } = await API.post(`chat/create`, options);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const sendMessageChart = (id, message) => async () => {
  const options = {
    message: message,
  };
  try {
    const { data } = await API.post(`chat/send/${id}`, options);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getMessage = (id) => async () => {
  try {
    const { data } = await API.get(`chat/get/${id}`);
    return data;
  } catch (err) {
    console.log(err);
  }
};
