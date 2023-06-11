type Mods = Record<string, boolean | string>;

export function className(cls: string, mods: Mods, additional: string[]): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
    .filter(([_, value]) => Boolean(value))
    .map(([cls]) => cls)
  ].join(" ");
}

// className("renove-btn", {hovered: true, selectable: true, red: false}, ["pdg"])