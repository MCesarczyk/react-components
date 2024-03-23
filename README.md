# React-components

## 1. Atoms

### 1.1. Button

Usage:

```jsx
import { Button } from "@mcesarczyk/react-components";

<Button
  buttonType={
    "primary" | "secondary" | "warning" | "error" | "outlined" | "disabled"
  }
  size={"default" | "small" | "large" | "xxl"}
  rounded={"default" | "sm" | "lg" | "xl" | "xxl" | "full" | "none"}
  spacing={"default" | "small" | "large" | "xxl"}
  label={String}
  leftIcon={ReactNode}
  rightIcon={ReactNode}
  onClick={MouseEventHandler<HTMLButtonElement>}
/>;
```

Besides the options, the Button component accepts all the props from the native button element.

### 1.2. Select

Usage:

```jsx
import { Select } from '@mcesarczyk/react-components';

<Select
  options={Array<{ value: string | number, label: string }>}
/>
```

Besides the options, the Select component accepts all the props from the native select element.
