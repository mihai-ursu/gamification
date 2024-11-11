import * as React from "react";
import { cn } from "@/utils/cn";

export type ButtonProps = {
  asChild?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(
          "cursor-pointer select-none rounded-lg border-b-[1px] border-blue-400 bg-blue-500 px-8 py-3 text-white transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button };
