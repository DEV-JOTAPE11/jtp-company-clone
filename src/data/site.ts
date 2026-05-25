import type { NavItem, SelectOption } from "../types/site";

export const navItems: NavItem[] = [
  { label: "Diferenciais", targetId: "diferenciais" },
  { label: "Depoimentos", targetId: "depoimentos" },
  { label: "Serviços", targetId: "servicos" },
  { label: "Comparativo", targetId: "comparativo" },
  { label: "Agente IA", targetId: "agente-ia" },
  { label: "Contato", targetId: "formulario" }
];

export const setorOptions: SelectOption[] = [
  { label: "Serviço", value: "Serviço" },
  { label: "Varejo", value: "Varejo" },
  { label: "Indústria", value: "Indústria" },
  { label: "E-commerce", value: "E-commerce" },
  { label: "SAAS", value: "SAAS" },
  { label: "Educação", value: "Educação" },
  { label: "Outro", value: "Outro" }
];

export const faturamentoOptions: SelectOption[] = [
  { label: "Até R$ 50 mil", value: "Até R$ 50 mil" },
  { label: "R$ 50-100 mil", value: "R$ 50-100 mil" },
  { label: "R$ 100-500 mil", value: "R$ 100-500 mil" },
  { label: "R$ 500 mil+", value: "R$ 500 mil+" }
];
