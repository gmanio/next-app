[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/zeit/next.js/tree/master/examples/basic-css)

# Basic CSS example

## How to use

### Using `create-next-app`

Execute [`create-next-app`](https://github.com/segmentio/create-next-app) with [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) or [npx](https://github.com/zkat/npx#readme) to bootstrap the example:

```bash
npx create-next-app --example basic-css basic-css-app
# or
yarn create next-app --example basic-css basic-css-app
```

### Download manually

Download the example:

```bash
curl https://codeload.github.com/zeit/next.js/tar.gz/canary | tar -xz --strip=2 next.js-canary/examples/basic-css
cd basic-css
```

Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```

## The idea behind the example

Next.js ships with [styled-jsx](https://github.com/zeit/styled-jsx) allowing you
to write scope styled components with full css support. This is important for
the modularity and code size of your bundles and also for the learning curve of the framework. If you know css you can write styled-jsx right away.

### External CSS and styles outside of the component

In styled-jsx styles can be defined outside of the component's render method or in separate JavaScript modules using the `styled-jsx/css` library. `styled-jsx/css` exports three tags that can be used to tag your styles:

* `css`, the default export, to define scoped styles.
* `css.global` to define global styles.
* `css.resolve` to define scoped styles that resolve to the scoped `className` and a `styles` element.

#### External styles

In an external file:

```js
/* styles.js */
import css from 'styled-jsx/css'

// Scoped styles
export const button = css`button { color: hotpink; }`

// Global styles
export const body = css.global`body { margin: 0; }`

// Resolved styles
export const link = css.resolve`a { color: green; }`
// link.className -> scoped className to apply to `a` elements e.g. jsx-123
// link.styles -> styles element to render inside of your component

// Works also with default exports
export default css`div { color: green; }`
```

You can then import and use those styles:

```jsx
import styles, { button, body } from './styles'

export default () => (
  <div>
    <button>styled-jsx</button>
    <style jsx>{styles}</style>
    <style jsx>{button}</style>
    <style jsx global>{body}</style>
  </div>
)
```

N.B. All the tags except for [`resolve`](#the-resolve-tag) don't support dynamic styles.

`resolve` and `global` can also be imported individually:

```js
import { resolve } from 'styled-jsx/css'
import { global } from 'styled-jsx/css'
```

If you use Prettier we recommend you to use the default `css` export syntax since the tool doesn't support named imports.

#### Styles outside of components

The `css` tag from `styled-jsx/css` can be also used to define styles in your components files but outside of the component itself. This might help with keeping `render` methods smaller.

```jsx
import css from 'styled-jsx/css'

export default () => (
  <div>
    <button>styled-jsx</button>
    <style jsx>{button}</style>
  </div>
)

const button = css`button { color: hotpink; }`
```

Like in externals styles `css` doesn't work with dynamic styles. If you have dynamic parts you might want to place them inline inside of your component using a regular `<style jsx>` element.

#### The `resolve` tag

The `resolve` tag from `styled-jsx/css` can be used when you need to scope some CSS and want back the generated scoped `className` and `styles`. This is usually the case when you want to style nested components from the parent.

```jsx
import React from 'react'
import Link from 'some-library'

import css from 'styled-jsx/css'

const { className, styles } = css.resolve`
  a { color: green }
`

export default () => (
  <div>
    {/* use the className */}
    <Link className={className}>About</Link>
    {/* render the styles for it */}
    {styles}
    <style jsx>{`div { border: 5px solid green }`}</style>
  </div>
)
```

The `resolve` tag also supports dynamic styles:

```jsx
import React from 'react'
import css from 'styled-jsx/css'

function getLinkStyles(color) {
  return css.resolve`
    a { color: ${color} }
  `
}

export default (props) => {
  const { className, styles } = getLinkStyles(props.theme.color)

  return (
    <div>
      <Link className={className}>About</Link>
      {styles}
    </div>
  )
}
```

#### Using `resolve` as a babel macro

The `resolve` tag can be used as a Babel macro thanks to the [`babel-plugin-macros`](https://github.com/kentcdodds/babel-plugin-macros) system.

```bash
npm i --save styled-jsx
npm i --save-dev babel-plugin-macros
```

Next add `babel-plugin-macros` to your babel configuration:

```json
{
  "plugins": [
    "babel-plugin-macros"
  ]
}
```

You can then start to use `resolve` by importing it from `styled-jsx/macro`.

```jsx
import css, { resolve } from 'styled-jsx/macro'

const stylesInfo = css.resolve`a { color: green; }`
const stylesInfo2 = resolve`a { color: green; }`
```

**Create React App** comes with `babel-plugin-macros` pre-installed so you just need to install `styled-jsx` and you can start to use `resolve right away.


#### Styles in regular CSS files

styled-jsx v3 comes with a webpack loader that lets you write styles in regular `css` files and consume them in React.

```js
import styles from '../components/button/styles.css'

export default () => (
  <div>
    <button>styled-jsx</button>
    <style jsx>{styles}</style>
  </div>
)
```