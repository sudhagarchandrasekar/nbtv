import { OutgoingEventType } from './outgoing-event-type';
export interface OutgoingEvent {
    type: OutgoingEventType;
    value: string;
}
