import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const Routing2Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.9975 19.75H9.3175C8.1575 19.75 7.1475 19.05 6.7475 17.97C6.3375 16.89 6.6375 15.7 7.5075 14.93L15.4975 7.94C15.9775 7.52 15.9875 6.95 15.8475 6.56C15.6975 6.17 15.3175 5.75 14.6775 5.75H11.9975C11.5875 5.75 11.2475 5.41 11.2475 5C11.2475 4.59 11.5875 4.25 11.9975 4.25H14.6775C15.8375 4.25 16.8475 4.95 17.2475 6.03C17.6575 7.11 17.3575 8.3 16.4875 9.07L8.4975 16.06C8.0175 16.48 8.0075 17.05 8.1475 17.44C8.2975 17.83 8.6775 18.25 9.3175 18.25H11.9975C12.4075 18.25 12.7475 18.59 12.7475 19C12.7475 19.41 12.4075 19.75 11.9975 19.75Z"
        fill="currentColor"
      />
      <Path
        d="M20 15H17C15.9 15 15 15.9 15 17V20C15 21.1 15.9 22 17 22H20C21.1 22 22 21.1 22 20V17C22 15.9 21.1 15 20 15ZM18.51 19.5C17.96 19.5 17.51 19.05 17.51 18.5C17.51 17.95 17.95 17.5 18.51 17.5H18.52C19.07 17.5 19.52 17.95 19.52 18.5C19.52 19.05 19.07 19.5 18.51 19.5Z"
        fill="currentColor"
      />
      <Path
        d="M5.46875 2C3.53875 2 1.96875 3.57 1.96875 5.5C1.96875 7.43 3.53875 9 5.46875 9C7.39875 9 8.96875 7.43 8.96875 5.5C8.96875 3.57 7.40875 2 5.46875 2ZM5.50875 6.5C4.95875 6.5 4.50875 6.05 4.50875 5.5C4.50875 4.95 4.94875 4.5 5.50875 4.5H5.51875C6.06875 4.5 6.51875 4.95 6.51875 5.5C6.51875 6.05 6.06875 6.5 5.50875 6.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Routing2Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.4707 9C7.4037 9 8.9707 7.433 8.9707 5.5C8.9707 3.567 7.4037 2 5.4707 2C3.53771 2 1.9707 3.567 1.9707 5.5C1.9707 7.433 3.53771 9 5.4707 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M19.9707 22H16.9707C15.8707 22 14.9707 21.1 14.9707 20V17C14.9707 15.9 15.8707 15 16.9707 15H19.9707C21.0707 15 21.9707 15.9 21.9707 17V19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0017 5H14.6817C16.5317 5 17.3917 7.29 16.0017 8.51L8.01165 15.5C6.62165 16.71 7.48165 19 9.32165 19H12.0017"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.48768 5.5H5.49924"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.4877 18.5H18.4992"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Routing2Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.4707 9C7.4037 9 8.9707 7.433 8.9707 5.5C8.9707 3.567 7.4037 2 5.4707 2C3.53771 2 1.9707 3.567 1.9707 5.5C1.9707 7.433 3.53771 9 5.4707 9Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17 15H20C21.1 15 22 15.9 22 17V20C22 21.1 21.1 22 20 22H17C15.9 22 15 21.1 15 20V17C15 15.9 15.9 15 17 15Z"
        fill="currentColor"
      />
      <Path
        d="M11.9995 19.75H9.31945C8.15945 19.75 7.14945 19.05 6.74945 17.97C6.33945 16.89 6.63945 15.7 7.50945 14.93L15.4995 7.94C15.9795 7.52 15.9895 6.95 15.8495 6.56C15.6995 6.17 15.3195 5.75 14.6795 5.75H11.9995C11.5895 5.75 11.2495 5.41 11.2495 5C11.2495 4.59 11.5895 4.25 11.9995 4.25H14.6795C15.8395 4.25 16.8495 4.95 17.2495 6.03C17.6595 7.11 17.3595 8.3 16.4895 9.07L8.49945 16.06C8.01945 16.48 8.00945 17.05 8.14945 17.44C8.29945 17.83 8.67945 18.25 9.31945 18.25H11.9995C12.4095 18.25 12.7495 18.59 12.7495 19C12.7495 19.41 12.4095 19.75 11.9995 19.75Z"
        fill="currentColor"
      />
      <Path
        d="M18.5098 19.5C17.9598 19.5 17.5098 19.05 17.5098 18.5C17.5098 17.95 17.9498 17.5 18.5098 17.5H18.5198C19.0698 17.5 19.5198 17.95 19.5198 18.5C19.5198 19.05 19.0698 19.5 18.5098 19.5Z"
        fill="currentColor"
      />
      <Path
        d="M5.50977 6.5C4.95977 6.5 4.50977 6.05 4.50977 5.5C4.50977 4.95 4.94977 4.5 5.50977 4.5H5.51977C6.06977 4.5 6.51977 4.95 6.51977 5.5C6.51977 6.05 6.06977 6.5 5.50977 6.5Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Routing2Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.46997 9C7.40297 9 8.96997 7.433 8.96997 5.5C8.96997 3.567 7.40297 2 5.46997 2C3.53697 2 1.96997 3.567 1.96997 5.5C1.96997 7.433 3.53697 9 5.46997 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M16.97 15H19.97C21.07 15 21.97 15.9 21.97 17V20C21.97 21.1 21.07 22 19.97 22H16.97C15.87 22 14.97 21.1 14.97 20V17C14.97 15.9 15.87 15 16.97 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M11.9999 5H14.6799C16.5299 5 17.3899 7.29 15.9999 8.51L8.00995 15.5C6.61995 16.71 7.47994 19 9.31994 19H11.9999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.48622 5.5H5.49777"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.4862 18.5H18.4978"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Routing2Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.50977 6.5C4.95977 6.5 4.50977 6.05 4.50977 5.5C4.50977 4.95 4.94977 4.5 5.50977 4.5H5.51977C6.06977 4.5 6.51977 4.95 6.51977 5.5C6.51977 6.05 6.06977 6.5 5.50977 6.5Z"
        fill="currentColor"
      />
      <Path
        d="M18.5098 19.5C17.9598 19.5 17.5098 19.05 17.5098 18.5C17.5098 17.95 17.9498 17.5 18.5098 17.5H18.5198C19.0698 17.5 19.5198 17.95 19.5198 18.5C19.5198 19.05 19.0698 19.5 18.5098 19.5Z"
        fill="currentColor"
      />
      <Path
        d="M5.4707 9.75C3.1307 9.75 1.2207 7.84 1.2207 5.5C1.2207 3.16 3.1307 1.25 5.4707 1.25C7.8107 1.25 9.7207 3.16 9.7207 5.5C9.7207 7.84 7.8207 9.75 5.4707 9.75ZM5.4707 2.75C3.9507 2.75 2.7207 3.98 2.7207 5.5C2.7207 7.02 3.9507 8.25 5.4707 8.25C6.9907 8.25 8.2207 7.02 8.2207 5.5C8.2207 3.98 6.9907 2.75 5.4707 2.75Z"
        fill="currentColor"
      />
      <Path
        d="M19.9707 22.75H16.9707C15.4507 22.75 14.2207 21.52 14.2207 20V17C14.2207 15.48 15.4507 14.25 16.9707 14.25H19.9707C21.4907 14.25 22.7207 15.48 22.7207 17V20C22.7207 21.52 21.4907 22.75 19.9707 22.75ZM16.9707 15.75C16.2807 15.75 15.7207 16.31 15.7207 17V20C15.7207 20.69 16.2807 21.25 16.9707 21.25H19.9707C20.6607 21.25 21.2207 20.69 21.2207 20V17C21.2207 16.31 20.6607 15.75 19.9707 15.75H16.9707Z"
        fill="currentColor"
      />
      <Path
        d="M11.9995 19.75H9.31945C8.15945 19.75 7.14945 19.05 6.74945 17.97C6.33945 16.89 6.63945 15.7 7.50945 14.93L15.4995 7.94C15.9795 7.52 15.9895 6.95 15.8495 6.56C15.6995 6.17 15.3195 5.75 14.6795 5.75H11.9995C11.5895 5.75 11.2495 5.41 11.2495 5C11.2495 4.59 11.5895 4.25 11.9995 4.25H14.6795C15.8395 4.25 16.8495 4.95 17.2495 6.03C17.6595 7.11 17.3595 8.3 16.4895 9.07L8.49945 16.06C8.01945 16.48 8.00945 17.05 8.14945 17.44C8.29945 17.83 8.67945 18.25 9.31945 18.25H11.9995C12.4095 18.25 12.7495 18.59 12.7495 19C12.7495 19.41 12.4095 19.75 11.9995 19.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Routing2Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.4707 9C7.4037 9 8.9707 7.433 8.9707 5.5C8.9707 3.567 7.4037 2 5.4707 2C3.53771 2 1.9707 3.567 1.9707 5.5C1.9707 7.433 3.53771 9 5.4707 9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        opacity="0.4"
        d="M16.9707 15H19.9707C21.0707 15 21.9707 15.9 21.9707 17V20C21.9707 21.1 21.0707 22 19.9707 22H16.9707C15.8707 22 14.9707 21.1 14.9707 20V17C14.9707 15.9 15.8707 15 16.9707 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M11.9997 5H14.6797C16.5297 5 17.3897 7.29 15.9997 8.51L8.0097 15.5C6.6197 16.71 7.4797 19 9.3197 19H11.9997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.48573 5.5H5.49728"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.4857 18.5H18.4973"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Routing2Bold,
  broken: Routing2Broken,
  bulk: Routing2Bulk,
  linear: Routing2Linear,
  outline: Routing2Outline,
  twotone: Routing2Twotone,
};

export const Routing2Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
