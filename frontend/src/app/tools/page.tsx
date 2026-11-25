import type { Metadata } from "next";
import { ToolsCatalogView } from "@/components/tools-page/ToolsCatalogView";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Ready-made Softlligence tools: Showroom, a dealership website platform; Cleanmeta, a private image metadata cleaner; and Softlligence Voice, AI voice cloning and speech. Available as a license or monthly subscription.",
};

export default function ToolsPage() {
  return (
    <main>
      <ToolsCatalogView />
    </main>
  );
}
