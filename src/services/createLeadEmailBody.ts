import { buildLeadEmailTbodyTrs } from './buildLeadEmailTbodyTrs'
import { buildLeadData } from './buildLeadData'
import { createLeadEmailTr } from './createLeadEmailTr'

type TypeCreateLeadEmailBodyProps = {
    data: Awaited<ReturnType<typeof buildLeadData>>
    subject: string
}

export const createLeadEmailBody = ({ data, subject }: TypeCreateLeadEmailBodyProps) => {
    const tbodyTrs = buildLeadEmailTbodyTrs({ data })

    const themeColor = '#000000'

    const output = /* html */ `
    <!DOCTYPE html>
    <html lang="ru">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <style>
          .styled-table {
            border-collapse: collapse;
            margin: 25px 0;
            font-size: 0.9em;
            font-family: sans-serif;
            min-width: 400px;
            box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
            counter-reset: tableCount;
          }
          .counterCell::before {
            content: counter(tableCount);
            counter-increment: tableCount;
          }
          .styled-table thead tr {
            background-color: ${themeColor};
            color: #ffffff;
            text-align: left;
          }
          .styled-table th,
          .styled-table td {
            padding: 12px 15px;
          }
          .styled-table tbody tr {
            border-bottom: thin solid #dddddd;
          }

          .styled-table tbody tr:nth-of-type(even),
          .bgOnEven {
            background-color: #f3f3f3;
          }

          .styled-table tbody tr:last-of-type,
          .bgBorderHighlight {
            border-bottom: 2px solid ${themeColor};
          }
          .styled-table tbody tr.active-row {
            font-weight: bold;
            color: ${themeColor};
          }
        </style>
        <title>${subject}</title>
      </head>
      <body>
        <h1>${subject}</h1>
        <p>🎉🥳🎉 Ура! Новая заявка с ${data.rootPath}! 🎉🥳🎉</p>
        <table class="styled-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Ключ</th>
              <th>Значение</th>
            </tr>
          </thead>
          <tbody>
            ${tbodyTrs.map((item, idx) => createLeadEmailTr({ item, idx })).join('')}
          </tbody>
        </table>
      </body>
    </html>
  `
    return output
}

export default createLeadEmailBody
