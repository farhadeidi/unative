import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";

import type { IconProps, IconVariants } from "../types/icons-type";

const HeartEditBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156ZM14.84 11.3816L11.3 14.9216C11.16 15.0616 10.9 15.1916 10.71 15.2216L9.36 15.4016C8.87 15.4716 8.53 15.1316 8.6 14.6416L8.79 13.2916C8.82 13.1016 8.95 12.8316 9.09 12.7016L12.63 9.16156C13.24 8.55156 13.95 8.26156 14.85 9.16156C15.74 10.0616 15.45 10.7716 14.84 11.3816Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartEditBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 20.9C11.78 20.9 11.55 20.87 11.38 20.81C8.48 19.82 2 15.69 2 8.69C2 7.29 2.51 6.01003 3.36 5.03003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.4905 12C21.8105 10.98 22.0005 9.88 22.0005 8.69C22.0005 5.6 19.5105 3.09998 16.4405 3.09998C14.6205 3.09998 13.0105 3.98003 12.0005 5.34003C10.9905 3.98003 9.37055 3.09998 7.56055 3.09998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.2091 15.74L15.6691 19.2801C15.5291 19.4201 15.3991 19.68 15.3691 19.87L15.1791 21.22C15.1091 21.71 15.4491 22.05 15.9391 21.98L17.2891 21.79C17.4791 21.76 17.7491 21.63 17.8791 21.49L21.4191 17.95C22.0291 17.34 22.3191 16.63 21.4191 15.73C20.5291 14.84 19.8191 15.13 19.2091 15.74Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.6992 16.25C18.9992 17.33 19.8392 18.17 20.9192 18.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeartEditBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.44 3.1001C14.63 3.1001 13.01 3.98008 12 5.33008C10.99 3.98008 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60009 2 8.69009C2 9.88009 2.19 10.9801 2.52 12.0001C4.1 17.0001 8.97 19.9901 11.38 20.8101C11.72 20.9301 12.28 20.9301 12.62 20.8101C15.03 19.9901 19.9 17.0001 21.48 12.0001C21.81 10.9801 22 9.88009 22 8.69009C22 5.60009 19.51 3.1001 16.44 3.1001Z"
        fill="currentColor"
      />
      <Path
        d="M14.8392 9.16C13.9392 8.26 13.2292 8.55 12.6192 9.16L9.07921 12.7C8.93921 12.84 8.80921 13.1 8.77921 13.29L8.58921 14.64C8.51921 15.13 8.85921 15.47 9.34921 15.4L10.6992 15.21C10.8892 15.18 11.1592 15.05 11.2892 14.91L14.8292 11.37C15.4492 10.77 15.7392 10.06 14.8392 9.16Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartEditLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.49 12C21.81 10.98 22 9.88 22 8.69C22 5.6 19.51 3.09998 16.44 3.09998C14.62 3.09998 13.01 3.98003 12 5.34003C10.99 3.98003 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.6 2 8.69C2 15.69 8.48 19.82 11.38 20.82C11.55 20.88 11.77 20.91 12 20.91"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.21 15.74L15.67 19.2801C15.53 19.4201 15.4 19.68 15.37 19.87L15.18 21.22C15.11 21.71 15.45 22.05 15.94 21.98L17.29 21.79C17.48 21.76 17.75 21.63 17.88 21.49L21.42 17.95C22.03 17.34 22.32 16.63 21.42 15.73C20.53 14.84 19.82 15.13 19.21 15.74Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.7001 16.25C19.0001 17.33 19.8401 18.17 20.9201 18.47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const HeartEditOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M12 21.6501C11.78 21.6501 11.45 21.6301 11.14 21.5201C7.32 20.2101 1.25 15.5701 1.25 8.69012C1.25 5.19012 4.08 2.3501 7.56 2.3501C9.25 2.3501 10.83 3.01012 12 4.19012C13.17 3.01012 14.75 2.3501 16.44 2.3501C19.92 2.3501 22.75 5.19012 22.75 8.69012C22.75 9.90012 22.57 11.0901 22.21 12.2301C22.09 12.6201 21.66 12.8501 21.27 12.7201C20.87 12.6001 20.66 12.1702 20.78 11.7802C21.09 10.7902 21.25 9.75013 21.25 8.70013C21.25 6.03013 19.09 3.86011 16.44 3.86011C14.92 3.86011 13.51 4.5701 12.6 5.7901C12.32 6.1701 11.68 6.1701 11.4 5.7901C10.48 4.5601 9.08 3.86011 7.56 3.86011C4.91 3.86011 2.75 6.03013 2.75 8.70013C2.75 15.5401 9.32 19.3301 11.63 20.1201C11.69 20.1401 11.83 20.1701 12 20.1701C12.41 20.1701 12.75 20.5101 12.75 20.9201C12.75 21.3301 12.41 21.6501 12 21.6501Z"
        fill="currentColor"
      />
      <Path
        d="M15.8196 22.7501C15.4396 22.7501 15.0796 22.6101 14.8196 22.3501C14.5096 22.0401 14.3696 21.5901 14.4396 21.1201L14.6296 19.7701C14.6796 19.4201 14.8896 19.0001 15.1396 18.7501L18.6796 15.2101C19.1596 14.7301 19.6296 14.4801 20.1396 14.4301C20.7696 14.3701 21.3796 14.6301 21.9596 15.2101C22.5396 15.7901 22.7996 16.4001 22.7396 17.0301C22.6896 17.5301 22.4296 18.0101 21.9596 18.4901L18.4196 22.0301C18.1696 22.2801 17.7596 22.4901 17.4096 22.5401L16.0596 22.7301C15.9696 22.7401 15.8996 22.7501 15.8196 22.7501ZM20.3096 15.9201C20.2996 15.9201 20.2896 15.9201 20.2796 15.9201C20.1396 15.9301 19.9496 16.0501 19.7396 16.2701L16.1996 19.8101C16.1696 19.8401 16.1196 19.9401 16.1196 19.9801L15.9396 21.2301L17.1896 21.0501C17.2296 21.0401 17.3296 20.9901 17.3596 20.9601L20.8996 17.4201C21.1096 17.2101 21.2396 17.0201 21.2496 16.8801C21.2696 16.6801 21.0696 16.4401 20.8996 16.2701C20.7396 16.1101 20.5096 15.9201 20.3096 15.9201Z"
        fill="currentColor"
      />
      <Path
        d="M20.9206 19.2201C20.8506 19.2201 20.7806 19.2101 20.7206 19.1901C19.4006 18.8201 18.3506 17.7701 17.9806 16.4501C17.8706 16.0501 18.1006 15.6401 18.5006 15.5301C18.9006 15.4201 19.3106 15.6501 19.4306 16.0501C19.6606 16.8701 20.3106 17.5201 21.1306 17.7501C21.5306 17.8601 21.7606 18.2801 21.6506 18.6701C21.5506 19.0001 21.2506 19.2201 20.9206 19.2201Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const HeartEditTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.49 12.0001C21.81 10.9801 22 9.88012 22 8.69012C22 5.60012 19.51 3.1001 16.44 3.1001C14.62 3.1001 13.01 3.98015 12 5.34015C10.99 3.98015 9.37 3.1001 7.56 3.1001C4.49 3.1001 2 5.60012 2 8.69012C2 15.6901 8.48 19.8201 11.38 20.8201C11.55 20.8801 11.77 20.9101 12 20.9101"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M19.2091 15.74L15.6691 19.2801C15.5291 19.4201 15.3991 19.68 15.3691 19.87L15.1791 21.22C15.1091 21.71 15.4491 22.05 15.9391 21.98L17.2891 21.79C17.4791 21.76 17.7491 21.63 17.8791 21.49L21.4191 17.95C22.0291 17.34 22.3191 16.63 21.4191 15.73C20.5291 14.84 19.8191 15.13 19.2091 15.74Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.6992 16.25C18.9992 17.33 19.8392 18.17 20.9192 18.47"
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
  bold: HeartEditBold,
  broken: HeartEditBroken,
  bulk: HeartEditBulk,
  linear: HeartEditLinear,
  outline: HeartEditOutline,
  twotone: HeartEditTwotone,
};

export const HeartEditIcon = ({ variant = "linear", ...props }: IconProps) => {
  const Component = variants[variant];
  return <Component {...props} />;
};
