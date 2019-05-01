import {Observable} from 'rxjs';
import {eventsAppend} from '../../internal/events/events-append';
import {EventsOperator} from '../event-queue';

/**
 * Adds a delay to the buffer stream.
 */
export function pause(delay: number | Observable<any> = 1000): EventsOperator {
    return eventsAppend(() => [{type: 'pause', delay}]);
}
