"use client";
import { useState } from "react";
import { cn } from "unative/lib";
import { Button, ButtonProps } from "unative/ui/button";
import { useCopyToClipboard } from "@uidotdev/usehooks";
import { CopyIcon } from "@unative/icons/iconsax/copy";
import { CopySuccessIcon } from "@unative/icons/iconsax/copy-success";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
export type CopyCodeButtonProps = ButtonProps & {
  code: string;
};
const CopyCodeButton = ({ code, className, ...props }: CopyCodeButtonProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const [, copyToClipboard] = useCopyToClipboard();

  const onCopy = async () => {
    try {
      copyToClipboard(code);
      setIsCopied(true);
    } catch {
      setIsCopied(false);
    } finally {
      await sleep(1000);
      setIsCopied(false);
    }
  };

  return (
    <Button
      type="button"
      variant="unstyled"
      onClick={() => {
        onCopy();
      }}
      className={cn(
        "h-8 w-8",
        isCopied ? "bg-positive" : "bg-transparent hover:bg-white/30",
        className,
      )}
      {...props}
    >
      {isCopied ? (
        <CopySuccessIcon size={20} className="text-white" variant="bold" />
      ) : (
        <CopyIcon size={20} className="text-white" variant="bold" />
      )}
    </Button>
  );
};

export default CopyCodeButton;
