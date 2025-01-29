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

const filteredIcons: string[] = [];
// const filteredIcons = ["arrow", "caret", "chevron"];

export default function Home() {
  return (
    <Box className="min-h-screen bg-background flex flex-col gap-2 p-8">
      <Box className="w-full max-w-3xl mx-auto">
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="w-20">Bold</TableHead>
              <TableHead className="w-20">Linear</TableHead>
              <TableHead className="w-20">Outline</TableHead>
              <TableHead className="w-20">Broken</TableHead>
              <TableHead className="w-20">Bulk</TableHead>
              <TableHead className="w-20">TwoTone</TableHead>
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
                  <TableCell>
                    <Component variant="bold" />
                  </TableCell>
                  <TableCell>
                    <Component variant="linear" />
                  </TableCell>
                  <TableCell>
                    <Component variant="outline" />
                  </TableCell>
                  <TableCell>
                    <Component variant="broken" />
                  </TableCell>
                  <TableCell>
                    <Component variant="bulk" />
                  </TableCell>
                  <TableCell>
                    <Component variant="twotone" />
                  </TableCell>
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
