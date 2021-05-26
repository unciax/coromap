import axios from "axios";

export const fetchMapData = () => {
  return axios({
    method: "get",
    url: `${process.env.REACT_APP_BASE_URL}/mapData.json`,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const updateStoresInfo = (data) => {
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/v1/stores`,
      data: data
    })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };
