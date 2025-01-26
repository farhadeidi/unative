import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const I3SquareBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 18.5V19.38C12 21.25 11.25 22 9.37 22H4.62C3.17 22 2 20.83 2 19.38V14.63C2 12.75 2.75 12 4.62 12H5.5V15.5C5.5 17.16 6.84 18.5 8.5 18.5H12Z"
        fill="currentColor"
      />
      <Path
        d="M17 13.5V14.37C17 15.82 15.82 17 14.37 17H9.62C7.75 17 7 16.25 7 14.37V9.62C7 8.17 8.17 7 9.62 7H10.5V10.5C10.5 12.16 11.84 13.5 13.5 13.5H17Z"
        fill="currentColor"
      />
      <Path
        d="M22 4.62V9.37C22 11.25 21.25 12 19.37 12H14.62C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2H19.37C21.25 2 22 2.75 22 4.62Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const I3SquareBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 17V19.38C12 21.25 11.25 22 9.37 22H4.62C2.75 22 2 21.25 2 19.38V14.63C2 12.75 2.75 12 4.62 12H7V14.37C7 16.25 7.75 17 9.62 17H12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 12V14.37C17 16.25 16.25 17 14.37 17H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12V9.37C12 11.25 12.75 12 14.62 12H17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 9.37C22 11.25 21.25 12 19.37 12H14.62C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2H19.37C21.25 2 22 2.75 22 4.62"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const I3SquareBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 17V19.38C12 21.25 11.25 22 9.37 22H4.62C2.75 22 2 21.25 2 19.38V14.63C2 12.75 2.75 12 4.62 12H7V14.37C7 16.25 7.75 17 9.62 17H12Z"
        fill="currentColor"
      />
      <Path
        opacity="0.6"
        d="M17 12V14.37C17 16.25 16.25 17 14.37 17H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12V9.37C12 11.25 12.75 12 14.62 12H17Z"
        fill="currentColor"
      />
      <Path
        d="M22 4.62V9.37C22 11.25 21.25 12 19.37 12H14.62C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2H19.37C21.25 2 22 2.75 22 4.62Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const I3SquareLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 17V19.38C12 21.25 11.25 22 9.37 22H4.62C2.75 22 2 21.25 2 19.38V14.63C2 12.75 2.75 12 4.62 12H7V14.37C7 16.25 7.75 17 9.62 17H12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 12V14.37C17 16.25 16.25 17 14.37 17H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12V9.37C12 11.25 12.75 12 14.62 12H17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 4.62V9.37C22 11.25 21.25 12 19.37 12H14.62C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2H19.37C21.25 2 22 2.75 22 4.62Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const I3SquareOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.37 22.75H4.62C2.32 22.75 1.25 21.68 1.25 19.38V14.63C1.25 12.32 2.32 11.25 4.62 11.25H7C7.41 11.25 7.75 11.59 7.75 12V14.37C7.75 15.83 8.17 16.25 9.62 16.25H12C12.41 16.25 12.75 16.59 12.75 17V19.38C12.75 21.68 11.68 22.75 9.37 22.75ZM4.62 12.75C3.17 12.75 2.75 13.17 2.75 14.63V19.38C2.75 20.83 3.17 21.25 4.62 21.25H9.37C10.83 21.25 11.25 20.83 11.25 19.38V17.75H9.62C7.32 17.75 6.25 16.68 6.25 14.37V12.75H4.62Z"
        fill="currentColor"
      />
      <Path
        d="M14.37 17.75H9.62C7.32 17.75 6.25 16.68 6.25 14.37V9.62C6.25 7.32 7.32 6.25 9.62 6.25H12C12.41 6.25 12.75 6.59 12.75 7V9.37C12.75 10.83 13.17 11.25 14.62 11.25H17C17.41 11.25 17.75 11.59 17.75 12V14.37C17.75 16.68 16.68 17.75 14.37 17.75ZM9.62 7.75C8.17 7.75 7.75 8.17 7.75 9.62V14.37C7.75 15.83 8.17 16.25 9.62 16.25H14.37C15.83 16.25 16.25 15.83 16.25 14.37V12.75H14.62C12.32 12.75 11.25 11.68 11.25 9.37V7.75H9.62Z"
        fill="currentColor"
      />
      <Path
        d="M19.37 12.75H14.62C12.32 12.75 11.25 11.68 11.25 9.37V4.62C11.25 2.32 12.32 1.25 14.62 1.25H19.37C21.68 1.25 22.75 2.32 22.75 4.62V9.37C22.75 11.68 21.68 12.75 19.37 12.75ZM14.62 2.75C13.17 2.75 12.75 3.17 12.75 4.62V9.37C12.75 10.83 13.17 11.25 14.62 11.25H19.37C20.83 11.25 21.25 10.83 21.25 9.37V4.62C21.25 3.17 20.83 2.75 19.37 2.75H14.62Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const I3SquareTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 17V19.38C12 21.25 11.25 22 9.37 22H4.62C2.75 22 2 21.25 2 19.38V14.63C2 12.75 2.75 12 4.62 12H7V14.37C7 16.25 7.75 17 9.62 17H12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17 12V14.37C17 16.25 16.25 17 14.37 17H9.62C7.75 17 7 16.25 7 14.37V9.62C7 7.75 7.75 7 9.62 7H12V9.37C12 11.25 12.75 12 14.62 12H17Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 4.62V9.37C22 11.25 21.25 12 19.37 12H14.62C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2H19.37C21.25 2 22 2.75 22 4.62Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: I3SquareBold,
  broken: I3SquareBroken,
  bulk: I3SquareBulk,
  linear: I3SquareLinear,
  outline: I3SquareOutline,
  twotone: I3SquareTwotone,
};

export const I3SquareIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
