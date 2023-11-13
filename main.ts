async function jobArrived(s: Switch, flowElement: FlowElement, job: Job) {
	const channel = await flowElement.getPropertyStringValue('Channel');
	if (typeof channel == 'string') {
		await job.sendToChannel(channel);
	} else {
		for (const channelId of channel) {
			await job.sendToChannel(channelId);
		}
	}
}
