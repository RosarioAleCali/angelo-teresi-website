import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const config = [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: ['.next/**', 'node_modules/**', 'out/**', 'next-env.d.ts'],
  },
  {
    rules: {
      // Pre-existing patterns (hydration hooks, animation controls); revisit separately.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
];

export default config;
