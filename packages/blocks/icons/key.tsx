import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const KeyBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.7887 4.22031C16.8287 1.27031 12.0287 1.27031 9.08868 4.22031C7.01868 6.27031 6.39868 9.22031 7.19868 11.8203L2.49868 16.5203C2.16868 16.8603 1.93868 17.5303 2.00868 18.0103L2.30868 20.1903C2.41868 20.9103 3.08868 21.5903 3.80868 21.6903L5.98868 21.9903C6.46868 22.0603 7.13868 21.8403 7.47868 21.4903L8.29868 20.6703C8.49868 20.4803 8.49868 20.1603 8.29868 19.9603L6.35868 18.0203C6.06868 17.7303 6.06868 17.2503 6.35868 16.9603C6.64868 16.6703 7.12868 16.6703 7.41868 16.9603L9.36868 18.9103C9.55868 19.1003 9.87868 19.1003 10.0687 18.9103L12.1887 16.8003C14.7787 17.6103 17.7287 16.9803 19.7887 14.9303C22.7387 11.9803 22.7387 7.17031 19.7887 4.22031ZM14.4987 12.0003C13.1187 12.0003 11.9987 10.8803 11.9987 9.50031C11.9987 8.12031 13.1187 7.00031 14.4987 7.00031C15.8787 7.00031 16.9987 8.12031 16.9987 9.50031C16.9987 10.8803 15.8787 12.0003 14.4987 12.0003Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const KeyBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12.9906 2.14996C15.3706 1.68996 17.9406 2.37996 19.7906 4.21996C22.7406 7.16996 22.7406 11.98 19.7906 14.92C17.7306 16.97 14.7806 17.6 12.1906 16.79L7.48063 21.49C7.14063 21.84 6.47063 22.05 5.99063 21.98L3.81063 21.68C3.09063 21.58 2.42063 20.9 2.31063 20.18L2.01063 18C1.94063 17.52 2.17063 16.85 2.50063 16.51L3.62063 15.39L7.19063 11.82C6.39063 9.21996 7.01063 6.26996 9.07063 4.21996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.89062 17.49L9.19062 19.79"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const KeyBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.7906 4.22007C16.8306 1.27007 12.0306 1.27007 9.09063 4.22007C7.02063 6.27007 6.40063 9.22007 7.20063 11.8201L2.50063 16.5201C2.17063 16.8601 1.94063 17.5301 2.01063 18.0101L2.31063 20.1901C2.42063 20.9101 3.09063 21.5901 3.81063 21.6901L5.99063 21.9901C6.47063 22.0601 7.14063 21.8401 7.48063 21.4901L8.30063 20.6701C8.50063 20.4801 8.50063 20.1601 8.30063 19.9601L6.36063 18.0201C6.07063 17.7301 6.07063 17.2501 6.36063 16.9601C6.65063 16.6701 7.13063 16.6701 7.42063 16.9601L9.37063 18.9101C9.56063 19.1001 9.88063 19.1001 10.0706 18.9101L12.1906 16.8001C14.7806 17.6101 17.7306 16.9801 19.7906 14.9301C22.7406 11.9801 22.7406 7.17007 19.7906 4.22007ZM14.5006 12.0001C13.1206 12.0001 12.0006 10.8801 12.0006 9.50007C12.0006 8.12007 13.1206 7.00007 14.5006 7.00007C15.8806 7.00007 17.0006 8.12007 17.0006 9.50007C17.0006 10.8801 15.8806 12.0001 14.5006 12.0001Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 12C15.8807 12 17 10.8807 17 9.5C17 8.11929 15.8807 7 14.5 7C13.1193 7 12 8.11929 12 9.5C12 10.8807 13.1193 12 14.5 12Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const KeyLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.79 14.9299C17.73 16.9799 14.78 17.6099 12.19 16.7999L7.48002 21.4999C7.14002 21.8499 6.47002 22.0599 5.99002 21.9899L3.81002 21.6899C3.09002 21.5899 2.42002 20.9099 2.31002 20.1899L2.01002 18.0099C1.94002 17.5299 2.17002 16.8599 2.50002 16.5199L7.20002 11.8199C6.40002 9.21995 7.02002 6.26995 9.08002 4.21995C12.03 1.26995 16.82 1.26995 19.78 4.21995C22.74 7.16995 22.74 11.9799 19.79 14.9299Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.89001 17.49L9.19001 19.79"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const KeyOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.17916 22.7499C6.07916 22.7499 5.96916 22.7399 5.87916 22.7299L3.70916 22.4299C2.66916 22.2899 1.72916 21.3599 1.56916 20.2999L1.26916 18.1099C1.16916 17.4099 1.46916 16.4999 1.96916 15.9899L6.35916 11.5999C5.64916 8.75992 6.46916 5.75992 8.55916 3.68992C11.7992 0.459923 17.0692 0.449923 20.3192 3.68992C21.8892 5.25992 22.7492 7.34992 22.7492 9.56992C22.7492 11.7899 21.8892 13.8799 20.3192 15.4499C18.2192 17.5299 15.2292 18.3499 12.4092 17.6299L8.00916 22.0199C7.58916 22.4599 6.83916 22.7499 6.17916 22.7499ZM14.4292 2.75992C12.6792 2.75992 10.9392 3.41992 9.60916 4.74992C7.80916 6.53992 7.15916 9.15992 7.90916 11.5999C7.98916 11.8699 7.91916 12.1499 7.71916 12.3499L3.01916 17.0499C2.84916 17.2199 2.70916 17.6599 2.73916 17.8899L3.03916 20.0799C3.09916 20.4599 3.50916 20.8899 3.88916 20.9399L6.06916 21.2399C6.30916 21.2799 6.74916 21.1399 6.91916 20.9699L11.6392 16.2599C11.8392 16.0599 12.1292 15.9999 12.3892 16.0799C14.7992 16.8399 17.4292 16.1899 19.2292 14.3899C20.5092 13.1099 21.2192 11.3899 21.2192 9.56992C21.2192 7.73992 20.5092 6.02992 19.2292 4.74992C17.9292 3.42992 16.1792 2.75992 14.4292 2.75992Z"
        fill="currentColor"
      />
      <Path
        d="M9.19008 20.5399C9.00008 20.5399 8.81008 20.4699 8.66008 20.3199L6.36008 18.0199C6.07008 17.7299 6.07008 17.2499 6.36008 16.9599C6.65008 16.6699 7.13008 16.6699 7.42008 16.9599L9.72008 19.2599C10.0101 19.5499 10.0101 20.0299 9.72008 20.3199C9.57008 20.4699 9.38008 20.5399 9.19008 20.5399Z"
        fill="currentColor"
      />
      <Path
        d="M14.5 11.75C13.26 11.75 12.25 10.74 12.25 9.5C12.25 8.26 13.26 7.25 14.5 7.25C15.74 7.25 16.75 8.26 16.75 9.5C16.75 10.74 15.74 11.75 14.5 11.75ZM14.5 8.75C14.09 8.75 13.75 9.09 13.75 9.5C13.75 9.91 14.09 10.25 14.5 10.25C14.91 10.25 15.25 9.91 15.25 9.5C15.25 9.09 14.91 8.75 14.5 8.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const KeyTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.7906 14.9298C17.7306 16.9798 14.7806 17.6098 12.1906 16.7998L7.48063 21.4998C7.14063 21.8498 6.47063 22.0598 5.99063 21.9898L3.81063 21.6898C3.09063 21.5898 2.42063 20.9098 2.31063 20.1898L2.01063 18.0098C1.94063 17.5298 2.17063 16.8598 2.50063 16.5198L7.20063 11.8198C6.40063 9.21982 7.02063 6.26982 9.08063 4.21982C12.0306 1.26982 16.8206 1.26982 19.7806 4.21982C22.7406 7.16982 22.7406 11.9798 19.7906 14.9298Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.89062 17.4902L9.19062 19.7902"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M14.5 11C15.3284 11 16 10.3284 16 9.5C16 8.67157 15.3284 8 14.5 8C13.6716 8 13 8.67157 13 9.5C13 10.3284 13.6716 11 14.5 11Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: KeyBold,
  broken: KeyBroken,
  bulk: KeyBulk,
  linear: KeyLinear,
  outline: KeyOutline,
  twotone: KeyTwotone,
};

export const KeyIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
