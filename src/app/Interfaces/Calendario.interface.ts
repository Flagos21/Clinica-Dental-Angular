export default interface Calendario {
    [x: string]: any;
    id: string;
    title: string;
    start: string;
    end: string;
    allDay: boolean;
}