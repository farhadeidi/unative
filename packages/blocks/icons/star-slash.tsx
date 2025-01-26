import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const StarSlashBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.6992 14.4586C18.3492 14.8086 18.1492 15.5086 18.2592 15.9886L18.9492 19.0086C19.2392 20.2586 19.0592 21.1986 18.4392 21.6486C18.1892 21.8286 17.8892 21.9186 17.5392 21.9186C17.0292 21.9186 16.4292 21.7286 15.7692 21.3386L12.8392 19.5986C12.3792 19.3286 11.6192 19.3286 11.1592 19.5986L8.22922 21.3386C7.11922 21.9886 6.16922 22.0986 5.55922 21.6486C5.51922 21.6186 5.47922 21.5886 5.44922 21.5486L18.0692 8.92857C18.5292 8.46857 19.1792 8.25857 19.8192 8.36857L19.9692 8.39857C21.0292 8.57857 21.7392 9.05857 21.9692 9.75857C22.1892 10.4586 21.8892 11.2686 21.1292 12.0286L18.6992 14.4586Z"
        fill="currentColor"
      />
      <Path
        d="M5.73937 16C5.84937 15.52 5.64937 14.81 5.29937 14.46L2.86937 12.03C2.10937 11.27 1.80937 10.46 2.02937 9.76C2.25937 9.06 2.96937 8.58 4.02937 8.4L7.14937 7.88C7.59937 7.8 8.14937 7.4 8.35937 6.99L10.0794 3.54C10.5794 2.55 11.2594 2 11.9994 2C12.7394 2 13.4194 2.55 13.9194 3.54L15.6394 6.99C15.7694 7.25 16.0394 7.5 16.3294 7.67L5.06937 18.93L5.73937 16Z"
        fill="currentColor"
      />
      <Path
        d="M21.7709 2.22891C21.4709 1.92891 20.9809 1.92891 20.6809 2.22891L2.23086 20.6889C1.93086 20.9889 1.93086 21.4789 2.23086 21.7789C2.38086 21.9189 2.57086 21.9989 2.77086 21.9989C2.97086 21.9989 3.16086 21.9189 3.31086 21.7689L21.7709 3.30891C22.0809 3.00891 22.0809 2.52891 21.7709 2.22891Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StarSlashBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.0502 7.67001C15.8102 7.49001 15.6102 7.26001 15.5002 7.03001L13.7402 3.51001C12.7902 1.60001 11.2302 1.60001 10.2702 3.51001L8.50016 7.03001C8.38016 7.28001 8.16016 7.51001 7.91016 7.70001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.28089 18.65L5.85089 16.18C5.98089 15.6 5.75089 14.79 5.33089 14.37L2.85089 11.89C1.39089 10.43 1.86089 8.94999 3.90089 8.60999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.0995 8.60999C22.1395 8.94999 22.6195 10.43 21.1495 11.89L18.6695 14.37C18.2495 14.79 18.0195 15.6 18.1495 16.18L18.8595 19.25C19.4195 21.68 18.1295 22.62 15.9795 21.35L12.9895 19.58C12.4495 19.26 11.5595 19.26 11.0095 19.58L8.01953 21.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StarSlashBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.6992 14.46C18.3492 14.81 18.1492 15.52 18.2592 16L18.9492 19.01C19.2392 20.26 19.0592 21.2 18.4392 21.65C18.1892 21.83 17.8892 21.92 17.5392 21.92C17.0292 21.92 16.4292 21.73 15.7692 21.34L12.8392 19.6C12.3892 19.33 11.6092 19.33 11.1592 19.6L8.22922 21.34C7.11922 21.99 6.16922 22.1 5.55922 21.65C5.51922 21.62 5.47922 21.59 5.44922 21.55L18.7992 8.19995L19.9692 8.39995C21.0292 8.57995 21.7392 9.05995 21.9692 9.75995C22.1892 10.46 21.8892 11.27 21.1292 12.03L18.6992 14.46Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M5.73937 16C5.84937 15.52 5.64937 14.81 5.29937 14.46L2.86937 12.03C2.10937 11.27 1.80937 10.46 2.02937 9.76C2.25937 9.06 2.96937 8.58 4.02937 8.4L7.14937 7.88C7.59937 7.8 8.14937 7.4 8.35937 6.99L10.0794 3.54C10.5794 2.55 11.2594 2 11.9994 2C12.7394 2 13.4194 2.55 13.9194 3.54L15.6394 6.99C15.7694 7.25 16.0394 7.5 16.3294 7.67L5.06937 18.93L5.73937 16Z"
        fill="currentColor"
      />
      <Path
        d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StarSlashLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.27997 18.65L5.84997 16.18C5.97997 15.6 5.74997 14.79 5.32997 14.37L2.84997 11.89C1.38997 10.43 1.85997 8.95001 3.89997 8.61001L7.08997 8.08001C7.61997 7.99001 8.25997 7.52002 8.49997 7.03001L10.26 3.51001C11.21 1.60001 12.77 1.60001 13.73 3.51001L15.49 7.03001C15.6 7.26001 15.81 7.48001 16.04 7.67001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.1 8.60999C22.14 8.94999 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.02002 21.35"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const StarSlashOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.28012 19.4001C5.22012 19.4001 5.17012 19.3901 5.11012 19.3801C4.71012 19.2901 4.45012 18.8801 4.55012 18.4801L5.12012 16.0201C5.20012 15.7001 5.04012 15.1501 4.80012 14.9101L2.32012 12.4301C1.08012 11.1901 1.18012 10.1301 1.35012 9.61008C1.52012 9.09008 2.06012 8.17008 3.78012 7.88008L6.97012 7.35008C7.27012 7.29008 7.70012 6.97008 7.83012 6.70008L9.60012 3.17008C10.4001 1.56008 11.4501 1.33008 12.0001 1.33008C12.5501 1.33008 13.6001 1.57008 14.4001 3.17008L16.1601 6.69008C16.2201 6.81008 16.3501 6.95008 16.5001 7.07008C16.8301 7.32008 16.8901 7.80008 16.6301 8.12008C16.3801 8.45008 15.9101 8.51008 15.5801 8.25008C15.3401 8.07008 15.0201 7.76008 14.8201 7.36008L13.0601 3.84008C12.7501 3.21008 12.3501 2.83008 12.0001 2.83008C11.6501 2.83008 11.2501 3.21008 10.9401 3.85008L9.17012 7.37008C8.82012 8.07008 7.98012 8.69008 7.21012 8.82008L4.03012 9.35008C3.35012 9.46008 2.89012 9.73008 2.78012 10.0601C2.67012 10.3901 2.90012 10.8801 3.39012 11.3601L5.87012 13.8401C6.47012 14.4401 6.78012 15.5201 6.59012 16.3501L6.02012 18.8101C5.93012 19.1601 5.63012 19.4001 5.28012 19.4001Z"
        fill="currentColor"
      />
      <Path
        d="M17.6593 22.6699C17.1293 22.6699 16.4493 22.4999 15.5993 21.9999L12.6093 20.2299C12.2993 20.0499 11.6993 20.0499 11.3993 20.2299L8.39933 21.9999C8.04933 22.2099 7.57933 22.0899 7.36933 21.7399C7.15933 21.3799 7.27933 20.9199 7.62933 20.7099L10.6193 18.9399C11.3993 18.4799 12.5793 18.4799 13.3593 18.9399L16.3493 20.7099C17.2193 21.2299 17.7693 21.2299 17.9793 21.0799C18.1893 20.9299 18.3393 20.3999 18.1193 19.4199L17.4093 16.3499C17.2193 15.5199 17.5293 14.4499 18.1293 13.8399L20.6093 11.3599C21.0993 10.8699 21.3193 10.3899 21.2193 10.0599C21.1093 9.7299 20.6493 9.4599 19.9693 9.3499C19.5593 9.2799 19.2893 8.8999 19.3493 8.4899C19.4193 8.0799 19.7993 7.8099 20.2093 7.8699C21.9393 8.1599 22.4793 9.0799 22.6393 9.5999C22.7993 10.1199 22.8993 11.1799 21.6693 12.4199L19.1993 14.8999C18.9593 15.1399 18.8093 15.6799 18.8793 16.0099L19.5893 19.0799C20.0493 21.0799 19.3393 21.9499 18.8793 22.2899C18.6293 22.4699 18.2293 22.6699 17.6593 22.6699Z"
        fill="currentColor"
      />
      <Path
        d="M1.99945 22.7499C1.80945 22.7499 1.61945 22.6799 1.46945 22.5299C1.17945 22.2399 1.17945 21.7599 1.46945 21.4699L21.4695 1.46994C21.7595 1.17994 22.2395 1.17994 22.5295 1.46994C22.8195 1.75994 22.8195 2.23994 22.5295 2.52994L2.52945 22.5299C2.37945 22.6799 2.18945 22.7499 1.99945 22.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const StarSlashTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.28089 18.6501L5.85089 16.1801C5.98089 15.6001 5.75089 14.7901 5.33089 14.3701L2.85089 11.8901C1.39089 10.4301 1.86089 8.95014 3.90089 8.61014L7.09089 8.08014C7.62089 7.99014 8.26089 7.52014 8.50089 7.03014L10.2609 3.51014C11.2109 1.60014 12.7709 1.60014 13.7309 3.51014L15.4909 7.03014C15.6009 7.26014 15.8109 7.48014 16.0409 7.67014"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M20.0995 8.60986C22.1395 8.94986 22.6195 10.4299 21.1495 11.8899L18.6695 14.3699C18.2495 14.7899 18.0195 15.5999 18.1495 16.1799L18.8595 19.2499C19.4195 21.6799 18.1295 22.6199 15.9795 21.3499L12.9895 19.5799C12.4495 19.2599 11.5595 19.2599 11.0095 19.5799L8.01953 21.3499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22 2L2 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: StarSlashBold,
  broken: StarSlashBroken,
  bulk: StarSlashBulk,
  linear: StarSlashLinear,
  outline: StarSlashOutline,
  twotone: StarSlashTwotone,
};

export const StarSlashIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
