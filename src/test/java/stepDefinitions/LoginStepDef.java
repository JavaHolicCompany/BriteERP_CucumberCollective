package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.junit.Assert;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pages.HomePage;
import pages.InventoryPage;
import utilities.ConfigurationReader;
import utilities.Driver;

import java.util.concurrent.TimeUnit;

public class LoginStepDef {

    @Given("user on the homepage with URL")
    public void user_on_the_homepage_with_URL() {

        Driver.getDriver().get(ConfigurationReader.getProperty("url"));
    }

    @When("user choose BriteErPDemo")
    public void user_choose_BriteErPDemo() {

        HomePage homePage = new HomePage();
        // click on BriteERpDemo
        homePage.Demo.click();
    }

    @Then("user should be in login page")
    public void user_should_be_in_login_page() {
    HomePage homePage = new HomePage();
    Assert.assertTrue(homePage.username.isDisplayed());
    Assert.assertTrue(homePage.password.isDisplayed());
    Assert.assertTrue(homePage.SignInButton.isDisplayed());

    }

    @Given("user on the login page")
    public void user_on_the_login_page() {
    Assert.assertTrue(Driver.getDriver().getTitle().contains("Login"));
    }



    @When("user enters {string} and  {string}")
    public void user_enters_and(String email, String password) {
        HomePage homePage = new HomePage();
        homePage.username.sendKeys(email);
        homePage.password.sendKeys(password);
        homePage.SignInButton.click();
    }


    @Then("user should be logged in as a {string}")
    public void user_should_be_logged_in_as_a(String string) {

    }




}
