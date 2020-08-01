import { IExponentialRampToValueAutomationEvent, ILinearRampToValueAutomationEvent } from '../interfaces';
import { TAutomationEvent } from '../types';
export declare const isAnyRampToValueAutomationEvent: (automationEvent: TAutomationEvent) => automationEvent is IExponentialRampToValueAutomationEvent | ILinearRampToValueAutomationEvent;
//# sourceMappingURL=/build/es2019/guards/any-ramp-to-value-automation-event.d.ts.map