import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const PaperclipBold = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM16.75 13.71C16.75 15.23 15.52 16.46 14 16.46C12.48 16.46 11.25 15.23 11.25 13.71V11.71C11.25 11.3 11.59 10.96 12 10.96C12.41 10.96 12.75 11.3 12.75 11.71V13.71C12.75 14.4 13.31 14.96 14 14.96C14.69 14.96 15.25 14.4 15.25 13.71V10.57C15.25 8.78 13.79 7.32 12 7.32C10.21 7.32 8.75 8.78 8.75 10.57V14C8.75 15.48 9.95 16.68 11.43 16.68C11.84 16.68 12.18 17.02 12.18 17.43C12.18 17.84 11.84 18.18 11.43 18.18C9.13 18.18 7.25 16.3 7.25 14V10.57C7.25 7.95 9.38 5.82 12 5.82C14.62 5.82 16.75 7.95 16.75 10.57V13.71Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PaperclipBroken = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M4.9707 14V16C4.9707 19.31 7.6607 22 10.9707 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9707 12V15.5C11.9707 17.43 13.5407 19 15.4707 19C17.4007 19 18.9707 17.43 18.9707 15.5V10C18.9707 6.13 15.8407 3 11.9707 3C8.1007 3 4.9707 6.13 4.9707 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PaperclipBulk = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        opacity="0.4"
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="currentColor"
      />
      <Path
        d="M11.43 18.1798C9.13 18.1798 7.25 16.2998 7.25 13.9998V10.5698C7.25 7.94982 9.38 5.81982 12 5.81982C14.62 5.81982 16.75 7.94982 16.75 10.5698V13.7098C16.75 15.2298 15.52 16.4598 14 16.4598C12.48 16.4598 11.25 15.2298 11.25 13.7098V11.7098C11.25 11.2998 11.59 10.9598 12 10.9598C12.41 10.9598 12.75 11.2998 12.75 11.7098V13.7098C12.75 14.3998 13.31 14.9598 14 14.9598C14.69 14.9598 15.25 14.3998 15.25 13.7098V10.5698C15.25 8.77982 13.79 7.31982 12 7.31982C10.21 7.31982 8.75 8.77982 8.75 10.5698V13.9998C8.75 15.4798 9.95 16.6798 11.43 16.6798C11.84 16.6798 12.18 17.0198 12.18 17.4298C12.18 17.8398 11.84 18.1798 11.43 18.1798Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PaperclipLinear = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M11.97 12V15.5C11.97 17.43 13.54 19 15.47 19C17.4 19 18.97 17.43 18.97 15.5V10C18.97 6.13 15.84 3 11.97 3C8.09997 3 4.96997 6.13 4.96997 10V16C4.96997 19.31 7.65997 22 10.97 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PaperclipOutline = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M10.9707 22.75C7.2507 22.75 4.2207 19.72 4.2207 16V10C4.2207 5.73 7.7007 2.25 11.9707 2.25C16.2407 2.25 19.7207 5.73 19.7207 10V15.5C19.7207 17.84 17.8107 19.75 15.4707 19.75C13.1307 19.75 11.2207 17.84 11.2207 15.5V12C11.2207 11.59 11.5607 11.25 11.9707 11.25C12.3807 11.25 12.7207 11.59 12.7207 12V15.5C12.7207 17.02 13.9507 18.25 15.4707 18.25C16.9907 18.25 18.2207 17.02 18.2207 15.5V10C18.2207 6.55 15.4207 3.75 11.9707 3.75C8.5207 3.75 5.7207 6.55 5.7207 10V16C5.7207 18.89 8.0707 21.25 10.9707 21.25C11.3807 21.25 11.7207 21.59 11.7207 22C11.7207 22.41 11.3907 22.75 10.9707 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PaperclipTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <Path
        d="M11.9707 12V15.5C11.9707 17.43 13.5407 19 15.4707 19C17.4007 19 18.9707 17.43 18.9707 15.5V10C18.9707 6.13 15.8407 3 11.9707 3C8.1007 3 4.9707 6.13 4.9707 10V16C4.9707 19.31 7.6607 22 10.9707 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PaperclipBold,
  broken: PaperclipBroken,
  bulk: PaperclipBulk,
  linear: PaperclipLinear,
  outline: PaperclipOutline,
  twotone: PaperclipTwotone,
};

export const PaperclipIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
