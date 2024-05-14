import Home from '@pages/Home';

import classes from './app.module.scss';

export const App = () => (
	<div data-testid="wrapper" className={classes.wrapper}>
		<Home />
	</div>
);
