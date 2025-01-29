import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const GlobalBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.64859 20.9098C7.61859 20.9098 7.57859 20.9298 7.54859 20.9298C5.60859 19.9698 4.02859 18.3798 3.05859 16.4398C3.05859 16.4098 3.07859 16.3698 3.07859 16.3398C4.29859 16.6998 5.55859 16.9698 6.80859 17.1798C7.02859 18.4398 7.28859 19.6898 7.64859 20.9098Z"
        fill="currentColor"
      />
      <Path
        d="M20.9391 16.4498C19.9491 18.4398 18.2991 20.0498 16.2891 21.0198C16.6691 19.7498 16.9891 18.4698 17.1991 17.1798C18.4591 16.9698 19.6991 16.6998 20.9191 16.3398C20.9091 16.3798 20.9391 16.4198 20.9391 16.4498Z"
        fill="currentColor"
      />
      <Path
        d="M21.0191 7.71047C19.7591 7.33047 18.4891 7.02047 17.1991 6.80047C16.9891 5.51047 16.6791 4.23047 16.2891 2.98047C18.3591 3.97047 20.0291 5.64047 21.0191 7.71047Z"
        fill="currentColor"
      />
      <Path
        d="M7.65047 3.08859C7.29047 4.30859 7.03047 5.54859 6.82047 6.80859C5.53047 7.00859 4.25047 7.32859 2.98047 7.70859C3.95047 5.69859 5.56047 4.04859 7.55047 3.05859C7.58047 3.05859 7.62047 3.08859 7.65047 3.08859Z"
        fill="currentColor"
      />
      <Path
        d="M15.4917 6.59C13.1717 6.33 10.8317 6.33 8.51172 6.59C8.76172 5.22 9.08172 3.85 9.53172 2.53C9.55172 2.45 9.54172 2.39 9.55172 2.31C10.3417 2.12 11.1517 2 12.0017 2C12.8417 2 13.6617 2.12 14.4417 2.31C14.4517 2.39 14.4517 2.45 14.4717 2.53C14.9217 3.86 15.2417 5.22 15.4917 6.59Z"
        fill="currentColor"
      />
      <Path
        d="M6.59 15.4917C5.21 15.2417 3.85 14.9217 2.53 14.4717C2.45 14.4517 2.39 14.4617 2.31 14.4517C2.12 13.6617 2 12.8517 2 12.0017C2 11.1617 2.12 10.3417 2.31 9.56172C2.39 9.55172 2.45 9.55172 2.53 9.53172C3.86 9.09172 5.21 8.76172 6.59 8.51172C6.34 10.8317 6.34 13.1717 6.59 15.4917Z"
        fill="currentColor"
      />
      <Path
        d="M22.0002 12.0017C22.0002 12.8517 21.8802 13.6617 21.6902 14.4517C21.6102 14.4617 21.5502 14.4517 21.4702 14.4717C20.1402 14.9117 18.7802 15.2417 17.4102 15.4917C17.6702 13.1717 17.6702 10.8317 17.4102 8.51172C18.7802 8.76172 20.1502 9.08172 21.4702 9.53172C21.5502 9.55172 21.6102 9.56172 21.6902 9.56172C21.8802 10.3517 22.0002 11.1617 22.0002 12.0017Z"
        fill="currentColor"
      />
      <Path
        d="M15.4917 17.4102C15.2417 18.7902 14.9217 20.1502 14.4717 21.4702C14.4517 21.5502 14.4517 21.6102 14.4417 21.6902C13.6617 21.8802 12.8417 22.0002 12.0017 22.0002C11.1517 22.0002 10.3417 21.8802 9.55172 21.6902C9.54172 21.6102 9.55172 21.5502 9.53172 21.4702C9.09172 20.1402 8.76172 18.7902 8.51172 17.4102C9.67172 17.5402 10.8317 17.6302 12.0017 17.6302C13.1717 17.6302 14.3417 17.5402 15.4917 17.4102Z"
        fill="currentColor"
      />
      <Path
        d="M15.7633 15.7633C13.2622 16.0789 10.7378 16.0789 8.23667 15.7633C7.92111 13.2622 7.92111 10.7378 8.23667 8.23667C10.7378 7.92111 13.2622 7.92111 15.7633 8.23667C16.0789 10.7378 16.0789 13.2622 15.7633 15.7633Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GlobalBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.53906 12C7.53906 15.04 8.02906 18.08 8.99906 21H7.99906"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.00039 3H9.00039C8.51039 4.46 8.15039 5.95 7.90039 7.46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.13 16.3601C15.88 17.9201 15.51 19.4801 15 21.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 3C15.97 5.92 16.46 8.96 16.46 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GlobalBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.65055 20.9098C7.62055 20.9098 7.58055 20.9298 7.55055 20.9298C5.61055 19.9698 4.03055 18.3798 3.06055 16.4398C3.06055 16.4098 3.08055 16.3698 3.08055 16.3398C4.30055 16.6998 5.56055 16.9698 6.81055 17.1798C7.03055 18.4398 7.29055 19.6898 7.65055 20.9098Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.9391 16.4498C19.9491 18.4398 18.2991 20.0498 16.2891 21.0198C16.6691 19.7498 16.9891 18.4698 17.1991 17.1798C18.4591 16.9698 19.6991 16.6998 20.9191 16.3398C20.9091 16.3798 20.9391 16.4198 20.9391 16.4498Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.0191 7.70998C19.7591 7.32998 18.4891 7.01998 17.1991 6.79998C16.9891 5.50998 16.6791 4.22998 16.2891 2.97998C18.3591 3.96998 20.0291 5.63998 21.0191 7.70998Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M7.65047 3.09006C7.29047 4.31006 7.03047 5.55006 6.82047 6.81006C5.53047 7.01006 4.25047 7.33006 2.98047 7.71006C3.95047 5.70006 5.56047 4.05006 7.55047 3.06006C7.58047 3.06006 7.62047 3.09006 7.65047 3.09006Z"
        fill="currentColor"
      />
      <Path
        d="M15.4898 6.59C13.1698 6.33 10.8298 6.33 8.50977 6.59C8.75977 5.22 9.07977 3.85 9.52977 2.53C9.54977 2.45 9.53977 2.39 9.54977 2.31C10.3398 2.12 11.1498 2 11.9998 2C12.8398 2 13.6598 2.12 14.4398 2.31C14.4498 2.39 14.4498 2.45 14.4698 2.53C14.9198 3.86 15.2398 5.22 15.4898 6.59Z"
        fill="currentColor"
      />
      <Path
        d="M6.59 15.4898C5.21 15.2398 3.85 14.9198 2.53 14.4698C2.45 14.4498 2.39 14.4598 2.31 14.4498C2.12 13.6598 2 12.8498 2 11.9998C2 11.1598 2.12 10.3398 2.31 9.55977C2.39 9.54977 2.45 9.54977 2.53 9.52977C3.86 9.08977 5.21 8.75977 6.59 8.50977C6.34 10.8298 6.34 13.1698 6.59 15.4898Z"
        fill="currentColor"
      />
      <Path
        d="M22.0002 11.9998C22.0002 12.8498 21.8802 13.6598 21.6902 14.4498C21.6102 14.4598 21.5502 14.4498 21.4702 14.4698C20.1402 14.9098 18.7802 15.2398 17.4102 15.4898C17.6702 13.1698 17.6702 10.8298 17.4102 8.50977C18.7802 8.75977 20.1502 9.07977 21.4702 9.52977C21.5502 9.54977 21.6102 9.55977 21.6902 9.55977C21.8802 10.3498 22.0002 11.1598 22.0002 11.9998Z"
        fill="currentColor"
      />
      <Path
        d="M15.4898 17.4102C15.2398 18.7902 14.9198 20.1502 14.4698 21.4702C14.4498 21.5502 14.4498 21.6102 14.4398 21.6902C13.6598 21.8802 12.8398 22.0002 11.9998 22.0002C11.1498 22.0002 10.3398 21.8802 9.54977 21.6902C9.53977 21.6102 9.54977 21.5502 9.52977 21.4702C9.08977 20.1402 8.75977 18.7902 8.50977 17.4102C9.66977 17.5402 10.8298 17.6302 11.9998 17.6302C13.1698 17.6302 14.3398 17.5402 15.4898 17.4102Z"
        fill="currentColor"
      />
      <Path
        d="M15.7633 15.7633C13.2622 16.0789 10.7378 16.0789 8.23667 15.7633C7.92111 13.2622 7.92111 10.7378 8.23667 8.23667C10.7378 7.92111 13.2622 7.92111 15.7633 8.23667C16.0789 10.7378 16.0789 13.2622 15.7633 15.7633Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GlobalLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15 3C16.95 8.84 16.95 15.16 15 21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GlobalOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.00023 21.75H8.00023C7.59023 21.75 7.25023 21.41 7.25023 21C7.25023 20.59 7.57023 20.26 7.98023 20.25C6.41023 14.89 6.41023 9.11 7.98023 3.75C7.57023 3.74 7.25023 3.41 7.25023 3C7.25023 2.59 7.59023 2.25 8.00023 2.25H9.00023C9.24023 2.25 9.47023 2.37 9.61023 2.56C9.75023 2.76 9.79023 3.01 9.71023 3.24C7.83023 8.89 7.83023 15.11 9.71023 20.77C9.79023 21 9.75023 21.25 9.61023 21.45C9.47023 21.63 9.24023 21.75 9.00023 21.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.0004 21.7502C14.9204 21.7502 14.8404 21.7402 14.7604 21.7102C14.3704 21.5802 14.1504 21.1502 14.2904 20.7602C16.1704 15.1102 16.1704 8.89018 14.2904 3.23018C14.1604 2.84018 14.3704 2.41018 14.7604 2.28018C15.1604 2.15018 15.5804 2.36018 15.7104 2.75018C17.7004 8.71018 17.7004 15.2702 15.7104 21.2202C15.6104 21.5502 15.3104 21.7502 15.0004 21.7502Z"
        fill="currentColor"
      />
      <Path
        d="M12 17.1998C9.21 17.1998 6.43 16.8098 3.75 16.0198C3.74 16.4198 3.41 16.7498 3 16.7498C2.59 16.7498 2.25 16.4098 2.25 15.9998V14.9998C2.25 14.7598 2.37 14.5298 2.56 14.3898C2.76 14.2498 3.01 14.2098 3.24 14.2898C8.89 16.1698 15.12 16.1698 20.77 14.2898C21 14.2098 21.25 14.2498 21.45 14.3898C21.65 14.5298 21.76 14.7598 21.76 14.9998V15.9998C21.76 16.4098 21.42 16.7498 21.01 16.7498C20.6 16.7498 20.27 16.4298 20.26 16.0198C17.57 16.8098 14.79 17.1998 12 17.1998Z"
        fill="currentColor"
      />
      <Path
        d="M20.9998 9.74986C20.9198 9.74986 20.8398 9.73986 20.7598 9.70986C15.1098 7.82986 8.87978 7.82986 3.22978 9.70986C2.82978 9.83986 2.40978 9.62986 2.27978 9.23986C2.15978 8.83986 2.36978 8.41986 2.75978 8.28986C8.71978 6.29986 15.2798 6.29986 21.2298 8.28986C21.6198 8.41986 21.8398 8.84986 21.6998 9.23986C21.6098 9.54986 21.3098 9.74986 20.9998 9.74986Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GlobalTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
      <G opacity="0.4">
        <Path
          d="M7.99961 3H8.99961C7.04961 8.84 7.04961 15.16 8.99961 21H7.99961"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M15 3C16.95 8.84 16.95 15.16 15 21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
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
  bold: GlobalBold,
  broken: GlobalBroken,
  bulk: GlobalBulk,
  linear: GlobalLinear,
  outline: GlobalOutline,
  twotone: GlobalTwotone,
};

export const GlobalIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default GlobalIcon;
