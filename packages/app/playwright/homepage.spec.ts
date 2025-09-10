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

  await page.getByRole("link", { name: "Contact" }).first().click();

  await page.getByRole("heading", { name: "Contact" }).click();

  expect(
    await page.getByRole("heading", { name: "Contact" })
  ).toBeVisible();
});

test("verify buymeacoffee link is opened in new tab", async ({ page }) => {
  await page.goto("/");
  const newTabPromise = page.waitForEvent("popup");

  await page.getByAltText('Buy Me A Coffee').click();
  const newTab = await newTabPromise;
  await newTab.waitForLoadState();

  await expect(newTab).toHaveURL(/buymeacoffee\.com\/breizhblok/);
});