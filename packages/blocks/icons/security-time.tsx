import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const SecurityTimeBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 8.25C10.21 8.25 8.75 9.71 8.75 11.5C8.75 13.29 10.21 14.75 12 14.75C13.79 14.75 15.25 13.29 15.25 11.5C15.25 9.71 13.79 8.25 12 8.25ZM13 11.18C13 11.79 12.67 12.37 12.15 12.68L11.38 13.14C11.26 13.21 11.13 13.25 10.99 13.25C10.74 13.25 10.49 13.12 10.35 12.89C10.14 12.53 10.25 12.07 10.61 11.86L11.37 11.4C11.45 11.35 11.49 11.27 11.49 11.19V10.26C11.49 9.85 11.83 9.51 12.24 9.51C12.65 9.51 13 9.84 13 10.25V11.18Z"
        fill="currentColor"
      />
      <Path
        d="M18.5408 4.17063L13.0408 2.11062C12.4708 1.90063 11.5408 1.90063 10.9708 2.11062L5.47078 4.17063C4.41078 4.57063 3.55078 5.81063 3.55078 6.94063V15.0406C3.55078 15.8506 4.08078 16.9206 4.73078 17.4006L10.2308 21.5106C11.2008 22.2406 12.7908 22.2406 13.7608 21.5106L19.2608 17.4006C19.9108 16.9106 20.4408 15.8506 20.4408 15.0406V6.94063C20.4508 5.81063 19.5908 4.57063 18.5408 4.17063ZM12.0008 16.2506C9.38078 16.2506 7.25078 14.1206 7.25078 11.5006C7.25078 8.88062 9.38078 6.75063 12.0008 6.75063C14.6208 6.75063 16.7508 8.88062 16.7508 11.5006C16.7508 14.1206 14.6208 16.2506 12.0008 16.2506Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SecurityTimeBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.41016 11.3701V14.5501C3.41016 15.7301 4.19017 17.2801 5.14017 17.9901L9.44016 21.2001C10.8502 22.2601 13.1701 22.2601 14.5801 21.2001L18.8802 17.9901C19.8302 17.2801 20.6101 15.7301 20.6101 14.5501V7.12006C20.6101 5.89006 19.6701 4.53006 18.5201 4.10006L13.5302 2.23006C12.7002 1.92006 11.3402 1.92006 10.5102 2.23006L5.52014 4.10006C4.37014 4.53006 3.43015 5.89006 3.43015 7.12006"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16 11.5C16 9.29 14.21 7.5 12 7.5C9.79 7.5 8 9.29 8 11.5C8 13.71 9.79 15.5 12 15.5C12.71 15.5 13.37 15.32 13.95 14.99"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.25 10.25V11.18C12.25 11.53 12.07 11.86 11.76 12.04L11 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SecurityTimeBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.9608 2.10989L5.46078 4.16989C4.41078 4.56989 3.55078 5.80989 3.55078 6.93989V15.0399C3.55078 15.8499 4.08078 16.9199 4.73078 17.3999L10.2308 21.5099C11.2008 22.2399 12.7908 22.2399 13.7608 21.5099L19.2608 17.3999C19.9108 16.9099 20.4408 15.8499 20.4408 15.0399V6.93989C20.4408 5.81989 19.5808 4.56988 18.5308 4.17988L13.0308 2.11989C12.4708 1.89989 11.5308 1.89989 10.9608 2.10989Z"
        fill="currentColor"
      />
      <Path
        d="M12 16.25C9.38 16.25 7.25 14.12 7.25 11.5C7.25 8.88 9.38 6.75 12 6.75C14.62 6.75 16.75 8.88 16.75 11.5C16.75 14.12 14.62 16.25 12 16.25ZM12 8.25C10.21 8.25 8.75 9.71 8.75 11.5C8.75 13.29 10.21 14.75 12 14.75C13.79 14.75 15.25 13.29 15.25 11.5C15.25 9.71 13.79 8.25 12 8.25Z"
        fill="currentColor"
      />
      <Path
        d="M10.9999 13.25C10.7499 13.25 10.4999 13.12 10.3599 12.89C10.1499 12.53 10.2599 12.07 10.6199 11.86L11.3799 11.4C11.4599 11.35 11.4999 11.27 11.4999 11.19V10.26C11.4999 9.85001 11.8399 9.51001 12.2499 9.51001C12.6599 9.51001 12.9999 9.84001 12.9999 10.25V11.18C12.9999 11.79 12.6699 12.37 12.1499 12.68L11.3799 13.14C11.2699 13.22 11.1299 13.25 10.9999 13.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SecurityTimeLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.49 2.23006L5.50003 4.10006C4.35003 4.53006 3.41003 5.89006 3.41003 7.12006V14.5501C3.41003 15.7301 4.19005 17.2801 5.14005 17.9901L9.44003 21.2001C10.85 22.2601 13.17 22.2601 14.58 21.2001L18.88 17.9901C19.83 17.2801 20.61 15.7301 20.61 14.5501V7.12006C20.61 5.89006 19.67 4.53006 18.52 4.10006L13.53 2.23006C12.68 1.92006 11.32 1.92006 10.49 2.23006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 15.5C14.2091 15.5 16 13.7091 16 11.5C16 9.29086 14.2091 7.5 12 7.5C9.79086 7.5 8 9.29086 8 11.5C8 13.7091 9.79086 15.5 12 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.25 10.25V11.18C12.25 11.53 12.07 11.86 11.76 12.04L11 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const SecurityTimeOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.0004 22.7599C10.9104 22.7599 9.83041 22.4399 8.98041 21.8099L4.68039 18.5999C3.54039 17.7499 2.65039 15.9699 2.65039 14.5599V7.11994C2.65039 5.57994 3.78041 3.93994 5.23041 3.39994L10.2204 1.52994C11.2104 1.15994 12.7704 1.15994 13.7604 1.52994L18.7504 3.39994C20.2004 3.93994 21.3304 5.57994 21.3304 7.11994V14.5499C21.3304 15.9699 20.4404 17.7399 19.3004 18.5899L15.0004 21.7999C14.1704 22.4399 13.0904 22.7599 12.0004 22.7599ZM10.7504 2.93994L5.76041 4.80994C4.91041 5.12994 4.1604 6.20994 4.1604 7.12994V14.5599C4.1604 15.5099 4.83038 16.8399 5.58038 17.3999L9.8804 20.6099C11.0304 21.4699 12.9704 21.4699 14.1304 20.6099L18.4304 17.3999C19.1904 16.8299 19.8504 15.5099 19.8504 14.5599V7.11994C19.8504 6.20994 19.1004 5.12994 18.2504 4.79994L13.2604 2.92994C12.5804 2.68994 11.4204 2.68994 10.7504 2.93994Z"
        fill="currentColor"
      />
      <Path
        d="M12 16.25C9.38 16.25 7.25 14.12 7.25 11.5C7.25 8.88 9.38 6.75 12 6.75C14.62 6.75 16.75 8.88 16.75 11.5C16.75 14.12 14.62 16.25 12 16.25ZM12 8.25C10.21 8.25 8.75 9.71 8.75 11.5C8.75 13.29 10.21 14.75 12 14.75C13.79 14.75 15.25 13.29 15.25 11.5C15.25 9.71 13.79 8.25 12 8.25Z"
        fill="currentColor"
      />
      <Path
        d="M10.9999 13.25C10.7499 13.25 10.4999 13.12 10.3599 12.89C10.1499 12.53 10.2599 12.07 10.6199 11.86L11.3799 11.4C11.4599 11.35 11.4999 11.27 11.4999 11.19V10.26C11.4999 9.85001 11.8399 9.51001 12.2499 9.51001C12.6599 9.51001 12.9999 9.84001 12.9999 10.25V11.18C12.9999 11.79 12.6699 12.37 12.1499 12.68L11.3799 13.14C11.2699 13.22 11.1299 13.25 10.9999 13.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const SecurityTimeTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.4901 2.23006L5.50015 4.10006C4.35015 4.53006 3.41016 5.89006 3.41016 7.12006V14.5501C3.41016 15.7301 4.19017 17.2801 5.14017 17.9901L9.44016 21.2001C10.8502 22.2601 13.1701 22.2601 14.5801 21.2001L18.8802 17.9901C19.8302 17.2801 20.6101 15.7301 20.6101 14.5501V7.12006C20.6101 5.89006 19.6701 4.53006 18.5201 4.10006L13.5302 2.23006C12.6802 1.92006 11.3201 1.92006 10.4901 2.23006Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12 15.5C14.2091 15.5 16 13.7091 16 11.5C16 9.29086 14.2091 7.5 12 7.5C9.79086 7.5 8 9.29086 8 11.5C8 13.7091 9.79086 15.5 12 15.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M12.25 10.25V11.18C12.25 11.53 12.07 11.86 11.76 12.04L11 12.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: SecurityTimeBold,
  broken: SecurityTimeBroken,
  bulk: SecurityTimeBulk,
  linear: SecurityTimeLinear,
  outline: SecurityTimeOutline,
  twotone: SecurityTimeTwotone,
};

export const SecurityTimeIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
