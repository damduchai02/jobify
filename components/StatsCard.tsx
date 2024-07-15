import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "./ui/skeleton";

type StatsCardProps = {
  title: string;
  value: number;
};

function StatsCard({ title, value }: StatsCardProps) {
  return (
    <Card className="bg-muted">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="capitalize">{title}</CardTitle>
        <CardDescription className="mt-[0px!important] text-4xl font-extrabold text-primary">
          {value}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
export function StatsLoadingCard() {
  return (
    <Card className="h-[88px] w-[330px]">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[150px]" />
            <Skeleton className="h-4 w-[100px]" />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

export default StatsCard;
