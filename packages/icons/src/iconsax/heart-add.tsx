import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const HeartAddBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.6804 13.9084V13.8984C19.8004 12.9684 18.5704 12.3984 17.2004 12.3984C14.5504 12.3984 12.4004 14.5484 12.4004 17.1984C12.4004 18.4284 12.8704 19.5484 13.6304 20.3984C14.5104 21.3784 15.7804 21.9984 17.2004 21.9984C19.8504 21.9984 22.0004 19.8484 22.0004 17.1984C22.0004 15.9284 21.5004 14.7684 20.6804 13.9084ZM18.9904 18.0084H17.9504V19.0984C17.9504 19.5084 17.6104 19.8484 17.2004 19.8484C16.7904 19.8484 16.4504 19.5084 16.4504 19.0984V18.0084H15.4104C14.9904 18.0084 14.6604 17.6784 14.6604 17.2584C14.6604 16.8484 14.9804 16.5184 15.4004 16.5084H16.4504V15.5084C16.4504 15.4884 16.4504 15.4684 16.4604 15.4484C16.4804 15.0684 16.8104 14.7584 17.2004 14.7584C17.6004 14.7584 17.9304 15.0784 17.9504 15.4784V16.5084H18.9904C19.4104 16.5084 19.7404 16.8484 19.7404 17.2584C19.7404 17.6784 19.4104 18.0084 18.9904 18.0084Z"
        fill="currentColor"
      />
      <Path
        d="M22 8.73062C22 9.92062 21.81 11.0206 21.48 12.0406C21.42 12.2506 21.17 12.3106 20.99 12.1806C19.9 11.3706 18.57 10.9406 17.2 10.9406C13.73 10.9406 10.9 13.7706 10.9 17.2406C10.9 18.3206 11.18 19.3806 11.71 20.3206C11.87 20.6006 11.68 20.9606 11.38 20.8506C8.97 20.0306 4.1 17.0406 2.52 12.0406C2.19 11.0206 2 9.92062 2 8.73062C2 5.64062 4.49 3.14063 7.56 3.14063C9.37 3.14063 10.99 4.02062 12 5.37062C13.01 4.02062 14.63 3.14063 16.44 3.14063C19.51 3.14062 22 5.64062 22 8.73062Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartAddBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M7.56 3.09998C9.37 3.09998 10.99 3.98002 12 5.33002C13.01 3.98002 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.6 22 8.69C22 10.66 21.49 12.4 20.69 13.91C19.81 12.98 18.57 12.4 17.2 12.4C14.55 12.4 12.4 14.55 12.4 17.2C12.4 18.43 12.87 19.55 13.63 20.4C13.26 20.57 12.92 20.71 12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 7.14 2.62 5.73998 3.63 4.72998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.2004 22C19.8513 22 22.0004 19.851 22.0004 17.2C22.0004 14.549 19.8513 12.4 17.2004 12.4C14.5494 12.4 12.4004 14.549 12.4004 17.2C12.4004 19.851 14.5494 22 17.2004 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.9902 17.26H15.4102"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.1992 15.51V19.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeartAddBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.6804 13.9099V13.8999C19.8004 12.9699 18.5704 12.3999 17.2004 12.3999C14.5504 12.3999 12.4004 14.5499 12.4004 17.1999C12.4004 18.4299 12.8704 19.5499 13.6304 20.3999C14.5104 21.3799 15.7804 21.9999 17.2004 21.9999C19.8504 21.9999 22.0004 19.8499 22.0004 17.1999C22.0004 15.9299 21.5004 14.7699 20.6804 13.9099ZM18.9904 18.0099H17.9504V19.0999C17.9504 19.5099 17.6104 19.8499 17.2004 19.8499C16.7904 19.8499 16.4504 19.5099 16.4504 19.0999V18.0099H15.4103C14.9903 18.0099 14.6603 17.6799 14.6603 17.2599C14.6603 16.8499 14.9804 16.5199 15.4004 16.5099H16.4504V15.5099C16.4504 15.4899 16.4504 15.4699 16.4604 15.4499C16.4804 15.0699 16.8104 14.7599 17.2004 14.7599C17.6004 14.7599 17.9304 15.0799 17.9504 15.4799V16.5099H18.9904C19.4104 16.5099 19.7404 16.8499 19.7404 17.2599C19.7404 17.6799 19.4104 18.0099 18.9904 18.0099Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22 8.69009C22 9.88009 21.81 10.9801 21.48 12.0001C21.27 12.6701 21 13.3101 20.68 13.9001C19.8 12.9701 18.57 12.4001 17.2 12.4001C14.55 12.4001 12.4 14.5501 12.4 17.2001C12.4 18.4301 12.87 19.5501 13.63 20.4001C13.26 20.5701 12.92 20.7101 12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.97001 19.9901 4.10002 17.0001 2.52002 12.0001C2.19002 10.9801 2 9.88009 2 8.69009C2 5.60009 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.98008 12 5.33008C13.01 3.98008 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.60009 22 8.69009Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartAddLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.2 22C19.851 22 22 19.851 22 17.2C22 14.549 19.851 12.4 17.2 12.4C14.549 12.4 12.4 14.549 12.4 17.2C12.4 19.851 14.549 22 17.2 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.99 17.26H15.41"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.2 15.51V19.1"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 8.69C22 10.66 21.49 12.4 20.69 13.91C19.81 12.98 18.57 12.4 17.2 12.4C14.55 12.4 12.4 14.55 12.4 17.2C12.4 18.43 12.87 19.55 13.63 20.4C13.26 20.57 12.92 20.71 12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 5.6 4.49 3.09998 7.56 3.09998C9.37 3.09998 10.99 3.98002 12 5.33002C13.01 3.98002 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.6 22 8.69Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeartAddOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.2004 22.7499C14.1404 22.7499 11.6504 20.2599 11.6504 17.1999C11.6504 14.1399 14.1404 11.6499 17.2004 11.6499C20.2604 11.6499 22.7504 14.1399 22.7504 17.1999C22.7504 20.2599 20.2604 22.7499 17.2004 22.7499ZM17.2004 13.1499C14.9704 13.1499 13.1504 14.9699 13.1504 17.1999C13.1504 19.4299 14.9704 21.2499 17.2004 21.2499C19.4304 21.2499 21.2504 19.4299 21.2504 17.1999C21.2504 14.9699 19.4304 13.1499 17.2004 13.1499Z"
        fill="currentColor"
      />
      <Path
        d="M18.9904 18.01H15.4004C14.9904 18.01 14.6504 17.67 14.6504 17.26C14.6504 16.85 14.9904 16.51 15.4004 16.51H18.9904C19.4004 16.51 19.7404 16.85 19.7404 17.26C19.7404 17.67 19.4104 18.01 18.9904 18.01Z"
        fill="currentColor"
      />
      <Path
        d="M17.1992 19.85C16.7892 19.85 16.4492 19.51 16.4492 19.1V15.51C16.4492 15.1 16.7892 14.76 17.1992 14.76C17.6092 14.76 17.9492 15.1 17.9492 15.51V19.1C17.9492 19.51 17.6092 19.85 17.1992 19.85Z"
        fill="currentColor"
      />
      <Path
        d="M12 21.6501C11.69 21.6501 11.38 21.6101 11.13 21.5201C8.57 20.6501 1.25 16.4101 1.25 8.69012C1.25 5.19012 4.08 2.3501 7.56 2.3501C9.23 2.3501 10.83 3.02012 12 4.19012C13.17 3.02012 14.78 2.3501 16.44 2.3501C19.92 2.3501 22.75 5.19012 22.75 8.69012C22.75 10.6401 22.28 12.5101 21.35 14.2601C21.24 14.4701 21.03 14.6201 20.79 14.6501C20.54 14.6801 20.31 14.6001 20.14 14.4201C19.36 13.6001 18.31 13.1401 17.19 13.1401C14.96 13.1401 13.14 14.9601 13.14 17.1901C13.14 18.1801 13.51 19.1401 14.18 19.8901C14.34 20.0701 14.4 20.3101 14.35 20.5401C14.3 20.7701 14.14 20.9701 13.93 21.0701C13.53 21.2501 13.17 21.4001 12.84 21.5101C12.61 21.6101 12.31 21.6501 12 21.6501ZM7.56 3.8501C4.91 3.8501 2.75 6.02012 2.75 8.69012C2.75 15.5301 9.31999 19.3101 11.62 20.1001C11.8 20.1701 12.19 20.1601 12.37 20.1001C12.4 20.0901 12.43 20.0801 12.46 20.0701C11.94 19.2101 11.65 18.2201 11.65 17.2001C11.65 14.1401 14.14 11.6501 17.2 11.6501C18.38 11.6501 19.5 12.0201 20.44 12.6901C20.98 11.4101 21.25 10.0701 21.25 8.69012C21.25 6.02012 19.09 3.8501 16.44 3.8501C14.94 3.8501 13.5 4.57015 12.6 5.78015C12.32 6.16015 11.68 6.16015 11.4 5.78015C10.5 4.57015 9.06 3.8501 7.56 3.8501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartAddTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.2004 21.9999C19.8513 21.9999 22.0004 19.8509 22.0004 17.1999C22.0004 14.5489 19.8513 12.3999 17.2004 12.3999C14.5494 12.3999 12.4004 14.5489 12.4004 17.1999C12.4004 19.8509 14.5494 21.9999 17.2004 21.9999Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.9902 17.2598H15.4102"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M17.1992 15.5098V19.0997"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22 8.69012C22 10.6601 21.49 12.4001 20.69 13.9101C19.81 12.9801 18.57 12.4001 17.2 12.4001C14.55 12.4001 12.4 14.5501 12.4 17.2001C12.4 18.4301 12.87 19.5501 13.63 20.4001C13.26 20.5701 12.92 20.7101 12.62 20.8101C12.28 20.9301 11.72 20.9301 11.38 20.8101C8.48 19.8201 2 15.6901 2 8.69012C2 5.60012 4.49 3.1001 7.56 3.1001C9.37 3.1001 10.99 3.98014 12 5.33014C13.01 3.98014 14.63 3.1001 16.44 3.1001C19.51 3.1001 22 5.60012 22 8.69012Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: HeartAddBold,
  broken: HeartAddBroken,
  bulk: HeartAddBulk,
  linear: HeartAddLinear,
  outline: HeartAddOutline,
  twotone: HeartAddTwotone,
};

export const HeartAddIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default HeartAddIcon;
