module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true
  },
  'extends': 'eslint:recommended',
  'overrides': [
    {
      'files': ['**/*/*.test.js',
                "**/*ErrorRepository.test.js",
                "**/*basic.test.js"],
      'plugins': ['jest'],
      'extends': ['plugin:jest/recommended'],
      'rules': { 'jest/prefer-expect-assertions': 'off' }
    }
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {}
}
