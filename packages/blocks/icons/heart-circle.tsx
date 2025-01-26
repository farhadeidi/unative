import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const HeartCircleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12.33 17C12.15 17.06 11.84 17.06 11.66 17C10.1 16.47 6.6 14.24 6.6 10.46C6.6 8.79 7.94 7.44 9.6 7.44C10.58 7.44 11.45 7.91 12 8.65C12.54 7.92 13.42 7.44 14.4 7.44C16.06 7.44 17.4 8.79 17.4 10.46C17.4 14.24 13.9 16.47 12.33 17Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartCircleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.3296 17.45C12.1496 17.51 11.8396 17.51 11.6596 17.45C10.0996 16.92 6.59961 14.69 6.59961 10.91C6.59961 9.24 7.93961 7.89001 9.59961 7.89001C10.5796 7.89001 11.4496 8.36001 11.9996 9.10001C12.5396 8.37001 13.4196 7.89001 14.3996 7.89001C16.0596 7.89001 17.3996 9.24 17.3996 10.91C17.3996 14.69 13.8996 16.92 12.3296 17.45Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.30001 7.97 2.85001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeartCircleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="currentColor"
      />
      <Path
        d="M12.3296 16.9999C12.1496 17.0599 11.8396 17.0599 11.6596 16.9999C10.0996 16.4699 6.59961 14.2399 6.59961 10.4599C6.59961 8.78993 7.93961 7.43994 9.59961 7.43994C10.5796 7.43994 11.4496 7.90993 11.9996 8.64993C12.5396 7.91993 13.4196 7.43994 14.3996 7.43994C16.0596 7.43994 17.3996 8.78993 17.3996 10.4599C17.3996 14.2399 13.8996 16.4699 12.3296 16.9999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartCircleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.33 17.45C12.15 17.51 11.84 17.51 11.66 17.45C10.1 16.92 6.59998 14.69 6.59998 10.91C6.59998 9.24 7.93998 7.89001 9.59998 7.89001C10.58 7.89001 11.45 8.36001 12 9.10001C12.54 8.37001 13.42 7.89001 14.4 7.89001C16.06 7.89001 17.4 9.24 17.4 10.91C17.4 14.69 13.9 16.92 12.33 17.45Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeartCircleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.9994 18.2501C11.7894 18.2501 11.5894 18.2201 11.4194 18.1601C9.26937 17.4301 5.85938 14.8101 5.85938 10.9101C5.85938 8.83013 7.53938 7.14014 9.60938 7.14014C10.5094 7.14014 11.3394 7.45013 12.0094 8.01013C12.6794 7.45013 13.5194 7.14014 14.3994 7.14014C16.4694 7.14014 18.1494 8.83013 18.1494 10.9101C18.1494 14.8001 14.7394 17.4201 12.5794 18.1601C12.4094 18.2201 12.1994 18.2501 11.9994 18.2501ZM9.59938 8.65012C8.35938 8.65012 7.34938 9.67014 7.34938 10.9201C7.34938 14.4101 10.7194 16.3501 11.8994 16.7501C11.9394 16.7601 12.0394 16.7601 12.0794 16.7501C13.2594 16.3501 16.6294 14.4101 16.6294 10.9201C16.6294 9.67014 15.6194 8.65012 14.3794 8.65012C13.6794 8.65012 13.0094 8.99012 12.5894 9.56012C12.3094 9.94012 11.6694 9.94012 11.3894 9.56012C10.9694 8.98012 10.3194 8.65012 9.59938 8.65012Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartCircleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.3296 17.4501C12.1496 17.5101 11.8396 17.5101 11.6596 17.4501C10.0996 16.9201 6.59961 14.6901 6.59961 10.9101C6.59961 9.24013 7.93961 7.89014 9.59961 7.89014C10.5796 7.89014 11.4496 8.36013 11.9996 9.10013C12.5396 8.37013 13.4196 7.89014 14.3996 7.89014C16.0596 7.89014 17.3996 9.24013 17.3996 10.9101C17.3996 14.6901 13.8996 16.9201 12.3296 17.4501Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: HeartCircleBold,
  broken: HeartCircleBroken,
  bulk: HeartCircleBulk,
  linear: HeartCircleLinear,
  outline: HeartCircleOutline,
  twotone: HeartCircleTwotone,
};

export const HeartCircleIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
