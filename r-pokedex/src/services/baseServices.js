import { requestInterceptor, responseInterceptor } from "./baseInterceptors";
import apiConf from "../config/apiConf.json";

export function request(resource, init) {
  requestInterceptor(resource, init)
    .then((response) => {
      responseInterceptor(response);
    })
    .catch((err) => {
      console.error(`An error ocurred trying to fetch ${resource}. ${err}`);
    });
}

export function get(endpoint, params, options = {}) {
  const url = new URL(apiConf.API_URL + endpoint);
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key]),
  );
  return request(url, {
    method: "GET",
    headers: "headers" in options ? options.headers : {},
    ...options,
  });
}

export function post(endpoint, body, options = {}) {
  const url = new URL(apiConf.API_URL + endpoint);
  Object.keys(options).forEach((key) =>
    url.searchParams.append(key, params[key]),
  );
  return request(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: "headers" in options ? options.headers : {},
    ...options,
  });
}
