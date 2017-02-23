const rp = require('request-promise');
const cheerio = require('cheerio')

const dpl = {

  init: (country, language, designer) => {
    rp(`https://www.net-a-porter.com/${country}/${language}/Shop/Designers/${designer}`)
    .then((html) => {
      const $ = cheerio.load(html)
      const header = $('#dlp_bg_wrapper .designer-info-title').text()
      const desc = $('#dlp_bg_wrapper .designer-info-desc').text()
      let img = $('#dlp_bg_wrapper').css('background-image')
      img = img.split('url(')[1].split(')')[0]
      const path = `https://www.net-a-porter.com${img}`
      const obj = {
        header: header,
        desc: desc,
        img: path
      }
    }, (err) => {
    })
  }

}


exports.module = dpl;
