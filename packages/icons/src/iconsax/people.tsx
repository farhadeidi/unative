import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const PeopleBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.5291 7.77C17.4591 7.76 17.3891 7.76 17.3191 7.77C15.7691 7.72 14.5391 6.45 14.5391 4.89C14.5391 3.3 15.8291 2 17.4291 2C19.0191 2 20.3191 3.29 20.3191 4.89C20.3091 6.45 19.0791 7.72 17.5291 7.77Z"
        fill="currentColor"
      />
      <Path
        d="M20.7916 14.7004C19.6716 15.4504 18.1016 15.7304 16.6516 15.5404C17.0316 14.7204 17.2316 13.8104 17.2416 12.8504C17.2416 11.8504 17.0216 10.9004 16.6016 10.0704C18.0816 9.8704 19.6516 10.1504 20.7816 10.9004C22.3616 11.9404 22.3616 13.6504 20.7916 14.7004Z"
        fill="currentColor"
      />
      <Path
        d="M6.44016 7.77C6.51016 7.76 6.58016 7.76 6.65016 7.77C8.20016 7.72 9.43016 6.45 9.43016 4.89C9.43016 3.29 8.14016 2 6.54016 2C4.95016 2 3.66016 3.29 3.66016 4.89C3.66016 6.45 4.89016 7.72 6.44016 7.77Z"
        fill="currentColor"
      />
      <Path
        d="M6.55109 12.8506C6.55109 13.8206 6.76109 14.7406 7.14109 15.5706C5.73109 15.7206 4.26109 15.4206 3.18109 14.7106C1.60109 13.6606 1.60109 11.9506 3.18109 10.9006C4.25109 10.1806 5.76109 9.89059 7.18109 10.0506C6.77109 10.8906 6.55109 11.8406 6.55109 12.8506Z"
        fill="currentColor"
      />
      <Path
        d="M12.1208 15.87C12.0408 15.86 11.9508 15.86 11.8608 15.87C10.0208 15.81 8.55078 14.3 8.55078 12.44C8.56078 10.54 10.0908 9 12.0008 9C13.9008 9 15.4408 10.54 15.4408 12.44C15.4308 14.3 13.9708 15.81 12.1208 15.87Z"
        fill="currentColor"
      />
      <Path
        d="M8.87078 17.9406C7.36078 18.9506 7.36078 20.6106 8.87078 21.6106C10.5908 22.7606 13.4108 22.7606 15.1308 21.6106C16.6408 20.6006 16.6408 18.9406 15.1308 17.9406C13.4208 16.7906 10.6008 16.7906 8.87078 17.9406Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PeopleBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.0001 7.16C17.9401 7.15 17.8701 7.15 17.8101 7.16C16.4301 7.11 15.3301 5.98 15.3301 4.58C15.3301 3.15 16.4801 2 17.9101 2C19.3401 2 20.4901 3.16 20.4901 4.58C20.4801 5.98 19.3801 7.11 18.0001 7.16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9695 14.4399C18.3395 14.6699 19.8495 14.4299 20.9095 13.7199C22.3195 12.7799 22.3195 11.2399 20.9095 10.2999C19.8395 9.58992 18.3095 9.34991 16.9395 9.58991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.96852 7.16C6.02852 7.15 6.09852 7.15 6.15852 7.16C7.53852 7.11 8.63852 5.98 8.63852 4.58C8.63852 3.15 7.48852 2 6.05852 2C4.62852 2 3.47852 3.16 3.47852 4.58C3.48852 5.98 4.58852 7.11 5.96852 7.16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.99945 14.4399C5.62945 14.6699 4.11945 14.4299 3.05945 13.7199C1.64945 12.7799 1.64945 11.2399 3.05945 10.2999C4.12945 9.58992 5.65945 9.34991 7.02945 9.58991"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0001 14.63C11.9401 14.62 11.8701 14.62 11.8101 14.63C10.4301 14.58 9.33008 13.45 9.33008 12.05C9.33008 10.62 10.4801 9.46997 11.9101 9.46997C13.3401 9.46997 14.4901 10.63 14.4901 12.05C14.4801 13.45 13.3801 14.59 12.0001 14.63Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.9107 17.7799C13.3207 16.7199 10.6907 16.7199 9.0907 17.7799C7.6807 18.7199 7.6807 20.2599 9.0907 21.1999C10.6907 22.2699 13.3107 22.2699 14.9107 21.1999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PeopleBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.5291 7.77C17.4591 7.76 17.3891 7.76 17.3191 7.77C15.7691 7.72 14.5391 6.45 14.5391 4.89C14.5391 3.3 15.8291 2 17.4291 2C19.0191 2 20.3191 3.29 20.3191 4.89C20.3091 6.45 19.0791 7.72 17.5291 7.77Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M20.7896 14.6999C19.6696 15.4499 18.0996 15.7299 16.6496 15.5399C17.0296 14.7199 17.2296 13.8099 17.2396 12.8499C17.2396 11.8499 17.0196 10.8999 16.5996 10.0699C18.0796 9.86992 19.6496 10.1499 20.7796 10.8999C22.3596 11.9399 22.3596 13.6499 20.7896 14.6999Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M6.44039 7.77C6.51039 7.76 6.58039 7.76 6.65039 7.77C8.20039 7.72 9.43039 6.45 9.43039 4.89C9.43039 3.3 8.14039 2 6.54039 2C4.95039 2 3.65039 3.29 3.65039 4.89C3.66039 6.45 4.89039 7.72 6.44039 7.77Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M6.54914 12.8501C6.54914 13.8201 6.75914 14.7401 7.13914 15.5701C5.72914 15.7201 4.25914 15.4201 3.17914 14.7101C1.59914 13.6601 1.59914 11.9501 3.17914 10.9001C4.24914 10.1801 5.75914 9.8901 7.17914 10.0501C6.76914 10.8901 6.54914 11.8401 6.54914 12.8501Z"
        fill="currentColor"
      />
      <Path
        d="M12.1208 15.87C12.0408 15.86 11.9508 15.86 11.8608 15.87C10.0208 15.81 8.55078 14.3 8.55078 12.44C8.55078 10.54 10.0808 9 11.9908 9C13.8908 9 15.4308 10.54 15.4308 12.44C15.4308 14.3 13.9708 15.81 12.1208 15.87Z"
        fill="currentColor"
      />
      <Path
        d="M8.87078 17.9399C7.36078 18.9499 7.36078 20.6099 8.87078 21.6099C10.5908 22.7599 13.4108 22.7599 15.1308 21.6099C16.6408 20.5999 16.6408 18.9399 15.1308 17.9399C13.4208 16.7899 10.6008 16.7899 8.87078 17.9399Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PeopleLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const PeopleOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.0003 7.91002C17.9703 7.91002 17.9503 7.91002 17.9203 7.91002H17.8703C15.9803 7.85002 14.5703 6.39001 14.5703 4.59001C14.5703 2.75001 16.0703 1.26001 17.9003 1.26001C19.7303 1.26001 21.2303 2.76001 21.2303 4.59001C21.2203 6.40001 19.8103 7.86001 18.0103 7.92001C18.0103 7.91001 18.0103 7.91002 18.0003 7.91002ZM17.9003 2.75002C16.8903 2.75002 16.0703 3.57002 16.0703 4.58002C16.0703 5.57002 16.8403 6.37002 17.8303 6.41002C17.8403 6.40002 17.9203 6.40002 18.0103 6.41002C18.9803 6.36002 19.7303 5.56002 19.7403 4.58002C19.7403 3.57002 18.9203 2.75002 17.9003 2.75002Z"
        fill="currentColor"
      />
      <Path
        d="M18.0105 15.2801C17.6205 15.2801 17.2305 15.2501 16.8405 15.1801C16.4305 15.1101 16.1605 14.7201 16.2305 14.3101C16.3005 13.9001 16.6905 13.6301 17.1005 13.7001C18.3305 13.9101 19.6305 13.6802 20.5005 13.1002C20.9705 12.7902 21.2205 12.4001 21.2205 12.0101C21.2205 11.6201 20.9605 11.2401 20.5005 10.9301C19.6305 10.3501 18.3105 10.1201 17.0705 10.3401C16.6605 10.4201 16.2705 10.1401 16.2005 9.73015C16.1305 9.32015 16.4005 8.93015 16.8105 8.86015C18.4405 8.57015 20.1305 8.88014 21.3305 9.68014C22.2105 10.2701 22.7205 11.1101 22.7205 12.0101C22.7205 12.9001 22.2205 13.7502 21.3305 14.3502C20.4205 14.9502 19.2405 15.2801 18.0105 15.2801Z"
        fill="currentColor"
      />
      <Path
        d="M5.97047 7.91C5.96047 7.91 5.95047 7.91 5.95047 7.91C4.15047 7.85 2.74047 6.39 2.73047 4.59C2.73047 2.75 4.23047 1.25 6.06047 1.25C7.89047 1.25 9.39047 2.75 9.39047 4.58C9.39047 6.39 7.98047 7.85 6.18047 7.91L5.97047 7.16L6.04047 7.91C6.02047 7.91 5.99047 7.91 5.97047 7.91ZM6.07047 6.41C6.13047 6.41 6.18047 6.41 6.24047 6.42C7.13047 6.38 7.91047 5.58 7.91047 4.59C7.91047 3.58 7.09047 2.75999 6.08047 2.75999C5.07047 2.75999 4.25047 3.58 4.25047 4.59C4.25047 5.57 5.01047 6.36 5.98047 6.42C5.99047 6.41 6.03047 6.41 6.07047 6.41Z"
        fill="currentColor"
      />
      <Path
        d="M5.96 15.2801C4.73 15.2801 3.55 14.9502 2.64 14.3502C1.76 13.7602 1.25 12.9101 1.25 12.0101C1.25 11.1201 1.76 10.2701 2.64 9.68014C3.84 8.88014 5.53 8.57015 7.16 8.86015C7.57 8.93015 7.84 9.32015 7.77 9.73015C7.7 10.1401 7.31 10.4201 6.9 10.3401C5.66 10.1201 4.35 10.3501 3.47 10.9301C3 11.2401 2.75 11.6201 2.75 12.0101C2.75 12.4001 3.01 12.7902 3.47 13.1002C4.34 13.6802 5.64 13.9101 6.87 13.7001C7.28 13.6301 7.67 13.9101 7.74 14.3101C7.81 14.7201 7.54 15.1101 7.13 15.1801C6.74 15.2501 6.35 15.2801 5.96 15.2801Z"
        fill="currentColor"
      />
      <Path
        d="M12.0003 15.38C11.9703 15.38 11.9503 15.38 11.9203 15.38H11.8703C9.98031 15.32 8.57031 13.86 8.57031 12.06C8.57031 10.22 10.0703 8.72998 11.9003 8.72998C13.7303 8.72998 15.2303 10.23 15.2303 12.06C15.2203 13.87 13.8103 15.33 12.0103 15.39C12.0103 15.38 12.0103 15.38 12.0003 15.38ZM11.9003 10.22C10.8903 10.22 10.0703 11.04 10.0703 12.05C10.0703 13.04 10.8403 13.84 11.8303 13.88C11.8403 13.87 11.9203 13.87 12.0103 13.88C12.9803 13.83 13.7303 13.03 13.7403 12.05C13.7403 11.05 12.9203 10.22 11.9003 10.22Z"
        fill="currentColor"
      />
      <Path
        d="M11.9993 22.76C10.7993 22.76 9.5993 22.45 8.6693 21.82C7.7893 21.23 7.2793 20.39 7.2793 19.49C7.2793 18.6 7.7793 17.74 8.6693 17.15C10.5393 15.91 13.4693 15.91 15.3293 17.15C16.2093 17.74 16.7193 18.58 16.7193 19.48C16.7193 20.37 16.2193 21.23 15.3293 21.82C14.3993 22.44 13.1993 22.76 11.9993 22.76ZM9.4993 18.41C9.0293 18.72 8.7793 19.11 8.7793 19.5C8.7793 19.89 9.0393 20.27 9.4993 20.58C10.8493 21.49 13.1393 21.49 14.4893 20.58C14.9593 20.27 15.2093 19.88 15.2093 19.49C15.2093 19.1 14.9493 18.72 14.4893 18.41C13.1493 17.5 10.8593 17.51 9.4993 18.41Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const PeopleTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.9981 7.16C17.9381 7.15 17.8681 7.15 17.8081 7.16C16.4281 7.11 15.3281 5.98 15.3281 4.58C15.3281 3.15 16.4781 2 17.9081 2C19.3381 2 20.4881 3.16 20.4881 4.58C20.4781 5.98 19.3781 7.11 17.9981 7.16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16.9675 14.4402C18.3375 14.6702 19.8475 14.4302 20.9075 13.7202C22.3175 12.7802 22.3175 11.2402 20.9075 10.3002C19.8375 9.59016 18.3075 9.35016 16.9375 9.59016"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5.96656 7.16C6.02656 7.15 6.09656 7.15 6.15656 7.16C7.53656 7.11 8.63656 5.98 8.63656 4.58C8.63656 3.15 7.48656 2 6.05656 2C4.62656 2 3.47656 3.16 3.47656 4.58C3.48656 5.98 4.58656 7.11 5.96656 7.16Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M6.9975 14.4402C5.6275 14.6702 4.1175 14.4302 3.0575 13.7202C1.6475 12.7802 1.6475 11.2402 3.0575 10.3002C4.1275 9.59016 5.6575 9.35016 7.0275 9.59016"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.0001 14.6302C11.9401 14.6202 11.8701 14.6202 11.8101 14.6302C10.4301 14.5802 9.33008 13.4502 9.33008 12.0502C9.33008 10.6202 10.4801 9.47021 11.9101 9.47021C13.3401 9.47021 14.4901 10.6302 14.4901 12.0502C14.4801 13.4502 13.3801 14.5902 12.0001 14.6302Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.0907 17.7804C7.6807 18.7204 7.6807 20.2603 9.0907 21.2003C10.6907 22.2703 13.3107 22.2703 14.9107 21.2003C16.3207 20.2603 16.3207 18.7204 14.9107 17.7804C13.3207 16.7204 10.6907 16.7204 9.0907 17.7804Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: PeopleBold,
  broken: PeopleBroken,
  bulk: PeopleBulk,
  linear: PeopleLinear,
  outline: PeopleOutline,
  twotone: PeopleTwotone,
};

export const PeopleIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default PeopleIcon;
