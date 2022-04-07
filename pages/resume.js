/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React, { useState } from 'react';

import styled from 'styled-components';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { arrayRandomItem } from 'codewonders-helpers';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Resume = () => {
  const viewer = useRef(null);
  const [color] = useState(arrayRandomItem(['#37609c', '#34c759', '#5856d6']));

  useEffect(() => {
    import('@pdftron/webviewer').then(() => {
      WebViewer(
        {
          path: '/lib',
          initialDoc: 'CV_Othmane_Elkarmy.pdf',
        },
        viewer.current
      ).then((instance) => {
        const { docViewer } = instance;
        // you can now call WebViewer APIs here...
      });
    });
  }, []);

  return (
    <Layout title="Resume">
      <PageWrapper>
        <PageSection color={color}>
          <article>
            <h1 className="intro__text">Resumé.</h1>
            <p>
              Reach out to me via my{' '}
              <b>
                <Link href="/contact">
                  <a>contact page</a>
                </Link>
              </b>{' '}
              .{' '}
              <b>
                <a
                  href={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_LINK}/view?usp=sharing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to Resumé Page"
                >
                  view
                </a>
              </b>{' '}
              or{' '}
              <b>
                <a
                  href={`https://drive.google.com/file/d/${process.env.NEXT_PUBLIC_RESUME_LINK}/view?usp=sharing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to Resumé Page"
                ><button type="button" tabIndex="-1">
                    Download
                  </button>
                </a>
              </b>{' '}
              the resume{' '}
            </p>
          </article>
          <br />


          <div className='MyComponent'>
            <div className='webviewer' ref={viewer} style={{ height: '250vh' }}></div>
          </div>
        </PageSection>
        <FooterLink goto="/contact" className="mt-3 mb-5">
          Contact me
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  button {
    font-size: var(--font-sm);
    background: var(--button-index);
    border: none;
    border-radius: 5px;
    transition: all 0.4s ease;
    padding: 1px 12px;
    &:hover {
      background: ${(props) => props.color};
      color: #fff;
    }
  }
  @media (max-width: 585px) {
    margin: 3rem 0;
    display: block;
    min-height: 100%;
  }
  @media (max-width: 989px) {
    margin: 3rem 0;
    display: block;
  }
  @media (max-width: 220px) {
    margin: 3rem 0;
    display: block;
    min-height: 100%;
  }
  iframe {
    width: 100%;
    filter: invert(var(--invert)) grayscale(calc(var(--invert) - 0.15));
    border: none;
    height: 44.5rem;
    @media (min-width: 768px) {
      width: 82.8% !important;
      height: 70.4rem !important;
    }
  }
`;
export default Resume;
