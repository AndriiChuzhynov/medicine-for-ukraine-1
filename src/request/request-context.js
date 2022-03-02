import { createContext } from "react";

const request = {
  userContact: "",
  country: "",
  donationType: "",
  productLink: "",
};

const setRequest = (newRequest) => {
  request = newRequest;
};

export const RequestContext = createContext([request, setRequest]);
