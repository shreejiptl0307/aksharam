"use client";

import React, { useState, useEffect } from "react";

interface CartQuantityInputProps {
  quantity: number;
  onUpdate: (newQuantity: number) => void;
  className?: string;
}

export default function CartQuantityInput({
  quantity,
  onUpdate,
  className = "w-10 h-7 text-center text-xs font-bold text-[#1C1917] bg-transparent focus:outline-hidden",
}: CartQuantityInputProps) {
  const [val, setVal] = useState<string | number>(quantity);

  // Keep in sync when external stepper (+/-) or cart updates
  useEffect(() => {
    setVal(quantity);
  }, [quantity]);

  return (
    <input
      type="text"
      inputMode="numeric"
      pattern="[0-9]*"
      value={val}
      onFocus={(e) => e.target.select()}
      onChange={(e) => {
        const raw = e.target.value;
        if (raw === "") {
          setVal("");
          return;
        }
        const clean = raw.replace(/\D/g, "");
        setVal(clean);
        const parsed = parseInt(clean, 10);
        if (!isNaN(parsed) && parsed >= 1) {
          onUpdate(parsed);
        }
      }}
      onBlur={() => {
        if (val === "" || Number(val) < 1) {
          setVal(quantity);
        } else {
          const parsed = parseInt(String(val), 10) || 1;
          setVal(parsed);
          onUpdate(parsed);
        }
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.currentTarget.blur();
        }
      }}
      className={className}
      aria-label="Wholesale Quantity"
    />
  );
}
