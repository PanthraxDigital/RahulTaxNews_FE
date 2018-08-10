import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
//import { graphql } from '../../node_modules/@types/graphql'
import { graphql } from 'gatsby'

export default ({ data }) => {
  let dataArr = data.allMongodbTaxnewsbackendTopstories.edges

  return (
    <Layout>
      <h1>Top stories</h1>
      <p>Success</p>
      <div>
        <table>
          <tbody>
            {dataArr.map(({ node }, index) => (
              <tr key={index}>
                <td>
                  <h2>{node.title}</h2>
                  <h4>{node.subTitle}</h4>
                  <a href={node.link} target="_blank">For more information</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

//export default topStories
export const topStoriesQuery = graphql`
  query topStoriesResult {
    allMongodbTaxnewsbackendTopstories {
      edges {
        node {
          title
          subTitle
          link
        }
      }
    }
  }
`
