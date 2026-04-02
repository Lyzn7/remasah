export const managementPeriod = "2026-2030";

export const managementStructure = [
  { title: "Ketua", members: ["Isnan"] },
  { title: "Wakil Ketua", members: ["Abror"] },
  { title: "Sekretaris", members: ["Dinka", "Wildan", "Fany"] },
  { title: "Bendahara", members: ["Nurul", "Alfin"] },
  { title: "Humas", members: ["Vicky", "Fatur"] },
  { title: "Seksi Kegiatan", members: ["Ady", "Ardi", "Leny"] },
  { title: "Dokumentasi", members: ["Ahmad", "Azrin", "Adit"] },
];

export const shortTermPrograms = [
  "Kajian Al-Qur'an",
  "Bakti Sosial",
  "Pembuatan Media Sosial",
];

export const managementSummary = {
  totalMembers: managementStructure.reduce(
    (total, division) => total + division.members.length,
    0,
  ),
  totalDivisions: managementStructure.length,
  totalPrograms: shortTermPrograms.length,
};
