import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const GlassBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.8406 21.9983H8.16059C3.97059 21.9983 3.14059 19.4683 4.50059 16.3883L5.94059 13.1183C5.94059 13.1183 9.00059 12.9983 12.0006 13.9983C15.0006 14.9983 17.8306 13.1083 17.8306 13.1083L18.0206 12.9883L19.5106 16.3983C20.8506 19.4783 19.9706 21.9983 15.8406 21.9983Z"
        fill="currentColor"
      />
      <Path
        d="M15.4403 6.74H15.2803L17.4103 11.6L17.0003 11.86C16.9803 11.87 14.7203 13.32 12.4703 12.58C10.1203 11.79 7.76031 11.65 6.60031 11.63L8.74031 6.74H8.44031C7.79031 6.74 7.19031 6.48 6.76031 6.05C6.33031 5.62 6.07031 5.02 6.07031 4.37C6.07031 3.07 7.13031 2 8.44031 2H15.5503C16.2103 2 16.8003 2.27 17.2303 2.7C17.7903 3.26 18.0803 4.08 17.8603 4.95C17.6003 6.03 16.5603 6.74 15.4403 6.74Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GlassBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.36077 7.62L8.75077 6.74H8.45077C7.80077 6.74 7.20077 6.48 6.77077 6.05C6.33077 5.62 6.07077 5.02 6.07077 4.37C6.07077 3.07 7.13077 2 8.44077 2H15.5508C16.2108 2 16.8008 2.27 17.2308 2.7C17.7908 3.26 18.0708 4.08 17.8608 4.95C17.5908 6.03 16.5508 6.74 15.4408 6.74H15.2808L19.5008 16.4C20.8508 19.48 19.9708 22 15.8308 22H8.16077C3.98077 22 3.14077 19.47 4.50077 16.39L6.57077 11.69"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.93945 13.1201C5.93945 13.1201 8.99945 13.0001 11.9995 14.0001C14.9995 15.0001 17.8295 13.1101 17.8295 13.1101"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GlassBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M13.1905 16.29H10.8105V17.71H13.1905V16.29Z"
        fill="currentColor"
      />
      <Path
        d="M7.94977 2.71C7.94977 3.11 7.62977 3.43 7.23977 3.43H6.28977C4.57977 3.43 3.18977 4.82 3.18977 6.52V12.4C2.33977 12.83 1.75977 13.71 1.75977 14.73V6.52C1.75977 4.03 3.78977 2 6.28977 2H7.23977C7.62977 2 7.94977 2.32 7.94977 2.71Z"
        fill="currentColor"
      />
      <Path
        d="M22.2408 6.52V14.73C22.2408 13.71 21.6608 12.83 20.8108 12.4V6.52C20.8108 4.82 19.4208 3.43 17.7108 3.43H16.7608C16.3708 3.43 16.0508 3.11 16.0508 2.71C16.0508 2.32 16.3708 2 16.7608 2H17.7108C20.2108 2 22.2408 4.03 22.2408 6.52Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M10.8098 14.7301V19.3801C10.8098 20.8301 9.62977 22.0001 8.18976 22.0001H4.37977C2.93977 22.0001 1.75977 20.8301 1.75977 19.3801V14.7301C1.75977 13.7101 2.33977 12.8301 3.18977 12.4001C3.54977 12.2101 3.94977 12.1101 4.37977 12.1101H8.18976C9.62977 12.1101 10.8098 13.2801 10.8098 14.7301Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M22.2395 14.7301V19.3801C22.2395 20.8301 21.0595 22.0001 19.6195 22.0001H15.8095C14.3695 22.0001 13.1895 20.8301 13.1895 19.3801V14.7301C13.1895 13.2801 14.3695 12.1101 15.8095 12.1101H19.6195C20.0495 12.1101 20.4495 12.2101 20.8095 12.4001C21.6595 12.8301 22.2395 13.7101 22.2395 14.7301Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GlassLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.16001 22C3.98001 22 3.14001 19.47 4.50001 16.39L8.75001 6.74H8.45001C7.80001 6.74 7.20001 6.48 6.77001 6.05C6.33001 5.62 6.07001 5.02 6.07001 4.37C6.07001 3.07 7.13001 2 8.44001 2H15.55C16.21 2 16.8 2.27 17.23 2.7C17.79 3.26 18.07 4.08 17.86 4.95C17.59 6.03 16.55 6.74 15.44 6.74H15.28L19.5 16.4C20.85 19.48 19.97 22 15.83 22H8.16001Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.94 13.1201C5.94 13.1201 9 13.0001 12 14.0001C15 15.0001 17.83 13.1101 17.83 13.1101"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const GlassOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.8393 22.75H8.15926C5.47926 22.75 4.25926 21.75 3.71926 20.92C2.92926 19.7 2.95926 18.03 3.80926 16.09L7.63926 7.39C7.10926 7.25 6.61926 6.97 6.22926 6.58C5.65926 6 5.31926 5.2 5.31926 4.37C5.31926 2.65 6.71926 1.25 8.43926 1.25H15.5493C16.3793 1.25 17.1693 1.58 17.7593 2.17C18.5393 2.95 18.8493 4.06 18.5893 5.13C18.3293 6.2 17.4493 7.05 16.3693 7.36L20.1893 16.1C21.0293 18.03 21.0593 19.7 20.2593 20.92C19.7193 21.75 18.4993 22.75 15.8393 22.75ZM8.43926 2.75C7.54926 2.75 6.81926 3.48 6.81926 4.37C6.81926 4.8 6.99926 5.22 7.28926 5.52C7.58926 5.82 8.00926 5.99 8.43926 5.99H8.73926C8.98926 5.99 9.22926 6.12 9.36926 6.33C9.50926 6.54 9.52926 6.81 9.42926 7.04L5.17926 16.69C4.54926 18.13 4.46926 19.34 4.96926 20.1C5.58926 21.05 7.03926 21.25 8.14926 21.25H15.8293C16.9293 21.25 18.3693 21.05 18.9993 20.1C19.4993 19.33 19.4293 18.13 18.8093 16.7L14.5993 7.04C14.4993 6.81 14.5193 6.54 14.6593 6.33C14.7993 6.12 15.0293 5.99 15.2893 5.99H15.4493C16.2493 5.99 16.9693 5.48 17.1393 4.77C17.2793 4.2 17.1193 3.64 16.7093 3.23C16.3993 2.92 15.9893 2.75 15.5593 2.75H8.43926Z"
        fill="currentColor"
      />
      <Path
        d="M13.8406 15.0401C13.1806 15.0401 12.4706 14.9501 11.7606 14.7101C8.92055 13.7601 5.99055 13.8601 5.96055 13.8601C5.56055 13.9201 5.20055 13.5501 5.18055 13.1401C5.16055 12.7301 5.49055 12.3801 5.90055 12.3601C6.03055 12.3501 9.14055 12.2501 12.2306 13.2801C14.8306 14.1501 17.3806 12.5001 17.4106 12.4801C17.7506 12.2501 18.2206 12.3501 18.4506 12.6901C18.6806 13.0301 18.5906 13.5001 18.2406 13.7301C18.1506 13.8001 16.2506 15.0401 13.8406 15.0401Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const GlassTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.16077 22C3.98077 22 3.14077 19.47 4.50077 16.39L8.75077 6.74H8.45077C7.80077 6.74 7.20077 6.48 6.77077 6.05C6.33077 5.62 6.07077 5.02 6.07077 4.37C6.07077 3.07 7.13077 2 8.44077 2H15.5508C16.2108 2 16.8008 2.27 17.2308 2.7C17.7908 3.26 18.0708 4.08 17.8608 4.95C17.5908 6.03 16.5508 6.74 15.4408 6.74H15.2808L19.5008 16.4C20.8508 19.48 19.9708 22 15.8308 22H8.16077Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M5.93945 13.1199C5.93945 13.1199 8.99945 12.9999 11.9995 13.9999C14.9995 14.9999 17.8295 13.1099 17.8295 13.1099"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: GlassBold,
  broken: GlassBroken,
  bulk: GlassBulk,
  linear: GlassLinear,
  outline: GlassOutline,
  twotone: GlassTwotone,
};

export const GlassIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default GlassIcon;
