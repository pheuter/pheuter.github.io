import postcssPresetEnv from 'postcss-preset-env';

export default {
	plugins: [
		postcssPresetEnv({
			stage: 1,
			features: {
				'custom-properties': false // Ships in major browsers
			},
			importFrom: 'node_modules/open-props/media.min.css'
		})
	]
};
