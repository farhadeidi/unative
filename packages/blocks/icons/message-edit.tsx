import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const MessageEditBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2ZM11.11 16.66C10.86 16.91 10.4 17.14 10.06 17.19L7.98 17.48C7.9 17.49 7.82 17.5 7.75 17.5C7.4 17.5 7.08 17.38 6.85 17.15C6.57 16.87 6.45 16.46 6.52 16.02L6.81 13.94C6.86 13.6 7.09 13.13 7.34 12.89L11.11 9.12C11.17 9.3 11.25 9.48 11.34 9.68C11.43 9.86 11.52 10.04 11.62 10.21C11.7 10.35 11.79 10.49 11.87 10.59C11.97 10.74 12.07 10.87 12.14 10.94C12.18 11 12.22 11.04 12.23 11.06C12.45 11.31 12.68 11.55 12.9 11.73C12.96 11.79 13 11.82 13.01 11.83C13.14 11.93 13.26 12.04 13.38 12.11C13.51 12.21 13.65 12.3 13.79 12.38C13.96 12.48 14.14 12.58 14.33 12.67C14.52 12.76 14.7 12.83 14.88 12.89L11.11 16.66ZM16.55 11.23L15.77 12.01C15.72 12.06 15.65 12.09 15.58 12.09C15.56 12.09 15.52 12.09 15.5 12.08C13.78 11.59 12.41 10.22 11.92 8.5C11.89 8.41 11.92 8.31 11.99 8.24L12.78 7.45C14.07 6.16 15.29 6.19 16.55 7.45C17.19 8.09 17.51 8.71 17.5 9.35C17.5 9.98 17.19 10.59 16.55 11.23Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageEditBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22 8C22 4 20 2 16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.5108 11.7401L16.1608 11.0901C16.2008 11.0501 16.2408 11.0101 16.2808 10.9601C17.0908 10.1001 17.4108 9.09011 16.1608 7.84011C14.8408 6.52011 13.8008 6.95011 12.9108 7.84011L7.72077 13.0301C7.52077 13.2301 7.33077 13.6201 7.29077 13.9001L7.01078 15.8801C6.91078 16.6001 7.41077 17.1001 8.13077 17.0001L10.1108 16.7201C10.3908 16.6801 10.7808 16.4901 10.9808 16.2901L12.9208 14.3501"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.1699 8.58008C12.6099 10.1501 13.8399 11.3901 15.4199 11.8301"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageEditBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
        fill="currentColor"
      />
      <Path
        d="M16.5514 7.46019C15.2914 6.20019 14.0714 6.17019 12.7814 7.46019L11.9914 8.25019C11.9214 8.32019 11.9014 8.42019 11.9214 8.51019C12.4114 10.2302 13.7814 11.6002 15.5014 12.0902C15.5214 12.1002 15.5514 12.1002 15.5814 12.1002C15.6514 12.1002 15.7214 12.0702 15.7714 12.0202L16.5514 11.2402C17.1914 10.6002 17.5014 9.99019 17.5014 9.37019C17.5014 8.72019 17.1914 8.10019 16.5514 7.46019Z"
        fill="currentColor"
      />
      <Path
        d="M14.3404 12.6701C14.1504 12.5801 13.9704 12.4901 13.8004 12.3801C13.6604 12.3001 13.5204 12.2101 13.3904 12.1101C13.2804 12.0401 13.1504 11.9401 13.0204 11.8301C13.0004 11.8201 12.9604 11.7901 12.9104 11.7301C12.7004 11.5501 12.4604 11.3101 12.2404 11.0601C12.2204 11.0501 12.1904 11.0001 12.1504 10.9401C12.0804 10.8601 11.9804 10.7301 11.8804 10.5901C11.8004 10.4901 11.7104 10.3501 11.6304 10.2101C11.5304 10.0401 11.4304 9.86012 11.3504 9.68012C11.2604 9.48012 11.1904 9.30012 11.1204 9.12012L7.35044 12.8901C7.10044 13.1401 6.87044 13.6001 6.82044 13.9401L6.53043 16.0201C6.46043 16.4601 6.59042 16.8701 6.86042 17.1501C7.09042 17.3801 7.41044 17.5001 7.76044 17.5001C7.84044 17.5001 7.91042 17.4901 7.99042 17.4801L10.0704 17.1901C10.4104 17.1401 10.8704 16.9101 11.1204 16.6601L14.8904 12.8901C14.7104 12.8201 14.5304 12.7501 14.3404 12.6701Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageEditLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.91 7.83991L7.72004 13.0299C7.52004 13.2299 7.33004 13.6199 7.29004 13.8999L7.01004 15.8799C6.91004 16.5999 7.41004 17.0999 8.13004 16.9999L10.11 16.7199C10.39 16.6799 10.78 16.4899 10.98 16.2899L16.17 11.0999C17.06 10.2099 17.49 9.16991 16.17 7.84991C14.85 6.51991 13.81 6.93991 12.91 7.83991Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.17 8.57983C12.61 10.1498 13.84 11.3898 15.42 11.8298"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MessageEditOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 22.75H3C2.04 22.75 1.25 21.96 1.25 21V8C1.25 3.58 3.58 1.25 8 1.25H16C20.42 1.25 22.75 3.58 22.75 8V16C22.75 20.42 20.42 22.75 16 22.75ZM8 2.75C4.42 2.75 2.75 4.42 2.75 8V21C2.75 21.14 2.86 21.25 3 21.25H16C19.58 21.25 21.25 19.58 21.25 16V8C21.25 4.42 19.58 2.75 16 2.75H8Z"
        fill="currentColor"
      />
      <Path
        d="M7.94975 17.7498C7.47975 17.7498 7.04975 17.5798 6.72975 17.2698C6.34975 16.8898 6.17972 16.3498 6.26972 15.7698L6.54972 13.7898C6.60972 13.3598 6.87974 12.8098 7.18974 12.4998L12.3797 7.30981C14.1597 5.52981 15.7097 6.32981 16.6897 7.30981C17.4597 8.07981 17.8097 8.88981 17.7297 9.69981C17.6697 10.3598 17.3197 10.9798 16.6897 11.6198L11.4997 16.8098C11.1897 17.1198 10.6497 17.3898 10.2097 17.4598L8.22975 17.7398C8.13975 17.7398 8.03975 17.7498 7.94975 17.7498ZM14.5297 7.74981C14.1597 7.74981 13.8297 7.98981 13.4497 8.35981L8.25974 13.5498C8.17974 13.6298 8.05974 13.8798 8.03974 13.9898L7.75974 15.9698C7.74974 16.0698 7.75972 16.1598 7.79972 16.1998C7.83972 16.2398 7.92973 16.2498 8.02973 16.2398L10.0097 15.9598C10.1297 15.9398 10.3697 15.8198 10.4497 15.7398L15.6397 10.5498C16.0197 10.1698 16.2197 9.83981 16.2497 9.53981C16.2797 9.19981 16.0797 8.79981 15.6397 8.35981C15.1997 7.93981 14.8497 7.74981 14.5297 7.74981Z"
        fill="currentColor"
      />
      <Path
        d="M15.4193 12.5797C15.3493 12.5797 15.2793 12.5697 15.2193 12.5497C13.4093 12.0397 11.9593 10.5997 11.4493 8.77972C11.3393 8.37972 11.5693 7.96972 11.9693 7.84972C12.3693 7.73972 12.7793 7.96972 12.8893 8.36972C13.2593 9.67972 14.3093 10.7297 15.6193 11.0997C16.0193 11.2097 16.2493 11.6297 16.1393 12.0297C16.0493 12.3597 15.7493 12.5797 15.4193 12.5797Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MessageEditTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16 2H8C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M12.9088 7.84015L7.71881 13.0302C7.51881 13.2302 7.32882 13.6202 7.28882 13.9002L7.00882 15.8802C6.90882 16.6002 7.40882 17.1002 8.12882 17.0002L10.1088 16.7202C10.3888 16.6802 10.7788 16.4902 10.9788 16.2902L16.1688 11.1002C17.0588 10.2102 17.4888 9.17015 16.1688 7.85015C14.8488 6.52015 13.8088 6.94015 12.9088 7.84015Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.168 8.58008C12.608 10.1501 13.838 11.3901 15.418 11.8301"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  );
};

const variants: IconVariants = {
  bold: MessageEditBold,
  broken: MessageEditBroken,
  bulk: MessageEditBulk,
  linear: MessageEditLinear,
  outline: MessageEditOutline,
  twotone: MessageEditTwotone,
};

export const MessageEditIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
