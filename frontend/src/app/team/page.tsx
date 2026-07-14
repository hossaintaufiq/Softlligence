import type { Metadata } from "next";
import { TeamDetail } from "@/components/TeamDetail";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet Softlligence — engineers, designers, and delivery specialists building reliable, scalable digital products.",
};

export default function TeamPage() {
  return (
    <main>
      <TeamDetail />
    </main>
  );
}
