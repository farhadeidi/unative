import { useContext } from "react";
import { G, Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const BagCrossBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.9597 8.95844C19.2897 8.21844 18.2797 7.78844 16.8797 7.63844V6.87844C16.8797 5.50844 16.2997 4.18844 15.2797 3.26844C14.2497 2.32844 12.9097 1.88844 11.5197 2.01844C9.12975 2.24844 7.11975 4.55844 7.11975 7.05844V7.63844C5.71975 7.78844 4.70975 8.21844 4.03975 8.95844C3.06975 10.0384 3.09975 11.4784 3.20975 12.4784L3.90975 18.0484C4.11975 19.9984 4.90975 21.9984 9.20975 21.9984H14.7897C19.0897 21.9984 19.8797 19.9984 20.0897 18.0584L20.7897 12.4684C20.8997 11.4784 20.9297 10.0384 19.9597 8.95844ZM11.6597 3.40844C12.6597 3.31844 13.6097 3.62844 14.3497 4.29844C15.0797 4.95844 15.4897 5.89844 15.4897 6.87844V7.57844H8.50975V7.05844C8.50975 5.27844 9.97975 3.56844 11.6597 3.40844ZM11.9997 18.5784C9.90975 18.5784 8.20975 16.8784 8.20975 14.7884C8.20975 12.6984 9.90975 10.9984 11.9997 10.9984C14.0897 10.9984 15.7897 12.6984 15.7897 14.7884C15.7897 16.8784 14.0897 18.5784 11.9997 18.5784Z"
        fill="currentColor"
      />
      <Path
        d="M13.5991 15.3102L13.0691 14.7802L13.5691 14.2802C13.8591 13.9902 13.8591 13.5102 13.5691 13.2202C13.2791 12.9302 12.7991 12.9302 12.5091 13.2202L12.0091 13.7202L11.4791 13.1902C11.1891 12.9002 10.7091 12.9002 10.4191 13.1902C10.1291 13.4802 10.1291 13.9602 10.4191 14.2502L10.9491 14.7802L10.3991 15.3302C10.1091 15.6202 10.1091 16.1002 10.3991 16.3902C10.5491 16.5402 10.7391 16.6102 10.9291 16.6102C11.1191 16.6102 11.3091 16.5402 11.4591 16.3902L12.0091 15.8402L12.5391 16.3702C12.6891 16.5202 12.8791 16.5902 13.0691 16.5902C13.2591 16.5902 13.4491 16.5202 13.5991 16.3702C13.8891 16.0802 13.8891 15.6102 13.5991 15.3102Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BagCrossBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.3906 17.3601L10.6406 14.6101"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.3594 14.6399L10.6094 17.3899"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.80945 2L5.18945 5.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.1895 2L18.8095 5.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M4.91016 18.64C5.23016 20.58 6.00016 22 8.86016 22H14.8902C18.0002 22 18.4602 20.64 18.8202 18.76L20.5002 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <Path
        d="M3.5 10L4.19 14.25"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const BagCrossBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.24 5.58006H18.84L15.46 2.20006C15.19 1.93006 14.75 1.93006 14.47 2.20006C14.2 2.47006 14.2 2.91006 14.47 3.19006L16.86 5.58006H7.14L9.53 3.19006C9.8 2.92006 9.8 2.48006 9.53 2.20006C9.26 1.93006 8.82 1.93006 8.54 2.20006L5.17 5.58006H4.77C3.87 5.58006 2 5.58006 2 8.14006C2 9.11006 2.2 9.75006 2.62 10.1701C2.86 10.4201 3.15 10.5501 3.46 10.6201C3.75 10.6901 4.06 10.7001 4.36 10.7001H19.64C19.95 10.7001 20.24 10.6801 20.52 10.6201C21.36 10.4201 22 9.82006 22 8.14006C22 5.58006 20.13 5.58006 19.24 5.58006Z"
        fill="currentColor"
      />
      <Path
        d="M19.6609 10.7001H4.36094C4.07094 10.7001 3.75094 10.6901 3.46094 10.6101L4.72094 18.3001C5.01094 20.0201 5.76094 22.0001 9.09094 22.0001H14.7009C18.0709 22.0001 18.6709 20.3101 19.0309 18.4201L20.5409 10.6101C20.2609 10.6801 19.9609 10.7001 19.6609 10.7001ZM13.9209 17.8901C13.7709 18.0401 13.5809 18.1101 13.3909 18.1101C13.2009 18.1101 13.0109 18.0401 12.8609 17.8901L12.0109 17.0401L11.1309 17.9201C10.9809 18.0701 10.7909 18.1401 10.6009 18.1401C10.4109 18.1401 10.2209 18.0701 10.0709 17.9201C9.78094 17.6301 9.78094 17.1501 10.0709 16.8601L10.9509 15.9801L10.1009 15.1301C9.81094 14.8401 9.81094 14.3601 10.1009 14.0701C10.3909 13.7801 10.8709 13.7801 11.1609 14.0701L12.0109 14.9201L12.8309 14.1001C13.1209 13.8101 13.6009 13.8101 13.8909 14.1001C14.1809 14.3901 14.1809 14.8701 13.8909 15.1601L13.0709 15.9801L13.9209 16.8301C14.2209 17.1301 14.2209 17.6001 13.9209 17.8901Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BagCrossLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.39 17.36L10.64 14.61"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.36 14.64L10.61 17.39"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.81 2L5.19 5.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.19 2L18.81 5.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 7.84998C2 5.99998 2.99 5.84998 4.22 5.84998H19.78C21.01 5.84998 22 5.99998 22 7.84998C22 9.99998 21.01 9.84998 19.78 9.84998H4.22C2.99 9.84998 2 9.99998 2 7.84998Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const BagCrossOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 19.75C9.38 19.75 7.25 17.62 7.25 15C7.25 12.38 9.38 10.25 12 10.25C14.62 10.25 16.75 12.38 16.75 15C16.75 17.62 14.62 19.75 12 19.75ZM12 11.75C10.21 11.75 8.75 13.21 8.75 15C8.75 16.79 10.21 18.25 12 18.25C13.79 18.25 15.25 16.79 15.25 15C15.25 13.21 13.79 11.75 12 11.75Z"
        fill="currentColor"
      />
      <Path
        d="M13.0704 16.8599C12.8804 16.8599 12.6904 16.7899 12.5404 16.6399L10.4304 14.5299C10.1404 14.2399 10.1404 13.7599 10.4304 13.4699C10.7204 13.1799 11.2004 13.1799 11.4904 13.4699L13.6004 15.5799C13.8904 15.8699 13.8904 16.3499 13.6004 16.6399C13.4504 16.7899 13.2604 16.8599 13.0704 16.8599Z"
        fill="currentColor"
      />
      <Path
        d="M10.9291 16.89C10.7391 16.89 10.5491 16.82 10.3991 16.67C10.1091 16.38 10.1091 15.9 10.3991 15.61L12.5091 13.5C12.7991 13.21 13.2791 13.21 13.5691 13.5C13.8591 13.79 13.8591 14.27 13.5691 14.56L11.4591 16.67C11.3091 16.81 11.1191 16.89 10.9291 16.89Z"
        fill="currentColor"
      />
      <Path
        d="M14.9998 22.75H8.99982C4.37982 22.75 3.51982 20.6 3.29982 18.51L2.54982 12.52C2.43982 11.44 2.39982 9.89 3.44982 8.73C4.34982 7.73 5.83982 7.25 7.99982 7.25H15.9998C18.1698 7.25 19.6598 7.74 20.5498 8.73C21.5898 9.89 21.5598 11.44 21.4498 12.5L20.6998 18.51C20.4798 20.6 19.6198 22.75 14.9998 22.75ZM7.99982 8.75C6.30982 8.75 5.14982 9.08 4.55982 9.74C4.06982 10.28 3.90982 11.11 4.03982 12.35L4.78982 18.34C4.95982 19.94 5.39982 21.26 8.99982 21.26H14.9998C18.5998 21.26 19.0398 19.95 19.2098 18.36L19.9598 12.35C20.0898 11.13 19.9298 10.3 19.4398 9.75C18.8498 9.08 17.6898 8.75 15.9998 8.75H7.99982Z"
        fill="currentColor"
      />
      <Path
        d="M16.5 8.63005C16.09 8.63005 15.75 8.29005 15.75 7.88005V6.50005C15.75 5.45006 15.3 4.43005 14.52 3.72005C13.73 3.00005 12.7 2.67005 11.63 2.77005C9.83 2.94005 8.25 4.78005 8.25 6.70005V7.67005C8.25 8.08005 7.91 8.42005 7.5 8.42005C7.09 8.42005 6.75 8.08005 6.75 7.67005V6.69005C6.75 4.00005 8.92 1.52005 11.49 1.27005C12.99 1.13005 14.43 1.60005 15.53 2.61005C16.62 3.60005 17.25 5.02005 17.25 6.50005V7.88005C17.25 8.29005 16.91 8.63005 16.5 8.63005Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BagCrossTwotone = ({ size = 24, className, ...props }: IconProps) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={cn("text-foreground", className)}
      {...props}
    >
      <G opacity="0.4">
        <Path
          d="M13.3906 17.3604L10.6406 14.6104"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M13.3594 14.6396L10.6094 17.3896"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Path
        opacity="0.4"
        d="M8.80945 2L5.18945 5.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.1895 2L18.8095 5.63"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 7.8501C2 6.0001 2.99 5.8501 4.22 5.8501H19.78C21.01 5.8501 22 6.0001 22 7.8501C22 10.0001 21.01 9.8501 19.78 9.8501H4.22C2.99 9.8501 2 10.0001 2 7.8501Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <Path
        d="M3.5 10L4.91 18.64C5.23 20.58 6 22 8.86 22H14.89C18 22 18.46 20.64 18.82 18.76L20.5 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BagCrossBold,
  broken: BagCrossBroken,
  bulk: BagCrossBulk,
  linear: BagCrossLinear,
  outline: BagCrossOutline,
  twotone: BagCrossTwotone,
};

export const BagCrossIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
