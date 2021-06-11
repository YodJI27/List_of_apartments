import Api from "../../utils/Api";
import { APARTMENS } from "../types";

const api = new Api();

const Creator = () => {
  return async (dispatch) => {
    await api.getApartmens().then((result) => {
      dispatch({
        type: APARTMENS,
        payload: {
          result,
        },
      });
    });
  };
};

export default Creator;
