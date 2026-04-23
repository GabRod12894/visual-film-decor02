import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface ServiceHeroSectionProps {
  badge: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
  icon?: ReactNode;
  children?: ReactNode;
}

export function ServiceHeroSection({
  badge,
  title,
  description,
  buttonText,
  buttonHref,
  icon,
  children,
}: ServiceHeroSectionProps) {
  return (
    <section className="bg-gradient-to-br from-primary/5 to-secondary/5 py-16 lg:py-24 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-5">
              <Badge variant="secondary" className="w-fit mx-auto">{badge}</Badge>
              <h1 className="text-5xl lg:text-7xl font-serif font-extrabold text-gray-900 drop-shadow-lg">{title}</h1>
              <p className="text-xl text-gray-700 leading-relaxed">{description}</p>
            </div>
            {buttonText && buttonHref && (
              <Button size="lg" asChild>
                <Link href={buttonHref}>
                  {icon}
                  {buttonText}
                </Link>
              </Button>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
