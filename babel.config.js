module.exports = api => ({
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@/*': ['./src'],
        },
      },
    ],
    ...(api.env() !== 'development' ? ['transform-remove-console'] : []),
  ],
})
