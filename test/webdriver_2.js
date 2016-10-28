var assert = require("assert");
var WebDriver = require('selenium-webdriver');
var until = WebDriver.until;
var By = require('selenium-webdriver').By;
var chai        = require('chai'),
    expect      = chai.expect;
var driver = new WebDriver.Builder().withCapabilities(
    WebDriver.Capabilities.firefox()
).build();

driver.manage().window().maximize()
driver.manage().timeouts().implicitlyWait(3000);

driver.get("http://www.limos.com/");
// driver.findElement(By.css("#service_type")).click();
driver.findElement(By.xpath("//optgroup[@label='Most Popular:']//option[@value='100']")).click();
driver.findElement(By.xpath(".//*[@id='search_pickup_place']")).sendKeys("2050 Amsterdam Avenue, New York, NY, United States");
// driver.findElement(By.xpath(".//*[@id='jcomp-0']/div[16]/div[1]")).click();
// driver.findElement(By.xpath(".//*[@id='s2id_search_drop_off_place']/a/span[1]")).click();
// driver.findElement(By.xpath(".//*[@id='select2-drop']/div/input")).sendKeys("JFK");

// driver.findElement(By.xpath(".//*[@id='jcomp-0']/div[17]/div[1]")).click();
driver.findElement(By.xpath(".//*[@id='search_ride_date']")).click();
driver.findElement(By.xpath(".//*[@id='jcomp-0']/div[15]/div[3]/table/thead/tr[1]/th[2]")).click();
driver.findElement(By.xpath(".//*[@id='jcomp-0']/div[15]/div[3]/table/tbody/tr[1]/td[5]")).click();
driver.findElement(By.xpath("//td[@colspan='7']/span[11]")).click();
driver.findElement(By.xpath(".//*[@id='jcomp-0']/div[15]/div[3]/table/tbody/tr[1]/td[5]")).click();
driver.findElement(By.xpath(".//*[@id='search_pickup_time_hour']")).click();
driver.wait(until.elementLocated(By.xpath("//select[@id='search_pickup_time_hour']//option[@value='05']")), 10000);
driver.findElement(By.xpath("//select[@id='search_pickup_time_hour']//option[@value='05']")).click();
driver.findElement(By.xpath(".//*[@id='search_pax']")).click();
driver.findElement(By.xpath("//select[@id='search_pax']//option[@value='3']")).click();
driver.findElement(By.xpath(".//*[@id='search_submit']")).click();
driver.wait(until.elementLocated(By.xpath(".//*[@id='result_679798481']/div[2]/span[3]")), 10000);



