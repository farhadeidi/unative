import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const ProfileRemoveBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
        fill="currentColor"
      />
      <Path
        d="M17.0809 14.1606C14.2909 12.3006 9.74094 12.3006 6.93094 14.1606C5.66094 15.0006 4.96094 16.1506 4.96094 17.3806C4.96094 18.6106 5.66094 19.7506 6.92094 20.5906C8.32094 21.5306 10.1609 22.0006 12.0009 22.0006C13.8409 22.0006 15.6809 21.5306 17.0809 20.5906C18.3409 19.7406 19.0409 18.6006 19.0409 17.3606C19.0309 16.1406 18.3409 14.9906 17.0809 14.1606ZM13.8309 18.0706H10.1809C9.80094 18.0706 9.49094 17.7606 9.49094 17.3806C9.49094 17.0006 9.80094 16.6906 10.1809 16.6906H13.8309C14.2109 16.6906 14.5209 17.0006 14.5209 17.3806C14.5209 17.7606 14.2109 18.0706 13.8309 18.0706Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ProfileRemoveBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.5 19H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9891 21.8099C10.1691 21.8099 8.35906 21.3499 6.97906 20.4299C4.55906 18.8099 4.55906 16.1699 6.97906 14.5599C9.72906 12.7199 14.2391 12.7199 16.9891 14.5599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.6805 3.96C16.1605 4.67 16.4405 5.52 16.4405 6.44C16.4305 8.84 14.5405 10.79 12.1605 10.87C12.0605 10.86 11.9405 10.86 11.8305 10.87C9.45055 10.79 7.56055 8.84 7.56055 6.44C7.56055 3.99 9.54055 2 12.0005 2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ProfileRemoveBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 2C9.38 2 7.25 4.13 7.25 6.75C7.25 9.32 9.26 11.4 11.88 11.49C11.96 11.48 12.04 11.48 12.1 11.49C12.12 11.49 12.13 11.49 12.15 11.49C12.16 11.49 12.16 11.49 12.17 11.49C14.73 11.4 16.74 9.32 16.75 6.75C16.75 4.13 14.62 2 12 2Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17.0809 14.1599C14.2909 12.2999 9.74094 12.2999 6.93094 14.1599C5.66094 14.9999 4.96094 16.1499 4.96094 17.3799C4.96094 18.6099 5.66094 19.7499 6.92094 20.5899C8.32094 21.5299 10.1609 21.9999 12.0009 21.9999C13.8409 21.9999 15.6809 21.5299 17.0809 20.5899C18.3409 19.7399 19.0409 18.5999 19.0409 17.3599C19.0309 16.1399 18.3409 14.9899 17.0809 14.1599Z"
        fill="currentColor"
      />
      <Path
        d="M13.8302 18.0699H10.1802C9.80023 18.0699 9.49023 17.7599 9.49023 17.3799C9.49023 16.9999 9.80023 16.6899 10.1802 16.6899H13.8302C14.2102 16.6899 14.5202 16.9999 14.5202 17.3799C14.5102 17.7599 14.2102 18.0699 13.8302 18.0699Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ProfileRemoveLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.5 19H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.15 10.87C12.05 10.86 11.93 10.86 11.82 10.87C9.44005 10.79 7.55005 8.84 7.55005 6.44C7.55005 3.99 9.53005 2 11.99 2C14.44 2 16.43 3.99 16.43 6.44C16.42 8.84 14.53 10.79 12.15 10.87Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.99 21.8101C10.17 21.8101 8.36004 21.3501 6.98004 20.4301C4.56004 18.8101 4.56004 16.1701 6.98004 14.5601C9.73004 12.7201 14.24 12.7201 16.99 14.5601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const ProfileRemoveOutline = ({
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
        d="M19.5 19.75H15.5C15.09 19.75 14.75 19.41 14.75 19C14.75 18.59 15.09 18.25 15.5 18.25H19.5C19.91 18.25 20.25 18.59 20.25 19C20.25 19.41 19.91 19.75 19.5 19.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.1508 11.62C12.1208 11.62 12.1008 11.62 12.0708 11.62C12.0108 11.61 11.9508 11.62 11.8908 11.62C8.99078 11.53 6.80078 9.25 6.80078 6.44C6.80078 3.58 9.13078 1.25 11.9908 1.25C14.8508 1.25 17.1808 3.58 17.1808 6.44C17.1708 9.25 14.9708 11.53 12.1808 11.62C12.1708 11.62 12.1608 11.62 12.1508 11.62ZM11.9908 2.75C9.96078 2.75 8.30078 4.41 8.30078 6.44C8.30078 8.44 9.86078 10.05 11.8508 10.12C11.9108 10.11 12.0408 10.11 12.1708 10.12C14.1308 10.03 15.6708 8.42 15.6808 6.44C15.6808 4.41 14.0208 2.75 11.9908 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.9902 22.5599C9.95016 22.5599 8.02016 22.0299 6.56016 21.0499C5.17016 20.1199 4.41016 18.8499 4.41016 17.4799C4.41016 16.1099 5.18016 14.8499 6.56016 13.9299C9.55016 11.9299 14.4102 11.9299 17.4002 13.9299C17.7402 14.1599 17.8402 14.6299 17.6102 14.9699C17.3802 15.3199 16.9102 15.4099 16.5702 15.1799C14.0802 13.5199 9.88016 13.5199 7.39016 15.1799C6.43016 15.8199 5.91016 16.6299 5.91016 17.4799C5.91016 18.3299 6.43016 19.1599 7.39016 19.7999C8.60016 20.6099 10.2302 21.0499 11.9802 21.0499C12.3902 21.0499 12.7302 21.3899 12.7302 21.7999C12.7302 22.2099 12.4002 22.5599 11.9902 22.5599Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ProfileRemoveTwotone = ({
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
        opacity="0.4"
        d="M19.5 19H15.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.1508 10.87C12.0508 10.86 11.9308 10.86 11.8208 10.87C9.44078 10.79 7.55078 8.84 7.55078 6.44C7.55078 3.99 9.53078 2 11.9908 2C14.4408 2 16.4308 3.99 16.4308 6.44C16.4208 8.84 14.5308 10.79 12.1508 10.87Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.9891 21.8102C10.1691 21.8102 8.35906 21.3502 6.97906 20.4302C4.55906 18.8102 4.55906 16.1702 6.97906 14.5602C9.72906 12.7202 14.2391 12.7202 16.9891 14.5602"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: ProfileRemoveBold,
  broken: ProfileRemoveBroken,
  bulk: ProfileRemoveBulk,
  linear: ProfileRemoveLinear,
  outline: ProfileRemoveOutline,
  twotone: ProfileRemoveTwotone,
};

export const ProfileRemoveIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
