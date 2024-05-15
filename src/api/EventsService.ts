import axios, { AxiosResponse } from "axios";
import { IEvent } from "../models/IEvent";


export default class EventsService {
    static async getEvents(path: string): Promise<AxiosResponse<IEvent[]>> {
        // return axios.get<IEvent[]>('./events.json')
        return axios.get<IEvent[]>(path)
    }

    static async createEvent(path: string, body: IEvent): Promise<AxiosResponse<IEvent>> {
        return axios.post<IEvent>(path, body)
    }

    static async deleteEvent(path: string, eventId: string): Promise<AxiosResponse<string>> {
        return axios.delete<string>(path + eventId)
    }
}