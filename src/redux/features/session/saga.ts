import { all, call, fork, put, take } from 'redux-saga/effects';
import { sessionInit } from './api';
import { sessionAction } from './slice';


function* watchSessionSaga() {
    yield all([
        fork(initialSaga),
    ]);
}

function* initialSaga() {
    while(true) {
        yield take(sessionAction.initialRequest)
        const { data } = yield call(sessionInit)
        yield put(sessionAction.initialSuccess({session : data.session.session}))
    }
}

export default watchSessionSaga