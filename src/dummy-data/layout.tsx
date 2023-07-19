import { ValidBlockConfig } from "../definition";
export const layout: ValidBlockConfig[] = [
    {
      blockType: "fotoscape_block",
      settings: {
        layout: "small-photocard",
        count: 1,
      },
    },
    {
      blockType: "fotoscape_block",
      settings: {
        layout: "tile",
        count: 6,
      },
    },
  ];