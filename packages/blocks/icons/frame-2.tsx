import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const Frame2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z"
        fill="currentColor"
      />
      <Path
        d="M17.7892 9.33927C16.2792 8.93927 15.0592 7.71927 14.6592 6.20927C14.3992 5.24927 14.4592 4.32927 14.7492 3.50927C14.9492 2.94927 14.6092 2.32927 14.0292 2.20927C12.5592 1.89927 10.9692 1.90927 9.30923 2.35927C5.52923 3.41927 2.63923 6.68927 2.09923 10.5793C1.17923 17.1993 6.78923 22.8093 13.4092 21.8993C17.3092 21.3593 20.5692 18.4693 21.6192 14.6793C22.0792 13.0293 22.0892 11.4393 21.7792 9.95927C21.6592 9.37927 21.0392 9.04927 20.4792 9.23927C19.6692 9.52927 18.7492 9.58927 17.7892 9.33927Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Frame2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.6792 3.96C16.1592 4.67 16.4392 5.52 16.4392 6.44C16.4292 8.84 14.5392 10.79 12.1592 10.87C12.0592 10.86 11.9392 10.86 11.8292 10.87C9.61922 10.8 7.82922 9.11 7.58922 6.95C7.29922 4.38 9.40922 2 11.9892 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.99078 14.56C4.57078 16.18 4.57078 18.82 6.99078 20.43C9.74078 22.27 14.2508 22.27 17.0008 20.43C19.4208 18.81 19.4208 16.17 17.0008 14.56C14.2708 12.73 9.76078 12.73 6.99078 14.56Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Frame2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.25 9.14993C18.94 5.51993 15.56 3.42993 12 3.42993C10.22 3.42993 8.49 3.94993 6.91 4.91993C5.33 5.89993 3.91 7.32993 2.75 9.14993C1.75 10.7199 1.75 13.2699 2.75 14.8399C5.06 18.4799 8.44 20.5599 12 20.5599C13.78 20.5599 15.51 20.0399 17.09 19.0699C18.67 18.0899 20.09 16.6599 21.25 14.8399C22.25 13.2799 22.25 10.7199 21.25 9.14993ZM12 16.0399C9.76 16.0399 7.96 14.2299 7.96 11.9999C7.96 9.76993 9.76 7.95993 12 7.95993C14.24 7.95993 16.04 9.76993 16.04 11.9999C16.04 14.2299 14.24 16.0399 12 16.0399Z"
        fill="currentColor"
      />
      <Path
        d="M12.0004 9.13989C10.4304 9.13989 9.15039 10.4199 9.15039 11.9999C9.15039 13.5699 10.4304 14.8499 12.0004 14.8499C13.5704 14.8499 14.8604 13.5699 14.8604 11.9999C14.8604 10.4299 13.5704 9.13989 12.0004 9.13989Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Frame2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.44 8.8999C20.04 9.2099 21.51 11.0599 21.51 15.1099V15.2399C21.51 19.7099 19.72 21.4999 15.25 21.4999H8.73998C4.26998 21.4999 2.47998 19.7099 2.47998 15.2399V15.1099C2.47998 11.0899 3.92998 9.2399 7.46998 8.9099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 2V14.88"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.35 12.6499L12 15.9999L8.65002 12.6499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Frame2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.27 22.75H4.23C2.22 22.75 1.25 21.82 1.25 19.9V4.1C1.25 2.18 2.23 1.25 4.23 1.25H8.27C10.28 1.25 11.25 2.18 11.25 4.1V19.9C11.25 21.82 10.27 22.75 8.27 22.75ZM4.23 2.75C2.96 2.75 2.75 3.09 2.75 4.1V19.9C2.75 20.91 2.96 21.25 4.23 21.25H8.27C9.54 21.25 9.75 20.91 9.75 19.9V4.1C9.75 3.09 9.54 2.75 8.27 2.75H4.23Z"
        fill="currentColor"
      />
      <Path
        d="M19.77 11.25H15.73C13.72 11.25 12.75 10.36 12.75 8.52V3.98C12.75 2.14 13.73 1.25 15.73 1.25H19.77C21.78 1.25 22.75 2.14 22.75 3.98V8.51C22.75 10.36 21.77 11.25 19.77 11.25ZM15.73 2.75C14.39 2.75 14.25 3.13 14.25 3.98V8.51C14.25 9.37 14.39 9.74 15.73 9.74H19.77C21.11 9.74 21.25 9.36 21.25 8.51V3.98C21.25 3.12 21.11 2.75 19.77 2.75H15.73Z"
        fill="currentColor"
      />
      <Path
        d="M19.77 22.75H15.73C13.72 22.75 12.75 21.77 12.75 19.77V15.73C12.75 13.72 13.73 12.75 15.73 12.75H19.77C21.78 12.75 22.75 13.73 22.75 15.73V19.77C22.75 21.77 21.77 22.75 19.77 22.75ZM15.73 14.25C14.55 14.25 14.25 14.55 14.25 15.73V19.77C14.25 20.95 14.55 21.25 15.73 21.25H19.77C20.95 21.25 21.25 20.95 21.25 19.77V15.73C21.25 14.55 20.95 14.25 19.77 14.25H15.73Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Frame2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.4405 8.8999C20.0405 9.2099 21.5105 11.0599 21.5105 15.1099V15.2399C21.5105 19.7099 19.7205 21.4999 15.2505 21.4999H8.74047C4.27047 21.4999 2.48047 19.7099 2.48047 15.2399V15.1099C2.48047 11.0899 3.93047 9.2399 7.47047 8.9099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M12 2V14.88"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15.3504 12.6504L12.0004 16.0004L8.65039 12.6504"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Frame2Bold,
  broken: Frame2Broken,
  bulk: Frame2Bulk,
  linear: Frame2Linear,
  outline: Frame2Outline,
  twotone: Frame2Twotone,
};

export const Frame2Icon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
