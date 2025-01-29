import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const Shapes1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.75 7H11H7C4.24 7 2 9.24 2 12V17C2 19.76 4.24 22 7 22H12C14.76 22 17 19.76 17 17V13V12.25C17 9.35 14.65 7 11.75 7Z"
        fill="currentColor"
      />
      <Path
        d="M21.8806 6.33033C22.4052 8.88991 21.1628 11.2123 19.1598 12.306C18.8522 12.4739 18.5006 12.2343 18.5006 11.8838V11.7503C18.5006 8.31033 15.6906 5.50033 12.2506 5.50033H12.1171C11.7666 5.50033 11.527 5.14879 11.695 4.84119C12.7887 2.8381 15.111 1.59574 17.6706 2.12033C19.7606 2.55033 21.4506 4.24033 21.8806 6.33033Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Shapes1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M1.9707 12.25C1.9707 8.5 3.4707 7 7.2207 7H11.7207C15.4707 7 16.9707 8.5 16.9707 12.25V16.75C16.9707 20.5 15.4707 22 11.7207 22H7.2207C3.4707 22 1.9707 20.5 1.9707 16.75V16.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.97 7.5C21.97 10.37 19.78 12.72 16.97 12.97V12.25C16.97 8.5 15.47 7 11.72 7H11C11.25 4.19 13.6 2 16.47 2C19.26 2 21.56 4.07 21.91 6.77C21.95 7 21.97 7.25 21.97 7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Shapes1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.75 7H11H7C4.24 7 2 9.24 2 12V17C2 19.76 4.24 22 7 22H12C14.76 22 17 19.76 17 17V13V12.25C17 9.35 14.65 7 11.75 7Z"
        fill="currentColor"
      />
      <Path
        d="M16.4993 2C13.6293 2 11.2793 4.2 11.0293 7H11.7493C14.6493 7 16.9993 9.35 16.9993 12.25V12.97C19.7993 12.72 21.9993 10.36 21.9993 7.5C21.9993 4.46 19.5393 2 16.4993 2Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Shapes1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.43 15H4.4C2.58 15 1.42 13.05 2.3 11.45L4.63 7.20994L6.81 3.23994C7.72 1.58994 10.1 1.58994 11.01 3.23994L13.2 7.20994L14.25 9.11995L15.53 11.45C16.41 13.05 15.25 15 13.43 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 15.5C22 19.09 19.09 22 15.5 22C11.91 22 9 19.09 9 15.5C9 15.33 9.01 15.17 9.02 15H13.43C15.25 15 16.41 13.05 15.53 11.45L14.25 9.12C14.65 9.04 15.07 9 15.5 9C19.09 9 22 11.91 22 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Shapes1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.7207 22.75H7.2207C3.0707 22.75 1.2207 20.9 1.2207 16.75V12.25C1.2207 8.1 3.0707 6.25 7.2207 6.25H11.7207C15.8707 6.25 17.7207 8.1 17.7207 12.25V16.75C17.7207 20.9 15.8707 22.75 11.7207 22.75ZM7.2207 7.75C3.9007 7.75 2.7207 8.93 2.7207 12.25V16.75C2.7207 20.07 3.9007 21.25 7.2207 21.25H11.7207C15.0407 21.25 16.2207 20.07 16.2207 16.75V12.25C16.2207 8.93 15.0407 7.75 11.7207 7.75H7.2207Z"
        fill="currentColor"
      />
      <Path
        d="M16.9692 13.7198C16.7792 13.7198 16.5992 13.6498 16.4592 13.5198C16.2992 13.3798 16.2192 13.1798 16.2192 12.9698V12.2498C16.2192 8.92977 15.0392 7.74977 11.7192 7.74977H10.9992C10.7892 7.74977 10.5892 7.65977 10.4492 7.50977C10.3092 7.34977 10.2392 7.14977 10.2592 6.93977C10.5492 3.69977 13.2192 1.25977 16.4792 1.25977C19.5992 1.25977 22.2592 3.58977 22.6592 6.67977C22.6992 6.91977 22.7292 7.20977 22.7292 7.50977C22.7292 10.7698 20.2892 13.4398 17.0492 13.7298C17.0192 13.7198 16.9992 13.7198 16.9692 13.7198ZM11.8892 6.24977C15.8592 6.29977 17.6692 8.09977 17.7192 12.0798C19.7592 11.5398 21.2192 9.68977 21.2192 7.49977C21.2192 7.28977 21.1992 7.08977 21.1692 6.89977C20.8592 4.51977 18.8392 2.74977 16.4692 2.74977C14.2792 2.74977 12.4392 4.20977 11.8892 6.24977Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Shapes1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.9707 12.25V16.75C16.9707 20.5 15.4707 22 11.7207 22H7.2207C3.4707 22 1.9707 20.5 1.9707 16.75V12.25C1.9707 8.5 3.4707 7 7.2207 7H11.7207C15.4707 7 16.9707 8.5 16.9707 12.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M21.97 7.5C21.97 10.37 19.78 12.72 16.97 12.97V12.25C16.97 8.5 15.47 7 11.72 7H11C11.25 4.19 13.6 2 16.47 2C19.26 2 21.56 4.07 21.91 6.77C21.95 7 21.97 7.25 21.97 7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Shapes1Bold,
  broken: Shapes1Broken,
  bulk: Shapes1Bulk,
  linear: Shapes1Linear,
  outline: Shapes1Outline,
  twotone: Shapes1Twotone,
};

export const Shapes1Icon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default Shapes1Icon;
