package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class ProductMovePage {
    public ProductMovePage(){
        PageFactory.initElements(Driver.getDriver(),this);
    }

    @FindBy(xpath = "(//span[@class='o_searchview_more fa fa-search-plus'])")
    public WebElement advancedSearchButton;

    @FindBy(xpath = "(//div[@class='btn-group o_search_options'])")
    public WebElement advancedSearchOptions;

    @FindBy(xpath = "(//table[@class='o_list_view table table-condensed table-striped o_list_view_ungrouped']//tbody//tr)")
    public List<WebElement> productTable;

    @FindBy(xpath = "(//tr[@class='o_data_row'])[1]//td[8]")
    public WebElement productStatus;

    @FindBy(xpath = "(//tr[@class='o_data_row text-danger'])[1]//td[8]")
    public WebElement productStatusRed;

    @FindBy(xpath = "(//tr[@class='o_data_row'])//td[1]//input")
    public WebElement productCheckBox;

    @FindBy(xpath = "(//tr[@class='o_data_row text-danger'])//td[1]//input")
    public WebElement productCheckBoxRed;

    @FindBy(xpath = "(//button[@class='o_dropdown_toggler_btn btn btn-sm dropdown-toggle'])[2]")
    public WebElement actionButton;

    @FindBy(xpath = "(//div[@class='btn-group o_dropdown open'])//ul//li[2]")
    public WebElement deleteButton;

    @FindBy(xpath = "(//div[@class='modal-dialog'])")
    public WebElement confirmationBox;

    @FindBy(xpath = "(//button[@class='btn btn-sm btn-primary'])")
    public WebElement confirmationOkayButton;

    @FindBy(xpath = "(//div[@class='modal-dialog'])//div[2]")
    public WebElement serverErrorMessage;

    @FindBy(xpath = "(//input[@class='o_searchview_input'])")
    public WebElement searchField;

    @FindBy(xpath = "(//div[@class='btn-group o_dropdown'])[3]//button[1]")
    public WebElement filterOption;

    @FindBy(xpath = "(//ul[@class='dropdown-menu o_filters_menu'])//li[1]")
    public WebElement toDoFilter;

    @FindBy(xpath = "(//span[@class='o_pager_limit'])")
    public WebElement productAmount;

    @FindBy(xpath = "(//li[@class='o_add_filter o_closed_menu'])")
    public WebElement customFilter;

    @FindBy(xpath = "(//select[@class='o_input o_searchview_extended_prop_field'])")
    public WebElement cFilterDropDown1;

    @FindBy(xpath = "(//select[@class='o_input o_searchview_extended_prop_op'])")
    public WebElement cFilterDropDown2;

    @FindBy(xpath = "(//span[@class='o_searchview_extended_prop_value'])//input")
    public WebElement customFilterField;

    @FindBy(xpath = "(//button[@class='btn btn-primary btn-sm o_apply_filter'])")
    public WebElement cFilterApply;

    @FindBy(xpath = "//td[contains(text(), 'Laptop')]")
    public List<WebElement> cFilterProductAmount;

    @FindBy(xpath = "(//table[@class='o_list_view table table-condensed table-striped o_list_view_grouped'])//tbody//tr")
    public List<WebElement> groupByStatusList;

    @FindBy(xpath = "(//button[@class='o_dropdown_toggler_btn btn btn-sm dropdown-toggle'])[4]")
    public WebElement groupByButton;

    @FindBy(xpath = "(//ul[@class='dropdown-menu o_group_by_menu'])//li[1]")
    public WebElement groupByStatus;
}
