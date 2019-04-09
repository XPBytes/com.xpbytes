import React from "react"

import { Layout } from "../components/layout"
import { SEO } from "../components/seo"
import { Hero } from "../components/hero"
import { Excerpt } from '../components/index/excerpt'
import { OpenSourceSection } from '../components/index/open-source-section'
import { CaseStudiesSection } from "../components/index/case-studies-section";

const IndexPage = (): JSX.Element => (
  <Layout>
    <SEO
      title="eXPerienced Bytes"
      description="Dutch software agency specializing in custom, tailored, software."
      keywords={['custom software', 'maatwerk software', 'software', 'typescript', 'react', 'rails', 'ruby', 'c#', 'dotnet', '.NET', 'UX', 'AWS']} />

    <Hero />

    <Excerpt />
    <CaseStudiesSection />
    <OpenSourceSection />
  </Layout>
)

export default IndexPage