import programs from "@/data/programs.json";
import { Card } from "@/components/card";
import { Section } from "@/components/section";
import { buildMetadata } from "@/lib/metadata";

export const generateMetadata = () =>
  buildMetadata({
    title: "Program",
    description:
      "Daftar program jangka pendek Remaja Masjid Asiah: Kajian Al-Qur'an, bakti sosial, dan pembuatan media sosial.",
    canonicalPath: "/program",
  });

export default function ProgramPage() {
  return (
    <div className="bg-background text-foreground">
      <Section title="Program Jangka Pendek" subtitle="Fokus gerak kami">
        <div className="grid gap-5 md:grid-cols-3">
          {programs.map((program) => (
            <Card key={program.title} className="flex flex-col gap-3">
              <span className="text-3xl">{program.icon}</span>
              <h3 className="text-lg font-semibold">{program.title}</h3>
              <p className="text-sm text-muted">{program.description}</p>
              <p className="text-xs uppercase text-brand">Berjalan</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
