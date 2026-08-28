import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";

const root = new URL("../../", import.meta.url);

function readProjectFile(relativePath: string) {
  return readFileSync(fileURLToPath(new URL(relativePath, root)), "utf8");
}

describe("sample broker runtime", () => {
  it("uses the lean local runtime without the removed platform integrations", () => {
    const main = readProjectFile("client/src/main.tsx");
    const vite = readProjectFile("vite.config.ts");
    const packageJson = readProjectFile("package.json");

    expect(main).not.toMatch(/trpc|QueryClient|getLoginUrl/i);
    expect(vite).not.toMatch(/manus|jsxLoc/i);
    expect(packageJson).toContain('"build": "vite build && esbuild server/index.ts');
    expect(packageJson).not.toMatch(/@trpc|vite-plugin-manus-runtime|drizzle-orm/);
  });
});
