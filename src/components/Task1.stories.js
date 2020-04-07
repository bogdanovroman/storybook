import React from 'react';
import { action } from '@storybook/addon-actions';

import Task1 from './Task1';

export default {
    component: Task1,
    title: 'PACKAGES|events',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
};

export const taskData = {
    id: '1',
    title: 'Test Task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
};

export const Default = () => <Task1 task={{ ...taskData }} {...actionsData} />;

export const Pinned = () => (
    <Task1 task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />
);

export const Archived = () => <Task1 task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />;
