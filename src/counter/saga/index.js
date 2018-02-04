import { delay } from 'redux-saga';
import {
  put,
  take,
  fork,
  call,
  select,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';

// Our worker Saga: will perform the async increment task
export function* incrementAsync() {
  yield delay(1000);
  yield put({ type: 'INCREMENT' });
}

export function* fetchData() {
  try {
    const data = yield call(fetch, 'https://cnodejs.org/api/v1/topics');
    yield put({ type: 'FETCH_SUCCEEDED', data });
    // return data;
  } catch (error) {
    yield put({ type: 'FETCH_FAILED', error });
  }
}

function* watchAnlog() {
  while (true) {
    const action = yield take('INCREMENT_ASYNC');
    const data = yield fork(fetchData);
    console.log(data);
  }
  // yield takeEvery('*', logger);
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchIncrementAsync(getState) {
  // yield takeLatest('INCREMENT_ASYNC', fetchData);
  yield watchAnlog();
}
