import axios from 'axios';
import Config from '../config';

const AxiosLib= () => {
	var item = axios.create({
		baseURL: Config.DASHBOARD_URL,
		headers: {},
		transformResponse: [
			function(data) {
				return data;
			}
		],
		validateStatus: function(status) {
			return status >= 200 && status < 300;
		}
	});
	return item;
};

const _request = async (method, url, data) => {
  let options = {
    method: method,
    url: url,
    responseType: "json"
  };
  if (data && method === "GET") {
    options.params = data;
  } else if (data) {
    options.data = data;
    options.headers = {
      "Content-Type": "application/json;charset=UTF-8"
    };
  }

  return new Promise(async (resolve, reject) => {
    AxiosLib.request(options)
      .then(async (response) => {
          let data = response.data;
          if (typeof data != "object") data = JSON.parse(data);
          resolve(data);
      })
      .catch(error => {
        reject(error);
      })
  })
};

const DataAccessService = {
  get(url, data) {
    return _request("GET", url, data);
  },
  post(url, data) {
    return _request("POST", url, data);
  },
  delete(url) {
    return _request("DELETE", url, undefined);
  },
  put(url, data) {
    return _request("PUT", url, data);
  },
  patch(url, data) {
    return _request("PATCH", url, data);
  }
};
export default DataAccessService;
