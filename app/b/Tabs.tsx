"use client";

import { usePathname } from "next/navigation";
import { Tab, TabList, Tabs } from "react-aria-components";

export default function PageTabs() {
  usePathname();

  return (
    <Tabs className="mt-4">
      <TabList
        className="flex gap-2"
        items={[
          { id: "tab-0", label: "Tab 0" },
          { id: "tab-1", label: "Tab 1" },
        ]}
      >
        {(item) => (
          <Tab key={item.id} id={item.id}>
            {item.label}
          </Tab>
        )}
      </TabList>
    </Tabs>
  );
}
