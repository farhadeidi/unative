import { useContext } from "react";
import { Path, Svg } from "unative/lib/svg";
import { cn } from "unative/lib/utils";
import { TextClassContext } from "unative/ui/text";

import { iconDefaultOptions } from "../icons-configuration";
import type { IconProps, IconVariants } from "../types/icons-type";

const MoneysBold = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.1709 6.63953C18.7409 4.46953 17.1309 3.51953 14.8909 3.51953H6.11094C3.47094 3.51953 1.71094 4.83953 1.71094 7.91953V13.0695C1.71094 15.2895 2.62094 16.5895 4.12094 17.1495C4.34094 17.2295 4.58094 17.2995 4.83094 17.3395C5.23094 17.4295 5.66094 17.4695 6.11094 17.4695H14.9009C17.5409 17.4695 19.3009 16.1495 19.3009 13.0695V7.91953C19.3009 7.44953 19.2609 7.02953 19.1709 6.63953ZM5.53094 11.9995C5.53094 12.4095 5.19094 12.7495 4.78094 12.7495C4.37094 12.7495 4.03094 12.4095 4.03094 11.9995V8.99953C4.03094 8.58953 4.37094 8.24953 4.78094 8.24953C5.19094 8.24953 5.53094 8.58953 5.53094 8.99953V11.9995ZM10.5009 13.1395C9.04094 13.1395 7.86094 11.9595 7.86094 10.4995C7.86094 9.03953 9.04094 7.85953 10.5009 7.85953C11.9609 7.85953 13.1409 9.03953 13.1409 10.4995C13.1409 11.9595 11.9609 13.1395 10.5009 13.1395ZM16.9609 11.9995C16.9609 12.4095 16.6209 12.7495 16.2109 12.7495C15.8009 12.7495 15.4609 12.4095 15.4609 11.9995V8.99953C15.4609 8.58953 15.8009 8.24953 16.2109 8.24953C16.6209 8.24953 16.9609 8.58953 16.9609 8.99953V11.9995Z"
        fill="currentColor"
      />
      <Path
        d="M22.3017 10.9183V16.0683C22.3017 19.1483 20.5417 20.4783 17.8917 20.4783H9.11172C8.36172 20.4783 7.69172 20.3683 7.11172 20.1483C6.64172 19.9783 6.23172 19.7283 5.90172 19.4083C5.72172 19.2383 5.86172 18.9683 6.11172 18.9683H14.8917C18.5917 18.9683 20.7917 16.7683 20.7917 13.0783V7.91832C20.7917 7.67832 21.0617 7.52832 21.2317 7.70832C21.9117 8.42832 22.3017 9.47832 22.3017 10.9183Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoneysBroken = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M1.69922 7.91998C1.69922 4.83998 3.45921 3.52002 6.09921 3.52002H14.8892C17.1292 3.52002 18.7392 4.47001 19.1692 6.64001C19.2492 7.03001 19.2892 7.44998 19.2892 7.91998V13.07C19.2892 16.15 17.5292 17.47 14.8892 17.47H6.09921C5.64921 17.47 5.21921 17.43 4.81921 17.34C4.56921 17.3 4.32919 17.23 4.10919 17.15C2.60919 16.59 1.69922 15.29 1.69922 13.07V12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.3001 15.0101V16.0701C22.3001 19.1501 20.5401 20.4701 17.9001 20.4701H9.11008C8.37008 20.4701 7.70009 20.3701 7.12009 20.1501C5.93009 19.7101 5.12008 18.8001 4.83008 17.3401C5.23008 17.4301 5.66008 17.4701 6.11008 17.4701H14.9001C17.5401 17.4701 19.3001 16.1501 19.3001 13.0701V7.9201C19.3001 7.4501 19.2601 7.03014 19.1801 6.64014C21.0901 7.03014 22.3001 8.37011 22.3001 10.9201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.1394 10.4999C13.1394 9.03988 11.9594 7.85986 10.4994 7.85986C9.03939 7.85986 7.85938 9.03988 7.85938 10.4999C7.85938 11.9599 9.03939 13.1399 10.4994 13.1399"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.7793 8.30005V12.7001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2188 8.30005V12.7001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MoneysBulk = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.3009 7.91998V13.07C19.3009 16.15 17.5409 17.47 14.9009 17.47H6.11093C5.66093 17.47 5.23093 17.43 4.83093 17.34C4.58093 17.3 4.34094 17.23 4.12094 17.15C2.62094 16.59 1.71094 15.29 1.71094 13.07V7.91998C1.71094 4.83998 3.47093 3.52002 6.11093 3.52002H14.9009C17.1409 3.52002 18.7509 4.47001 19.1809 6.64001C19.2509 7.04001 19.3009 7.44998 19.3009 7.91998Z"
        fill="currentColor"
      />
      <Path
        d="M22.3001 10.9201V16.0701C22.3001 19.1501 20.5401 20.4701 17.9001 20.4701H9.11008C8.37008 20.4701 7.70009 20.3701 7.12009 20.1501C5.93009 19.7101 5.12008 18.8001 4.83008 17.3401C5.23008 17.4301 5.66008 17.4701 6.11008 17.4701H14.9001C17.5401 17.4701 19.3001 16.1501 19.3001 13.0701V7.9201C19.3001 7.4501 19.2601 7.03014 19.1801 6.64014C21.0801 7.04014 22.3001 8.38011 22.3001 10.9201Z"
        fill="currentColor"
      />
      <Path
        d="M10.4994 13.1399C11.9574 13.1399 13.1394 11.9579 13.1394 10.4999C13.1394 9.04185 11.9574 7.85986 10.4994 7.85986C9.04136 7.85986 7.85938 9.04185 7.85938 10.4999C7.85938 11.9579 9.04136 13.1399 10.4994 13.1399Z"
        fill="currentColor"
      />
      <Path
        d="M4.7793 8.25C4.3693 8.25 4.0293 8.59 4.0293 9V12C4.0293 12.41 4.3693 12.75 4.7793 12.75C5.1893 12.75 5.5293 12.41 5.5293 12V9C5.5293 8.59 5.1993 8.25 4.7793 8.25Z"
        fill="currentColor"
      />
      <Path
        d="M16.2109 8.25C15.8009 8.25 15.4609 8.59 15.4609 9V12C15.4609 12.41 15.8009 12.75 16.2109 12.75C16.6209 12.75 16.9609 12.41 16.9609 12V9C16.9609 8.59 16.6309 8.25 16.2109 8.25Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoneysLinear = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.3 7.91998V13.07C19.3 16.15 17.54 17.47 14.9 17.47H6.10995C5.65995 17.47 5.22996 17.43 4.82996 17.34C4.57996 17.3 4.33996 17.23 4.11996 17.15C2.61996 16.59 1.70996 15.29 1.70996 13.07V7.91998C1.70996 4.83998 3.46995 3.52002 6.10995 3.52002H14.9C17.14 3.52002 18.75 4.47001 19.18 6.64001C19.25 7.04001 19.3 7.44998 19.3 7.91998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.3011 10.9201V16.0701C22.3011 19.1501 20.5411 20.4701 17.9011 20.4701H9.11105C8.37105 20.4701 7.70106 20.3701 7.12106 20.1501C5.93106 19.7101 5.12105 18.8001 4.83105 17.3401C5.23105 17.4301 5.66105 17.4701 6.11105 17.4701H14.9011C17.5411 17.4701 19.3011 16.1501 19.3011 13.0701V7.9201C19.3011 7.4501 19.2611 7.03014 19.1811 6.64014C21.0811 7.04014 22.3011 8.38011 22.3011 10.9201Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4984 13.1399C11.9564 13.1399 13.1384 11.9579 13.1384 10.4999C13.1384 9.04185 11.9564 7.85986 10.4984 7.85986C9.04038 7.85986 7.8584 9.04185 7.8584 10.4999C7.8584 11.9579 9.04038 13.1399 10.4984 13.1399Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.78003 8.30005V12.7001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M16.2217 8.30029V12.7003"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

const MoneysOutline = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M14.8892 18.2197H6.09921C5.57921 18.2197 5.0892 18.1698 4.6492 18.0698C4.4192 18.0398 4.13921 17.9597 3.84921 17.8497C2.51921 17.3497 0.949219 16.1198 0.949219 13.0598V7.90973C0.949219 4.63973 2.82921 2.75977 6.09921 2.75977H14.8892C17.6492 2.75977 19.4292 4.07974 19.9092 6.47974C19.9992 6.91974 20.0392 7.38973 20.0392 7.90973V13.0598C20.0392 16.3498 18.1692 18.2197 14.8892 18.2197ZM6.10919 4.27979C3.64919 4.27979 2.4592 5.46975 2.4592 7.92975V13.0798C2.4592 14.8698 3.08921 15.9698 4.37921 16.4598C4.57921 16.5298 4.76922 16.5797 4.94922 16.6097C5.32922 16.6897 5.69919 16.7297 6.10919 16.7297H14.8992C17.3592 16.7297 18.5492 15.5398 18.5492 13.0798V7.92975C18.5492 7.50975 18.5192 7.13974 18.4492 6.79974C18.1092 5.09974 16.9492 4.27979 14.8992 4.27979H6.10919Z"
        fill="currentColor"
      />
      <Path
        d="M17.8911 21.2198H9.10107C8.25107 21.2198 7.49106 21.0998 6.84106 20.8498C5.37106 20.2998 4.41105 19.1398 4.08105 17.4798C4.03105 17.2298 4.11107 16.9698 4.29107 16.7998C4.47107 16.6198 4.73107 16.5498 4.98107 16.6098C5.31107 16.6798 5.68107 16.7198 6.10107 16.7198H14.8911C17.3511 16.7198 18.5411 15.5299 18.5411 13.0699V7.91984C18.5411 7.49984 18.5111 7.12984 18.4411 6.78984C18.3911 6.53984 18.4711 6.28985 18.6411 6.10985C18.8211 5.92985 19.0711 5.84983 19.3211 5.90983C21.7211 6.39983 23.0411 8.17984 23.0411 10.9198V16.0699C23.0411 19.3499 21.1711 21.2198 17.8911 21.2198ZM5.92107 18.2198C6.24107 18.7998 6.72107 19.2099 7.38107 19.4499C7.86107 19.6299 8.44105 19.7198 9.11105 19.7198H17.9011C20.3611 19.7198 21.551 18.5299 21.551 16.0699V10.9198C21.551 9.33984 21.061 8.28985 20.051 7.73985C20.051 7.79985 20.051 7.85984 20.051 7.91984V13.0699C20.051 16.3399 18.1711 18.2198 14.9011 18.2198H6.11105C6.04105 18.2198 5.98107 18.2198 5.92107 18.2198Z"
        fill="currentColor"
      />
      <Path
        d="M10.4994 13.8899C8.62939 13.8899 7.10938 12.3699 7.10938 10.4999C7.10938 8.62988 8.62939 7.10986 10.4994 7.10986C12.3694 7.10986 13.8894 8.62988 13.8894 10.4999C13.8894 12.3699 12.3694 13.8899 10.4994 13.8899ZM10.4994 8.60986C9.45939 8.60986 8.60938 9.45988 8.60938 10.4999C8.60938 11.5399 9.45939 12.3899 10.4994 12.3899C11.5394 12.3899 12.3894 11.5399 12.3894 10.4999C12.3894 9.45988 11.5394 8.60986 10.4994 8.60986Z"
        fill="currentColor"
      />
      <Path
        d="M4.78125 13.4498C4.37125 13.4498 4.03125 13.1098 4.03125 12.6998V8.2998C4.03125 7.8898 4.37125 7.5498 4.78125 7.5498C5.19125 7.5498 5.53125 7.8898 5.53125 8.2998V12.6998C5.53125 13.1098 5.20125 13.4498 4.78125 13.4498Z"
        fill="currentColor"
      />
      <Path
        d="M16.2109 13.4498C15.8009 13.4498 15.4609 13.1098 15.4609 12.6998V8.2998C15.4609 7.8898 15.8009 7.5498 16.2109 7.5498C16.6209 7.5498 16.9609 7.8898 16.9609 8.2998V12.6998C16.9609 13.1098 16.6309 13.4498 16.2109 13.4498Z"
        fill="currentColor"
      />
    </Svg>
  );
};

const MoneysTwotone = ({ size = 24, className, ...props }: IconProps) => {
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
        d="M19.3009 7.91998V13.07C19.3009 16.15 17.5409 17.47 14.9009 17.47H6.11093C5.66093 17.47 5.23093 17.43 4.83093 17.34C4.58093 17.3 4.34094 17.23 4.12094 17.15C2.62094 16.59 1.71094 15.29 1.71094 13.07V7.91998C1.71094 4.83998 3.47093 3.52002 6.11093 3.52002H14.9009C17.1409 3.52002 18.7509 4.47001 19.1809 6.64001C19.2509 7.04001 19.3009 7.44998 19.3009 7.91998Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M22.3001 10.9201V16.0701C22.3001 19.1501 20.5401 20.4701 17.9001 20.4701H9.11008C8.37008 20.4701 7.70009 20.3701 7.12009 20.1501C5.93009 19.7101 5.12008 18.8001 4.83008 17.3401C5.23008 17.4301 5.66008 17.4701 6.11008 17.4701H14.9001C17.5401 17.4701 19.3001 16.1501 19.3001 13.0701V7.9201C19.3001 7.4501 19.2601 7.03014 19.1801 6.64014C21.0801 7.04014 22.3001 8.38011 22.3001 10.9201Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.4994 13.1399C11.9574 13.1399 13.1394 11.9579 13.1394 10.4999C13.1394 9.04185 11.9574 7.85986 10.4994 7.85986C9.04136 7.85986 7.85938 9.04185 7.85938 10.4999C7.85938 11.9579 9.04136 13.1399 10.4994 13.1399Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M4.7793 8.2998V12.6998"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        opacity="0.4"
        d="M16.2207 8.2998V12.6998"
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
  bold: MoneysBold,
  broken: MoneysBroken,
  bulk: MoneysBulk,
  linear: MoneysLinear,
  outline: MoneysOutline,
  twotone: MoneysTwotone,
};

export const MoneysIcon = ({
  variant = iconDefaultOptions.variant,
  className,
  ...props
}: IconProps) => {
  const textClasses = useContext(TextClassContext);
  const Component = variants[variant];
  return <Component className={cn(textClasses, className)} {...props} />;
};
