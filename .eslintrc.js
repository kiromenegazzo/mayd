const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  env: {
    es6: true,
    node: true,
    browser: true,
    jest: true,
  },

  parser: '@typescript-eslint/parser',

  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
    jsx: true,
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },

  extends: ['airbnb-typescript', 'airbnb/hooks'],
  plugins: ['import', 'jsx-a11y', 'react', 'react-hooks', 'compat', 'optimize-regex'],

  rules: {
    'import/prefer-default-export': OFF,
    'operator-linebreak': [ERROR, 'before'],
    'linebreak-style': OFF,
    'jsx-a11y/label-has-associated-control': OFF,
    'consistent-return': OFF,
    'react/state-in-constructor': OFF,
    'jsx-a11y/anchor-is-valid': OFF,
    'jsx-a11y/click-events-have-key-events': OFF,
    'react/jsx-props-no-spreading': OFF,
    'jsx-a11y/no-static-element-interactions': OFF,
    'jsx-a11y/no-noninteractive-element-interactions': OFF,
    'class-methods-use-this': OFF,
    'no-param-reassign': [ERROR, { props: false }],
    'no-restricted-imports': [
      ERROR,
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message: 'React default is automatically imported by webpack.'
          }
        ]
      }
    ],
    'id-length': [ERROR, { exceptions: ['_', 'i', 'j', 'x', 'y', 'z', 'a', 'b', 'e'] }],
    'indent': [ERROR, 2, {
      SwitchCase: 1,
      MemberExpression: 1,
      ignoredNodes: ['JSXElement'],
    }],
    'react/jsx-indent': [ERROR, 2, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/jsx-indent-props': [ERROR, 2],
    'react/jsx-one-expression-per-line': [ERROR, { allow: 'single-child' }],
    'max-len': [WARN, { code: 150 }],
    'import/no-extraneous-dependencies': [WARN, { devDependencies: true }],
    'react/jsx-filename-extension': [ERROR, { extensions: ['.tsx', '.js', '.jsx'] }],
    'react/no-array-index-key': [ERROR],
    'quote-props': [ERROR, 'consistent'],
    'no-alert': ERROR,
    'import/extensions': [ERROR, {
      'ts': 'never',
      'tsx': 'never',
      'svg': 'always',
      'png': 'always',
      'json': 'always',
      'pdf': 'always',
    }],
    'no-plusplus': [ERROR, { 'allowForLoopAfterthoughts': true }],
    'camelcase': [ERROR, {
      allow: [
        'UNSAFE_componentDidMount',
        'UNSAFE_componentWillReceiveProps',
        'UNSAFE_componentWillUpdate',
      ],
    }],
    'new-cap': [ERROR, {
      'capIsNewExceptions': [
        'SortableContainer',
        'SortableElement',
        'List',
        'Map',
        'Set',
      ],
    }],
    'react/jsx-sort-props': [
      ERROR,
      {
        callbacksLast: true,
        shorthandFirst: true,
        shorthandLast: false,
        ignoreCase: false,
        noSortAlphabetically: false,
        reservedFirst: false,
      },
    ],
    'react/sort-comp': [
      ERROR,
      {
        order: [
          'static-methods',
          'lifecycle',
          'everything-else',
          '/^(get|set).+$/',
          '/^handle.+$/',
          'rendering',
        ],
        groups: {
          lifecycle: [
            'constructor',
            'statics',
            'contextTypes',
            'childContextTypes',
            'state',
            'getDefaultProps',
            'getInitialState',
            'getChildContext',
            'getDerivedStateFromProps',
            'componentDidMount',
            'shouldComponentUpdate',
            'getSnapshotBeforeUpdate',
            'componentDidUpdate',
            'componentDidCatch',
            'componentWillUnmount',
          ],
          rendering: ['/^render.+$/', 'render'],
        },
      },
    ],
    'object-curly-newline': [ERROR, {
      'ObjectPattern': { 'consistent': true },
      'ObjectExpression': { 'consistent': true },
    }],
    'import/order': [
      ERROR,
      {
        'alphabetize': { order: 'asc', caseInsensitive: false },
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'unknown'],
        'newlines-between': 'always',
        'pathGroupsExcludedImportTypes': [''],
        'pathGroups': [
          {
            pattern: '+(react|react-dom)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '+(react-*)',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '+(pages|components|hooks|utils)/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '+(constants|types)/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: 'assets/**',
            group: 'internal',
            position: 'after',
          },
          {
            pattern: './*.+(css|svg)',
            group: 'sibling',
            position: 'after',
          },
        ],
      },
    ],
    'padding-line-between-statements': [ERROR,
      { blankLine: 'always', prev: '*', next: 'return' },

      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },

      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },

      { blankLine: 'always', prev: '*', next: 'if' },
      { blankLine: 'always', prev: 'if', next: '*' },

      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'always', prev: 'block-like', next: '*' },

      { blankLine: 'never', prev: 'case', next: 'case' },
      { blankLine: 'never', prev: '*', next: ['break', 'default'] },
      { blankLine: 'any', prev: 'if', next: 'break' },
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z][A-Za-z0-9]+$',
          match: true,
        },
      },
      {
        selector: 'typeAlias',
        format: ['PascalCase'],
        custom: {
          regex: '^T[A-Z][A-Za-z0-9]+$',
          match: true,
        },
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
        custom: {
          regex: '^E[A-Z][A-Za-z0-9]+$',
          match: true,
        },
      },
    ],
  },
  overrides: [],
};
