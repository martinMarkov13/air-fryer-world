const requester = async (method, url, data) => {
  try {
    const options = {};

    if (method !== "GET") {
      options.method = method;

      if (data) {
        options.headers = {
          "content-type": "application/json",
        };
        options.body = JSON.stringify(data);
      }
    }
    
    const userData = localStorage.getItem("auth");
    const auth = JSON.parse(userData);

    if (auth) {
      options.headers = {
        ...options.headers,
        "X-Authorization": auth.accessToken,
      };
    }

    const response = await fetch(url, options);

    if (response.ok === false) {
      if (response.status === 403) {
        localStorage.removeItem("auth");
      }
      const error = await response.json();
      throw new Error(error.message);
    }

    if (response.status === 204) {
      return {};
    }

    const result = await response.json();
    
    if (!response.ok) {
      throw result;
    }

    return result;

  } catch (error) {
    alert(error);
  }
};

export const get = requester.bind({}, "GET");
export const post = requester.bind({}, "POST");
export const patch = requester.bind({}, "PATCH");
export const put = requester.bind({}, "PUT");
export const del = requester.bind({}, "DELETE");
