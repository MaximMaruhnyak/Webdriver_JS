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
driver.manage().timeouts().implicitlyWait(20000);

driver.get("https://www.google.com.ua");
driver.findElement(By.css("input[name='q']")).sendKeys("expedia");
driver.findElement(By.css("button[name='btnG']")).click();
driver.findElement(By.xpath(".//*[@id='rso']/div[1]/div/div/h3/a")).click();
driver.findElement(By.xpath("//a[@id='primary-header-car']")).click();
driver.findElement(By.css("input[id='car-pickup']")).sendKeys("Boryspil, Ukraine");
driver.findElement(By.css("input[id='car-dropoff']")).sendKeys("Kiev Passajirskii Station, Ukraine");
driver.findElement(By.css("input[id='car-pickup-date']")).sendKeys("11/03/2016");
driver.findElement(By.css("input[id='car-dropoff-date']")).clear();
driver.findElement(By.css("input[id='car-dropoff-date']")).sendKeys("11/23/2016");
driver.findElement(By.xpath(".//*[@id='search-button']")).click();
driver.wait(until.elementLocated(By.css("a[data-book-button='book-ZE-MD-Car']")), 10000);
driver.findElement(By.css("a[data-book-button='book-ZE-MD-Car']")).click();
return driver.findElement(By.xpath("//div[@class='base']//span[1]")).then(function (text) {
    text.getText().then(function (number) {
        var price = Number(number.replace(/[^0-9\.]+/g, ""));
        expect(price).to.be.within(91, 92);
    });
});