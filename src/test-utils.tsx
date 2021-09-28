import React from 'react';
import { render as tlRender } from '@testing-library/react';

const render = (component: React.ReactElement) => tlRender(component);

export * from '@testing-library/react';
export { render };
