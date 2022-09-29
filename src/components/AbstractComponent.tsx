import { Fragment, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { sessionAction } from "src/redux/actions";
import { RootState } from "src/store";

const AbstractComponent = ({...props}) => {
    const session = useSelector((state: RootState) => state.sessionReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        if (session.initial) {
            dispatch(sessionAction.initialRequest());
        }
    }, [])
    return <Fragment>
        {props.children}
    </Fragment>
}

export default AbstractComponent