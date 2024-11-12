import * as React from "react";
import { cn } from "@/utils/cn";

export type ButtonProps = {
  isActive?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, isActive, ...props }, ref) => {
    return (
      <button
        className={cn(
          "cursor-pointer select-none rounded-lg border-b-[1px] border-blue-400 bg-blue-500 px-8 py-3 text-white transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841] active:translate-y-2 active:border-b-[0px] active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]",
          isActive &&
            "translate-y-2 border-violet-300 bg-violet-500 [box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]",
          props.disabled &&
            "border-slate-400 bg-slate-400 [box-shadow:0_10px_0_0_#64748b,0_15px_0_0_#e2e8f0] active:translate-y-0 active:border-b-[1px] active:[box-shadow:0_10px_0_0_#64748b,0_15px_0_0_#e2e8f0]",
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
