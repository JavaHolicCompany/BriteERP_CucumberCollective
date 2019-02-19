package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {
         "html:target/cucumber_reports"
        },
        features = "src/test/resources",
        glue="stepDefinitions",
        dryRun = false,
        tags = "@login"
)
public class CukesRunner{

}
