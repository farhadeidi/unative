import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import type { IconProps, IconVariants } from "../types/icons-type";

const CloudNotifBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.2717 8.76172C21.2717 9.78172 20.8017 10.7017 20.0417 11.3017C19.4917 11.7517 18.7817 12.0217 18.0117 12.0217C16.2217 12.0217 14.7617 10.5617 14.7617 8.77172C14.7617 7.88172 15.1217 7.07172 15.7217 6.48172V6.47172C16.3117 5.88172 17.1217 5.51172 18.0117 5.51172C19.8117 5.51172 21.2717 6.97172 21.2717 8.76172Z"
        fill="currentColor"
      />
      <Path
        d="M20.1817 18.7289C19.1317 19.6889 17.7817 20.2189 16.3517 20.2189H5.97172C3.23172 20.0189 2.01172 17.9089 2.01172 16.0289C2.01172 14.3489 2.98172 12.4889 5.11172 11.9689C4.18172 8.38887 5.96172 5.88887 8.04172 4.69887C10.1017 3.52887 13.0017 3.33887 15.1817 4.94887C14.9917 5.08887 14.8217 5.23887 14.6517 5.40887L14.2217 5.85887V5.91887C13.6017 6.72887 13.2617 7.71887 13.2617 8.75887C13.2617 11.3789 15.4017 13.5089 18.0217 13.5089C19.1017 13.5089 20.1517 13.1389 20.9717 12.4689C21.1217 12.3489 21.2717 12.2189 21.4017 12.0789C22.3917 14.1589 22.2517 16.9189 20.1817 18.7289Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudNotifBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M6.91992 5.7299C8.59992 4.1399 11.1699 3.5399 13.3799 4.2499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.8995 13.9601C22.1695 15.6301 21.6995 17.4201 20.2695 18.6801C19.2795 19.5901 17.9795 20.0901 16.6295 20.0801H5.53945C0.869454 19.7401 0.859454 12.9401 5.53945 12.6001H5.58945C5.19945 11.5201 5.05945 10.5201 5.10945 9.62012"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.25984 13.0101C6.73984 12.7501 6.16984 12.6101 5.58984 12.6001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.9707 8.5C21.9707 9.6 21.4607 10.59 20.6507 11.23C20.0607 11.71 19.2907 12 18.4707 12C16.5407 12 14.9707 10.43 14.9707 8.5C14.9707 7.54 15.3607 6.67 16.0007 6.04V6.03C16.6307 5.39 17.5107 5 18.4707 5C20.4007 5 21.9707 6.57 21.9707 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudNotifBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M20.5691 11.0099C19.8091 10.0999 18.8091 9.48994 17.6691 9.23994C17.4191 8.08994 16.9591 7.08994 16.3091 6.26994C16.2891 6.23994 16.2691 6.20994 16.2491 6.18994C14.0591 3.53994 10.4691 3.54994 8.04906 4.91994C5.97906 6.09994 4.21906 8.58994 5.13906 12.1599C3.01906 12.6799 2.03906 14.5299 2.03906 16.1999C2.03906 18.0699 3.25906 20.1799 5.98906 20.3699H16.2891C16.2991 20.3699 16.3191 20.3699 16.3291 20.3699C17.7491 20.3699 19.0991 19.8499 20.1391 18.8899C22.6591 16.6899 22.3291 13.0799 20.5691 11.0099Z"
        fill="currentColor"
      />
      <Path
        d="M21.2698 8.76001C21.2698 9.78001 20.7998 10.7 20.0398 11.3C19.4898 11.75 18.7798 12.02 18.0098 12.02C16.2198 12.02 14.7598 10.56 14.7598 8.77001C14.7598 7.88001 15.1198 7.07001 15.7198 6.48001V6.47001C16.3098 5.88001 17.1198 5.51001 18.0098 5.51001C19.8098 5.51001 21.2698 6.97001 21.2698 8.76001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudNotifLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.8999 13.96C22.1699 15.63 21.6999 17.42 20.2699 18.68C19.2799 19.59 17.9799 20.09 16.6299 20.08H5.53994C0.869942 19.74 0.859942 12.94 5.53994 12.6H5.58994C3.39994 6.46998 9.08994 2.86998 13.3799 4.24998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.26009 13.01C6.74009 12.75 6.17009 12.61 5.59009 12.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M21.97 8.5C21.97 9.6 21.46 10.59 20.65 11.23C20.06 11.71 19.29 12 18.47 12C16.54 12 14.97 10.43 14.97 8.5C14.97 7.54 15.36 6.67 16 6.04V6.03C16.63 5.39 17.51 5 18.47 5C20.4 5 21.97 6.57 21.97 8.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const CloudNotifOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.6693 20.83C16.6493 20.83 16.6393 20.83 16.6293 20.83H5.5393C2.5993 20.62 1.2793 18.35 1.2793 16.34C1.2793 14.54 2.3293 12.54 4.6093 11.99C3.9793 9.47001 4.5293 7.11001 6.1893 5.40001C8.0693 3.46001 11.0593 2.71001 13.6093 3.54001C13.9993 3.67001 14.2193 4.09001 14.0893 4.48001C13.9593 4.87001 13.5393 5.09001 13.1493 4.96001C11.1193 4.31001 8.7493 4.90001 7.2593 6.45001C5.8093 7.95001 5.4693 10.04 6.2993 12.35C6.3793 12.58 6.3493 12.84 6.2093 13.03C6.0693 13.22 5.8393 13.35 5.5993 13.35C3.6593 13.49 2.7893 14.95 2.7893 16.34C2.7893 17.73 3.6593 19.19 5.5993 19.34H16.6393C17.7793 19.35 18.9193 18.92 19.7693 18.14C20.9193 17.13 21.4193 15.66 21.1693 14.1C21.0993 13.69 21.3793 13.31 21.7893 13.24C22.1993 13.17 22.5793 13.45 22.6493 13.86C22.9893 15.92 22.2793 17.94 20.7793 19.26C19.6593 20.26 18.1993 20.83 16.6693 20.83Z"
        fill="currentColor"
      />
      <Path
        d="M7.25984 13.7601C7.14984 13.7601 7.02984 13.7301 6.92984 13.6801C6.50984 13.4701 6.04984 13.3601 5.57984 13.3501C5.16984 13.3401 4.83984 13.0001 4.83984 12.5901C4.84984 12.1801 5.23984 11.8401 5.59984 11.8501C6.28984 11.8601 6.97984 12.0301 7.58984 12.3401C7.95984 12.5201 8.10984 12.9801 7.92984 13.3501C7.79984 13.6101 7.53984 13.7601 7.25984 13.7601Z"
        fill="currentColor"
      />
      <Path
        d="M18.4707 12.75C16.1307 12.75 14.2207 10.84 14.2207 8.50001C14.2207 7.40001 14.6407 6.36001 15.4007 5.58001C15.4207 5.55001 15.4407 5.53001 15.4607 5.51001C16.2607 4.70001 17.3207 4.26001 18.4607 4.26001C20.8007 4.26001 22.7107 6.17001 22.7107 8.51001C22.7107 9.81001 22.1307 11.02 21.1107 11.83C20.3807 12.42 19.4407 12.75 18.4707 12.75ZM16.6007 6.50001C16.5807 6.53001 16.5607 6.55001 16.5307 6.58001C16.0107 7.09001 15.7207 7.78001 15.7207 8.51001C15.7207 10.03 16.9507 11.26 18.4707 11.26C19.0907 11.26 19.7007 11.05 20.1807 10.66C20.8507 10.13 21.2207 9.35001 21.2207 8.51001C21.2207 6.99001 19.9907 5.76001 18.4707 5.76001C17.7607 5.75001 17.1007 6.02001 16.6007 6.50001Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const CloudNotifTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M21.8995 13.9602C22.1695 15.6302 21.6995 17.4202 20.2695 18.6802C19.2795 19.5902 17.9795 20.0902 16.6295 20.0802H5.53945C0.869454 19.7402 0.859454 12.9402 5.53945 12.6002H5.58945C3.39945 6.47023 9.08945 2.87022 13.3795 4.25022"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.25984 13.0101C6.73984 12.7501 6.16984 12.6101 5.58984 12.6001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M21.9707 8.5C21.9707 9.6 21.4607 10.59 20.6507 11.23C20.0607 11.71 19.2907 12 18.4707 12C16.5407 12 14.9707 10.43 14.9707 8.5C14.9707 7.54 15.3607 6.67 16.0007 6.04V6.03C16.6307 5.39 17.5107 5 18.4707 5C20.4007 5 21.9707 6.57 21.9707 8.5Z"
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
  bold: CloudNotifBold,
  broken: CloudNotifBroken,
  bulk: CloudNotifBulk,
  linear: CloudNotifLinear,
  outline: CloudNotifOutline,
  twotone: CloudNotifTwotone,
};

export const CloudNotifIcon = ({
  variant = "linear",
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
