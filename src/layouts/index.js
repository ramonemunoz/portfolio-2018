import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import './index.scss';

const TemplateWrapper = ({ children }) => (
	<div>
		<Helmet
			title="Ramon Munoz"
			meta={[
				{ name: 'description', content: 'Ramon Munoz Portfolio' },
				{ name: 'keywords', content: 'portfolio, ramon' }
			]}
		/>
		<div>{children()}</div>
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func
};

export default TemplateWrapper;
