import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { G, Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const BrifecaseTimerBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.1288 15.8789C10.8788 15.8789 10.6288 15.7489 10.4888 15.5189C10.2788 15.1689 10.3888 14.6989 10.7488 14.4889L11.6388 13.9589V12.8789C11.6388 12.4689 11.9788 12.1289 12.3888 12.1289C12.7988 12.1289 13.1388 12.4689 13.1388 12.8789V14.3789C13.1388 14.6389 12.9988 14.8889 12.7788 15.0189L11.5288 15.7689C11.3888 15.8389 11.2588 15.8789 11.1288 15.8789Z"
        fill="currentColor"
      />
      <Path
        d="M21.091 6.97953C20.241 6.03953 18.831 5.56953 16.761 5.56953H16.521V5.52953C16.521 3.84953 16.521 1.76953 12.761 1.76953H11.241C7.48101 1.76953 7.48101 3.84953 7.48101 5.52953V5.56953H7.24101C5.17101 5.56953 3.75101 6.03953 2.91101 6.97953C1.92101 8.08953 1.95101 9.55953 2.05101 10.5695L2.06101 10.6395L2.1301 11.4455C2.14329 11.5994 2.22683 11.7387 2.35655 11.8227C2.64024 12.0063 2.94207 12.199 3.23101 12.3595C3.37101 12.4495 3.52101 12.5295 3.67101 12.6095C4.80101 13.2295 6.01101 13.7195 7.25101 14.0595C7.28101 16.6495 9.40101 18.7495 12.001 18.7495C14.621 18.7495 16.751 16.6195 16.751 13.9995V13.9595C18.011 13.5795 19.221 13.0495 20.351 12.3895C20.411 12.3595 20.451 12.3295 20.501 12.2995C20.8959 12.0849 21.3055 11.804 21.6792 11.539C21.7951 11.4568 21.87 11.3288 21.8857 11.1876L21.901 11.0495L21.951 10.5795C21.961 10.5195 21.961 10.4695 21.971 10.3995C22.051 9.39953 22.031 8.01953 21.091 6.97953ZM8.91101 5.52953C8.91101 3.82953 8.91101 3.18953 11.241 3.18953H12.761C15.091 3.18953 15.091 3.82953 15.091 5.52953V5.56953H8.91101V5.52953ZM12.001 17.2495C10.351 17.2495 8.98101 16.0095 8.78101 14.4095C8.76101 14.2795 8.75101 14.1395 8.75101 13.9995C8.75101 12.2095 10.211 10.7495 12.001 10.7495C13.791 10.7495 15.251 12.2095 15.251 13.9995C15.251 14.1195 15.241 14.2295 15.231 14.3395V14.3495C15.051 15.9795 13.671 17.2495 12.001 17.2495Z"
        fill="currentColor"
      />
      <Path
        d="M21.0416 13.7311C21.2903 13.5929 21.6129 13.7931 21.587 14.0765L21.2316 17.9611C21.0216 19.9611 20.2016 22.0011 15.8016 22.0011H8.18156C3.78156 22.0011 2.96156 19.9611 2.76156 17.9711L2.41569 14.2678C2.38884 13.9802 2.69635 13.786 2.95156 13.9211C3.73156 14.3511 4.54156 14.7311 5.37156 15.0311C5.68156 15.1411 5.90156 15.4011 5.99156 15.7211C6.74156 18.3211 9.16156 20.2511 12.0016 20.2511C14.8916 20.2511 17.3316 18.2811 18.0416 15.5811C18.1216 15.2611 18.3416 15.0011 18.6516 14.8811C19.4916 14.5511 20.2916 14.1611 21.0416 13.7311Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BrifecaseTimerBroken = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M12 18.2C14.2091 18.2 16 16.4091 16 14.2C16 11.9908 14.2091 10.2 12 10.2C9.79086 10.2 8 11.9908 8 14.2C8 16.4091 9.79086 18.2 12 18.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.25 12.95V13.88C12.25 14.23 12.07 14.56 11.76 14.74L11 15.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.9508 18.43C20.7408 20.39 20.0208 22 16.0008 22H8.0008C3.9808 22 3.2608 20.39 3.0508 18.43L2.3008 10.43C2.0308 7.99 2.7308 6 7.0008 6H17.0008C21.2708 6 21.9708 7.99 21.7008 10.43L21.3708 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.6498 11C19.9198 12.26 17.9998 13.14 16.0098 13.64"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.61914 11.27C4.28914 12.41 6.10914 13.22 7.99914 13.68"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BrifecaseTimerBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M11.1307 15.8799C10.8807 15.8799 10.6307 15.7499 10.4907 15.5199C10.2807 15.1699 10.3907 14.6999 10.7507 14.4899L11.6407 13.9599V12.8799C11.6407 12.4699 11.9807 12.1299 12.3907 12.1299C12.8007 12.1299 13.1407 12.4699 13.1407 12.8799V14.3799C13.1407 14.6399 13.0007 14.8899 12.7807 15.0199L11.5307 15.7699C11.3907 15.8399 11.2607 15.8799 11.1307 15.8799Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M21.8504 11.4099L21.2304 18.1899C21.0204 20.1899 20.2004 22.2299 15.8004 22.2299H8.18039C3.78039 22.2299 2.96039 20.1899 2.76039 18.1999L2.15039 11.6899C2.16039 11.6999 2.17039 11.7099 2.19039 11.7199C2.53039 11.9399 2.86039 12.1599 3.22039 12.3599C3.36039 12.4499 3.51039 12.5299 3.66039 12.6099C4.79039 13.2299 6.00039 13.7199 7.25039 14.0599C7.75039 14.2099 8.26039 14.3199 8.78039 14.4099C8.98039 16.0099 10.3504 17.2499 12.0004 17.2499C13.6704 17.2499 15.0504 15.9799 15.2304 14.3499V14.3399C15.7404 14.2399 16.2504 14.1099 16.7504 13.9599C18.0004 13.5699 19.2104 13.0499 20.3404 12.3899C20.4004 12.3599 20.4504 12.3299 20.4904 12.2999C20.9504 12.0499 21.3904 11.7599 21.8104 11.4599C21.8304 11.4499 21.8404 11.4299 21.8504 11.4099Z"
        fill="currentColor"
      />
      <Path
        d="M21.0891 6.98002C20.2391 6.04002 18.8291 5.57002 16.7591 5.57002H16.5191V5.53002C16.5191 3.85002 16.5191 1.77002 12.7591 1.77002H11.2391C7.47906 1.77002 7.47906 3.85002 7.47906 5.53002V5.57002H7.23906C5.16906 5.57002 3.74906 6.04002 2.90906 6.98002C1.91906 8.09002 1.94906 9.56002 2.04906 10.57L2.05906 10.64L2.14906 11.69C2.15906 11.7 2.17906 11.71 2.19906 11.72C2.53906 11.94 2.86906 12.16 3.22906 12.36C3.36906 12.45 3.51906 12.53 3.66906 12.61C4.79906 13.23 6.00906 13.72 7.24906 14.06C7.27906 16.65 9.39906 18.75 11.9991 18.75C14.6191 18.75 16.7491 16.62 16.7491 14V13.96C18.0091 13.58 19.2191 13.05 20.3491 12.39C20.4091 12.36 20.4491 12.33 20.4991 12.3C20.9591 12.05 21.3991 11.76 21.8191 11.46C21.8291 11.45 21.8491 11.43 21.8591 11.41L21.8991 11.05L21.9491 10.58C21.9591 10.52 21.9591 10.47 21.9691 10.4C22.0491 9.40002 22.0291 8.02002 21.0891 6.98002ZM8.90906 5.53002C8.90906 3.83002 8.90906 3.19002 11.2391 3.19002H12.7591C15.0891 3.19002 15.0891 3.83002 15.0891 5.53002V5.57002H8.90906V5.53002ZM11.9991 17.25C10.3491 17.25 8.97906 16.01 8.77906 14.41C8.75906 14.28 8.74906 14.14 8.74906 14C8.74906 12.21 10.2091 10.75 11.9991 10.75C13.7891 10.75 15.2491 12.21 15.2491 14C15.2491 14.12 15.2391 14.23 15.2291 14.34V14.35C15.0491 15.98 13.6691 17.25 11.9991 17.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BrifecaseTimerLinear = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M12 18.2C14.2091 18.2 16 16.4091 16 14.2C16 11.9908 14.2091 10.2 12 10.2C9.79086 10.2 8 11.9908 8 14.2C8 16.4091 9.79086 18.2 12 18.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.25 12.95V13.88C12.25 14.23 12.07 14.56 11.76 14.74L11 15.2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.99995 22H15.9999C20.0199 22 20.7399 20.39 20.9499 18.43L21.6999 10.43C21.9699 7.99 21.2699 6 16.9999 6H6.99995C2.72995 6 2.02995 7.99 2.29995 10.43L3.04995 18.43C3.25995 20.39 3.97995 22 7.99995 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.65 11C19.92 12.26 18 13.14 16.01 13.64"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.62 11.27C4.29 12.41 6.11 13.22 8 13.68"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BrifecaseTimerOutline = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M12 18.95C9.38 18.95 7.25 16.82 7.25 14.2C7.25 11.58 9.38 9.44995 12 9.44995C14.62 9.44995 16.75 11.58 16.75 14.2C16.75 16.82 14.62 18.95 12 18.95ZM12 10.95C10.21 10.95 8.75 12.41 8.75 14.2C8.75 15.99 10.21 17.45 12 17.45C13.79 17.45 15.25 15.99 15.25 14.2C15.25 12.41 13.79 10.95 12 10.95Z"
        fill="currentColor"
      />
      <Path
        d="M10.9999 15.95C10.7499 15.95 10.4999 15.82 10.3599 15.59C10.1499 15.23 10.2599 14.77 10.6199 14.56L11.3799 14.1C11.4599 14.06 11.4999 13.97 11.4999 13.89V12.96C11.4999 12.55 11.8399 12.21 12.2499 12.21C12.6599 12.21 12.9999 12.54 12.9999 12.95V13.88C12.9999 14.49 12.6699 15.07 12.1499 15.38L11.3899 15.84C11.2699 15.92 11.1299 15.95 10.9999 15.95Z"
        fill="currentColor"
      />
      <Path
        d="M16.0002 22.75H8.00023C3.38023 22.75 2.52023 20.6 2.30023 18.51L1.55023 10.5C1.44023 9.45001 1.41023 7.90001 2.45023 6.74001C3.35023 5.74001 4.84023 5.26001 7.00023 5.26001H17.0002C19.1702 5.26001 20.6602 5.75001 21.5502 6.74001C22.5902 7.90001 22.5602 9.45001 22.4502 10.51L21.7002 18.5C21.4802 20.6 20.6202 22.75 16.0002 22.75ZM7.00023 6.75001C5.31023 6.75001 4.15023 7.08001 3.56023 7.74001C3.07023 8.28001 2.91023 9.11001 3.04023 10.35L3.79023 18.36C3.96023 19.94 4.39023 21.25 8.00023 21.25H16.0002C19.6002 21.25 20.0402 19.94 20.2102 18.35L20.9602 10.36C21.0902 9.11001 20.9302 8.28001 20.4402 7.74001C19.8502 7.08001 18.6902 6.75001 17.0002 6.75001H7.00023Z"
        fill="currentColor"
      />
      <Path
        d="M16 6.75C15.59 6.75 15.25 6.41 15.25 6V5.2C15.25 3.42 15.25 2.75 12.8 2.75H11.2C8.75 2.75 8.75 3.42 8.75 5.2V6C8.75 6.41 8.41 6.75 8 6.75C7.59 6.75 7.25 6.41 7.25 6V5.2C7.25 3.44 7.25 1.25 11.2 1.25H12.8C16.75 1.25 16.75 3.44 16.75 5.2V6C16.75 6.41 16.41 6.75 16 6.75Z"
        fill="currentColor"
      />
      <Path
        d="M16.0105 14.3901C15.6705 14.3901 15.3705 14.1601 15.2805 13.8201C15.1805 13.4201 15.4205 13.0101 15.8205 12.9101C17.7705 12.4201 19.5805 11.5701 21.2005 10.3901C21.5305 10.1501 22.0005 10.2201 22.2505 10.5601C22.4905 10.8901 22.4205 11.3601 22.0805 11.6101C20.3005 12.9001 18.3205 13.8301 16.1805 14.3701C16.1305 14.3801 16.0705 14.3901 16.0105 14.3901Z"
        fill="currentColor"
      />
      <Path
        d="M8.00072 14.4199C7.94072 14.4199 7.88072 14.4099 7.82072 14.3999C5.81072 13.9099 3.92072 13.0599 2.19072 11.8799C1.85072 11.6499 1.76072 11.1799 1.99072 10.8399C2.22072 10.4999 2.69072 10.4099 3.03072 10.6399C4.61072 11.7199 6.33072 12.4899 8.17072 12.9399C8.57072 13.0399 8.82072 13.4399 8.72072 13.8499C8.65072 14.1899 8.34072 14.4199 8.00072 14.4199Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BrifecaseTimerTwotone = ({
  size = 24,
  className,
  ...props
}: IconProps) => {
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
        d="M12.25 12.9502V13.8802C12.25 14.2302 12.07 14.5602 11.76 14.7402L11 15.2002"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.0008 22H16.0008C20.0208 22 20.7408 20.39 20.9508 18.43L21.7008 10.43C21.9708 7.99 21.2708 6 17.0008 6H7.0008C2.7308 6 2.0308 7.99 2.3008 10.43L3.0508 18.43C3.2608 20.39 3.9808 22 8.0008 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <G opacity="0.4">
        <Path
          d="M12 18.2002C14.2091 18.2002 16 16.4093 16 14.2002C16 11.9911 14.2091 10.2002 12 10.2002C9.79086 10.2002 8 11.9911 8 14.2002C8 16.4093 9.79086 18.2002 12 18.2002Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21.6498 11C19.9198 12.26 17.9998 13.14 16.0098 13.64"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M2.61914 11.2695C4.28914 12.4095 6.10914 13.2195 7.99914 13.6795"
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
  bold: BrifecaseTimerBold,
  broken: BrifecaseTimerBroken,
  bulk: BrifecaseTimerBulk,
  linear: BrifecaseTimerLinear,
  outline: BrifecaseTimerOutline,
  twotone: BrifecaseTimerTwotone,
};

export const BrifecaseTimerIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default BrifecaseTimerIcon;
