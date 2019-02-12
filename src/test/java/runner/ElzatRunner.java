package runner;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin ={
                "html:target/cucumber_reports"

        },
        features = "src/test/resources/elzatFestures",
        glue = "stepDefinitions",
        dryRun = true,
        tags = ""

)
public class ElzatRunner {
}
