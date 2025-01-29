import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const HealthBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 7.81V12.5H17.92C17.8 12.49 17.54 12.34 17.48 12.23L16.44 10.26C16.03 9.48 15.32 9.04 14.56 9.08C13.8 9.12 13.15 9.63 12.82 10.46L11.44 13.92L11.24 13.4C10.75 12.13 9.35 11.17 7.97 11.17L2 11.2V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
        fill="currentColor"
      />
      <Path
        d="M22 16.1887V13.9987H17.92C17.25 13.9987 16.46 13.5187 16.15 12.9287L15.11 10.9587C14.83 10.4287 14.43 10.4587 14.21 11.0087L11.91 16.8187C11.66 17.4687 11.24 17.4687 10.98 16.8187L9.84 13.9387C9.57 13.2387 8.73 12.6687 7.98 12.6687L2 12.6987V16.1887C2 19.7687 4.1 21.9287 7.63 21.9887C7.74 21.9987 7.86 21.9987 7.97 21.9987H15.97C16.12 21.9987 16.27 21.9987 16.41 21.9887C19.92 21.9087 22 19.7587 22 16.1887Z"
        fill="currentColor"
      />
      <Path
        d="M2.0007 12.6992V16.0092C1.9807 15.6892 1.9707 15.3492 1.9707 14.9992V12.6992H2.0007Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HealthBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.9707 2C3.9707 2 1.9707 4 1.9707 9V15C1.9707 20 3.9707 22 8.9707 22H14.9707C19.9707 22 21.9707 20 21.9707 15V9C21.9707 4 19.9707 2 14.9707 2H12.9707"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.9707 12.7001L7.9707 12.6801C8.7207 12.6801 9.5607 13.2501 9.8407 13.9501L10.9807 16.8301C11.2407 17.4801 11.6507 17.4801 11.9107 16.8301L14.2007 11.0201C14.4207 10.4601 14.8307 10.4401 15.1107 10.9701L16.1507 12.9401C16.4607 13.5301 17.2607 14.0101 17.9207 14.0101H21.9807"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HealthBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 7.81V14H17.92C17.25 14 16.46 13.52 16.15 12.93L15.11 10.96C14.83 10.43 14.43 10.46 14.21 11.01L11.91 16.82C11.66 17.47 11.24 17.47 10.98 16.82L9.84 13.94C9.57 13.24 8.73 12.67 7.98 12.67L2 12.7V7.81C2 4.17 4.17 2 7.81 2H16.19C19.83 2 22 4.17 22 7.81Z"
        fill="currentColor"
      />
      <Path
        d="M22 16.1901V14.0001H17.92C17.25 14.0001 16.46 13.5201 16.15 12.9301L15.11 10.9601C14.83 10.4301 14.43 10.4601 14.21 11.0101L11.91 16.8201C11.66 17.4701 11.24 17.4701 10.98 16.8201L9.84 13.9401C9.57 13.2401 8.73 12.6701 7.98 12.6701L2 12.7001V16.1901C2 19.7701 4.1 21.9301 7.63 21.9901C7.74 22.0001 7.86 22.0001 7.97 22.0001H15.97C16.12 22.0001 16.27 22.0001 16.41 21.9901C19.92 21.9101 22 19.7601 22 16.1901Z"
        fill="currentColor"
      />
      <Path
        d="M2.0007 12.7002V16.0102C1.9807 15.6902 1.9707 15.3502 1.9707 15.0002V12.7002H2.0007Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HealthLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.96997 22H14.97C19.97 22 21.97 20 21.97 15V9C21.97 4 19.97 2 14.97 2H8.96997C3.96997 2 1.96997 4 1.96997 9V15C1.96997 20 3.96997 22 8.96997 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M1.96997 12.7001L7.96997 12.6801C8.71997 12.6801 9.55997 13.2501 9.83997 13.9501L10.98 16.8301C11.24 17.4801 11.65 17.4801 11.91 16.8301L14.2 11.0201C14.42 10.4601 14.83 10.4401 15.11 10.9701L16.15 12.9401C16.46 13.5301 17.26 14.0101 17.92 14.0101H21.98"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HealthOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.9697 22.75H8.96973C3.53973 22.75 1.21973 20.43 1.21973 15V9C1.21973 3.57 3.53973 1.25 8.96973 1.25H14.9697C20.3997 1.25 22.7197 3.57 22.7197 9V15C22.7197 20.43 20.4097 22.75 14.9697 22.75ZM8.96973 2.75C4.35973 2.75 2.71973 4.39 2.71973 9V15C2.71973 19.61 4.35973 21.25 8.96973 21.25H14.9697C19.5797 21.25 21.2197 19.61 21.2197 15V9C21.2197 4.39 19.5797 2.75 14.9697 2.75H8.96973Z"
        fill="currentColor"
      />
      <Path
        d="M11.4502 18.0599C11.2102 18.0599 10.6302 17.9699 10.2902 17.0999L9.15023 14.2199C8.99023 13.8099 8.42023 13.4299 7.99023 13.4299L1.99023 13.4499C1.58023 13.4499 1.24023 13.1199 1.24023 12.6999C1.24023 12.2899 1.57023 11.9499 1.99023 11.9499L7.99023 11.9299H8.00023C9.05023 11.9299 10.1702 12.6899 10.5602 13.6699L11.4702 15.9699L13.5302 10.7499C13.8402 9.96989 14.3902 9.85989 14.6202 9.83989C14.8502 9.82989 15.4102 9.87989 15.8002 10.6199L16.8402 12.5899C17.0202 12.9299 17.5602 13.2599 17.9502 13.2599H22.0102C22.4202 13.2599 22.7602 13.5999 22.7602 14.0099C22.7602 14.4199 22.4202 14.7599 22.0102 14.7599H17.9502C17.0002 14.7599 15.9602 14.1299 15.5202 13.2899L14.7402 11.8099L12.6402 17.0999C12.2702 17.9599 11.6802 18.0599 11.4502 18.0599Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HealthTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.96973 22H14.9697C19.9697 22 21.9697 20 21.9697 15V9C21.9697 4 19.9697 2 14.9697 2H8.96973C3.96973 2 1.96973 4 1.96973 9V15C1.96973 20 3.96973 22 8.96973 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M1.96973 12.7001L7.96973 12.6801C8.71973 12.6801 9.55973 13.2501 9.83973 13.9501L10.9797 16.8301C11.2397 17.4801 11.6497 17.4801 11.9097 16.8301L14.1997 11.0201C14.4197 10.4601 14.8297 10.4401 15.1097 10.9701L16.1497 12.9401C16.4597 13.5301 17.2597 14.0101 17.9197 14.0101H21.9797"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: HealthBold,
  broken: HealthBroken,
  bulk: HealthBulk,
  linear: HealthLinear,
  outline: HealthOutline,
  twotone: HealthTwotone,
};

export const HealthIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default HealthIcon;
