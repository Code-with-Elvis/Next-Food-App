"use client";

import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { IoColorPaletteOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const themes = [
  { id: "dark", label: "Default Dark", preview: "#1A201A" },
  { id: "chili-ember", label: "Chili Ember", preview: "#FF5733" },
  { id: "midnight-blueberry", label: "Midnight Blueberry", preview: "#3B4BFF" },
  { id: "matcha-shadow", label: "Matcha Shadow", preview: "#4A7A4C" },
  { id: "cocoa-velvet", label: "Cocoa Velvet", preview: "#4F2D1E" },
];

const Theme = () => {
  const { theme, setTheme } = useTheme();

  const applyTheme = (id: string) => {
    const root = document.documentElement;

    // Remove ALL theme classes
    themes.forEach((t) => root.classList.remove(t.id));

    // Add the current theme
    root.classList.add(id);

    // Update next-themes internal state
    setTheme(id);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="icon">
          <IoColorPaletteOutline className="size-5" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56 max-[1280px]:mr-4">
        <DropdownMenuLabel>Choose Theme</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {themes.map((t) => (
          <DropdownMenuCheckboxItem
            key={t.id}
            checked={theme === t.id}
            onCheckedChange={() => applyTheme(t.id)}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span
              className="inline-block size-4 rounded-full border border-white/20"
              style={{ backgroundColor: t.preview }}
            />
            {t.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Theme;
