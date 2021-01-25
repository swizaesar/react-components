import axios from "axios";
import localStorage from "../Utils/LocalStorage";

const getAuthToken = (options) => {
    let result = {};
    // const dataUser = localStorage().get("auth");
    const token = localStorage().get("auth");
    if (options.token && token.access_token) {
        result = {
            Authorization: "Bearer " + token.access_token,
        };
    }
    result["Content-Type"] = options.formData
        ? "application/x-www-form-urlencoded"
        : "application/json";
    return result;
};

const collectResponse = (response, options, status) => {
    return {
        response: response?.data,
        type: response?.status,
        message:
            (response?.status && options.message[response.status]) || false,
        headers: response?.headers,
        key: options.key,
        group: options.group,
        ...status,
    };
};

const serviceApi = async (options) => {
    let axiosConfig = {
        baseURL:
            options.v1 || options.v1 !== undefined
                ? `${
                      window.location.hostname === "localhost"
                          ? process.env.REACT_APP_BASE_URL
                          : process.env.REACT_APP_BASE_URL_STAGING
                  }`
                : `${
                      window.location.hostname === "localhost"
                          ? process.env.REACT_APP_BASE_URL
                          : process.env.REACT_APP_BASE_URL_STAGING
                  }/v1`,
        timeout: 100000,
        cancelToken: options.cancelToken,
    };

    axiosConfig.headers = getAuthToken(options);
    const instance = axios.create(axiosConfig);
    return await instance(options)
        .then((res) => {
            return options.resType
                ? res
                : res?.data &&
                      collectResponse(res, options, {
                          success: true,
                          error: false,
                      });
        })
        .catch((err) => {
            return options.resType
                ? err.response
                : collectResponse(err.response, options, {
                      success: false,
                      error: true,
                  });
        });
};

export default serviceApi;
