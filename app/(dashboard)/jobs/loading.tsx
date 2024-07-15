import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <div className="grid gap-4 rounded-lg border p-8 sm:grid-cols-2 md:grid-cols-3">
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
      <Skeleton className="h-10" />
    </div>
  );
}
export default loading;
