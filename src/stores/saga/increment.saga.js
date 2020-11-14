import { put, takeEvery } from "redux-saga/effects";
import { incrementByAmount } from "../../features/counter/counter.action";

const delay = (ms) => {
  return new Promise((res) => setTimeout(res, ms));
};

export function* incrementAsync({ payload }) {
  yield delay(3000);
  yield put(incrementByAmount(payload.value));
}

export function* watchIncrementAsync() {
  yield takeEvery("COUNTER_INCREMENT_ASYNC", incrementAsync);
}

export default watchIncrementAsync;
