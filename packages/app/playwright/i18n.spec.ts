import { expect, test } from "@playwright/test";

test("i18n works", async ({ page }) => {
  await page.goto("/");
  expect(
    await page.getByRole("heading", { name: "Breizh Blok" })
  ).toBeVisible();

  expect(
    await page.getByRole("heading", {
      name: "Topo des blocs d'escalade en Bretagne",
    })
  ).toBeVisible();

  await page.getByLabel("Sélectionner votre langage").selectOption("🇬🇧 EN");

  expect(
    await page.getByRole("heading", {
      name: "Topo of climbing boulders in Brittany (France)",
    })
  ).toBeVisible();

  await expect(page).toHaveURL(/\/en$/);

  await page.getByRole("link", { name: "Contact" }).first().click();

  await expect(page).toHaveURL(/\/en\/contact$/);
});
