import { IEvent } from "../../../models/IEvent";


export interface EventState {
    events: IEvent[] // массив событий каторые создают пользователи
    // еще можно сделать индикацию загрузки
    error: string;
    isLoading: boolean;
}

export enum EventActionEnum {
    SET_EVENTS = 'SET_EVENTS',
    SET_ERROR = "SET_ERROR",
    SET_IS_LOADING = "SET_IS_LOADING",
}

export interface setEventsAction {
    type: EventActionEnum.SET_EVENTS;
    payload: IEvent[];
}

export interface SetErrorAction {
    type:  EventActionEnum.SET_ERROR;
    payload: string;
}

export interface SetIsLoadingAction {
    type:  EventActionEnum.SET_IS_LOADING;
    payload: boolean;
}

export type EventAction = 
    setEventsAction | 
    SetErrorAction | 
    SetIsLoadingAction