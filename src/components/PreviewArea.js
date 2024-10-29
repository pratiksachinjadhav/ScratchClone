import React from "react";
import SpriteControls from "./SpriteControls";
import SpriteScratch from "./SpriteScratch";
import PositionGraph from "./PositionGraph";
import { useSelector } from "react-redux";

export default function PreviewArea() {

  const selectedSpriteId = useSelector((state) => state.sprites.selectedSpriteId);
  return (
    <div className="flex flex-col h-full w-full p-2">
      <SpriteScratch />
      <SpriteControls />
      <PositionGraph spriteId={selectedSpriteId} />
    </div>
  );
}
