import { base } from 'unk-dev-eslint-config'

export default [
  ...base,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'turbo/no-undeclared-env-vars': 'off',
    },
  },
]
