import entities from "./entities.json";

class Api {
  getApartmens() {
    const data = new Promise((resolve, reject) => {
      if (!entities) {
        reject("Что то пошло не так...");
      }
      setTimeout(() => resolve(entities), 2500);
    });

    return data.then((res) => {
      return res.response;
    });
  }
}
export default Api;
