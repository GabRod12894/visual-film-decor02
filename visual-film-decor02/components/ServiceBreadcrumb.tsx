import Link from "next/link";

interface ServiceBreadcrumbProps {
  items: { label: string; href?: string }[];
}

export function ServiceBreadcrumb({ items }: ServiceBreadcrumbProps) {
  return (
    <section className="bg-card py-4 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
          {items.map((item, idx) => (
            <>
              {item.href ? (
                <Link href={item.href} className="hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-foreground">{item.label}</span>
              )}
              {idx < items.length - 1 && <span>/</span>}
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
