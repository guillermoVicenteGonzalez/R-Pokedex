/*
gets a resource = url and a init object for fetch
unwraps the init object where it goes and does the same with the headers
*/

export function requestInterceptor(resource, init) {
  return fetch(resource, {
    ...init,
    headers: {
      "content-type": "application/json",
      ...init.headers,
    },
  });
}
/**
 * If the response is 200 it returns it in json format
 * otherwise creates an error and throws it.
 */
export function responseInterceptor(response) {
  if (response.ok) {
    return response.json();
  } else {
    return response.json().then((data) => {
      let error = new Error(response.status);
      error.response = data;
      error.status = response.status;
      throw error;
    });
  }
}
