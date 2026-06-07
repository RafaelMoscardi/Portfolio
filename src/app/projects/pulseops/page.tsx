import type { Metadata } from "next";
import PulseOpsContent from "@/components/pages/PulseOpsContent";

export const metadata: Metadata = {
  title: "PulseOps — Estudo de Caso · Rafael Moscardi",
  description:
    "Estudo de caso do PulseOps: plataforma full-stack de monitoramento de APIs e sites com dashboard, histórico de checks e alertas.",
};

export default function PulseOpsPage() {
  return <PulseOpsContent />;
}
