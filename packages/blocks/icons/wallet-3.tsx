import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const Wallet3Bold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0002 12.6216V14.6816C22.0002 15.2416 21.5402 15.7016 20.9702 15.7016H19.0402C17.9602 15.7016 16.9702 14.9116 16.8802 13.8316C16.8202 13.2016 17.0602 12.6116 17.4802 12.2016C17.8502 11.8216 18.3602 11.6016 18.9202 11.6016H20.9702C21.5402 11.6016 22.0002 12.0616 22.0002 12.6216Z"
        fill="currentColor"
      />
      <Path
        d="M15.38 13.9584C15.29 12.9084 15.67 11.8784 16.43 11.1284C17.07 10.4784 17.96 10.0984 18.92 10.0984H19.49C19.77 10.0984 20 9.86844 19.96 9.58844C19.69 7.64844 18.01 6.14844 16 6.14844H6C3.79 6.14844 2 7.93844 2 10.1484V17.1484C2 19.3584 3.79 21.1484 6 21.1484H16C18.02 21.1484 19.69 19.6484 19.96 17.7084C20 17.4284 19.77 17.1984 19.49 17.1984H19.04C17.14 17.1984 15.54 15.7784 15.38 13.9584ZM13 11.8984H7C6.59 11.8984 6.25 11.5684 6.25 11.1484C6.25 10.7284 6.59 10.3984 7 10.3984H13C13.41 10.3984 13.75 10.7384 13.75 11.1484C13.75 11.5584 13.41 11.8984 13 11.8984Z"
        fill="currentColor"
      />
      <Path
        d="M14.2106 3.98156C14.4706 4.25156 14.2406 4.65156 13.8606 4.65156H6.03064C4.94064 4.65156 3.92064 4.97156 3.07064 5.52156C2.68064 5.77156 2.15064 5.50156 2.34064 5.07156C2.90064 3.76156 4.21064 2.85156 5.72064 2.85156H11.3406C12.5006 2.85156 13.5306 3.26156 14.2106 3.98156Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Wallet3Broken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13 11.1499H7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.3105 2.8501C13.3505 2.8501 15.0005 4.1201 15.0005 6.1601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 10.1501V6.53009C2 4.49009 3.65 2.84009 5.69 2.84009H7.62"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 10.1499C2 7.9399 3.79 6.1499 6 6.1499H16C18.2 6.1499 20 7.9499 20 10.1499V11.5999H18.92C18.36 11.5999 17.85 11.8199 17.48 12.1999C16.98 12.6799 16.74 13.4199 16.94 14.1799C17.19 15.1099 18.11 15.6999 19.07 15.6999H20V17.1499C20 19.3599 18.21 21.1499 16 21.1499H6C3.79 21.1499 2 19.3599 2 17.1499V14.5199"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0002 12.6201V14.6801C22.0002 15.2401 21.5402 15.7001 20.9702 15.7001H19.0402C17.9602 15.7001 16.9702 14.9101 16.8802 13.8301C16.8202 13.2001 17.0602 12.6101 17.4802 12.2001C17.8502 11.8201 18.3602 11.6001 18.9202 11.6001H20.9702C21.5402 11.6001 22.0002 12.0601 22.0002 12.6201Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Wallet3Bulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15 6.15015H6C3.79 6.15015 2 7.94015 2 10.1501V6.5401C2 4.5001 3.65 2.8501 5.69 2.8501H11.31C13.35 2.8501 15 4.11015 15 6.15015Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M17.48 12.1999C16.98 12.6899 16.74 13.4299 16.94 14.1799C17.19 15.1099 18.11 15.6999 19.07 15.6999H20V17.1499C20 19.3599 18.21 21.1499 16 21.1499H6C3.79 21.1499 2 19.3599 2 17.1499V10.1499C2 7.9399 3.79 6.1499 6 6.1499H16C18.2 6.1499 20 7.9499 20 10.1499V11.5999H18.92C18.36 11.5999 17.85 11.8199 17.48 12.1999Z"
        fill="currentColor"
      />
      <Path
        d="M22.0002 12.6201V14.6801C22.0002 15.2401 21.5402 15.7001 20.9702 15.7001H19.0402C17.9602 15.7001 16.9702 14.9101 16.8802 13.8301C16.8202 13.2001 17.0602 12.6101 17.4802 12.2001C17.8502 11.8201 18.3602 11.6001 18.9202 11.6001H20.9702C21.5402 11.6001 22.0002 12.0601 22.0002 12.6201Z"
        fill="currentColor"
      />
      <Path
        d="M13 11.8999H7C6.59 11.8999 6.25 11.5599 6.25 11.1499C6.25 10.7399 6.59 10.3999 7 10.3999H13C13.41 10.3999 13.75 10.7399 13.75 11.1499C13.75 11.5599 13.41 11.8999 13 11.8999Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Wallet3Linear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13 11.1499H7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 11.1501V6.53009C2 4.49009 3.65 2.84009 5.69 2.84009H11.31C13.35 2.84009 15 4.11009 15 6.15009"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.48 12.1999C16.98 12.6799 16.74 13.4199 16.94 14.1799C17.19 15.1099 18.11 15.6999 19.07 15.6999H20V17.1499C20 19.3599 18.21 21.1499 16 21.1499H6C3.79 21.1499 2 19.3599 2 17.1499V10.1499C2 7.9399 3.79 6.1499 6 6.1499H16C18.2 6.1499 20 7.9499 20 10.1499V11.5999H18.92C18.36 11.5999 17.85 11.8199 17.48 12.1999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 12.6201V14.6801C22 15.2401 21.5399 15.7001 20.9699 15.7001H19.0399C17.9599 15.7001 16.97 14.9101 16.88 13.8301C16.82 13.2001 17.0599 12.6101 17.4799 12.2001C17.8499 11.8201 18.36 11.6001 18.92 11.6001H20.9699C21.5399 11.6001 22 12.0601 22 12.6201Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const Wallet3Outline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13 11.8999H7C6.59 11.8999 6.25 11.5599 6.25 11.1499C6.25 10.7399 6.59 10.3999 7 10.3999H13C13.41 10.3999 13.75 10.7399 13.75 11.1499C13.75 11.5599 13.41 11.8999 13 11.8999Z"
        fill="currentColor"
      />
      <Path
        d="M2 11.8998C1.59 11.8998 1.25 11.5598 1.25 11.1498V6.52985C1.25 4.07985 3.24 2.08984 5.69 2.08984H11.31C13.88 2.08984 15.75 3.79984 15.75 6.14984C15.75 6.55984 15.41 6.89984 15 6.89984C14.59 6.89984 14.25 6.55984 14.25 6.14984C14.25 4.38984 12.72 3.58984 11.31 3.58984H5.69C4.07 3.58984 2.75 4.90985 2.75 6.52985V11.1498C2.75 11.5698 2.41 11.8998 2 11.8998Z"
        fill="currentColor"
      />
      <Path
        d="M16 21.8999H6C3.38 21.8999 1.25 19.7699 1.25 17.1499V10.1499C1.25 7.5299 3.38 5.3999 6 5.3999H16C18.62 5.3999 20.75 7.5299 20.75 10.1499V11.5999C20.75 12.0099 20.41 12.3499 20 12.3499H18.92C18.57 12.3499 18.25 12.4798 18.02 12.7198L18.01 12.7299C17.68 13.0599 17.55 13.5198 17.67 13.9698C17.82 14.5298 18.41 14.9399 19.07 14.9399H20C20.41 14.9399 20.75 15.2799 20.75 15.6899V17.1399C20.75 19.7699 18.62 21.8999 16 21.8999ZM6 6.8999C4.21 6.8999 2.75 8.3599 2.75 10.1499V17.1499C2.75 18.9399 4.21 20.3999 6 20.3999H16C17.79 20.3999 19.25 18.9399 19.25 17.1499V16.4499H19.07C17.72 16.4499 16.55 15.5999 16.22 14.3699C15.96 13.3999 16.24 12.3699 16.95 11.6699C17.47 11.1399 18.17 10.8499 18.92 10.8499H19.25V10.1499C19.25 8.3599 17.79 6.8999 16 6.8999H6Z"
        fill="currentColor"
      />
      <Path
        d="M20.9699 16.4501H19.0399C17.5299 16.4501 16.2499 15.3301 16.1299 13.8901C16.0499 13.0601 16.3499 12.2501 16.9499 11.6601C17.4499 11.1401 18.1599 10.8501 18.9099 10.8501H20.9599C21.9399 10.8501 22.7399 11.6401 22.7399 12.6201V14.6801C22.7499 15.6601 21.9499 16.4501 20.9699 16.4501ZM18.9199 12.3501C18.5699 12.3501 18.2499 12.4801 18.0199 12.7201C17.7299 13.0001 17.5899 13.3801 17.6299 13.7601C17.6799 14.4201 18.3199 14.9501 19.0399 14.9501H20.9699C21.1199 14.9501 21.2499 14.8301 21.2499 14.6801V12.6201C21.2499 12.4701 21.1199 12.3501 20.9699 12.3501H18.9199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const Wallet3Twotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13 11.1499H7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M2 11.1498V6.52985C2 4.48985 3.65 2.83984 5.69 2.83984H11.31C13.35 2.83984 15 4.10984 15 6.14984"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.48 12.1999C16.98 12.6799 16.74 13.4199 16.94 14.1799C17.19 15.1099 18.11 15.6999 19.07 15.6999H20V17.1499C20 19.3599 18.21 21.1499 16 21.1499H6C3.79 21.1499 2 19.3599 2 17.1499V10.1499C2 7.9399 3.79 6.1499 6 6.1499H16C18.2 6.1499 20 7.9499 20 10.1499V11.5999H18.92C18.36 11.5999 17.85 11.8199 17.48 12.1999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.0002 12.6201V14.6801C22.0002 15.2401 21.5402 15.7001 20.9702 15.7001H19.0402C17.9602 15.7001 16.9702 14.9101 16.8802 13.8301C16.8202 13.2001 17.0602 12.6101 17.4802 12.2001C17.8502 11.8201 18.3602 11.6001 18.9202 11.6001H20.9702C21.5402 11.6001 22.0002 12.0601 22.0002 12.6201Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: Wallet3Bold,
  broken: Wallet3Broken,
  bulk: Wallet3Bulk,
  linear: Wallet3Linear,
  outline: Wallet3Outline,
  twotone: Wallet3Twotone,
};

export const Wallet3Icon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
