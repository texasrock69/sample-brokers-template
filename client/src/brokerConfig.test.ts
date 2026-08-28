import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { brokerConfig } from "./brokerConfig";

describe("sample broker media configuration", () => {
  it("uses a repository-local hero asset instead of a Manus-linked URL", () => {
    expect(brokerConfig.heroImage).toBe("/assets/sample-broker-hero.webp");
    expect(brokerConfig.heroImage).not.toContain("manus");
    expect(brokerConfig.heroImage).not.toContain("cloudfront");

    const imagePath = fileURLToPath(
      new URL("../public/assets/sample-broker-hero.webp", import.meta.url),
    );
    expect(existsSync(imagePath)).toBe(true);
  });
});
