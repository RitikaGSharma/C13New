class Login
{
    enterUserName()
    {
        return cy.get("input[name='email1']")
    }

    enterPassword()
    {
        return cy.get("input[name='password1']")
    }

    clickOnSubmit()
    {
        return cy.get("button[type='submit']")
    }
}
export default Login