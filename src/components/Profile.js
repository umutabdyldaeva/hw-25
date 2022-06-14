import { useDispatch } from "react-redux"
import { uiAction } from "../store/reducer/uiSlice"
import { useSelector } from "react-redux"
import { SpinnerDotted } from "spinners-react";

const Profile = () => {
   
    const dispatch = useDispatch()
    const { spinner } = useSelector((state) => state.ui);

    const addHandler = () => {
        dispatch(uiAction.toggle())
        setTimeout(() => {
            dispatch(uiAction.toggle())
            dispatch(uiAction.profile())
        },2000)
    }

    return (
        <div>
            <h1>WELLCOME</h1>
            <button onClick={addHandler}>Выйти</button>
            {spinner && <SpinnerDotted />}
        </div>
    )
}


export default Profile;