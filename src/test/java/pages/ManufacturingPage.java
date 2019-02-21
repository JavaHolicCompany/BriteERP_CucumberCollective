package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class ManufacturingPage {
    public ManufacturingPage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//table[@class='o_list_view table table-condensed table-striped o_list_view_ungrouped'])//tbody//td[4]")
    public WebElement ManufacturingOrder;

    @FindBy(xpath = "//*[@id=\"modal_292\"]/div/div/div[1]/h4")
    public WebElement errorMessage;


    @FindBy(xpath = "(//input[@class='o_searchview_input'])")
    public WebElement searchBox;
}
