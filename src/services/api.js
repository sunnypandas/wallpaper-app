import { stringify } from 'qs';
import request from '../utils/request';
const headers = {
  Authorization: '563492ad6f9170000100000170e391a914ff4d57909d01e5ab3688ed',
};
export async function getCuratedPhotoList(params) {
  return request(`/v1/curated?${stringify(params)}`, { headers });
}
export async function getSearchPhotoList(params) {
  return request(`/v1/search?${stringify(params)}`, { headers });
}
