import { getCuratedPhotoList, getSearchPhotoList } from '../services/api';
import { getPayload } from '../utils/utils';

export default {
  namespace: 'acgn',

  state: {
    curatedPhotoList: {},
    searchPhotoList: {},
  },

  effects: {
    *curatedPhotoListFetch({ payload }, { call, put }) {
      const response = yield call(getCuratedPhotoList, payload);
      yield put({
        type: 'curatedPhotoList',
        payload: getPayload(response),
      });
    },
    *searchPhotoListFetch({ payload }, { call, put }) {
      const response = yield call(getSearchPhotoList, payload);
      yield put({
        type: 'searchPhotoList',
        payload: getPayload(response),
      });
    },
  },

  reducers: {
    curatedPhotoList(state, action) {
      return {
        ...state,
        curatedPhotoList: action.payload,
      };
    },
    searchPhotoList(state, action) {
      return {
        ...state,
        searchPhotoList: action.payload,
      };
    },
  },
};
