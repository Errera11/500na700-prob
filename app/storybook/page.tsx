"use client";
import { useState } from "react";

import ArrowDownIcon from "@/src/shared/icons/ArrowDownIcon";
import ArrowTopIcon from "@/src/shared/icons/ArrowTopIcon";
import Logo from "@/src/shared/icons/Logo";
import Button from "@/src/shared/ui/Button/Button";
import Checkbox from "@/src/shared/ui/Checkbox/Checkbox";
import CustomLink from "@/src/shared/ui/CustomLink/CustomLink";
import Input from "@/src/shared/ui/Input/Input";

function Storybook() {
  const [checked, setChecked] = useState(false);
  const [input, setInput] = useState("");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Button>Hey</Button>
      <Button variant="dark">Hey</Button>
      <CustomLink href={"/"}>Link</CustomLink>
      <ArrowTopIcon />
      <ArrowDownIcon />
      <Logo />
      <Checkbox
        label="hello"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      />
      <Input value={input} onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default Storybook;
