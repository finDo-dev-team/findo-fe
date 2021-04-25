export class Event {
    id!: number;
    title: string | undefined;
    leadText: string | undefined;
    description: string | undefined;
    date_start: Date | undefined;
    date_end: Date | undefined;
    address_name: string | undefined;
    address_zipcode: string | undefined;
    address_city: string | undefined;
    address_street: string | undefined;
    latitude: number | undefined;
    longitude: number | undefined;
}