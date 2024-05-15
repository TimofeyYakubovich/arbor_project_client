import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { AppDispatch } from '../store/index';
import { allActionCreators } from "../store/reducers/action-creators";


export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>()
    // return bindActionCreators(actions, dispatch) // екшены можно передавать в сам хук аргументом но можно и обощить их и передовать все сразу
    return bindActionCreators(allActionCreators, dispatch)
}