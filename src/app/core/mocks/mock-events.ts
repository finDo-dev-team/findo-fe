import { Event } from '../models/event';
import { getTomorrowDate } from "../../shared/utils/common-functions";

export const EVENTS: Event[] = [
    {
        id: 1,
        title: 'Event 1',
        leadText: 'Lead text event 1',
        description: 'Description de l\'événement 1',
        dateStart: new Date(),
        dateEnd: getTomorrowDate(),
        addressName: undefined,
        addressZipcode: undefined,
        addressCity: undefined,
        addressStreet: undefined,
        latitude: undefined,
        longitude: undefined
    },
]