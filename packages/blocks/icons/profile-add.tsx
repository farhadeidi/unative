import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const ProfileAddBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.0809 14.1489C14.2909 12.2889 9.74094 12.2889 6.93094 14.1489C5.66094 14.9989 4.96094 16.1489 4.96094 17.3789C4.96094 18.6089 5.66094 19.7489 6.92094 20.5889C8.32094 21.5289 10.1609 21.9989 12.0009 21.9989C13.8409 21.9989 15.6809 21.5289 17.0809 20.5889C18.3409 19.7389 19.0409 18.5989 19.0409 17.3589C19.0309 16.1289 18.3409 14.9889 17.0809 14.1489ZM14.0009 18.1289H12.7509V19.3789C12.7509 19.7889 12.4109 20.1289 12.0009 20.1289C11.5909 20.1289 11.2509 19.7889 11.2509 19.3789V18.1289H10.0009C9.59094 18.1289 9.25094 17.7889 9.25094 17.3789C9.25094 16.9689 9.59094 16.6289 10.0009 16.6289H11.2509V15.3789C11.2509 14.9689 11.5909 14.6289 12.0009 14.6289C12.4109 14.6289 12.7509 14.9689 12.7509 15.3789V16.6289H14.0009C14.4109 16.6289 14.7509 16.9689 14.7509 17.3789C14.7509 17.7889 14.4109 18.1289 14.0009 18.1289Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ProfileAddBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5 19.5H14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 21.5V17.5"
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

const ProfileAddBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.0809 14.1499C14.2909 12.2899 9.74094 12.2899 6.93094 14.1499C5.66094 14.9999 4.96094 16.1499 4.96094 17.3799C4.96094 18.6099 5.66094 19.7499 6.92094 20.5899C8.32094 21.5299 10.1609 21.9999 12.0009 21.9999C13.8409 21.9999 15.6809 21.5299 17.0809 20.5899C18.3409 19.7399 19.0409 18.5999 19.0409 17.3599C19.0309 16.1299 18.3409 14.9899 17.0809 14.1499Z"
        fill="currentColor"
      />
      <Path
        d="M14 16.6299H12.75V15.3799C12.75 14.9699 12.41 14.6299 12 14.6299C11.59 14.6299 11.25 14.9699 11.25 15.3799V16.6299H10C9.59 16.6299 9.25 16.9699 9.25 17.3799C9.25 17.7899 9.59 18.1299 10 18.1299H11.25V19.3799C11.25 19.7899 11.59 20.1299 12 20.1299C12.41 20.1299 12.75 19.7899 12.75 19.3799V18.1299H14C14.41 18.1299 14.75 17.7899 14.75 17.3799C14.75 16.9699 14.41 16.6299 14 16.6299Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ProfileAddLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5 19.5H14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.5 21.5V17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.16 10.87C12.06 10.86 11.94 10.86 11.83 10.87C9.44997 10.79 7.55997 8.84 7.55997 6.44C7.54997 3.99 9.53997 2 11.99 2C14.44 2 16.43 3.99 16.43 6.44C16.43 8.84 14.53 10.79 12.16 10.87Z"
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

const ProfileAddOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.5 20.25H14.5C14.09 20.25 13.75 19.91 13.75 19.5C13.75 19.09 14.09 18.75 14.5 18.75H18.5C18.91 18.75 19.25 19.09 19.25 19.5C19.25 19.91 18.91 20.25 18.5 20.25Z"
        fill="currentColor"
      />
      <Path
        d="M16.5 22.25C16.09 22.25 15.75 21.91 15.75 21.5V17.5C15.75 17.09 16.09 16.75 16.5 16.75C16.91 16.75 17.25 17.09 17.25 17.5V21.5C17.25 21.91 16.91 22.25 16.5 22.25Z"
        fill="currentColor"
      />
      <Path
        d="M12.1607 11.62C12.1307 11.62 12.1107 11.62 12.0807 11.62C12.0307 11.61 11.9607 11.61 11.9007 11.62C9.00068 11.53 6.81068 9.25 6.81068 6.44C6.80068 5.06 7.34068 3.76 8.32068 2.78C9.30068 1.8 10.6007 1.25 11.9907 1.25C14.8507 1.25 17.1807 3.58 17.1807 6.44C17.1807 9.25 14.9907 11.52 12.1907 11.62C12.1807 11.62 12.1707 11.62 12.1607 11.62ZM11.9907 2.75C11.0007 2.75 10.0807 3.14 9.38068 3.83C8.69068 4.53 8.31068 5.45 8.31068 6.43C8.31068 8.43 9.87068 10.05 11.8607 10.11C11.9207 10.1 12.0507 10.1 12.1807 10.11C14.1507 10.02 15.6807 8.41 15.6807 6.43C15.6807 4.41 14.0207 2.75 11.9907 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M11.9902 22.5599C9.95016 22.5599 8.02016 22.0299 6.56016 21.0499C5.17016 20.1199 4.41016 18.8499 4.41016 17.4799C4.41016 16.1099 5.18016 14.8499 6.56016 13.9299C9.55016 11.9299 14.4102 11.9299 17.4002 13.9299C17.7402 14.1599 17.8402 14.6299 17.6102 14.9699C17.3802 15.3199 16.9102 15.4099 16.5702 15.1799C14.0802 13.5199 9.88016 13.5199 7.39016 15.1799C6.43016 15.8199 5.91016 16.6299 5.91016 17.4799C5.91016 18.3299 6.43016 19.1599 7.39016 19.7999C8.60016 20.6099 10.2302 21.0499 11.9802 21.0499C12.3902 21.0499 12.7302 21.3899 12.7302 21.7999C12.7302 22.2099 12.4002 22.5599 11.9902 22.5599Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ProfileAddTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <G opacity="0.4">
        <Path
          d="M18.5 19.5H14.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M16.5 21.5V17.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        opacity="0.4"
        d="M12.1606 10.87C12.0606 10.86 11.9406 10.86 11.8306 10.87C9.45058 10.79 7.56058 8.84 7.56058 6.44C7.55058 3.99 9.54058 2 11.9906 2C14.4406 2 16.4306 3.99 16.4306 6.44C16.4306 8.84 14.5306 10.79 12.1606 10.87Z"
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
  bold: ProfileAddBold,
  broken: ProfileAddBroken,
  bulk: ProfileAddBulk,
  linear: ProfileAddLinear,
  outline: ProfileAddOutline,
  twotone: ProfileAddTwotone,
};

export const ProfileAddIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
