const React = require('react')

function Default(html){
    return(
        <html>
            <head>
                <title>Default</title>
            </head>
            <body>
                <h1>HTML Rendered!</h1>
                <div className = 'container'>
                    {/* renders the children content in HTML */}
                    {html.children}
                </div>
            </body>
        </html>
    )
}

module.exports = Default