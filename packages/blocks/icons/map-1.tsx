import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const Map1Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.62906 3.56969C7.80845 3.47184 7.99906 3.62237 7.99906 3.8267V17.3825C7.99906 17.6058 7.84665 17.7946 7.64926 17.8988C7.64249 17.9024 7.63576 17.906 7.62906 17.9097L5.27906 19.2497C3.63906 20.1897 2.28906 19.4097 2.28906 17.5097V7.77969C2.28906 7.14969 2.73906 6.36969 3.29906 6.04969L7.62906 3.56969Z"
        fill="currentColor"
      />
      <Path
        d="M14.7219 6.1029C14.8922 6.18725 15 6.36089 15 6.55096V19.7041C15 20.0726 14.615 20.3145 14.283 20.1546L10.033 18.107C9.85998 18.0236 9.75 17.8485 9.75 17.6565V4.4462C9.75 4.07534 10.1396 3.83355 10.4719 3.99814L14.7219 6.1029Z"
        fill="currentColor"
      />
      <Path
        d="M22 6.49006V16.2201C22 16.8501 21.55 17.6301 20.99 17.9501L17.4986 19.951C17.1653 20.1421 16.75 19.9014 16.75 19.5172V6.33038C16.75 6.15087 16.8462 5.98513 17.0021 5.89615L19.01 4.75006C20.65 3.81006 22 4.59006 22 6.49006Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Map1Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M4.26906 5.48998L3.29906 6.04998C2.74906 6.36998 2.28906 7.14998 2.28906 7.78998V17.52C2.28906 19.42 3.63906 20.2 5.27906 19.26L7.62906 17.92C8.13906 17.63 8.98906 17.6 9.51906 17.87L14.7691 20.5C15.2991 20.76 16.1491 20.74 16.6591 20.45L20.9891 17.97C21.5391 17.65 21.9991 16.87 21.9991 16.23V6.48998C21.9991 4.58998 20.6491 3.80998 19.0091 4.74998L16.6591 6.08998C16.1491 6.37998 15.2991 6.40998 14.7691 6.13998L9.51906 3.51998C8.98906 3.25998 8.13906 3.27998 7.62906 3.56998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.56055 4V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.7305 6.62012V20.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Map1Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.55906 3.33984V17.6698C8.21906 17.6798 7.87906 17.7598 7.62906 17.9098L5.27906 19.2498C3.63906 20.1898 2.28906 19.4098 2.28906 17.5098V7.77984C2.28906 7.14984 2.73906 6.36984 3.29906 6.04984L7.62906 3.56984C7.87906 3.42984 8.21906 3.34984 8.55906 3.33984Z"
        fill="currentColor"
      />
      <Path
        d="M15.7305 6.32994V20.6599C15.3805 20.6699 15.0405 20.6099 14.7705 20.4799L9.52055 17.8499C9.25055 17.7199 8.91055 17.6599 8.56055 17.6699V3.33994C8.91055 3.32994 9.25055 3.38994 9.52055 3.51994L14.7705 6.14994C15.0405 6.27994 15.3805 6.33994 15.7305 6.32994Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22.0005 6.49006V16.2201C22.0005 16.8501 21.5505 17.6301 20.9905 17.9501L16.6605 20.4301C16.4105 20.5701 16.0705 20.6501 15.7305 20.6601V6.33006C16.0705 6.32006 16.4105 6.24006 16.6605 6.09006L19.0105 4.75006C20.6505 3.81006 22.0005 4.59006 22.0005 6.49006Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Map1Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.28998 7.77998V17.51C2.28998 19.41 3.63998 20.19 5.27998 19.25L7.62998 17.91C8.13998 17.62 8.98998 17.59 9.51998 17.86L14.77 20.49C15.3 20.75 16.15 20.73 16.66 20.44L20.99 17.96C21.54 17.64 22 16.86 22 16.22V6.48998C22 4.58998 20.65 3.80998 19.01 4.74998L16.66 6.08998C16.15 6.37998 15.3 6.40998 14.77 6.13998L9.51998 3.51998C8.98998 3.25998 8.13998 3.27998 7.62998 3.56998L3.29998 6.04998C2.73998 6.36998 2.28998 7.14998 2.28998 7.77998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.56 4V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.73 6.62012V20.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Map1Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.3795 21.13C20.1795 21.13 19.9895 21.05 19.8495 20.91L13.4695 14.53C13.1795 14.24 13.1795 13.76 13.4695 13.47L21.1995 5.74001C21.3895 5.55001 21.6795 5.48001 21.9395 5.55001C22.1995 5.63001 22.3994 5.84001 22.4594 6.10001C22.6494 6.95001 22.7495 7.90001 22.7495 9.00001V15C22.7495 17.77 22.1695 19.64 20.9095 20.91C20.7695 21.05 20.5595 21.08 20.3795 21.13ZM15.0594 14L20.3195 19.26C20.9495 18.29 21.2495 16.91 21.2495 15V9.00001C21.2495 8.59001 21.2394 8.21001 21.2094 7.85001L15.0594 14Z"
        fill="currentColor"
      />
      <Path
        d="M6.26999 22.48C6.20999 22.48 6.16001 22.47 6.10001 22.46C2.79001 21.7 1.25 19.33 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C19.33 1.25 21.7 2.79001 22.46 6.10001C22.52 6.35001 22.44 6.62 22.26 6.8L6.79999 22.26C6.65999 22.4 6.46999 22.48 6.26999 22.48ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 18.47 3.71001 20.21 6.04001 20.9L20.89 6.05C20.21 3.72 18.46 2.75999 14.99 2.75999H9V2.75Z"
        fill="currentColor"
      />
      <Path
        d="M15.0004 22.7499H9.00037C7.90037 22.7499 6.96038 22.6599 6.10038 22.4599C5.83038 22.3999 5.62036 22.1999 5.55036 21.9399C5.47036 21.6799 5.55036 21.3999 5.74036 21.1999L13.4704 13.4699C13.7604 13.1799 14.2404 13.1799 14.5304 13.4699L20.9104 19.8499C21.0504 19.9899 21.1304 20.1799 21.1304 20.3799C21.1304 20.5799 21.0504 20.7699 20.9104 20.9099C19.6404 22.1699 17.7704 22.7499 15.0004 22.7499ZM7.85038 21.2099C8.21038 21.2399 8.59037 21.2499 9.00037 21.2499H15.0004C16.9204 21.2499 18.2904 20.9499 19.2604 20.3199L14.0004 15.0599L7.85038 21.2099Z"
        fill="currentColor"
      />
      <Path
        d="M9.11896 13.31C8.48896 13.31 7.85895 13.08 7.35895 12.61C5.76895 11.1 5.12898 9.44005 5.50898 7.82005C5.88898 6.16005 7.33896 5.04004 9.11896 5.04004C10.899 5.04004 12.349 6.16005 12.729 7.82005C13.099 9.45005 12.459 11.1 10.869 12.61C10.379 13.07 9.74896 13.31 9.11896 13.31ZM6.96897 8.15004C6.64897 9.51004 7.56896 10.7301 8.39896 11.5201C8.80896 11.91 9.43897 11.91 9.83897 11.5201C10.659 10.7401 11.579 9.52004 11.269 8.15004C10.999 6.96004 9.93896 6.53004 9.11896 6.53004C8.29896 6.53004 7.24897 6.96004 6.96897 8.15004Z"
        fill="currentColor"
      />
      <Path
        d="M9.15039 9.49023C8.60039 9.49023 8.15039 9.04023 8.15039 8.49023C8.15039 7.94023 8.59039 7.49023 9.15039 7.49023H9.1604C9.7104 7.49023 10.1604 7.94023 10.1604 8.49023C10.1604 9.04023 9.70039 9.49023 9.15039 9.49023Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Map1Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M2.28906 7.77998V17.51C2.28906 19.41 3.63906 20.19 5.27906 19.25L7.62906 17.91C8.13906 17.62 8.98906 17.59 9.51906 17.86L14.7691 20.49C15.2991 20.75 16.1491 20.73 16.6591 20.44L20.9891 17.96C21.5391 17.64 21.9991 16.86 21.9991 16.22V6.48998C21.9991 4.58998 20.6491 3.80998 19.0091 4.74998L16.6591 6.08998C16.1491 6.37998 15.2991 6.40998 14.7691 6.13998L9.51906 3.51998C8.98906 3.25998 8.13906 3.27998 7.62906 3.56998L3.29906 6.04998C2.73906 6.36998 2.28906 7.14998 2.28906 7.77998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.56055 4V17"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.7305 6.62012V20.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Map1Bold,
  broken: Map1Broken,
  bulk: Map1Bulk,
  linear: Map1Linear,
  outline: Map1Outline,
  twotone: Map1Twotone,
};

export const Map1Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
