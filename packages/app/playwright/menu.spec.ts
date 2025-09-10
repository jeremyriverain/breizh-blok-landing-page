import test, { expect } from "@playwright/test";

test.describe('test mobile menu', () => {
    test.use({ viewport: { width: 375, height: 667 } })

    test('mobile menu is closed by default', async ({ page }) => {
        await page.goto("/");

        await expect(page.getByLabel("Sélectionner votre langage")).not.toBeVisible()
    })

    test(`
        Given I click on the menu icon,
        Then menu is opened
        `, async ({ page }) => {
        await page.goto("/");

        await page.click('button[aria-controls=navbar]')

        await expect(page.getByLabel("Sélectionner votre langage")).toBeVisible()
    })

    test(`
        Given the menu is opened and I click on Contact page,
        Then menu is closed
        And I go to contact page
        `, async ({ page }) => {
        await page.goto("/");

        await page.click('button[aria-controls=navbar]')

        await page.getByRole("link", { name: "Contact" }).click()

        await page.waitForURL(/\/contact/)

        await expect(page.getByLabel("Sélectionner votre langage")).not.toBeVisible()

        expect(
            await page.getByRole("heading", { name: "Contact" })
        ).toBeVisible();
    })

    test(`
        Given menu is opened and I select a locale,
        Then the menu is closed`, async ({ page }) => {
        await page.goto("/");

        await page.click('button[aria-controls=navbar]')

        await expect(page.getByLabel("Sélectionner votre langage")).toBeVisible()

        await page.getByLabel("Sélectionner votre langage").selectOption("🇬🇧 EN");

        await expect(page.getByLabel("Sélectionner votre langage")).not.toBeVisible()

    });

    test("verify buymeacoffee link is opened in new tab", async ({ page }) => {
        await page.goto("/");
        const newTabPromise = page.waitForEvent("popup");

        await page.click('button[aria-controls=navbar]')

        await page.getByRole("link", { name: "Soutenir le projet" }).click();
        const newTab = await newTabPromise;
        await newTab.waitForLoadState();

        await expect(newTab).toHaveURL(/buymeacoffee\.com\/breizhblok/);

    });
})

test(`
    Given I am on desktop,
    When I click on "Soutenir le projet",
    Then buymeacoffee link is opened in a new tab`, async ({ page }) => {
    await page.goto("/");
    const newTabPromise = page.waitForEvent("popup");

    await page.getByRole("link", { name: "Soutenir le projet" }).click();
    const newTab = await newTabPromise;
    await newTab.waitForLoadState();

    await expect(newTab).toHaveURL(/buymeacoffee\.com\/breizhblok/);
})
