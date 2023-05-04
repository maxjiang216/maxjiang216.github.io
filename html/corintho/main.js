import {
  initCorintho
} from "./corintho.jsx";

initCorintho();

const serviceUrl = "https://corintho-service-oduku67f7a-uc.a.run.app/warm_up";
const requestOptions = {
  method: "POST",
  headers: {
      "Content-Type": "application/json",
  },
};
const response = await fetch(serviceUrl, requestOptions);