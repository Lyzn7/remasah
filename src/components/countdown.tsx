"use client";

import { useEffect, useMemo, useState } from "react";
import { Card } from "./card";
import { formatDate } from "@/lib/date";

type Props = {
  title: string;
  date: string;
};

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(target: Date): TimeLeft {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export function Countdown({ title, date }: Props) {
  const target = useMemo(() => new Date(date), [date]);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(target));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(target));
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <Card className="bg-gradient-to-br from-brand-light via-white to-brand-light shadow-soft">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-brand">Hitung Mundur</p>
          <h3 className="text-2xl font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted">{formatDate(date)}</p>
        </div>
        <div className="flex gap-3">
          {(["days", "hours", "minutes", "seconds"] as const).map((unit) => (
            <div
              key={unit}
              className="flex w-16 flex-col items-center rounded-xl bg-white/90 px-3 py-2 text-brand-dark shadow"
            >
              <span className="text-xl font-bold tabular-nums">
                {timeLeft[unit].toString().padStart(2, "0")}
              </span>
              <span className="text-xs uppercase text-muted">{unit.replace(/s$/, "")}</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
