import {BufferEvent} from '../events/buffer.event';
import {SetEvent} from '../events/set.event';
import {insertCharReducer} from './insert-char.reducer';
import {newLineReducer} from './new-line.reducer';

export function setReducer(source: BufferEvent, event: SetEvent): BufferEvent {
    return event.value.split('').reduce((acc, next) => {
        return next === '\r' ? newLineReducer(acc) : insertCharReducer(acc, next);
    }, source);
}
