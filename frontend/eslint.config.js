import { react } from 'unk-dev-eslint-config'

export default [
  ...react,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
