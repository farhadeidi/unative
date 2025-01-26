import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const TreeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1693 10.0603H7.82934C6.64934 10.0603 6.23934 9.27031 6.92934 8.31031L11.0993 2.47031C11.5893 1.77031 12.4093 1.77031 12.8993 2.47031L17.0693 8.31031C17.7593 9.27031 17.3493 10.0603 16.1693 10.0603Z"
        fill="currentColor"
      />
      <Path
        d="M17.5896 17.9986H6.4096C4.8296 17.9986 4.2896 16.9486 5.2196 15.6686L9.2096 10.0586H14.7896L18.7796 15.6686C19.7096 16.9486 19.1696 17.9986 17.5896 17.9986Z"
        fill="currentColor"
      />
      <Path
        d="M12.75 18V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V18H12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TreeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1694 10.0601H7.82933C6.64933 10.0601 6.23934 9.27006 6.92934 8.31006L11.0994 2.47007C11.5894 1.77007 12.4094 1.77007 12.8894 2.47007L17.0593 8.31006C17.7593 9.27006 17.3494 10.0601 16.1694 10.0601Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7794 15.6701C19.7094 16.9501 19.1694 18.0001 17.5894 18.0001H6.41937C4.83937 18.0001 4.29937 16.9501 5.22937 15.6701L9.21936 10.0601H14.7894L16.1694 12.0001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TreeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1694 10.0601H7.82933C6.64933 10.0601 6.23934 9.27007 6.92934 8.31007L11.0994 2.47007C11.5894 1.77007 12.4093 1.77007 12.8993 2.47007L17.0694 8.31007C17.7594 9.27007 17.3494 10.0601 16.1694 10.0601Z"
        fill="currentColor"
      />
      <Path
        d="M17.5896 18.0001H6.4096C4.8296 18.0001 4.2896 16.9501 5.2196 15.6701L9.20959 10.0601H14.7896L18.7796 15.6701C19.7096 16.9501 19.1696 18.0001 17.5896 18.0001Z"
        fill="currentColor"
      />
      <Path
        d="M12.75 18V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V18H12.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TreeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.17 10.0599H7.82994C6.64995 10.0599 6.23995 9.26994 6.92995 8.30994L11.1 2.46995C11.59 1.76995 12.41 1.76995 12.89 2.46995L17.06 8.30994C17.76 9.26994 17.35 10.0599 16.17 10.0599Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.59 17.9999H6.41998C4.83998 17.9999 4.29998 16.9499 5.22998 15.6699L9.21997 10.0599H14.79L18.78 15.6699C19.71 16.9499 19.17 17.9999 17.59 17.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 22V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TreeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1703 10.8098H7.83022C6.97022 10.8098 6.31025 10.4698 6.01025 9.88985C5.71025 9.29985 5.83022 8.56984 6.33022 7.87984L10.5002 2.03985C11.2402 0.979847 12.7702 0.979849 13.5202 2.04985L17.6902 7.87984C18.1902 8.56984 18.3102 9.29985 18.0102 9.88985C17.6902 10.4698 17.0303 10.8098 16.1703 10.8098ZM12.0002 2.69984C11.9102 2.69984 11.8102 2.77985 11.7202 2.89985L7.55023 8.74985C7.35023 9.01985 7.34024 9.17984 7.35024 9.20985C7.36024 9.22985 7.50023 9.30984 7.84023 9.30984H16.1802C16.5102 9.30984 16.6503 9.21984 16.6703 9.19984C16.6703 9.17984 16.6602 9.01985 16.4702 8.74985L12.3002 2.90985C12.1902 2.76985 12.0902 2.69984 12.0002 2.69984Z"
        fill="currentColor"
      />
      <Path
        d="M17.5897 18.7501H6.41968C4.98968 18.7501 4.41966 18.0601 4.20966 17.6501C3.99966 17.2401 3.77966 16.3801 4.61966 15.2201L8.60965 9.62006C8.74965 9.42006 8.97967 9.31006 9.21967 9.31006H14.7897C15.0297 9.31006 15.2597 9.43006 15.3997 9.62006L19.3897 15.2301C20.2297 16.3801 19.9997 17.2401 19.7897 17.6501C19.5797 18.0601 19.0197 18.7501 17.5897 18.7501ZM9.59967 10.8101L5.82965 16.1001C5.50965 16.5401 5.47967 16.8401 5.53967 16.9701C5.60967 17.1001 5.86967 17.2501 6.40967 17.2501H17.5797C18.1197 17.2501 18.3897 17.1001 18.4497 16.9701C18.5197 16.8401 18.4797 16.5401 18.1597 16.1001L14.3897 10.8001H9.59967V10.8101Z"
        fill="currentColor"
      />
      <Path
        d="M12 22.75C11.59 22.75 11.25 22.41 11.25 22V18C11.25 17.59 11.59 17.25 12 17.25C12.41 17.25 12.75 17.59 12.75 18V22C12.75 22.41 12.41 22.75 12 22.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TreeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.1694 10.0598H7.82933C6.64933 10.0598 6.23934 9.26982 6.92934 8.30982L11.0994 2.46982C11.5894 1.76982 12.4094 1.76982 12.8894 2.46982L17.0593 8.30982C17.7593 9.26982 17.3494 10.0598 16.1694 10.0598Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.5894 18.0001H6.41937C4.83937 18.0001 4.29937 16.9501 5.22937 15.6701L9.21936 10.0601H14.7894L18.7794 15.6701C19.7094 16.9501 19.1694 18.0001 17.5894 18.0001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 22V18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TreeBold,
  broken: TreeBroken,
  bulk: TreeBulk,
  linear: TreeLinear,
  outline: TreeOutline,
  twotone: TreeTwotone,
};

export const TreeIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
