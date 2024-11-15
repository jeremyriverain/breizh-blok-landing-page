import { expect, test } from "@playwright/test";

test("should display homepage", async ({ page }) => {
  await page.goto("/");
  expect(
    await page.getByRole("heading", { name: "Breizh Blok" })
  ).toBeVisible();

  expect(
    await page.getByRole("heading", {
      name: "Topo des blocs d'escalade en Bretagne",
    })
  ).toBeVisible();

  const iosLink = await page.getByRole("link", { name: "Télécharger sur iOS" });

  expect(iosLink).toBeVisible();
  await expect(iosLink).toHaveAttribute("href", /apps.apple.com/);

  const androidLink = await page.getByRole("link", {
    name: "Télécharger sur Android",
  });

  expect(androidLink).toBeVisible();
  await expect(androidLink).toHaveAttribute("href", /play.google.com/);

  await page.getByRole("link", { name: "Contribuer au topo" }).first().click();

  await page.getByRole("heading", { name: "Contribuer au topo" }).click();

  expect(
    await page.getByRole("heading", { name: "Contribuer au topo" })
  ).toBeVisible();
});
