package stepDefinitions;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import pages.DeliveryOrdersPage;
import pages.InventoryPage;
import utilities.BrowserUtils;
import utilities.Driver;

public class DashboardDef {
    @Then("user go to inventory page")
    public void user_go_to_inventory_page() {
        BrowserUtils.wait(3);
        InventoryPage inventoryPage = new InventoryPage();
        inventoryPage.Inventory.click();
    }

    @Then("user click on delivery orders")
    public void user_click_on_delivery_orders() {
        BrowserUtils.wait(3);
        InventoryPage inventoryPage = new InventoryPage();
        inventoryPage.DeliveryOrders.click();
    }

    @Then("user should see all the delivery orders")
    public void user_should_see_all_the_delivery_orders() {
        BrowserUtils.wait(3);
        Assert.assertEquals(Driver.getDriver().getTitle(),"YourCompany: Delivery Orders - Odoo");
    }

    @When("user click on create button")
    public void user_click_on_create_button() {
        DeliveryOrdersPage deliveryOrdersPage = new DeliveryOrdersPage();
        BrowserUtils.wait(2);
        deliveryOrdersPage.create.click();
    }


    @When("click save")
    public void click_save() {
        BrowserUtils.wait(3);
        DeliveryOrdersPage deliveryOrdersPage = new DeliveryOrdersPage();
        deliveryOrdersPage.save.click();
    }


    @Then("Deliver ticket created should be showing on the delivery orders page")
    public void deliver_ticket_created_should_be_showing_on_the_delivery_orders_page() {
        BrowserUtils.wait(3);
        DeliveryOrdersPage deliveryOrdersPage = new DeliveryOrdersPage();
        Assert.assertTrue(deliveryOrdersPage.orderNumber.isDisplayed());
    }
    @When("Open one delivery order")
    public void open_one_delivery_order() {
        DeliveryOrdersPage deliveryOrdersPage = new DeliveryOrdersPage();
        deliveryOrdersPage.order.click();

    }

    @When("click on edit button on top")
    public void click_on_edit_button_on_top() {
        DeliveryOrdersPage deliveryOrdersPage = new DeliveryOrdersPage();
        BrowserUtils.wait(3);
        deliveryOrdersPage.edit.click();
    }

    @When("Change scheduled date")
    public void change_scheduled_date() {
        DeliveryOrdersPage deliveryOrdersPage = new DeliveryOrdersPage();
        BrowserUtils.wait(3);
        BrowserUtils.wait(3);
        deliveryOrdersPage.date.click();
        deliveryOrdersPage.date.clear();
        deliveryOrdersPage.date.sendKeys("1/1/2019 1:1:03");
    }

    @When("click on save")
    public void click_on_save() {
        DeliveryOrdersPage deliveryOrdersPage = new DeliveryOrdersPage();
        deliveryOrdersPage.saveButton.click();
    }

    @Then("Scheduled date should be changed")
    public void scheduled_date_should_be_changed() {
        DeliveryOrdersPage deliveryOrdersPage = new DeliveryOrdersPage();
        BrowserUtils.wait(3);
        Assert.assertEquals(deliveryOrdersPage.savedDate.getText(),"01/01/2019 01:01:03");

    }
    @Then("click on discard")
    public void click_on_discard() {
        DeliveryOrdersPage deliveryOrdersPage = new DeliveryOrdersPage();
        deliveryOrdersPage.discard.click();
    }

    @Then("click ok")
    public void click_ok() {
        DeliveryOrdersPage deliveryOrdersPage = new DeliveryOrdersPage();
        BrowserUtils.wait(3);
        deliveryOrdersPage.discardOk.click();
    }

    @Then("Scheduled date should not be changed")
    public void scheduled_date_should_not_be_changed() {
        DeliveryOrdersPage deliveryOrdersPage = new DeliveryOrdersPage();
        BrowserUtils.wait(3);
        Assert.assertEquals(deliveryOrdersPage.savedDate.getText(),"01/30/2019 01:01:03");
    }

}
