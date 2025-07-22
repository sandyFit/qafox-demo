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

