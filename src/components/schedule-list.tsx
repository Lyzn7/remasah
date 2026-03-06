import { formatDate } from "@/lib/date";
import { Card } from "./card";

export type ScheduleItem = {
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  speaker?: string;
};

type Props = {
  items: ScheduleItem[];
  limit?: number;
};

export function ScheduleList({ items, limit }: Props) {
  const sliced = limit ? items.slice(0, limit) : items;
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {sliced.map((item) => (
        <Card key={`${item.title}-${item.date}`} className="flex gap-4">
          <div className="flex w-20 flex-col items-center justify-center rounded-xl bg-brand-light p-2 text-brand-dark">
            <span className="text-xs font-semibold">
              {new Date(item.date).toLocaleDateString("id-ID", { weekday: "short" })}
            </span>
            <span className="text-xl font-bold">
              {new Date(item.date).getDate().toString().padStart(2, "0")}
            </span>
            <span className="text-xs">{new Date(item.date).toLocaleDateString("id-ID", { month: "short" })}</span>
          </div>
          <div className="flex-1 space-y-1">
            <p className="text-sm font-semibold uppercase text-brand">{item.category}</p>
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="text-sm text-muted">
              {formatDate(item.date)} · {item.time}
            </p>
            <p className="text-sm text-muted">{item.location}</p>
            {item.speaker && <p className="text-sm text-muted/90">Pembicara: {item.speaker}</p>}
          </div>
        </Card>
      ))}
    </div>
  );
}
