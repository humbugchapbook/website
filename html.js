import React from 'react'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  displayName: 'HTML',
  propTypes: {
    body: React.PropTypes.string,
  },
  render () {
    const { body, route } = this.props
    const title = DocumentTitle.rewind()
    const fontAwesome = <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/styles.css') }} />
    }

    return (
            <html lang="en">
            <head>
              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0 maximum-scale=5.0" />
              <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet" />
              <title>
                { title }
              </title>
              { fontAwesome }
              { css }
            </head>
            <body>
              <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }} />
              <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
            </body>
            </html>
        )
  },
})
