package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.ConfigurationPage;
import pages.InventoryPage;
import utilities.ConfigurationReader;

public class ExportStepDef {
    @Given("user in inventory page")
    public void user_in_inventory_page() {
        InventoryPage inventoryPage = new InventoryPage();
        inventoryPage.Inventory.click();
    }

    @When("user clicks on Warehouse management")
    public void user_clicks_on_Warehouse_management() {
        ConfigurationPage configurationPage= new ConfigurationPage();
        configurationPage.warehousesManagement.click();
    }

    @Then("user should see Warehouses option")
    public void user_should_see_Warehouses_option() {
        ConfigurationPage configurationPage= new ConfigurationPage();
        configurationPage.warehouses.isDisplayed();
    }

    @Then("user clicks on Warehouses")
    public void user_clicks_on_Warehouses() {
        ConfigurationPage configurationPage= new ConfigurationPage();
        configurationPage.warehouses.click();
    }

    @Then("user should see Chicago WareHouse is displayed")
    public void user_should_see_Chicago_WareHouse_is_displayed() {

    }

    @Then("user click on the checkbox")
    public void user_click_on_the_checkbox() {

    }

    @Then("user goes to Actions dropdown list and click on export")
    public void user_goes_to_Actions_dropdown_list_and_click_on_export() {

    }

}
