import postcssNesting from 'postcss-nesting';
import postcssCustomMedia from 'postcss-custom-media';

export default {
	plugins: [postcssNesting(), postcssCustomMedia()]
};
