import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const FlashSlashBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.7709 2.22891C21.4709 1.92891 20.9809 1.92891 20.6809 2.22891L2.23086 20.6889C1.93086 20.9889 1.93086 21.4789 2.23086 21.7789C2.38086 21.9189 2.57086 21.9989 2.77086 21.9989C2.97086 21.9989 3.16086 21.9189 3.31086 21.7689L21.7709 3.30891C22.0809 3.00891 22.0809 2.52891 21.7709 2.22891Z"
        fill="currentColor"
      />
      <Path
        d="M14.8205 3.52087V9.18087L9.1805 14.8209V13.2809H6.0905C4.6905 13.2809 4.3005 12.4209 5.2305 11.3709L12.0005 3.67087L12.8005 2.76087C13.9105 1.50087 14.8205 1.84087 14.8205 3.52087Z"
        fill="currentColor"
      />
      <Path
        d="M18.7697 12.6287L11.9997 20.3287L11.1997 21.2387C10.0897 22.4987 9.17969 22.1587 9.17969 20.4787V17.8187L16.2797 10.7188H17.9097C19.3097 10.7188 19.6997 11.5787 18.7697 12.6287Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FlashSlashBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.17969 18.04V20.48C9.17969 22.16 10.0897 22.5 11.1997 21.24L18.7697 12.64C19.6997 11.59 19.3097 10.72 17.8997 10.72H16.9697"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.98024 5.95996L5.22024 11.37C4.29024 12.42 4.68024 13.29 6.09024 13.29H9.18024V14.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8208 8.8399V3.5199C14.8208 1.8399 13.9108 1.4999 12.8008 2.7599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
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

const FlashSlashBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.7709 2.22988C21.4709 1.92988 20.9809 1.92988 20.6809 2.22988L2.23086 20.6899C1.93086 20.9899 1.93086 21.4799 2.23086 21.7799C2.38086 21.9199 2.57086 21.9999 2.77086 21.9999C2.97086 21.9999 3.16086 21.9199 3.31086 21.7699L21.7709 3.30988C22.0809 3.00988 22.0809 2.52988 21.7709 2.22988Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M14.8205 3.5199V9.1799L9.1805 14.8199V13.2799H6.0905C4.6905 13.2799 4.3005 12.4199 5.2305 11.3699L12.0005 3.6699L12.8005 2.7599C13.9105 1.4999 14.8205 1.8399 14.8205 3.5199Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M18.7697 12.63L11.9997 20.33L11.1997 21.24C10.0897 22.5 9.17969 22.16 9.17969 20.48V17.82L16.2797 10.72H17.9097C19.3097 10.72 19.6997 11.58 18.7697 12.63Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FlashSlashLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.18005 18.04V20.48C9.18005 22.16 10.0901 22.5 11.2001 21.24L18.7701 12.64C19.7001 11.59 19.3101 10.72 17.9001 10.72H16.9701"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.82 8.84002V3.52002C14.82 1.84002 13.91 1.50002 12.8 2.76002L5.23 11.36C4.3 12.41 4.69 13.28 6.1 13.28H9.19V14.46"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
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

const FlashSlashOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.98969 22.75C9.78969 22.75 9.62969 22.71 9.50969 22.66C9.10969 22.51 8.42969 22.02 8.42969 20.47V18.03C8.42969 17.62 8.76969 17.28 9.17969 17.28C9.58969 17.28 9.92969 17.62 9.92969 18.03V20.47C9.92969 20.97 10.0197 21.19 10.0597 21.25C10.0897 21.21 10.2997 21.11 10.6297 20.73L18.1997 12.13C18.4797 11.81 18.5197 11.61 18.5197 11.57C18.4997 11.56 18.3197 11.46 17.8997 11.46H16.9697C16.5597 11.46 16.2197 11.12 16.2197 10.71C16.2197 10.3 16.5597 9.95996 16.9697 9.95996H17.8997C19.2397 9.95996 19.7197 10.59 19.8897 10.96C20.0597 11.34 20.2097 12.11 19.3297 13.12L11.7597 21.72C11.0497 22.54 10.4297 22.75 9.98969 22.75Z"
        fill="currentColor"
      />
      <Path
        d="M9.18057 15.2199C8.77057 15.2199 8.43057 14.8799 8.43057 14.4699V14.0399H6.09057C4.75057 14.0399 4.27057 13.4099 4.10057 13.0399C3.93057 12.6599 3.78057 11.8899 4.66057 10.8799L12.2306 2.2799C13.2506 1.1199 14.0806 1.1999 14.4806 1.3499C14.8806 1.4999 15.5606 1.9899 15.5606 3.5399V8.8499C15.5606 9.2599 15.2206 9.5999 14.8106 9.5999C14.4006 9.5999 14.0606 9.2599 14.0606 8.8499V3.5199C14.0606 3.0199 13.9706 2.7999 13.9306 2.7399C13.9006 2.7799 13.6906 2.8799 13.3606 3.2599L5.79057 11.8599C5.51057 12.1799 5.47057 12.3799 5.47057 12.4199C5.49057 12.4299 5.67057 12.5299 6.09057 12.5299H9.18057C9.59057 12.5299 9.93057 12.8699 9.93057 13.2799V14.4599C9.93057 14.8799 9.59057 15.2199 9.18057 15.2199Z"
        fill="currentColor"
      />
      <Path
        d="M1.99945 22.7499C1.80945 22.7499 1.61945 22.6799 1.46945 22.5299C1.17945 22.2399 1.17945 21.7599 1.46945 21.4699L21.4695 1.46994C21.7595 1.17994 22.2395 1.17994 22.5295 1.46994C22.8195 1.75994 22.8195 2.23994 22.5295 2.52994L2.52945 22.5299C2.37945 22.6799 2.18945 22.7499 1.99945 22.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const FlashSlashTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        opacity="0.34"
        d="M9.17969 18.0402V20.4802C9.17969 22.1602 10.0897 22.5002 11.1997 21.2402L18.7697 12.6402C19.6997 11.5902 19.3097 10.7202 17.8997 10.7202H16.9697"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.82 8.8399V3.5199C14.82 1.8399 13.91 1.4999 12.8 2.7599L5.23 11.3599C4.3 12.4099 4.69 13.2799 6.1 13.2799H9.19V14.4599"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
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
  bold: FlashSlashBold,
  broken: FlashSlashBroken,
  bulk: FlashSlashBulk,
  linear: FlashSlashLinear,
  outline: FlashSlashOutline,
  twotone: FlashSlashTwotone,
};

export const FlashSlashIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
