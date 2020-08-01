import { isExponentialRampToValueAutomationEvent } from './exponential-ramp-to-value-automation-event';
import { isLinearRampToValueAutomationEvent } from './linear-ramp-to-value-automation-event';
export const isAnyRampToValueAutomationEvent = (automationEvent) => {
    return isExponentialRampToValueAutomationEvent(automationEvent) || isLinearRampToValueAutomationEvent(automationEvent);
};
//# sourceMappingURL=/build/es2019/guards/any-ramp-to-value-automation-event.js.map