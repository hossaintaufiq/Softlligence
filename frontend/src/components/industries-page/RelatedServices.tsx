import Link from "next/link";
import type { IndustryRelatedService } from "@/lib/industriesPageEnrichment";

export function RelatedServices({ services }: { services: IndustryRelatedService[] }) {
  return (
    <div className="ip-related-services">
      {services.map((service) => (
        <Link key={service.label} href={service.href} className="ip-service-chip">
          {service.label}
          <span aria-hidden="true">→</span>
        </Link>
      ))}
    </div>
  );
}
