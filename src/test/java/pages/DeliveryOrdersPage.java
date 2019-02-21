package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class DeliveryOrdersPage {

        public DeliveryOrdersPage() {
            PageFactory.initElements(Driver.getDriver(), this);
        }

        @FindBy(xpath = "(//button[@class='btn btn-primary btn-sm o_list_button_add'])")
        public WebElement create;

        @FindBy(xpath = "(//button[@class='btn btn-primary btn-sm o_form_button_save'])")
        public WebElement save;

        @FindBy(xpath = "(//h1[@class='hidden-xs'])//span")
        public WebElement orderNumber;

        @FindBy(xpath = "(//button[@class='btn btn-sm btn-default o_button_import'])")
        public WebElement importButton;

        @FindBy(xpath = "(//div[@class='input-group'])//input")
        public WebElement input;

        @FindBy(xpath = "(//h4[@class='modal-title'])")
        public WebElement ErrorMessage;

        @FindBy(xpath = "(//div[@class='input-group'])//span[1]")
        public WebElement loadfile;

        @FindBy(xpath = "(//table[@class='o_list_view table table-condensed table-striped o_list_view_ungrouped'])//tbody//td[3]")
        public WebElement order;

        @FindBy(xpath = "(//button[@class='btn btn-primary btn-sm o_form_button_edit'])")
        public WebElement edit;

        @FindBy(xpath = "(//input[@class='o_datepicker_input o_input'])")
        public WebElement date;

        @FindBy(xpath = "(//button[@class='btn btn-primary btn-sm o_form_button_save'])")
        public WebElement saveButton;

        @FindBy(xpath = "(//span[@class='o_field_date o_field_widget o_required_modifier'])")
        public WebElement savedDate;

        @FindBy(xpath = "(//button[@class='btn btn-default btn-sm o_form_button_cancel'])")
        public WebElement discard;

        @FindBy(xpath = "(//button[@class='btn btn-sm btn-primary'])//span")
        public WebElement discardOk;

    }

