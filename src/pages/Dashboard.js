const { css } = require('emotion')
const { theme } = require('../styles.js')
const { html } = require('../utils.js')
const Layout = require('../components/Layout.js')
const ErrorList = require('../components/ErrorList.js')
const LogoutLink = require('../components/LogoutLink.js')
const SummaryTable = require('../components/SummaryTable.js')
const ValidationError = require('../components/forms/ValidationError.js')
const Checkbox = require('../components/forms/Checkbox.js')
const Button = require('../components/forms/Button.js')

const dashboard = css`
  position: relative;

  > div {
    margin-bottom: ${theme.space.xl};
  }
`

const submitButton = css`
  width: 200px;
`
const makeRows = ({ name, address, maritalStatus, children, income }) => {
  return [
    { key: 'Name', value: name },
    { key: 'Mailing address', value: address },
    { key: 'Marital status', value: maritalStatus },
    { key: 'Number of children', value: children },
    { key: 'Annual income', value: income },
  ]
}

const Dashboard = ({ data = {}, errors = {} }) =>
  html`
    <${Layout}>

      ${Object.keys(errors).length > 0 &&
        html`
          <${ErrorList} errors=${errors} //>
        `}

      <div class=${dashboard}>
        <${LogoutLink} />
        <h1>Dashboard</h1>
        <div>
          <${SummaryTable} rows=${makeRows(data)} ifEditable=${false} //>
        </div>

        <p>
          Once you have provided your consent, go ahead and submit. (<a
            href="/consent"
            target="_blank"
            >Read more about consent.</a
          >)
        </p>
        <form method="post">
          ${errors.consent &&
            html`
              <${ValidationError} ...${errors.consent} />
            `}
          <${Checkbox} id="consent">I totally consent to this<//>
          <${Button} style=${submitButton}>Submit taxes<//>
        </form>

      </div>
    </${Layout}>
  `

module.exports = Dashboard
