import type { Metadata } from "next";
import CondoHubContent from "@/components/pages/CondoHubContent";

export const metadata: Metadata = {
  title: "CondoHub — Estudo de Caso · Rafael Moscardi",
  description:
    "Estudo de caso do CondoHub: plataforma SaaS completa para gestão de condomínios com controle financeiro, comunicados, reservas e gestão de moradores.",
};

export default function CondoHubPage() {
  return <CondoHubContent />;
}
