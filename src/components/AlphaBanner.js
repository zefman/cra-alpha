const { css } = require('emotion')
const { theme } = require('../styles.js')
const { html } = require('../utils.js')

const alphaBanner = css`
  padding-top: ${theme.space.xs};
  padding-bottom: ${theme.space.xs};
  border-bottom: 1px solid ${theme.color.greyLight};

  p {
    display: table;
    margin: 0;
    font-size: 0.7em;
    line-height: 1.25;
  }

  strong {
    font-weight: 700;
    display: inline-block;
    padding: 4px 8px;
    padding-bottom: 3px;
    outline: 2px solid ${theme.color.black};
    outline-offset: -2px;
    color: #000;
    background-color: transparent;
    letter-spacing: 1px;
    text-decoration: none;
    text-transform: uppercase;
    margin-right: ${theme.space.xs};
  }

  span {
    display: table-cell;
    vertical-align: baseline;
  }

  @media (${theme.mq.sm}) {
    p {
      font-size: 0.75em;
    }
  }
`

const AlphaBanner = () =>
  html`
    <div class=${alphaBanner}>
      <p>
        <strong>
          alpha
        </strong>
        <span>
          This site will be changing often as we learn from folks like you.
        </span>
      </p>
    </div>
  `

module.exports = AlphaBanner
