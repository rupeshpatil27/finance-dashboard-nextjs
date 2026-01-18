import { useOpenCategory } from "@/features/categories/hooks/use-open-category";
import { cn } from "@/lib/utils";
import { TriangleAlert } from "lucide-react";

export const CategoryColumn = ({ id, category, categoryID }) => {
  const { onOpen: onOpenCategory } = useOpenCategory();

  const onClick = () => {
    if (categoryID) {
      onOpenCategory(categoryID);
    }
  };

  return (
    <div
      onClick={onClick}
      className={cn("flex items-center cursor-pointer hover:underline",!category && "text-rose-500")}
    >
      {!category && <TriangleAlert className="mr-2 size-4 shrink-0"/>}
      {category || "Uncategorized"}
    </div>
  );
};
