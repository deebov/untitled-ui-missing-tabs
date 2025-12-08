"use client";

import { Tabs } from "@/components/application/tabs/tabs";
import { usePathname } from "next/navigation";

const tabs = [
  { id: "tab-0", label: "Tab 0" },
  { id: "tab-1", label: "Tab 1" },
];

export default function PageTabs() {
  usePathname();

  return (
    <Tabs className="mt-4">
      <Tabs.List items={tabs} />
    </Tabs>
    );
  }
