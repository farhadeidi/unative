export type TextProps = React.HtmlHTMLAttributes<HTMLDivElement>;
export const Text = (props: TextProps) => {
  return <div suppressHydrationWarning {...props} />;
};
