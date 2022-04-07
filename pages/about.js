/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <p>
              Hello there! I'm Seram Nitesh Singh, a Software Engineer and also an Open Source enthusiast. I have done my graduation in Computer Science and Engineering.

              I am deeply passionate about software development. I love spending time building production-ready web applications and also doing open source projects.

              My core interest lies mainly in web development but not restricted to it. I always love exploring and learning new technologies.
            </p>

          </article>
          <h2 className="intro__texth2">Interests</h2> <br />
          <p>  I'm currently interested and curious to learn about System Design and Cloud Native technologies like Docker, Kubernetes, etc for building highly scalable applications and products. I have also always wanted to learn UI/UX design . That's a lot of learning to do, but I will get there eventually.

            When I'm not coding, I would probably be watching a movie or a series. I'm really a movie buff and watch a lot of movies. I also love doing Photoshop whenever I find some free time.</p>
          <h2 className="intro__texth2">Tools & Technologies</h2> <br />
          <p>Here are all the tools and technologies that I used most frequently but It doesn't mean I am an expert in all these.</p>

          <h2 className="intro__texth2">Education</h2> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  href="https://github.com/adenekan41"
                >ENSIAS, <small>Rabat, Maroc</small>
                  {' '}
                  <small>
                    <Product />
                  </small>
                </a>
                <a className="float-right" tabIndex="-1">
                  <Date /> <b>2020 - 2022</b>
                </a>

                <p>
                  Second Year Bachelor’s Degree in Computer Engineering as a Software
                  Engineering, Bachelor degree.
                </p>
              </li>
              <li>
                <Link href="/projects">
                  <a aria-label="Open Products Page">
                    CPGE Mohamed 5, <small>Casablanca, Maroc</small>
                    {' '}

                    <small>
                      <Product />
                    </small>
                  </a>
                </Link>
                <a className="float-right" tabIndex="-1">
                  <Date /> <b>2018 - 2020</b>
                </a>
                <p>
                  Preparatory Classes for ’Grandes Ecoles’ Option MP.
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="https://dribbble.com/codewonders"
                >
                  Ben Mssik High school, <small>Casablanca, Maroc</small>
                  {' '}
                  <small>
                    <Product />
                  </small>
                </a>
                <a className="float-right" tabIndex="-1">
                  <Date /> <b>2017 - 2018</b>
                </a>
                <p>
                  Scientifique baccalaureate degree in Mathematics and Physics.

                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
          <article>
            <h2 className="intro__texth2">My reads</h2> <br />

            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Human Centered Design 101"
                  href="https://www.plusacumen.org/courses/introduction-human-centered-design"
                >
                  Design Patterns: Elements of Reusable Object-Oriented Software<small>	Erich Gamma</small>
                </a>
                <a className="float-right" tabIndex="-1">
                  <Date /> <b>2022</b>
                </a>
                <p>
                  In software engineering, design patterns are general repeatable solutions to common problems in software design. A pattern does not represent a finished design that can be translated directly into code, but is a template for addressing a specific design problem.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Human Centered Design 101"
                  href="https://www.plusacumen.org/courses/introduction-human-centered-design"
                >
                  Clean Code: A Handbook of Agile Software Craftsmanship. <small>Robert C. Martin</small>
                </a>
                <a className="float-right" tabIndex="-1">
                  <Date /> <b>2020- 2021</b>
                </a>
                <p>
                  Clean Code is divided into three parts. The first describes the principles, patterns, and practices of writing clean code. The second part consists of several case studies of increasing complexity. Each case study is an exercise in cleaning up code―of transforming a code base that has some problems into one that is sound and efficient. The third part is the payoff: a single chapter containing a list of heuristics and “smells” gathered while creating the case studies. The result is a knowledge base that describes the way we think when we write, read, and clean code.

                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Data Structure And Algorithm"
                  href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/"
                >
                  Data Structure And Algorithm. <small>Udemy</small>
                </a>
                <a className="float-right" tabIndex="-1">
                  <Date /> <b>2020</b>
                </a>
                <p>
                  Many developers who are &quot;self taught&quot;, feel that one
                  of the main disadvantages they face compared to college
                  educated graduates in computer science is the fact that they
                  don&apos;t have knowledge about algorithms, data structures
                  and the notorious Big-O Notation
                </p>
              </li>


            </ul>
          </article>
        </PageWrapper>




      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
        .intro__text {
          font - size: var(--font-x-lg);
        font-weight: 900;
        margin: 4rem 0rem 1.5rem;
        position: relative;
  }
        .intro__texth2 {
          font - size: var(--font-x-l);
        font-weight: 200;
        margin: 4rem 0rem 1.5rem;
        position: relative;
  }
        h4 {
          font - size: calc(var(--font-md) + 1.5px);
  }
        p {
          font - size: calc(var(--font-sm) + 0.9px);
        margin-top: 0.6rem;
        line-height: 2;
        font-weight: 400;
        color: var(--article-color) !important;
  }

        ul.timeline {
          list - style - type: none;
        position: relative;
        &:before {
          content: ' ';
        background: var(--timeline);
        display: inline-block;
        position: absolute;
        left: 0px;
        width: 1px;
        top: 4px;
        height: 100%;
        z-index: 400;
    }
        li {
          margin: 3rem 0;
        padding-left: 20px;
        &:before {
          content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
        a {
          font - size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text - decoration: underline;
        font-size: calc(var(--font-sm) + 0.9px);
        }
      }
        a svg {
          margin - top: -0.4rem;
        width: 13px;
      }
    }
  }
        @media (max-width: 585px) {
          ul.timeline li a {
          display: block;
        float: none !important;
        margin-top: 5px;
    }
  }
        @media (max-width: 989px) {
          ul.timeline li a {
          display: block;
        float: none !important;
        margin-top: 5px;
    }
  }
        @media (max-width: 220px) {
          ul.timeline li a {
          display: block;
        float: none !important;
        margin-top: 5px;
    }
  }
        `;

export default About;
