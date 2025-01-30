import { Box } from "unative/ui/box";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "unative/ui/table";
import * as icons from "@unative/icons/iconsax";
import { toKebabCase } from "remeda";
import SvgComponentSample from "@/app/icons/svg-component-sample";
import { IconVariant } from "@unative/icons/icon-options";

const filteredIcons: string[] = [];
// const filteredIcons = ["arrow", "caret", "chevron"];
const iconVariants: IconVariant[] = [
  "bold",
  "linear",
  "broken",
  "bulk",
  "twotone",
];

export default function Home() {
  return (
    <Box className="min-h-screen bg-background flex flex-col gap-2 p-8">
      <Box className="w-full max-w-3xl mx-auto">
        <Box className="flex flex-row gap-4">
          {iconVariants.map((variant) => {
            return (
              <SvgComponentSample key={variant} size={96} variant={variant} />
            );
          })}
        </Box>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              {iconVariants.map((variant) => {
                return (
                  <TableHead key={variant} className="w-20">
                    {variant}
                  </TableHead>
                );
              })}
            </TableRow>
          </TableHeader>
          <TableBody>
            {Object.entries(icons).map(([iconName, Component]) => {
              let isVisible = true;
              if (filteredIcons.length > 0) {
                if (
                  filteredIcons.some((el) =>
                    iconName.toLowerCase().startsWith(el)
                  )
                ) {
                  isVisible = true;
                }
              }

              if (!isVisible) return null;
              return (
                <TableRow key={iconName}>
                  <TableCell>
                    {toKebabCase(iconName.replace("Icon", ""))}
                  </TableCell>
                  {iconVariants.map((variant) => {
                    return (
                      <TableCell key={variant}>
                        <Component
                          variant={variant}
                          strokeWidth={1}
                          size={48}
                        />
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell className="font-medium">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Credit Card</TableCell>
              <TableCell className="text-right">$250.00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}
