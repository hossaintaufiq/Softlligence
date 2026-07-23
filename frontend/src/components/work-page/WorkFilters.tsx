import Link from "next/link";
import { cn } from "@/lib/utils";
import { filterHref, type WorkFilter } from "./workShared";

type FilterItem = { id: WorkFilter; label: string; count: number };

export function WorkFilters({
  filters,
  activeFilter,
}: {
  filters: FilterItem[];
  activeFilter: WorkFilter;
}) {
  return (
    <nav className="wp-filters" aria-label="Filter portfolio by category">
      <div className="wp-filters__track">
        {filters.map((item) => {
          const isActive = activeFilter === item.id;
          return (
            <Link
              key={item.id}
              href={filterHref(item.id)}
              scroll={false}
              className={cn("wp-filter", isActive && "wp-filter--active")}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="wp-filter__label">{item.label}</span>
              <span className="wp-filter__count">{item.count}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
