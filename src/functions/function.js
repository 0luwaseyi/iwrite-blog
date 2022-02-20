const API_URL = "https://iwriteapi.herokuapp.com/";

export async function apiFetcher(method, path, data= {}) {
  try {
    let api_path = API_URL + path;
    let response =
      method === "GET"
        ? await fetch(api_path)
        : await fetch(api_path, {
            method: method,
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json",
            },
          });
    let status = response.status;
    let res = await response.json();

    return {
      status: status,
      data: res,
    };
  } catch (error) {
    return {
      error: error,
    };
  }
}
