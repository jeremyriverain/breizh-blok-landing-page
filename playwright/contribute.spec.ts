import { test, expect } from "@playwright/test";

test("contact form happy path", async ({ page }) => {
  await page.goto("/contact");
  expect(
    await page.getByRole("heading", { name: "Contact" })
  ).toBeVisible();
  await expect(
    page.locator("#contact-form[name=contact][data-netlify=true]")
  ).toBeVisible();
  await page.getByPlaceholder("Prénom").fill("Foo");
  await page.getByPlaceholder("Nom", { exact: true }).fill("Bar");
  await page.getByPlaceholder("Adresse e-mail").fill("foo@bar.com");
  await page.getByLabel("Votre message").fill("Hello world");

  const requestPromise = page.waitForRequest(
    (request) =>
      request.url().endsWith("/contact") && request.method() === "POST"
  );
  await page.getByText("Envoyer").click();
  expect(await page.getByText("Votre message a été envoyé")).toBeVisible();
  await expect(page.locator("#contact-form")).not.toBeVisible();
  const request = await requestPromise;
  expect(request.postDataJSON()).toMatchObject({
    email: "foo@bar.com",
    "form-name": "contact",
    message: "Hello world",
    firstname: "Foo",
    name: "Bar",
  });
});

test("contact form validation rules", async ({ page }) => {
  await page.goto("/contact");
  const titleLocator = await page.getByRole("heading", {
    name: "Contact",
  });
  await titleLocator.click();
  expect(titleLocator).toBeVisible();

  await page.getByText("Envoyer").click();

  await page
    .locator("#contact-form div")
    .filter({ hasText: "PrénomCe champ est obligatoire" })
    .locator("div")
    .click();

  await page
    .locator("#contact-form div")
    .filter({
      hasText: "NomCe champ est obligatoire",
      hasNot: page.getByText("Prénom"),
    })
    .locator("div")
    .click();

  await page.getByText("Veuillez renseigner un email").click();

  await page
    .locator("#contact-form div")
    .filter({
      hasText: "Votre messageCe champ est obligatoire",
    })
    .locator("div")
    .click();
});
