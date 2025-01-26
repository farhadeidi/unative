import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const PauseCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9688 2C6.44875 2 1.96875 6.48 1.96875 12C1.96875 17.52 6.44875 22 11.9688 22C17.4888 22 21.9688 17.52 21.9688 12C21.9688 6.48 17.4988 2 11.9688 2ZM10.7188 15.03C10.7188 15.51 10.5188 15.7 10.0087 15.7H8.70875C8.19875 15.7 7.99875 15.51 7.99875 15.03V8.97C7.99875 8.49 8.19875 8.3 8.70875 8.3H9.99875C10.5087 8.3 10.7087 8.49 10.7087 8.97V15.03H10.7188ZM15.9987 15.03C15.9987 15.51 15.7987 15.7 15.2887 15.7H13.9987C13.4887 15.7 13.2887 15.51 13.2887 15.03V8.97C13.2887 8.49 13.4887 8.3 13.9987 8.3H15.2887C15.7987 8.3 15.9987 8.49 15.9987 8.97V15.03Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PauseCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7491 14.43V9.36995C10.7491 8.88995 10.5491 8.69995 10.0391 8.69995H8.74906C8.23906 8.69995 8.03906 8.88995 8.03906 9.36995V14.43C8.03906 14.91 8.23906 15.1 8.74906 15.1H10.0391C10.5491 15.1 10.7491 14.91 10.7491 14.43Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.0303 14.43V9.36995C16.0303 8.88995 15.8303 8.69995 15.3203 8.69995H14.0303C13.5203 8.69995 13.3203 8.88995 13.3203 9.36995V14.43C13.3203 14.91 13.5203 15.1 14.0303 15.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PauseCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z"
        fill="currentColor"
      />
      <Path
        d="M10.72 15.0298V8.9698C10.72 8.4898 10.52 8.2998 10.01 8.2998H8.71C8.2 8.2998 8 8.4898 8 8.9698V15.0298C8 15.5098 8.2 15.6998 8.71 15.6998H10C10.52 15.6998 10.72 15.5098 10.72 15.0298Z"
        fill="currentColor"
      />
      <Path
        d="M15.9991 15.0298V8.9698C15.9991 8.4898 15.7991 8.2998 15.2891 8.2998H13.9991C13.4891 8.2998 13.2891 8.4898 13.2891 8.9698V15.0298C13.2891 15.5098 13.4891 15.6998 13.9991 15.6998H15.2891C15.7991 15.6998 15.9991 15.5098 15.9991 15.0298Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PauseCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.72 14.53V9.47005C10.72 8.99005 10.52 8.80005 10.01 8.80005H8.71C8.2 8.80005 8 8.99005 8 9.47005V14.53C8 15.01 8.2 15.2 8.71 15.2H10C10.52 15.2 10.72 15.01 10.72 14.53Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 14.53V9.47005C16 8.99005 15.8 8.80005 15.29 8.80005H14C13.49 8.80005 13.29 8.99005 13.29 9.47005V14.53C13.29 15.01 13.49 15.2 14 15.2H15.29C15.8 15.2 16 15.01 16 14.53Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PauseCircleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9707 22.75C6.0507 22.75 1.2207 17.93 1.2207 12C1.2207 6.07 6.0507 1.25 11.9707 1.25C17.8907 1.25 22.7207 6.07 22.7207 12C22.7207 17.93 17.9007 22.75 11.9707 22.75ZM11.9707 2.75C6.8707 2.75 2.7207 6.9 2.7207 12C2.7207 17.1 6.8707 21.25 11.9707 21.25C17.0707 21.25 21.2207 17.1 21.2207 12C21.2207 6.9 17.0707 2.75 11.9707 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M10.01 15.9498H8.71C7.79 15.9498 7.25 15.4198 7.25 14.5298V9.4698C7.25 8.5798 7.8 8.0498 8.71 8.0498H10C10.92 8.0498 11.46 8.5798 11.46 9.4698V14.5298C11.47 15.4198 10.92 15.9498 10.01 15.9498ZM8.75 14.4498H9.97V9.5498H8.76L8.75 14.4498Z"
        fill="currentColor"
      />
      <Path
        d="M15.2891 15.9498H13.9991C13.0791 15.9498 12.5391 15.4198 12.5391 14.5298V9.4698C12.5391 8.5798 13.0891 8.0498 13.9991 8.0498H15.2891C16.2091 8.0498 16.7491 8.5798 16.7491 9.4698V14.5298C16.7491 15.4198 16.1991 15.9498 15.2891 15.9498ZM14.0291 14.4498H15.2491V9.5498H14.0391L14.0291 14.4498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PauseCircleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9707 22C17.4936 22 21.9707 17.5228 21.9707 12C21.9707 6.47715 17.4936 2 11.9707 2C6.44786 2 1.9707 6.47715 1.9707 12C1.9707 17.5228 6.44786 22 11.9707 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M10.72 14.5298V9.4698C10.72 8.9898 10.52 8.7998 10.01 8.7998H8.71C8.2 8.7998 8 8.9898 8 9.4698V14.5298C8 15.0098 8.2 15.1998 8.71 15.1998H10C10.52 15.1998 10.72 15.0098 10.72 14.5298Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.9991 14.5298V9.4698C15.9991 8.9898 15.7991 8.7998 15.2891 8.7998H13.9991C13.4891 8.7998 13.2891 8.9898 13.2891 9.4698V14.5298C13.2891 15.0098 13.4891 15.1998 13.9991 15.1998H15.2891C15.7991 15.1998 15.9991 15.0098 15.9991 14.5298Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PauseCircleBold,
  broken: PauseCircleBroken,
  bulk: PauseCircleBulk,
  linear: PauseCircleLinear,
  outline: PauseCircleOutline,
  twotone: PauseCircleTwotone,
};

export const PauseCircleIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
