import { handler } from '..';

import event from './sns-event.json';

describe('sns handler', () => {
    it('should handle sns events', async () => {
        await expect(handler(event)).resolves.toBeUndefined();
    });
});
