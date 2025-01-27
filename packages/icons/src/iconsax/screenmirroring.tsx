import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const ScreenmirroringBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM18.5 16.4C18.5 17.9 17.9 18.5 16.4 18.5H12.6C11.1 18.5 10.5 17.9 10.5 16.4V14.6C10.5 13.1 11.1 12.5 12.6 12.5H16.4C17.9 12.5 18.5 13.1 18.5 14.6V16.4Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ScreenmirroringBroken = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M2 12.98V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.6 18.5H16.4C17.9 18.5 18.5 17.9 18.5 16.4V14.6C18.5 13.1 17.9 12.5 16.4 12.5H12.6C11.1 12.5 10.5 13.1 10.5 14.6V16.4C10.5 17.9 11.1 18.5 12.6 18.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ScreenmirroringBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.6 18.5H16.4C17.9 18.5 18.5 17.9 18.5 16.4V14.6C18.5 13.1 17.9 12.5 16.4 12.5H12.6C11.1 12.5 10.5 13.1 10.5 14.6V16.4C10.5 17.9 11.1 18.5 12.6 18.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ScreenmirroringLinear = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.6 18.5H16.4C17.9 18.5 18.5 17.9 18.5 16.4V14.6C18.5 13.1 17.9 12.5 16.4 12.5H12.6C11.1 12.5 10.5 13.1 10.5 14.6V16.4C10.5 17.9 11.1 18.5 12.6 18.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ScreenmirroringOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
        fill="currentColor"
      />
      <Path
        d="M16.4 19.25H12.6C10.68 19.25 9.75 18.32 9.75 16.4V14.6C9.75 12.68 10.68 11.75 12.6 11.75H16.4C18.32 11.75 19.25 12.68 19.25 14.6V16.4C19.25 18.32 18.32 19.25 16.4 19.25ZM12.6 13.25C11.52 13.25 11.25 13.52 11.25 14.6V16.4C11.25 17.48 11.52 17.75 12.6 17.75H16.4C17.48 17.75 17.75 17.48 17.75 16.4V14.6C17.75 13.52 17.48 13.25 16.4 13.25H12.6Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ScreenmirroringTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.6 18.5H16.4C17.9 18.5 18.5 17.9 18.5 16.4V14.6C18.5 13.1 17.9 12.5 16.4 12.5H12.6C11.1 12.5 10.5 13.1 10.5 14.6V16.4C10.5 17.9 11.1 18.5 12.6 18.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ScreenmirroringBold,
  broken: ScreenmirroringBroken,
  bulk: ScreenmirroringBulk,
  linear: ScreenmirroringLinear,
  outline: ScreenmirroringOutline,
  twotone: ScreenmirroringTwotone,
};

export const ScreenmirroringIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
