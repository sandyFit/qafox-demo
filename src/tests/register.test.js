describe("User Registration", () => {
    const baseUrl = "https://tutorialsninja.com/demo/index.php?route=account/register";

    // Navigate to the register url
    beforeEach(async () => {
        await browser.url(baseUrl);
    })

    it("TC2.1 - Should register a user with valid input in all fields", async () => {
        // Generate a unique email
        const randomId = Date.now();
        const uniqueEmail = `user${randomId}@testmail.com`;
        // Selectors
        await $('#input-firstname').setValue('John');
        await $('#input-lastname').setValue('Doe');
        await $('#input-email').setValue(uniqueEmail);
        await $('#input-telephone').setValue('6669996969');
        await $('#input-password').setValue('Password123');
        await $('#input-confirm').setValue('Password123');

        // Select newsletter 'yes'
        await $('input[name="newsletter"][value="1"]').click;

        await $('input[name="agree"]').click();

        await $('input[type="submit"][value="Continue"]').click();

    })
})

it("TC2.2 - Should not register a user when mandatory fields are empty", async () => {
    // Leave all fields empty and just try to submit
    await $('input[type="submit"][value="Continue"]').click();

    // Assertion: Check that validation messages are displayed
    const firstNameWarning = await $('#account .text-danger=First Name must be between 1 and 32 characters!');
    const lastNameWarning = await $('#account .text-danger=Last Name must be between 1 and 32 characters!');
    const emailWarning = await $('#account .text-danger=E-Mail Address does not appear to be valid!');
    const telephoneWarning = await $('#account .text-danger=Telephone must be between 3 and 32 characters!');
    const passwordWarning = await $('#account .text-danger=Password must be between 4 and 20 characters!');

    expect(await firstNameWarning.isDisplayed()).toBe(true);
    expect(await lastNameWarning.isDisplayed()).toBe(true);
    expect(await emailWarning.isDisplayed()).toBe(true);
    expect(await telephoneWarning.isDisplayed()).toBe(true);
    expect(await passwordWarning.isDisplayed()).toBe(true);
});
