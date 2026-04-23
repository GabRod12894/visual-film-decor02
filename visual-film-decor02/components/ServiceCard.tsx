import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  details: ReactNode;
  link: string;
}

export function ServiceCard({ icon, title, description, details, link }: ServiceCardProps) {
  return (
    <Card className="group border border-blue-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-blue-400 bg-white h-full min-h-[370px] flex-1 flex flex-col justify-between p-8 md:p-10 xl:p-12">
      <CardHeader className="space-y-4 pb-0">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors shadow-md">
            {icon}
          </div>
          <div>
            <CardTitle className="text-2xl font-serif font-bold text-primary">{title}</CardTitle>
            <CardDescription className="text-base text-muted-foreground">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6 pt-0">
        {details}
        <Button className="w-full mt-4 font-semibold" variant="secondary" asChild>
          <Link href={link}>
            Ver Detalhes Completos
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
