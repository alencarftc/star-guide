import { RenderOptions, render } from '@testing-library/react';
import { type ReactElement, type ReactNode } from 'react';

const AllTheProviders = ({ children }: { children: ReactNode }) => (
	<>{children}</>
);

export const customRender = (
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { default as userEvent } from '@testing-library/user-event';
