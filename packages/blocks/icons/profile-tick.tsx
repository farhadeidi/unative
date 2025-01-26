import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const ProfileTickBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.0809 14.1606C14.2909 12.3006 9.74094 12.3006 6.93094 14.1606C5.66094 15.0006 4.96094 16.1506 4.96094 17.3806C4.96094 18.6106 5.66094 19.7506 6.92094 20.5906C8.32094 21.5306 10.1609 22.0006 12.0009 22.0006C13.8409 22.0006 15.6809 21.5306 17.0809 20.5906C18.3409 19.7406 19.0409 18.6006 19.0409 17.3606C19.0309 16.1406 18.3409 14.9906 17.0809 14.1606ZM14.3309 16.5606L11.8109 19.0806C11.6909 19.2006 11.5309 19.2606 11.3709 19.2606C11.2109 19.2606 11.0509 19.1906 10.9309 19.0806L9.67094 17.8206C9.43094 17.5806 9.43094 17.1806 9.67094 16.9406C9.91094 16.7006 10.3109 16.7006 10.5509 16.9406L11.3709 17.7606L13.4509 15.6806C13.6909 15.4406 14.0909 15.4406 14.3309 15.6806C14.5809 15.9206 14.5809 16.3206 14.3309 16.5606Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ProfileTickBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.4395 19.05L15.9595 20.57L18.9995 17.53"
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

const ProfileTickBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.3702 19.26C11.2102 19.26 11.0502 19.19 10.9302 19.08L9.67023 17.82C9.43023 17.58 9.43023 17.18 9.67023 16.94C9.91023 16.7 10.3102 16.7 10.5502 16.94L11.3702 17.76L13.4502 15.68C13.6902 15.44 14.0902 15.44 14.3302 15.68C14.5702 15.92 14.5702 16.32 14.3302 16.56L11.8102 19.08C11.6902 19.2 11.5302 19.26 11.3702 19.26Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const ProfileTickLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.4399 19.05L15.9599 20.57L18.9999 17.53"
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

const ProfileTickOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.9609 21.32C15.7709 21.32 15.5809 21.25 15.4309 21.1L13.9109 19.58C13.6209 19.29 13.6209 18.81 13.9109 18.52C14.2009 18.23 14.6809 18.23 14.9709 18.52L15.9609 19.51L18.4709 17C18.7609 16.71 19.2409 16.71 19.5309 17C19.8209 17.29 19.8209 17.77 19.5309 18.06L16.4909 21.1C16.3409 21.25 16.1509 21.32 15.9609 21.32Z"
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

const ProfileTickTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.4395 19.0498L15.9595 20.5698L18.9995 17.5298"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
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
  bold: ProfileTickBold,
  broken: ProfileTickBroken,
  bulk: ProfileTickBulk,
  linear: ProfileTickLinear,
  outline: ProfileTickOutline,
  twotone: ProfileTickTwotone,
};

export const ProfileTickIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
