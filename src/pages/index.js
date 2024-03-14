import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import SectionBlock from "../components/SectionBlock/sectionBlock";
import List from "../components/List/list";
import Heading from "@theme/Heading";
import styles from "./index.module.css";
import CodeBlock from "@theme/CodeBlock";
import MyComponentSource from "!!raw-loader!./degree-vc-example.json";
import Link from "@docusaurus/Link";
import Mermaid from "@theme/Mermaid";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Learn all you need to know about verifiable credentials."
    >
      <HomepageHeader />
      <main>
        <section className="container">
          {" "}
          <div classname="row">
            <SectionBlock
              imgPath="/img/vcs-banner.png"
              imgPosition="right"
              title="What Are Verifiable Credentials?"
              description={
                <>
                  <p>
                    VCs represent digital credentials that are cryptographically
                    verifiable. This allows them to be kept on digital devices,
                    enabling the use of cryptography to confirm their data and
                    the identity of the issuer.
                  </p>
                  <p>
                    Using digital identity wallets, users can store and provide
                    for verification their VCs representing:
                  </p>
                  <List
                    items={[
                      "ID card",
                      "Driving license",
                      "University degree",
                      "Vaccine proof",
                      "And more...",
                    ]}
                  />
                </>
              }
            />
          </div>
        </section>
        <section className="container">
          <div className="row">
            <CodeBlock
              language="json"
              title="University Degree Credential"
              className="col col--6"
            >
              {MyComponentSource}
            </CodeBlock>
            <div className="col col--6">
              <h1>Verifiable Credential Example</h1>
              <p>
                To the left you can see a verifiable credential example for a
                university degree. It is prepared according to the{" "}
                <Link href="https://www.w3.org/TR/vc-data-model/">
                  W3C VC Data Model v1.1
                </Link>
                .
              </p>
              <p>
                The <b>type</b> of a credential can help ascertain its relevance
                for certain situations. For example, a credential with the type{" "}
                <b>DriverLicense</b> is suitable for verifying driving
                privileges but may not be relevant for academic verification
                purposes.
              </p>
              <p>
                The <b>issuer</b> indicates the entity that issued the
                credential. This should be a URI or an object that includes an
                'id' attribute. While the URI or 'id' could be a Decentralized
                Identifier (DID), it is not a strict requirement.
              </p>
              <p>
                The <b>subject</b> refers to the entity (such as an individual
                or organization) that the credential information pertains to.
                The credentialSubject encompasses one or more attributes linked
                to the credential's user. Usually, but not necessarily, a
                subject identifier is part of this object. Although the id might
                be a Decentralized Identifier (DID), it is not obligatory. There
                can be multiple subjects within the credentialSubject (for
                instance, in the case of a car insurance credential).
              </p>
              <p>
                The <b>proof</b> refers to one or several cryptographic proofs,
                which can be structured as either an object or an array,
                utilized to identify any alterations and ascertain the origin of
                a credential or presentation.
              </p>
            </div>
          </div>
        </section>
        <section className="container margin-top--lg margin-bottom--lg">
          <h1>How Verifiable Credentials Work</h1>
          <div className="col">
            <Mermaid
              value={`sequenceDiagram;
            autonumber;
            participant user as Subject (Marcus);
            participant iss as Issuer (Roma University);
            participant verif as Verifier (Potential Employer)
            participant reg as Verifiable Data Registry
            user->>iss: Request credential using digital ID wallet;
            iss->>user: Return cryptographically signed verifiable credential;
            Note over iss, user: The credential is signed using the issuer private key
            user->>user: Store verifiable credential in digital ID wallet;
            verif->>user: Ask for verifiable credential;
            user->>verif: Using digital wallet, present credential;
            Note over user, verif: Verifiable Presentation (VP) is signed with the subject's private key;
            verif->>reg: Obtain subject and issuer public keys;
            reg->>verif: Return keys
            verif->>verif: Cryptographically verify the VP for validity.
            verif->>user: OK
            `}
            />
          </div>
        </section>
      </main>
    </Layout>
  );
}
