package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.InventoryPage;
import pages.ProductMovePage;
import utilities.BrowserUtils;
import utilities.Driver;

import java.util.ArrayList;
import java.util.List;

public class ProductMoveDef {

ProductMovePage productMovePage = new ProductMovePage();
InventoryPage inventoryPage = new InventoryPage();

    @Then("user clicks on Product Move")
    public void user_clicks_on_Product_Move() {
        inventoryPage.productMove.click();
    }

    @Then("user in ProductMove page")
    public void user_in_ProductMove_page() {
        BrowserUtils.wait(5);
        Assert.assertEquals("Product Moves - Odoo", Driver.getDriver().getTitle());
    }

    @Then("user select random product with Done status")
    public void user_select_random_product_with_Done_status() {
        Assert.assertEquals(productMovePage.productStatus.getText(), "Done");
        productMovePage.productCheckBox.click();
    }

    @Then("user is shown Action tab")
    public void user_is_shown_Action_tab() {
        Assert.assertTrue(productMovePage.actionButton.isDisplayed());

    }

    @Then("user click on Action")
    public void user_click_on_Action() {
        productMovePage.actionButton.click();
    }

    @Then("user is shown Delete option")
    public void user_is_shown_Delete_option() {
        Assert.assertTrue(productMovePage.deleteButton.isDisplayed());
    }

    @Then("user click on Delete")
    public void user_click_on_Delete() {
        productMovePage.deleteButton.click();
    }

    @Then("user is shown confirmation")
    public void user_is_shown_confirmation() {
        BrowserUtils.wait(2);
        Assert.assertTrue(productMovePage.confirmationBox.isDisplayed());
    }

    @Then("user clicks Ok")
    public void user_clicks_Ok() {
        productMovePage.confirmationOkayButton.click();
    }

    @Then("user is shown Error Message")
    public void user_is_shown_Error_Message() {
        BrowserUtils.wait(2);
        Assert.assertEquals(productMovePage.serverErrorMessage.getText(),
                "You can not delete product moves if the picking is done. You can only correct the done quantities.");
    }

    @Then("user reset search filter")
    public void user_reset_search_filter() {
        productMovePage.searchField.click();
        productMovePage.searchField.sendKeys(Keys.BACK_SPACE);
    }

    @Then("user select ToDo filter")
    public void user_select_ToDo_filter() {
        productMovePage.advancedSearchButton.click();
        productMovePage.filterOption.click();
        productMovePage.toDoFilter.click();
        BrowserUtils.wait(2);
    }
    String beforeDelete;
    String afterDelete;

    @Then("user select random product with Available status")
    public void user_select_random_product_with_Available_status() {
        beforeDelete = productMovePage.productAmount.getText();
        Assert.assertEquals(productMovePage.productStatusRed.getText(), "Available");
        productMovePage.productCheckBoxRed.click();
    }

    @Then("user confirm product deleted")
    public void user_confirm_product_deleted() {
        BrowserUtils.wait(3);
        afterDelete = productMovePage.productAmount.getText();
        Assert.assertEquals(Integer.parseInt(beforeDelete)-1, Integer.parseInt(afterDelete));
    }

    @Then("user select AddCustomFilter option")
    public void user_select_AddCustomFilter_option() {
        productMovePage.advancedSearchButton.click();
        productMovePage.filterOption.click();
        productMovePage.customFilter.click();
    }

    @Then("user select Product in DropDown1")
    public void user_select_Product_in_DropDown(){
        Select dropDown1 = new Select(productMovePage.cFilterDropDown1);
        dropDown1.selectByValue("product_id");
        Assert.assertEquals(dropDown1.getFirstSelectedOption().getText().trim(), "Product");
    }

    @Then("user select Contains in DropDown2")
    public void user_select_Contains_in_DropDown() {
        Select dropDown2 = new Select(productMovePage.cFilterDropDown2);
        Assert.assertEquals(dropDown2.getFirstSelectedOption().getText().trim(),"contains");
    }

    @Then("user enters Laptop in search keyword")
    public void user_enters_Laptop_in_search_keyword() {
        productMovePage.customFilterField.sendKeys("Laptop");
    }

    @Then("user clicks Apply button")
    public void user_clicks_Apply_button() {
        productMovePage.cFilterApply.click();
    }

    @Then("user is shown Products that applies to custom filter")
    public void user_is_shown_Products_that_applies_to_custom_filter() {
        BrowserUtils.wait(2);
        List<WebElement> filteredProducts = new ArrayList<>(productMovePage.cFilterProductAmount);
        Assert.assertEquals(Integer.parseInt(productMovePage.productAmount.getText()),filteredProducts.size());
    }
    @Then("user is shown Products with ToDo status")
    public void user_is_shown_Products_with_ToDo_status() {
        BrowserUtils.wait(5);
        List<WebElement> products = new ArrayList<>(productMovePage.productTable);
        for(int i =0; i < products.size();i++){
            Assert.assertFalse(products.get(i).getText().contains("Done"));
        }
    }

    @Then("user logout")
    public void user_logout() {
        Driver.closeDriver();
    }

}
