import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home component', () => {
	it('should render successfully', () => {
		// arrange
		const title = 'Esse é o titulo da página.';

		// act
		render(<Home />);
		const titleEl = screen.getByText(title);

		// assert
		expect(titleEl).toBeInTheDocument();
	});
});
