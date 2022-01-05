const pptrFirefox = require('puppeteer-firefox');



(async () => {



        try {


  const browser = await pptrFirefox.launch({
    headless: false
  });

  var page = await browser.newPage();
  await page.goto('https://facebook.com/');
  console.log('bisaaa')


          
              } catch (e) {
            await browser.close()
            console.log(e)
        }

})();