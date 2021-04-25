export class Event {
    id!: number;
    title: string | undefined;
    leadText: string | undefined;
    description: string | undefined;
    dateStart: Date | undefined;
    dateEnd: Date | undefined;
    addressName: string | undefined;
    addressZipcode: string | undefined;
    addressCity: string | undefined;
    addressStreet: string | undefined;
    latitude: number | undefined;
    longitude: number | undefined;
}