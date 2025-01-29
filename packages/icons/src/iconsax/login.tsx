import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const LoginBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.7584 2C10.2784 2 9.89844 2.38 9.89844 2.86V11.32H13.5684L11.9984 9.75C11.7084 9.46 11.7084 8.98 11.9984 8.69C12.2884 8.4 12.7684 8.4 13.0584 8.69L15.8984 11.54C16.1884 11.83 16.1884 12.31 15.8984 12.6L13.0584 15.45C12.9084 15.6 12.7184 15.67 12.5284 15.67C12.3384 15.67 12.1484 15.6 11.9984 15.45C11.7084 15.16 11.7084 14.68 11.9984 14.39L13.5584 12.83H9.89844V21.16C9.89844 21.63 10.2784 22.02 10.7584 22.02C16.6484 22.02 20.7584 17.91 20.7584 12.02C20.7584 6.13 16.6384 2 10.7584 2Z"
        fill="currentColor"
      />
      <Path
        d="M3.98828 11.3203C3.57828 11.3203 3.23828 11.6603 3.23828 12.0703C3.23828 12.4803 3.57828 12.8203 3.98828 12.8203H9.88828V11.3203H3.98828Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LoginBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2 12H14.88"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.6504 8.6499L16.0004 11.9999L12.6504 15.3499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.5002 13V15.26C21.5002 19.73 19.7102 21.52 15.2402 21.52H15.1102C11.0902 21.52 9.24016 20.07 8.91016 16.53"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.90039 7.55999C9.21039 3.95999 11.0604 2.48999 15.1104 2.48999H15.2404C19.7104 2.48999 21.5004 4.27999 21.5004 8.74999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LoginBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.7604 2C10.2804 2 9.90039 2.38 9.90039 2.86V21.15C9.90039 21.62 10.2804 22.01 10.7604 22.01C16.6504 22.01 20.7604 17.9 20.7604 12.01C20.7604 6.12 16.6404 2 10.7604 2Z"
        fill="currentColor"
      />
      <Path
        d="M15.9002 11.5399L13.0602 8.68991C12.7702 8.39991 12.2902 8.39991 12.0002 8.68991C11.7102 8.97991 11.7102 9.45991 12.0002 9.74991L13.5602 11.3099H3.99023C3.58023 11.3099 3.24023 11.6499 3.24023 12.0599C3.24023 12.4699 3.58023 12.8099 3.99023 12.8099H13.5602L12.0002 14.3799C11.7102 14.6699 11.7102 15.1499 12.0002 15.4399C12.1502 15.5899 12.3402 15.6599 12.5302 15.6599C12.7202 15.6599 12.9102 15.5899 13.0602 15.4399L15.9002 12.5899C16.2002 12.2999 16.2002 11.8299 15.9002 11.5399Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LoginLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.90002 7.55999C9.21002 3.95999 11.06 2.48999 15.11 2.48999H15.24C19.71 2.48999 21.5 4.27999 21.5 8.74999V15.27C21.5 19.74 19.71 21.53 15.24 21.53H15.11C11.09 21.53 9.24002 20.08 8.91002 16.54"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 12H14.88"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.65 8.6499L16 11.9999L12.65 15.3499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const LoginOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.2405 22.27H15.1105C10.6705 22.27 8.5305 20.52 8.1605 16.6C8.1205 16.19 8.4205 15.82 8.8405 15.78C9.2505 15.74 9.6205 16.05 9.6605 16.46C9.9505 19.6 11.4305 20.77 15.1205 20.77H15.2505C19.3205 20.77 20.7605 19.33 20.7605 15.26V8.73998C20.7605 4.66998 19.3205 3.22998 15.2505 3.22998H15.1205C11.4105 3.22998 9.9305 4.41998 9.6605 7.61998C9.6105 8.02998 9.2705 8.33998 8.8405 8.29998C8.4205 8.26998 8.1205 7.89998 8.1505 7.48998C8.4905 3.50998 10.6405 1.72998 15.1105 1.72998H15.2405C20.1505 1.72998 22.2505 3.82998 22.2505 8.73998V15.26C22.2505 20.17 20.1505 22.27 15.2405 22.27Z"
        fill="currentColor"
      />
      <Path
        d="M14.88 12.75H2C1.59 12.75 1.25 12.41 1.25 12C1.25 11.59 1.59 11.25 2 11.25H14.88C15.29 11.25 15.63 11.59 15.63 12C15.63 12.41 15.3 12.75 14.88 12.75Z"
        fill="currentColor"
      />
      <Path
        d="M12.6498 16.1001C12.4598 16.1001 12.2698 16.0301 12.1198 15.8801C11.8298 15.5901 11.8298 15.1101 12.1198 14.8201L14.9398 12.0001L12.1198 9.18009C11.8298 8.89009 11.8298 8.41009 12.1198 8.12009C12.4098 7.83009 12.8898 7.83009 13.1798 8.12009L16.5298 11.4701C16.8198 11.7601 16.8198 12.2401 16.5298 12.5301L13.1798 15.8801C13.0298 16.0301 12.8398 16.1001 12.6498 16.1001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LoginTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.90039 7.56023C9.21039 3.96023 11.0604 2.49023 15.1104 2.49023H15.2404C19.7104 2.49023 21.5004 4.28023 21.5004 8.75023V15.2702C21.5004 19.7402 19.7104 21.5302 15.2404 21.5302H15.1104C11.0904 21.5302 9.24039 20.0802 8.91039 16.5402"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M2 12H14.88"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.6504 8.65039L16.0004 12.0004L12.6504 15.3504"
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
  bold: LoginBold,
  broken: LoginBroken,
  bulk: LoginBulk,
  linear: LoginLinear,
  outline: LoginOutline,
  twotone: LoginTwotone,
};

export const LoginIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default LoginIcon;
