import { AppDispatch } from "../..";
import EventsService from "../../../api/EventsService";
import { IEvent } from "../../../models/IEvent";
import { EventActionEnum, setEventsAction, SetErrorAction, SetIsLoadingAction } from "./types";

export const EventActionCreators = {
    setEvents: (payload: IEvent[]): setEventsAction => ({type: EventActionEnum.SET_EVENTS, payload}),
    setIsLoading: (isLoading: boolean): SetIsLoadingAction => ({type: EventActionEnum.SET_IS_LOADING, payload: isLoading}),
    setError: (error: string): SetErrorAction => ({type: EventActionEnum.SET_ERROR, payload: error}),
    fetchEvents: (path: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(EventActionCreators.setIsLoading(true))
            const response = await EventsService.getEvents(path)
            dispatch(EventActionCreators.setEvents(response.data))
            dispatch(EventActionCreators.setIsLoading(false))
        } catch (e) {
            console.log(e)
            dispatch(EventActionCreators.setError('Произошла ошибка при загрузке данных'))
        }
    },
    createEvent: (path: string , event: IEvent) => async (dispatch: AppDispatch) => {
        try {
            dispatch(EventActionCreators.setIsLoading(true))
            const responseEvent = await EventsService.createEvent(path, event)
            const responseEvents = await EventsService.getEvents(path)
            dispatch(EventActionCreators.setEvents(responseEvents.data))
            dispatch(EventActionCreators.setIsLoading(false))
        } catch (e) {
            console.log(e)
            dispatch(EventActionCreators.setError('Произошла ошибка при создании события'))
        }
    },
    deleteEvent: (path: string , eventId: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(EventActionCreators.setIsLoading(true))
            const responseEvent = await EventsService.deleteEvent(path, eventId)
            const responseEvents = await EventsService.getEvents(path)
            dispatch(EventActionCreators.setEvents(responseEvents.data))
            dispatch(EventActionCreators.setIsLoading(false))
        } catch (e) {
            console.log(e)
            dispatch(EventActionCreators.setError('Произошла ошибка при удалении события'))
        }
    }
}