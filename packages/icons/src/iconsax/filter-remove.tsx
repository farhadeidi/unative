import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const FilterRemoveBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.8809 10C14.2609 10 12.1309 12.13 12.1309 14.75C12.1309 15.64 12.3809 16.48 12.8209 17.2C13.6409 18.58 15.1509 19.5 16.8809 19.5C18.6109 19.5 20.1209 18.57 20.9409 17.2C21.3809 16.49 21.6309 15.64 21.6309 14.75C21.6309 12.13 19.5109 10 16.8809 10ZM18.6809 16.52C18.5309 16.67 18.3409 16.74 18.1509 16.74C17.9609 16.74 17.7709 16.67 17.6209 16.52L16.9009 15.8L16.1509 16.55C16.0009 16.7 15.8109 16.77 15.6209 16.77C15.4309 16.77 15.2409 16.7 15.0909 16.55C14.8009 16.26 14.8009 15.78 15.0909 15.49L15.8409 14.74L15.1209 14.01C14.8309 13.72 14.8309 13.24 15.1209 12.95C15.4109 12.66 15.8909 12.66 16.1809 12.95L16.9009 13.67L17.6009 12.97C17.8909 12.68 18.3709 12.68 18.6609 12.97C18.9509 13.26 18.9509 13.74 18.6609 14.03L17.9609 14.73L18.6809 15.46C18.9809 15.75 18.9809 16.23 18.6809 16.52Z"
        fill="currentColor"
      />
      <Path
        d="M20.5799 4.02V6.24C20.5799 7.05 20.0799 8.06 19.5799 8.57L19.3999 8.73C19.2599 8.86 19.0499 8.89 18.8699 8.83C18.6699 8.76 18.4699 8.71 18.2699 8.66C17.8299 8.55 17.3599 8.5 16.8799 8.5C13.4299 8.5 10.6299 11.3 10.6299 14.75C10.6299 15.89 10.9399 17.01 11.5299 17.97C12.0299 18.81 12.7299 19.51 13.4899 19.98C13.7199 20.13 13.8099 20.45 13.6099 20.63C13.5399 20.69 13.4699 20.74 13.3999 20.79L11.9999 21.7C10.6999 22.51 8.90992 21.6 8.90992 19.98V14.63C8.90992 13.92 8.50992 13.01 8.10992 12.51L4.31992 8.47C3.81992 7.96 3.41992 7.05 3.41992 6.45V4.12C3.41992 2.91 4.31992 2 5.40992 2H18.5899C19.6799 2 20.5799 2.91 20.5799 4.02Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterRemoveBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.6309 14.75C21.6309 15.64 21.3809 16.48 20.9409 17.2C20.1209 18.58 18.6109 19.5 16.8809 19.5C15.1509 19.5 13.6409 18.57 12.8209 17.2C12.3809 16.49 12.1309 15.64 12.1309 14.75C12.1309 12.13 14.2609 10 16.8809 10C19.5009 10 21.6309 12.13 21.6309 14.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.1487 15.99L15.6387 13.48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.1291 13.51L15.6191 16.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.33055 2H18.6705C19.7805 2 20.6905 2.91002 20.6905 4.02002V6.23999C20.6905 7.04999 20.1805 8.06001 19.6805 8.57001L17.9205 10.12C17.5905 10.04 17.2405 10 16.8805 10C14.2605 10 12.1305 12.13 12.1305 14.75C12.1305 15.64 12.3805 16.48 12.8205 17.2C13.1905 17.82 13.7005 18.35 14.3205 18.73V19.07C14.3205 19.68 13.9205 20.49 13.4105 20.79L12.0005 21.7C10.6905 22.51 8.87055 21.6 8.87055 19.98V14.63C8.87055 13.92 8.46055 13.01 8.06055 12.51L4.22055 8.46997C3.72055 7.95997 3.31055 7.05001 3.31055 6.45001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FilterRemoveBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M5.40992 2H18.5799C19.6799 2 20.5799 2.90999 20.5799 4.01999V6.23999C20.5799 7.04999 20.0799 8.06 19.5799 8.56L15.2899 12.4C14.6899 12.91 14.2899 13.92 14.2899 14.72V19.06C14.2899 19.67 13.8899 20.47 13.3899 20.78L11.9999 21.7C10.6999 22.51 8.90992 21.6 8.90992 19.98V14.63C8.90992 13.92 8.50992 13.01 8.10992 12.51L4.31992 8.47C3.81992 7.96 3.41992 7.06001 3.41992 6.45001V4.13C3.41992 2.91 4.31992 2 5.40992 2Z"
        fill="currentColor"
      />
      <Path
        d="M16.8809 10C14.2609 10 12.1309 12.13 12.1309 14.75C12.1309 15.64 12.3809 16.48 12.8209 17.2C13.6409 18.58 15.1509 19.5 16.8809 19.5C18.6109 19.5 20.1209 18.57 20.9409 17.2C21.3809 16.49 21.6309 15.64 21.6309 14.75C21.6309 12.13 19.5109 10 16.8809 10ZM18.6809 16.52C18.5309 16.67 18.3409 16.74 18.1509 16.74C17.9609 16.74 17.7709 16.67 17.6209 16.52L16.9009 15.8L16.1509 16.55C16.0009 16.7 15.8109 16.77 15.6209 16.77C15.4309 16.77 15.2409 16.7 15.0909 16.55C14.8009 16.26 14.8009 15.78 15.0909 15.49L15.8409 14.74L15.1209 14.01C14.8309 13.72 14.8309 13.24 15.1209 12.95C15.4109 12.66 15.8909 12.66 16.1809 12.95L16.9009 13.67L17.6009 12.97C17.8909 12.68 18.3709 12.68 18.6609 12.97C18.9509 13.26 18.9509 13.74 18.6609 14.03L17.9609 14.73L18.6809 15.46C18.9809 15.75 18.9809 16.23 18.6809 16.52Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterRemoveLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.41 20.79L12 21.7C10.69 22.51 8.87 21.6 8.87 19.98V14.63C8.87 13.92 8.47 13.01 8.06 12.51L4.22 8.46997C3.71 7.95997 3.31 7.06001 3.31 6.45001V4.13C3.31 2.92 4.22 2.01001 5.33 2.01001H18.67C19.78 2.01001 20.69 2.92003 20.69 4.03003V6.25C20.69 7.06 20.18 8.07001 19.68 8.57001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.63 14.75C21.63 15.64 21.38 16.48 20.94 17.2C20.12 18.58 18.61 19.5 16.88 19.5C15.15 19.5 13.64 18.57 12.82 17.2C12.38 16.49 12.13 15.64 12.13 14.75C12.13 12.13 14.26 10 16.88 10C19.5 10 21.63 12.13 21.63 14.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.15 15.99L15.64 13.48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.13 13.51L15.62 16.02"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.69 4.02002V6.23999C20.69 7.04999 20.18 8.06001 19.68 8.57001L17.92 10.12C17.59 10.04 17.24 10 16.88 10C14.26 10 12.13 12.13 12.13 14.75C12.13 15.64 12.38 16.48 12.82 17.2C13.19 17.82 13.7 18.35 14.32 18.73V19.07C14.32 19.68 13.92 20.49 13.41 20.79L12 21.7C10.69 22.51 8.87 21.6 8.87 19.98V14.63C8.87 13.92 8.46 13.01 8.06 12.51L4.22 8.46997C3.72 7.95997 3.31 7.05001 3.31 6.45001V4.12C3.31 2.91 4.22 2 5.33 2H18.67C19.78 2 20.69 2.91002 20.69 4.02002Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const FilterRemoveOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.9308 22.75C10.4508 22.75 9.97078 22.63 9.53078 22.38C8.64078 21.88 8.11078 20.99 8.11078 19.98V14.63C8.11078 14.12 7.78078 13.37 7.47078 12.98L3.67078 8.98999C3.04078 8.35999 2.55078 7.26001 2.55078 6.45001V4.13C2.55078 2.52 3.77078 1.26001 5.32078 1.26001H18.6508C20.1808 1.26001 21.4208 2.50003 21.4208 4.03003V6.25C21.4208 7.3 20.7908 8.50998 20.1908 9.09998C19.9008 9.38998 19.4208 9.38998 19.1308 9.09998C18.8408 8.80998 18.8408 8.32998 19.1308 8.03998C19.5008 7.66998 19.9208 6.84 19.9208 6.25V4.03003C19.9208 3.33003 19.3508 2.76001 18.6508 2.76001H5.33078C4.62078 2.76001 4.06078 3.36 4.06078 4.13V6.45001C4.06078 6.82001 4.36078 7.55 4.75078 7.94L8.60078 11.99C9.11078 12.62 9.61078 13.68 9.61078 14.63V19.98C9.61078 20.64 10.0608 20.96 10.2608 21.07C10.6908 21.31 11.2008 21.3 11.6008 21.06L13.0008 20.16C13.3508 19.94 13.8108 20.04 14.0408 20.39C14.2608 20.74 14.1608 21.2 13.8108 21.43L12.4008 22.34C11.9508 22.61 11.4408 22.75 10.9308 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.8789 20.25C14.9589 20.25 13.1489 19.23 12.1689 17.58C11.6489 16.74 11.3789 15.76 11.3789 14.75C11.3789 11.72 13.8489 9.25 16.8789 9.25C19.9089 9.25 22.3789 11.72 22.3789 14.75C22.3789 15.76 22.0989 16.74 21.5789 17.59C20.6089 19.23 18.8089 20.25 16.8789 20.25ZM16.8789 10.75C14.6689 10.75 12.8789 12.54 12.8789 14.75C12.8789 15.48 13.0789 16.19 13.4589 16.8C14.1789 18.01 15.4889 18.75 16.8789 18.75C18.2989 18.75 19.5789 18.03 20.2989 16.81C20.6789 16.19 20.8789 15.48 20.8789 14.75C20.8789 12.54 19.0889 10.75 16.8789 10.75Z"
        fill="currentColor"
      />
      <Path
        d="M18.1501 16.7399C17.9601 16.7399 17.7701 16.6699 17.6201 16.5199L15.1101 14.0099C14.8201 13.7199 14.8201 13.2399 15.1101 12.9499C15.4001 12.6599 15.8801 12.6599 16.1701 12.9499L18.6801 15.4599C18.9701 15.7499 18.9701 16.2299 18.6801 16.5199C18.5401 16.6699 18.3501 16.7399 18.1501 16.7399Z"
        fill="currentColor"
      />
      <Path
        d="M15.6205 16.77C15.4305 16.77 15.2405 16.7 15.0905 16.55C14.8005 16.26 14.8005 15.78 15.0905 15.49L17.6005 12.98C17.8905 12.69 18.3705 12.69 18.6605 12.98C18.9505 13.27 18.9505 13.7499 18.6605 14.0399L16.1505 16.55C16.0005 16.7 15.8105 16.77 15.6205 16.77Z"
        fill="currentColor"
      />
      <Path
        d="M10.9308 22.75C10.4508 22.75 9.97078 22.63 9.54078 22.39C8.65078 21.89 8.12078 20.99 8.12078 19.98V14.63C8.12078 14.13 7.79078 13.37 7.47078 12.98L3.67078 8.98999C3.04078 8.33999 2.55078 7.25001 2.55078 6.45001V4.12C2.55078 2.51 3.77078 1.25 5.32078 1.25H18.6608C20.1908 1.25 21.4308 2.49002 21.4308 4.02002V6.23999C21.4308 7.28999 20.8108 8.47003 20.2108 9.09003L18.4108 10.68C18.2308 10.84 17.9708 10.9 17.7408 10.85C17.4708 10.78 17.1808 10.75 16.8808 10.75C14.6708 10.75 12.8808 12.54 12.8808 14.75C12.8808 15.48 13.0808 16.19 13.4608 16.81C13.7808 17.34 14.2108 17.78 14.7108 18.09C14.9308 18.23 15.0708 18.47 15.0708 18.73V19.07C15.0708 19.86 14.5908 20.97 13.7908 21.44L12.4108 22.33C11.9608 22.61 11.4408 22.75 10.9308 22.75ZM5.33078 2.75C4.62078 2.75 4.06078 3.35 4.06078 4.12V6.45001C4.06078 6.81001 4.36078 7.55001 4.76078 7.95001L8.61078 12C9.12078 12.63 9.63078 13.7 9.63078 14.64V19.99C9.63078 20.65 10.0908 20.98 10.2808 21.09C10.7108 21.33 11.2208 21.32 11.6108 21.08L13.0108 20.18C13.2808 20.02 13.5508 19.51 13.5708 19.15C13.0208 18.74 12.5408 18.21 12.1808 17.61C11.6608 16.76 11.3808 15.78 11.3808 14.78C11.3808 11.75 13.8508 9.28003 16.8808 9.28003C17.1608 9.28003 17.4408 9.30003 17.7008 9.34003L19.1808 8.03003C19.5208 7.68003 19.9408 6.85001 19.9408 6.26001V4.03998C19.9408 3.33998 19.3708 2.77002 18.6708 2.77002H5.33078V2.75Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FilterRemoveTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.6309 14.75C21.6309 15.64 21.3809 16.48 20.9409 17.2C20.1209 18.58 18.6109 19.5 16.8809 19.5C15.1509 19.5 13.6409 18.57 12.8209 17.2C12.3809 16.49 12.1309 15.64 12.1309 14.75C12.1309 12.13 14.2609 10 16.8809 10C19.5009 10 21.6309 12.13 21.6309 14.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.1487 15.99L15.6387 13.48"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.1291 13.5098L15.6191 16.0198"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M20.6905 4.02002V6.23999C20.6905 7.04999 20.1805 8.06001 19.6805 8.57001L17.9205 10.12C17.5905 10.04 17.2405 10 16.8805 10C14.2605 10 12.1305 12.13 12.1305 14.75C12.1305 15.64 12.3805 16.48 12.8205 17.2C13.1905 17.82 13.7005 18.35 14.3205 18.73V19.07C14.3205 19.68 13.9205 20.49 13.4105 20.79L12.0005 21.7C10.6905 22.51 8.87055 21.6 8.87055 19.98V14.63C8.87055 13.92 8.46055 13.01 8.06055 12.51L4.22055 8.46997C3.72055 7.95997 3.31055 7.05001 3.31055 6.45001V4.12C3.31055 2.91 4.22055 2 5.33055 2H18.6705C19.7805 2 20.6905 2.91002 20.6905 4.02002Z"
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
  bold: FilterRemoveBold,
  broken: FilterRemoveBroken,
  bulk: FilterRemoveBulk,
  linear: FilterRemoveLinear,
  outline: FilterRemoveOutline,
  twotone: FilterRemoveTwotone,
};

export const FilterRemoveIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default FilterRemoveIcon;
