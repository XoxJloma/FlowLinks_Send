"use strict";
async function jobArrived(s, flowElement, job) {
    const channel = await flowElement.getPropertyStringValue('Channel');
    if (typeof channel == 'string') {
        await job.sendToChannel(channel);
    }
    else {
        for (const channelId of channel) {
            await job.sendToChannel(channelId);
        }
    }
}
//# sourceMappingURL=main.js.map