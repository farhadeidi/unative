import { useContext } from "react";
import { cn } from "unative/lib/utils";
import { Path, Svg } from "unative/ui/svg";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../icon-options";
import { defaultOptions } from "../icon-options";

const BroomBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M8.82005 4.90101L7.54005 2.78101C7.06005 2.00101 6.11005 1.56101 5.22005 1.82101C3.88005 2.22101 3.36005 3.73101 4.03005 4.84101L5.35005 7.01101C5.50005 7.24101 5.81005 7.32101 6.04005 7.18101L8.65005 5.59101C8.89005 5.44101 8.97005 5.13101 8.82005 4.90101Z"
        fill="currentColor"
      />
      <Path
        d="M19.7404 14.2098L16.9304 10.4098C15.9504 9.08984 14.2504 8.46984 12.6504 8.89984C12.6504 8.88984 12.6404 8.88984 12.6404 8.87984L10.9804 6.14984C10.6804 5.67984 10.0604 5.52984 9.59037 5.81984L6.12037 7.92984C5.64037 8.20984 5.49037 8.83984 5.78037 9.31984L7.43037 12.0498C7.43037 12.0498 7.43037 12.0598 7.44037 12.0598C6.33037 13.2898 6.09037 15.0798 6.83037 16.5698L8.91037 20.8098C9.55037 22.1198 11.0604 22.6198 12.3404 21.9598C12.4404 21.9098 12.4704 21.7898 12.4104 21.6898L10.8504 19.1098C10.6304 18.7498 10.7404 18.2898 11.1004 18.0598C11.4604 17.8498 11.9204 17.9598 12.1504 18.3098L13.7204 20.8898C13.7804 20.9798 13.9004 21.0098 13.9904 20.9598L14.9504 20.3798C15.0404 20.3198 15.0704 20.1998 15.0204 20.1098L13.4504 17.5298C13.2404 17.1698 13.3504 16.7098 13.7004 16.4798C14.0704 16.2698 14.5304 16.3798 14.7504 16.7298L16.3204 19.3098C16.3804 19.3998 16.5004 19.4298 16.5904 19.3798L17.5504 18.7998C17.6404 18.7398 17.6704 18.6198 17.6204 18.5298L16.0504 15.9498C15.8404 15.5898 15.9504 15.1298 16.3004 14.8998C16.6704 14.6898 17.1304 14.7998 17.3504 15.1498L18.9304 17.7198C18.9904 17.8098 19.1104 17.8398 19.2004 17.7798C20.3604 16.9498 20.6204 15.3898 19.7404 14.2098Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BroomBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.87031 5.6701L6.45031 7.75012L4.89031 5.19012C4.32031 4.25012 4.62031 3.01012 5.56031 2.44012C6.50031 1.87012 7.74031 2.1701 8.31031 3.1101L9.87031 5.6701Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.19913 20.4401C9.85913 21.7901 11.4591 22.26 12.7391 21.47L19.1691 17.5601C20.4591 16.7801 20.7691 15.1501 19.8791 13.9401L17.1091 10.2001C15.9091 8.59009 13.6491 8.04005 11.8191 9.16005L8.65914 11.0801C6.81914 12.2001 6.25913 14.4601 7.14913 16.2601"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7574 5.09791L5.63281 8.21851L7.71321 11.6349L12.8378 8.51431L10.7574 5.09791Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.3105 16.8101L15.9606 19.5201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.75 18.3701L13.4 21.0801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.8691 15.25L18.5191 17.96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BroomBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.82948 5.57001L6.35948 7.68L4.77948 5.08002C4.19948 4.13002 4.49949 2.86998 5.45949 2.28998C6.40949 1.70998 7.66948 2.00998 8.24948 2.96998L9.82948 5.57001Z"
        fill="currentColor"
      />
      <Path
        opacity="0.4"
        d="M19.2706 17.64L19.2606 17.65L17.9606 18.44L16.6606 19.23L15.3606 20.02L14.0606 20.81L12.7606 21.6H12.7506C11.4406 22.4 9.82064 21.92 9.15064 20.55L7.07065 16.31C6.34065 14.83 6.57065 13.03 7.69065 11.8C7.95065 11.52 8.25065 11.26 8.60065 11.05L11.8106 9.1C12.1706 8.89 12.5306 8.73004 12.9006 8.64004C14.5006 8.20004 16.2006 8.82005 17.1806 10.15L19.9906 13.95C20.9006 15.2 20.5806 16.85 19.2706 17.64Z"
        fill="currentColor"
      />
      <Path
        d="M12.9008 8.66006C12.5308 8.75006 12.1708 8.90008 11.8108 9.12008L8.60078 11.0701C8.24078 11.2801 7.95078 11.5401 7.69078 11.8201C7.68078 11.8201 7.68077 11.8101 7.68077 11.8101L6.03078 9.08011C5.74078 8.60011 5.89078 7.97009 6.36078 7.69009L9.83078 5.58011C10.3108 5.29011 10.9308 5.44006 11.2208 5.91006L12.8808 8.6401C12.8908 8.6501 12.9008 8.65006 12.9008 8.66006Z"
        fill="currentColor"
      />
      <Path
        d="M16.6604 19.2299L15.3604 20.0199L13.6904 17.2699C13.4804 16.9099 13.5904 16.4499 13.9404 16.2199C14.3104 16.0099 14.7704 16.1199 14.9904 16.4699L16.6604 19.2299Z"
        fill="currentColor"
      />
      <Path
        d="M14.0597 20.82L12.7597 21.61L11.0897 18.86C10.8697 18.5 10.9797 18.04 11.3397 17.81C11.6997 17.6 12.1597 17.71 12.3897 18.06L14.0597 20.82Z"
        fill="currentColor"
      />
      <Path
        d="M19.26 17.6501L17.96 18.4401L16.29 15.6901C16.08 15.3301 16.19 14.8701 16.54 14.6401C16.91 14.4301 17.37 14.5401 17.59 14.8901L19.26 17.6501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BroomLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.87 5.66998L6.45 7.74999L4.89001 5.19C4.32001 4.25 4.62 3.01 5.56 2.44C6.5 1.87 7.74 2.16998 8.31 3.10998L9.87 5.66998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.82 9.15997L8.66 11.08C6.82 12.2 6.25999 14.46 7.14999 16.26L9.19999 20.44C9.85999 21.79 11.46 22.26 12.74 21.47L19.17 17.56C20.46 16.78 20.77 15.15 19.88 13.94L17.11 10.2C15.91 8.58001 13.66 8.03997 11.82 9.15997Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7567 5.09791L5.63208 8.21851L7.71248 11.6349L12.8371 8.51431L10.7567 5.09791Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.31 16.8101L15.96 19.5201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.75 18.37L13.4 21.08"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.87 15.25L18.52 17.96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const BroomOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.44977 8.50008C6.38977 8.50008 6.32978 8.49006 6.26978 8.48006C6.07978 8.43006 5.90977 8.3101 5.80977 8.1401L4.24978 5.5801C3.86978 4.9601 3.74977 4.22008 3.92977 3.50008C4.09977 2.79008 4.53977 2.18007 5.16977 1.80007C5.78977 1.42007 6.52978 1.30006 7.24978 1.48006C7.96978 1.65006 8.56977 2.09005 8.94977 2.72005L10.5098 5.28011C10.7298 5.63011 10.6098 6.09008 10.2598 6.31008L6.83977 8.3901C6.71977 8.4601 6.58977 8.50008 6.44977 8.50008ZM6.58977 2.90011C6.35977 2.90011 6.13977 2.9601 5.94977 3.0801C5.66977 3.2501 5.46978 3.53006 5.38978 3.85006C5.30977 4.18006 5.35977 4.51006 5.52977 4.79006L6.69977 6.7101L8.83977 5.41005L7.66977 3.49007C7.49977 3.21007 7.21977 3.01007 6.89977 2.93007C6.78977 2.91007 6.68977 2.90011 6.58977 2.90011Z"
        fill="currentColor"
      />
      <Path
        d="M11.4194 22.61C11.1194 22.61 10.8194 22.57 10.5294 22.48C9.64936 22.22 8.93936 21.6201 8.52936 20.7701L6.47936 16.5901C5.38936 14.3701 6.15937 11.7301 8.26937 10.4401L11.4294 8.52007C13.5394 7.23008 16.2494 7.76006 17.7194 9.75006L20.4894 13.49C21.0494 14.25 21.2594 15.16 21.0894 16.05C20.9194 16.94 20.3794 17.7101 19.5694 18.2001L13.1394 22.11C12.5994 22.44 12.0094 22.61 11.4194 22.61ZM13.8994 9.32006C13.3194 9.32006 12.7394 9.48004 12.1994 9.80004L9.03935 11.72C7.58935 12.6 7.06936 14.41 7.80936 15.93L9.85936 20.11C10.0894 20.57 10.4694 20.9 10.9394 21.04C11.4094 21.18 11.9094 21.1001 12.3394 20.8401L18.7694 16.93C19.2094 16.66 19.4994 16.2501 19.5994 15.7701C19.6894 15.2901 19.5794 14.8001 19.2694 14.3901L16.4994 10.6501C15.8694 9.78008 14.8994 9.32006 13.8994 9.32006Z"
        fill="currentColor"
      />
      <Path
        d="M7.68041 12.4299C7.62041 12.4299 7.56042 12.4199 7.50042 12.4099C7.31042 12.3599 7.14041 12.2399 7.04041 12.0699L4.96043 8.64995C4.74043 8.29995 4.86043 7.83993 5.21043 7.61993L10.3304 4.49993C10.6804 4.28993 11.1504 4.39993 11.3604 4.74993L13.4404 8.16991C13.5404 8.33991 13.5804 8.53992 13.5304 8.73992C13.4804 8.92992 13.3604 9.09994 13.1904 9.19994L8.07043 12.3199C7.95043 12.3999 7.81041 12.4299 7.68041 12.4299ZM6.63042 8.51995L7.93041 10.6599L11.7704 8.31994L10.4704 6.17992L6.63042 8.51995Z"
        fill="currentColor"
      />
      <Path
        d="M15.9594 20.2699C15.7094 20.2699 15.4594 20.1398 15.3194 19.9098L13.6694 17.1999C13.4494 16.8499 13.5694 16.3899 13.9194 16.1699C14.2694 15.9599 14.7394 16.0699 14.9494 16.4199L16.5994 19.1299C16.8194 19.4799 16.6994 19.9398 16.3494 20.1598C16.2294 20.2298 16.0894 20.2699 15.9594 20.2699Z"
        fill="currentColor"
      />
      <Path
        d="M13.4008 21.8299C13.1508 21.8299 12.9008 21.6999 12.7608 21.4699L11.1108 18.7599C10.8908 18.4099 11.0108 17.9499 11.3608 17.7299C11.7108 17.5199 12.1808 17.6299 12.3908 17.9799L14.0408 20.6899C14.2608 21.0399 14.1408 21.4999 13.7908 21.7199C13.6708 21.7899 13.5308 21.8299 13.4008 21.8299Z"
        fill="currentColor"
      />
      <Path
        d="M18.52 18.7101C18.27 18.7101 18.02 18.58 17.88 18.35L16.23 15.6401C16.01 15.2901 16.13 14.83 16.48 14.61C16.83 14.4 17.3 14.51 17.51 14.86L19.16 17.5701C19.38 17.9201 19.26 18.38 18.91 18.6C18.79 18.67 18.66 18.7101 18.52 18.7101Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const BroomTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M9.87031 5.6701L6.45031 7.75012L4.89031 5.19012C4.32031 4.25012 4.62031 3.01012 5.56031 2.44012C6.50031 1.87012 7.74031 2.1701 8.31031 3.1101L9.87031 5.6701Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.8191 9.16009L8.65914 11.0801C6.81914 12.2001 6.25913 14.4601 7.14913 16.2601L9.19913 20.4401C9.85913 21.7901 11.4591 22.2601 12.7391 21.4701L19.1691 17.5601C20.4591 16.7801 20.7691 15.1501 19.8791 13.9401L17.1091 10.2001C15.9091 8.58013 13.6591 8.04009 11.8191 9.16009Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.7574 5.09815L5.63281 8.21875L7.71321 11.6351L12.8378 8.51455L10.7574 5.09815Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M14.3105 16.8101L15.9606 19.5201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M11.75 18.3701L13.4 21.0801"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16.8691 15.25L18.5191 17.96"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: BroomBold,
  broken: BroomBroken,
  bulk: BroomBulk,
  linear: BroomLinear,
  outline: BroomOutline,
  twotone: BroomTwotone,
};

export const BroomIcon = ({
  variant = defaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};

export default BroomIcon;
