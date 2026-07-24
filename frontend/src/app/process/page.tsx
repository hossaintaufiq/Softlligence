import type { Metadata } from "next";
import { ProcessPageView } from "@/components/process-page/ProcessPageView";

export const metadata: Metadata = {
  title: "Process",
  description:
    "Five stages from discovery to growth — no stage starts before the last one is signed off.",
};

export default function ProcessPage() {
  return (
    <main>
      <ProcessPageView />
    </main>
  );
}
