import { node } from 'unk-dev-eslint-config'

export default [
  ...node,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]
