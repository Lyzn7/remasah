import schedule from "@/data/schedule.json";
import { Section } from "@/components/section";
import { ScheduleList, type ScheduleItem } from "@/components/schedule-list";
import { buildMetadata } from "@/lib/metadata";

export const generateMetadata = () =>
  buildMetadata({
    title: "Jadwal",
    description: "Jadwal kajian, kelas, dan kegiatan sosial Remaja Masjid Asiah pekan ini dan bulan depan.",
    canonicalPath: "/jadwal",
  });

export default function JadwalPage() {
  return (
    <div className="bg-background text-foreground">
      <Section title="Jadwal Kegiatan" subtitle="Selalu terbarui">
        <ScheduleList items={schedule as ScheduleItem[]} />
      </Section>
    </div>
  );
}
