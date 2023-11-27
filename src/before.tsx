type Merge<T, U> = Omit<T, keyof U> & U;

interface MyButtonElementProps {
  className?: string;
}

type MyButtonElementType = React.ElementType<MyButtonElementProps>;

type MyButtonProps<T extends MyButtonElementType = "button"> = Merge<
  React.ComponentPropsWithoutRef<T>,
  { as?: T }
>;

function MyButton<T extends MyButtonElementType = "button">({
  as = "button" as T,
  className,
  ...props
}: MyButtonProps<T>) {
  const Element: MyButtonElementType = as;
  return <Element className={`${className ?? ""} my-button`} {...props} />;
}

export function App() {
  return (
    <MyButton as="a" href="/">
      Home
    </MyButton>
  );
}
