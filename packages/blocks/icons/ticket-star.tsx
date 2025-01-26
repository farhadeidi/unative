import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const TicketStarBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.6487 3.85938H9.90865V6.87938C9.90865 7.26938 9.58865 7.57938 9.20865 7.57938C8.82865 7.57938 8.50865 7.26938 8.50865 6.87938V3.85938H7.34865C3.39865 3.85938 2.09865 5.03937 2.00865 8.72937C1.99865 8.90937 2.07865 9.09937 2.20865 9.22937C2.33865 9.36937 2.50865 9.43937 2.70865 9.43937C4.10865 9.43937 5.25865 10.5994 5.25865 11.9994C5.25865 13.3994 4.10865 14.5594 2.70865 14.5594C2.51865 14.5594 2.33865 14.6294 2.20865 14.7694C2.07865 14.8994 1.99865 15.0894 2.00865 15.2694C2.09865 18.9594 3.39865 20.1394 7.34865 20.1394H8.50865V17.1194C8.50865 16.7294 8.82865 16.4194 9.20865 16.4194C9.58865 16.4194 9.90865 16.7294 9.90865 17.1194V20.1394H16.6487C20.7487 20.1394 21.9987 18.8894 21.9987 14.7894V9.20938C21.9987 5.10938 20.7487 3.85938 16.6487 3.85938ZM18.4687 11.8994L17.5387 12.7994C17.4987 12.8294 17.4887 12.8894 17.4987 12.9394L17.7187 14.2094C17.7587 14.4394 17.6687 14.6794 17.4687 14.8194C17.2787 14.9594 17.0287 14.9794 16.8187 14.8694L15.6687 14.2694C15.6287 14.2494 15.5687 14.2494 15.5287 14.2694L14.3787 14.8694C14.2887 14.9194 14.1887 14.9394 14.0887 14.9394C13.9587 14.9394 13.8387 14.8994 13.7287 14.8194C13.5387 14.6794 13.4387 14.4494 13.4787 14.2094L13.6987 12.9394C13.7087 12.8894 13.6887 12.8394 13.6587 12.7994L12.7287 11.8994C12.5587 11.7394 12.4987 11.4894 12.5687 11.2694C12.6387 11.0394 12.8287 10.8794 13.0687 10.8494L14.3487 10.6594C14.3987 10.6494 14.4387 10.6194 14.4687 10.5794L15.0387 9.41938C15.1487 9.20938 15.3587 9.07938 15.5987 9.07938C15.8387 9.07938 16.0487 9.20938 16.1487 9.41938L16.7187 10.5794C16.7387 10.6294 16.7787 10.6594 16.8287 10.6594L18.1087 10.8494C18.3487 10.8794 18.5387 11.0494 18.6087 11.2694C18.6987 11.4894 18.6387 11.7294 18.4687 11.8994Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TicketStarBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M3.23977 15.27C2.85977 15.41 2.43977 15.49 2.00977 15.49C2.09977 19.08 3.16977 20 6.99977 20H16.9998C20.9998 20 21.9998 19 21.9998 15V9C21.9998 5 20.9998 4 16.9998 4H6.99977C3.16977 4 2.09977 4.92 2.00977 8.5C3.93977 8.5 5.49977 10.07 5.49977 12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 4V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9 16.5V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14.8599 14.2099C14.7399 14.1499 14.5899 14.1499 14.4699 14.2099L13.2399 14.8599C12.9299 15.0199 12.5799 14.7599 12.6399 14.4199L12.8799 13.0499C12.8999 12.9099 12.8599 12.7799 12.7599 12.6799L11.7699 11.7099C11.5199 11.4699 11.6599 11.0499 11.9999 10.9999L13.3799 10.7999C13.5199 10.7799 13.6299 10.6999 13.6899 10.5699L14.2999 9.3199C14.4499 9.0099 14.8899 9.0099 15.0399 9.3199L15.6599 10.5699C15.7199 10.6899 15.8399 10.7799 15.9699 10.7999L17.3499 10.9999C17.6899 11.0499 17.8299 11.4699 17.5799 11.7099L16.5799 12.6799C16.4799 12.7699 16.4399 12.9099 16.4599 13.0499"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TicketStarBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M22.0009 9.20986V14.7899C22.0009 18.8899 20.7509 20.1399 16.6509 20.1399H9.91094V17.1199C9.91094 16.7399 9.59094 16.4199 9.21094 16.4199V7.57986C9.59094 7.57986 9.91094 7.25986 9.91094 6.87986V3.85986H16.6509C20.7509 3.85986 22.0009 5.10986 22.0009 9.20986Z"
        fill="currentColor"
      />
      <Path
        d="M18.4692 11.9001C18.6392 11.7401 18.6992 11.4901 18.6292 11.2701C18.5592 11.0401 18.3692 10.8801 18.1292 10.8501L16.8492 10.6601C16.7992 10.6501 16.7592 10.6201 16.7392 10.5801L16.1692 9.42008C16.0692 9.21008 15.8492 9.08008 15.6192 9.08008C15.3792 9.08008 15.1692 9.21008 15.0592 9.42008L14.4892 10.5801C14.4692 10.6301 14.4192 10.6601 14.3692 10.6601L13.0892 10.8501C12.8592 10.8801 12.6592 11.0501 12.5892 11.2701C12.5192 11.5001 12.5792 11.7401 12.7492 11.9001L13.6792 12.8001C13.7192 12.8301 13.7292 12.8901 13.7192 12.9401L13.4992 14.2101C13.4592 14.4401 13.5492 14.6801 13.7492 14.8101C13.8592 14.8901 13.9792 14.9301 14.1092 14.9301C14.2092 14.9301 14.3092 14.9101 14.3992 14.8601L15.5492 14.2601C15.5892 14.2401 15.6492 14.2401 15.6892 14.2601L16.8392 14.8601C17.0492 14.9701 17.2992 14.9501 17.4892 14.8101C17.6792 14.6701 17.7792 14.4401 17.7392 14.2001L17.5192 12.9301C17.5092 12.8801 17.5292 12.8301 17.5592 12.7901L18.4692 11.9001Z"
        fill="currentColor"
      />
      <Path
        d="M9.21061 7.57986V16.4199C8.83061 16.4199 8.51061 16.7399 8.51061 17.1199V20.1399H7.35061C3.40061 20.1399 2.10061 18.9599 2.01061 15.2799C2.00061 15.0899 2.08061 14.9099 2.21061 14.7799C2.34061 14.6399 2.53061 14.5699 2.71061 14.5699C4.11061 14.5699 5.26061 13.4199 5.26061 12.0099C5.26061 10.5999 4.11061 9.43986 2.71061 9.43986C2.51061 9.43986 2.34061 9.36986 2.21061 9.22986C2.08061 9.09986 2.00061 8.90986 2.01061 8.72986C2.10061 5.03986 3.40061 3.85986 7.35061 3.85986H8.51061V6.87986C8.51061 7.26986 8.83061 7.57986 9.21061 7.57986Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TicketStarLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.9949 4H6.99488C3.16488 4 2.09488 4.92 2.00488 8.5C3.93488 8.5 5.49488 10.07 5.49488 12C5.49488 13.93 3.93488 15.49 2.00488 15.5C2.09488 19.08 3.16488 20 6.99488 20H16.9949C20.9949 20 21.9949 19 21.9949 15V9C21.9949 5 20.9949 4 16.9949 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.99316 4V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.99316 16.5V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.025 9.32991L15.645 10.5799C15.705 10.6999 15.825 10.7899 15.955 10.8099L17.335 11.0099C17.675 11.0599 17.815 11.4799 17.565 11.7199L16.565 12.6899C16.465 12.7799 16.425 12.9199 16.445 13.0599L16.685 14.4299C16.745 14.7699 16.385 15.0299 16.085 14.8699L14.855 14.2199C14.735 14.1599 14.585 14.1599 14.465 14.2199L13.235 14.8699C12.925 15.0299 12.575 14.7699 12.635 14.4299L12.875 13.0599C12.895 12.9199 12.855 12.7899 12.755 12.6899L11.765 11.7199C11.515 11.4799 11.655 11.0599 11.995 11.0099L13.375 10.8099C13.515 10.7899 13.625 10.7099 13.685 10.5799L14.295 9.32991C14.435 9.01991 14.875 9.01991 15.025 9.32991Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const TicketStarOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M17.0007 20.75H7.0007C2.7507 20.75 1.3607 19.48 1.2607 15.52C1.2607 15.32 1.3307 15.12 1.4707 14.98C1.6107 14.84 1.8007 14.75 2.0107 14.75C3.5207 14.75 4.7507 13.51 4.7507 12C4.7507 10.49 3.5207 9.25 2.0107 9.25C1.8107 9.25 1.6207 9.17 1.4707 9.02C1.3207 8.87 1.2507 8.68 1.2607 8.48C1.3607 4.52 2.7507 3.25 7.0007 3.25H17.0007C21.4107 3.25 22.7507 4.59 22.7507 9V15C22.7507 19.41 21.4107 20.75 17.0007 20.75ZM2.7907 16.18C2.9607 18.72 3.8207 19.25 7.0007 19.25H17.0007C20.5807 19.25 21.2507 18.57 21.2507 15V9C21.2507 5.43 20.5807 4.75 17.0007 4.75H7.0007C3.8207 4.75 2.9607 5.29 2.7907 7.82C4.7607 8.2 6.2507 9.93 6.2507 12C6.2507 14.07 4.7607 15.8 2.7907 16.18Z"
        fill="currentColor"
      />
      <Path
        d="M9 8.25C8.59 8.25 8.25 7.91 8.25 7.5V4C8.25 3.59 8.59 3.25 9 3.25C9.41 3.25 9.75 3.59 9.75 4V7.5C9.75 7.91 9.41 8.25 9 8.25Z"
        fill="currentColor"
      />
      <Path
        d="M9 20.75C8.59 20.75 8.25 20.41 8.25 20V16.5C8.25 16.09 8.59 15.75 9 15.75C9.41 15.75 9.75 16.09 9.75 16.5V20C9.75 20.41 9.41 20.75 9 20.75Z"
        fill="currentColor"
      />
      <Path
        d="M13.0401 15.6501C12.8001 15.6501 12.5601 15.5701 12.3601 15.4301C12.0001 15.1701 11.8201 14.7301 11.9001 14.2901L12.1101 13.1001L11.2401 12.2501C10.9201 11.9401 10.8101 11.4801 10.9401 11.0601C11.0801 10.6401 11.4401 10.3301 11.8801 10.2701L13.0801 10.0901L13.6201 9.0001C13.8201 8.6001 14.2201 8.3501 14.6601 8.3501C15.1101 8.3501 15.5101 8.6001 15.7001 9.0001L16.2401 10.0901L17.4401 10.2701C17.8801 10.3301 18.2401 10.6401 18.3801 11.0601C18.5201 11.4801 18.4001 11.9401 18.0801 12.2501L17.2101 13.1001L17.4201 14.2901C17.5001 14.7301 17.3201 15.1701 16.9601 15.4301C16.6001 15.6901 16.1301 15.7201 15.7401 15.5201L14.6701 14.9601L13.5901 15.5201C13.4201 15.6101 13.2301 15.6501 13.0401 15.6501ZM12.7701 11.6501L13.2801 12.1501C13.5601 12.4201 13.6801 12.8001 13.6201 13.1801L13.5001 13.8801L14.1301 13.5501C14.4701 13.3701 14.8701 13.3701 15.2101 13.5501L15.8401 13.8801L15.7201 13.1801C15.6601 12.7901 15.7801 12.4101 16.0601 12.1501L16.5701 11.6501L15.8701 11.5501C15.4901 11.4901 15.1601 11.2501 14.9901 10.9101L14.6801 10.2701L14.3701 10.9101C14.2001 11.2501 13.8701 11.4901 13.4901 11.5501L12.7701 11.6501Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const TicketStarTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M16.9959 4H6.99586C3.16586 4 2.09586 4.92 2.00586 8.5C3.93586 8.5 5.49586 10.07 5.49586 12C5.49586 13.93 3.93586 15.49 2.00586 15.5C2.09586 19.08 3.16586 20 6.99586 20H16.9959C20.9959 20 21.9959 19 21.9959 15V9C21.9959 5 20.9959 4 16.9959 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.99414 4V7.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M8.99414 16.5V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M15.024 9.33016L15.644 10.5802C15.704 10.7002 15.824 10.7902 15.954 10.8102L17.334 11.0102C17.674 11.0602 17.814 11.4802 17.564 11.7202L16.564 12.6902C16.464 12.7802 16.424 12.9202 16.444 13.0602L16.684 14.4302C16.744 14.7702 16.384 15.0302 16.084 14.8702L14.854 14.2202C14.734 14.1602 14.584 14.1602 14.464 14.2202L13.234 14.8702C12.924 15.0302 12.574 14.7702 12.634 14.4302L12.874 13.0602C12.894 12.9202 12.854 12.7902 12.754 12.6902L11.764 11.7202C11.514 11.4802 11.654 11.0602 11.994 11.0102L13.374 10.8102C13.514 10.7902 13.624 10.7102 13.684 10.5802L14.294 9.33016C14.434 9.02016 14.874 9.02016 15.024 9.33016Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const variants: IconVariants = {
  bold: TicketStarBold,
  broken: TicketStarBroken,
  bulk: TicketStarBulk,
  linear: TicketStarLinear,
  outline: TicketStarOutline,
  twotone: TicketStarTwotone,
};

export const TicketStarIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
