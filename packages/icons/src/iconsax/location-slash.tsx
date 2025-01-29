import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const LocationSlashBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M15.7806 20.9809C14.7206 22.0009 13.3606 22.5109 12.0006 22.5109C10.6406 22.5109 9.28063 21.9909 8.22063 20.9709C7.86063 20.6309 7.50063 20.2509 7.14062 19.8609L20.0406 6.96094C20.2906 7.50094 20.4806 8.07094 20.6206 8.70094C21.7906 13.8609 18.6306 18.2209 15.7806 20.9809Z"
        fill="currentColor"
      />
      <Path
        d="M21.7689 2.22891C21.4689 1.92891 20.9789 1.92891 20.6789 2.22891L2.22891 20.6889C1.92891 20.9889 1.92891 21.4789 2.22891 21.7789C2.37891 21.9189 2.56891 21.9989 2.76891 21.9989C2.96891 21.9989 3.15891 21.9189 3.30891 21.7689L21.7689 3.30891C22.0789 3.00891 22.0789 2.52891 21.7689 2.22891Z"
        fill="currentColor"
      />
      <Path
        d="M8.84865 10.31C8.84865 8.57 10.2586 7.16 11.9986 7.16C13.3086 7.16 14.4286 7.96 14.9086 9.1L18.8886 5.12C17.1186 2.98 14.4387 2 11.9986 2C10.2286 2 8.33865 2.52 6.75865 3.61C5.17865 4.71 3.89865 6.38 3.37865 8.69C2.53865 12.36 3.89865 15.64 5.78865 18.21L10.7886 13.21C9.64865 12.74 8.84865 11.61 8.84865 10.31Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LocationSlashBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.4209 12.9999C9.50086 12.4599 8.88086 11.4599 8.88086 10.3099C8.88086 8.58994 10.2709 7.18994 12.0009 7.18994C13.1509 7.18994 14.1509 7.80994 14.6909 8.73994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.50977 3.83995C10.0498 1.04996 15.7098 1.42996 18.6798 4.97996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.9891 17.81C4.1491 15.3 2.8091 12.09 3.6291 8.48999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.3806 8.5C21.5306 13.58 18.3706 17.88 15.6006 20.54C13.5906 22.48 10.4106 22.48 8.39062 20.54"
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

const LocationSlashBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M18.8906 5.11L5.7906 18.21C3.9006 15.64 2.5406 12.36 3.3806 8.69C3.9006 6.38 5.1806 4.71 6.7606 3.61C8.3406 2.52 10.2306 2 12.0006 2C14.4406 2 17.1206 2.98 18.8906 5.11Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M15.7806 20.98C14.7206 22 13.3606 22.51 12.0006 22.51C10.6406 22.51 9.28063 21.99 8.22063 20.97C7.86063 20.63 7.50063 20.25 7.14062 19.86L20.0406 6.95996C20.2906 7.49996 20.4806 8.06996 20.6206 8.69996C21.7906 13.86 18.6306 18.22 15.7806 20.98Z"
        fill="currentColor"
      />
      <Path
        d="M21.7705 2.23006C21.4705 1.92006 20.9905 1.92006 20.6905 2.23006L15.0205 7.90006L14.3005 8.62006C13.7605 7.88006 12.9105 7.44006 12.0005 7.44006C10.4205 7.44006 9.13055 8.73006 9.13055 10.3101C9.13055 11.2101 9.57055 12.0601 10.3105 12.6101L2.23055 20.6901C1.92055 20.9901 1.92055 21.4701 2.23055 21.7701C2.38055 21.9201 2.57055 22.0001 2.77055 22.0001C2.97055 22.0001 3.16055 21.9201 3.31055 21.7701L21.7705 3.31006C22.0805 3.01006 22.0805 2.53006 21.7705 2.23006Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LocationSlashLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M10.42 12.9999C9.5 12.4599 8.88 11.4599 8.88 10.3099C8.88 8.58994 10.27 7.18994 12 7.18994C13.15 7.18994 14.15 7.80994 14.69 8.73994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.98995 17.8101C4.14995 15.3001 2.80995 12.0901 3.62995 8.49011C5.27995 1.23011 14.57 0.0601072 18.68 4.98011"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39001 20.54"
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

const LocationSlashOutline = ({
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
        d="M10.4209 13.7502C10.2909 13.7502 10.1609 13.7202 10.0409 13.6502C8.86086 12.9602 8.13086 11.6802 8.13086 10.3202C8.13086 8.1902 9.86086 6.4502 12.0009 6.4502C13.3709 6.4502 14.6509 7.1802 15.3409 8.3702C15.5509 8.7302 15.4309 9.1902 15.0709 9.4002C14.7109 9.6102 14.2509 9.4902 14.0409 9.1302C13.6209 8.3902 12.8409 7.9402 12.0009 7.9402C10.7009 7.9402 9.63086 9.0002 9.63086 10.3102C9.63086 11.1502 10.0809 11.9302 10.8009 12.3502C11.1609 12.5602 11.2809 13.0202 11.0709 13.3802C10.9309 13.6102 10.6809 13.7502 10.4209 13.7502Z"
        fill="currentColor"
      />
      <Path
        d="M5.99072 18.5601C5.76072 18.5601 5.53073 18.4501 5.38073 18.2501C2.98073 14.9601 2.14073 11.6201 2.89073 8.32007C3.67073 4.89007 6.19072 2.35007 9.63072 1.52007C13.2307 0.650071 17.0107 1.82007 19.2407 4.49007C19.5107 4.81007 19.4607 5.28007 19.1507 5.55007C18.8307 5.82007 18.3607 5.77007 18.0907 5.45007C16.2207 3.21007 13.0407 2.24007 9.98072 2.97007C7.06072 3.67007 5.01073 5.74007 4.35072 8.64007C3.70072 11.5001 4.45073 14.4301 6.59073 17.3501C6.83073 17.6801 6.76073 18.1501 6.43072 18.4001C6.30072 18.5101 6.14072 18.5601 5.99072 18.5601Z"
        fill="currentColor"
      />
      <Path
        d="M12.0001 22.7598C10.5201 22.7598 9.03006 22.1998 7.87006 21.0898C7.57006 20.7998 7.56006 20.3298 7.85006 20.0298C8.14006 19.7298 8.61006 19.7198 8.91006 20.0098C10.6401 21.6798 13.3501 21.6798 15.0801 20.0098C17.7501 17.4398 20.7101 13.3798 19.6501 8.66977C19.5601 8.26977 19.8101 7.85977 20.2201 7.76977C20.6201 7.67977 21.0301 7.92977 21.1201 8.33977C22.3401 13.7298 19.0801 18.2498 16.1301 21.0898C14.9701 22.1998 13.4801 22.7598 12.0001 22.7598Z"
        fill="currentColor"
      />
      <Path
        d="M1.99945 22.7499C1.80945 22.7499 1.61945 22.6799 1.46945 22.5299C1.17945 22.2399 1.17945 21.7599 1.46945 21.4699L21.4695 1.46994C21.7595 1.17994 22.2395 1.17994 22.5295 1.46994C22.8195 1.75994 22.8195 2.23994 22.5295 2.52994L2.52945 22.5299C2.37945 22.6799 2.18945 22.7499 1.99945 22.7499Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const LocationSlashTwotone = ({
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
        d="M10.4209 12.9999C9.50086 12.4599 8.88086 11.4599 8.88086 10.3099C8.88086 8.58994 10.2709 7.18994 12.0009 7.18994C13.1509 7.18994 14.1509 7.80994 14.6909 8.73994"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5.9891 17.8101C4.1491 15.3001 2.8091 12.0901 3.6291 8.49011C5.2791 1.23011 14.5691 0.0601072 18.6791 4.98011"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M20.3806 8.5C21.5306 13.58 18.3706 17.88 15.6006 20.54C13.5906 22.48 10.4106 22.48 8.39062 20.54"
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
  bold: LocationSlashBold,
  broken: LocationSlashBroken,
  bulk: LocationSlashBulk,
  linear: LocationSlashLinear,
  outline: LocationSlashOutline,
  twotone: LocationSlashTwotone,
};

export const LocationSlashIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default LocationSlashIcon;
