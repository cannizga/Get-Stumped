import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    outerContainer,
  } from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata{
          title
        }
      }
    }
  `)

  return (
    <div className={outerContainer}>
      <div className={container}>
        <header className={siteTitle}>{data.site.siteMetadata.title}</header>
        <nav>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to="/">Home</Link></li>
            <li className={navLinkItem}><Link to="/about">About</Link></li>
          </ul>
        </nav>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout