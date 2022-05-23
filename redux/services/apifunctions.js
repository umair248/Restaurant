import axios from 'axios';
import NewFormData from 'form-data';
import apiUrl from './api';
import requestHeader from './request-header';

const convertObjectToFormData = data => {
  const formData = new NewFormData();
  for (var key in data) {
    if (Array.isArray(data[key])) {
      formData.append(key, JSON.stringify(data[key]));
      continue;
    }
    formData.append(key, data[key]);
  }
  return formData;
};

const getErrors = error => {
  if (
    typeof error === 'object' &&
    error !== null &&
    !error.message &&
    error.messages
  ) {
    message = Object.values(error.messages)[0][0];
    return message;
  } else {
    message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.errors[0].message ||
      error.toString();
    return message;
  }
};

const fetchPost = async (data, url) => {
  var config = {
    method: 'post',
    url: apiUrl.concat(url),
    headers: await requestHeader(),
    data: JSON.stringify(data),
  };

  return axios(config);
};

const fetchGet = async url => {
  var config = {
    method: 'get',
    url: apiUrl + url,
    headers: await requestHeader(),
  };

  return axios(config);
};

export default {fetchPost, fetchGet, getErrors};
