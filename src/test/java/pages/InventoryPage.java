package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class InventoryPage {

    public InventoryPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//li[@style='display: block;'])[6]")
    public WebElement Inventory;

    @FindBy(css = "span[class ='oe_topbar_name']")
    public WebElement type;

    @FindBy(xpath = "/html/body/div[1]/div[1]/div[1]/div[6]/div[1]/a/span")
    public WebElement Dashborad;

    @FindBy(xpath = "( //span[contains(text(),'Delivery Orders')])")
    public WebElement DeliveryOrders;

    @FindBy(xpath = "(//span[contains(text(),'Manufacturing')])")
    public WebElement ManufacturingPage;

    @FindBy(xpath = "(//a[@href='/web#menu_id=376&action=516'])")
    public WebElement productMove;

    @FindBy(xpath = "(//a[@class=' oe_kanban_action oe_kanban_action_a']//span)[8]")
    public WebElement sunnySun;

    @FindBy(xpath = "(//a[@class=' oe_kanban_action oe_kanban_action_a']//span)[2]")
    public WebElement Receipts;

    @FindBy(xpath = "(//span[@class='o_searchview_more fa fa-search-plus'])")
    public WebElement advancedSearchButton;

    @FindBy(xpath = "(//div[@class='btn-group o_search_options'])")
    public WebElement advancedSearchOptions;
}
