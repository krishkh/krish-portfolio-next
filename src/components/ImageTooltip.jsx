import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ImageTooltip({ content, children }) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>{children}</TooltipTrigger>
        <TooltipContent
          side="top"
          className="bg-primary text-primary-foreground"
        >
          <p className="font-semibold">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
