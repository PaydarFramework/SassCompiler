const sass = require('sass')
const fs = require('fs')

fs.watch('_colors.sass', null, (eventType, fileName) => {

    const result = sass.compile('styles.sass')

    console.log(result.css);
    
    fs.writeFile('styles.css', result.css, err => {
        if (err) {
          console.error(err)
          return
        }
      })
})
  