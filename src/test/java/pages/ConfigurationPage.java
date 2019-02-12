package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class ConfigurationPage {
    public ConfigurationPage() {
        PageFactory.initElements(Driver.getDriver(), this);
    }


    @FindBy(xpath = "//div[contains(text(),'Configuration')]")
    public WebElement configurationButton;

    @FindBy(xpath = "//span[contains(text(),'Warehouse Management')]")
    public WebElement warehousesManagement;

    @FindBy(xpath = "(//span[contains(text(),'Products')])[2]")
    public WebElement products;

    @FindBy(xpath = "//span[contains(text(),'Warehouses')]")
    public WebElement warehouses;

    @FindBy(xpath = "//span[contains(text(),'Operations Types')]")
    public WebElement operationTypes;

    @FindBy(xpath ="(//input[@type='checkbox'])[4]")
    public WebElement yourCompanyChceckBox;

    @FindBy(xpath = "(//select[@class='dropdown-menu'])[4]")
    public WebElement actionDropdown;




}