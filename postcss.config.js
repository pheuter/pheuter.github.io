import postcssPresetEnv from 'postcss-preset-env';
import postcssJitProps from 'postcss-jit-props';
import OpenProps from 'open-props';

export default {
	plugins: [
		postcssJitProps(OpenProps),
		postcssPresetEnv({
			stage: 1,
			features: {
				'custom-properties': false // Ships in major browsers
			},
			importFrom: 'node_modules/open-props/media.min.css'
		})
	]
};
