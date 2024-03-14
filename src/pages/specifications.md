---
title: Specifications
id: specifications
---

## Verifiable Credentials and Related Standards


The development of verifiable credentials is an ongoing process, with specifications currently in an advanced draft
stage, though not yet finalized. Staying informed about these evolving standards is crucial as they are instrumental in
shaping the future of digital identity verification.

Two principal organizations are at the forefront of crafting the specifications for verifiable credentials and related
standards:

* **World Wide Web Consortium (W3C)**: This esteemed international standards organization plays a pivotal role in
  developing protocols and guidelines to ensure the long-term growth of the World Wide Web. W3C's involvement ensures
  that the specifications for verifiable credentials align with broader web standards, promoting compatibility and
  interoperability.

* **OpenID Foundation:** Renowned for its commitment to creating secure and interoperable identity standards, the OpenID
  Foundation's contributions are vital in ensuring that verifiable credentials are robust, secure, and user-centric.
  Their work emphasizes the importance of identity verification in the digital age, making them a key player in the
  specification process.

Engaging with these organizations' work and staying abreast of their progress is essential for anyone involved in
digital identity, as the standards they are developing will significantly influence the landscape of online verification
and authentication.

### W3C for Verifiable Credentials

| Standard | Status | Description |
| -------- | ------ | ----------- |
| [Verifiable Credentials Data Model v1.1](https://www.w3.org/TR/vc-data-model/) | Standard | Provides a mechanism of expressing verifiable credentials in a way that is cryptographically secure, privacy respecting, and machine verifiable. Includes also the standard for **Verifiable Presentations**. |
| [Verifiable Credentials Data Model v2.0](https://www.w3.org/TR/vc-data-model-2.0/) | Candidate | Provides a mechanism of expressing verifiable credentials in a way that is cryptographically secure, privacy respecting, and machine verifiable. Includes also the standard for **Verifiable Presentations**. |
| [Verifiable Credential Data Integrity v.1.0](https://www.w3.org/TR/vc-data-integrity/) | Candidate | Describes mechanisms for ensuring the authenticity and integrity of Verifiable Credentials and similar types of constrained digital documents using cryptography, especially through the use of digital signatures and related mathematical proofs. |
| [Securing Verifiable Credentials using JOSE and COSE](https://www.w3.org/TR/vc-jose-cose/) | Draft | Defines how to secure credentials and presentations conforming to the Verifiable Credential data model (v.2.0) with [JSON Object Signing and Encryption (JOSE)](https://datatracker.ietf.org/wg/jose/about/), [Selective Disclosure for JWTs (SD-JWT)](https://datatracker.ietf.org/doc/html/draft-ietf-oauth-selective-disclosure-jwt), and [CBOR Object Signing and Encryption (COSE)](https://www.rfc-editor.org/rfc/rfc9052). |
| [Decentralized Identifiers (DIDs) v.1.0](https://www.w3.org/TR/did-core/) | Standard | Provides a new type of identifier that enables verifiable, decentralized digital identity. A DID refers to any subject (e.g., a person, organization, thing, data model, abstract entity, etc.) as determined by the controller of the DID. |
| [Verifiable Credentials Implementation Guidelines v1.0](https://w3c.github.io/vc-imp-guide/) | Note | Provides examples and resources for implementing verifiable credentials related protocols. |

### OpenID for Verifiable Credentials

| Standard | Status | Description |
| -------- | ------ | ----------- |
| [OpenID for Verifiable Credential Issuance](https://openid.net/specs/openid-4-verifiable-credential-issuance-1_0.html) | Draft | Defines an API and corresponding OAuth-based authorization mechanisms for issuance of Verifiable Credentials. |
| [OpenID for Verifiable Presentations](https://openid.net/specs/openid-4-verifiable-presentations-1_0.html) | Draft | Defines a mechanism on top of OAuth 2.0 enabling presentation of Verifiable Credentials as Verifiable Presentations. Verifiable Credentials and Verifiable Presentations can be of any format, including, but not limited to [W3C Verifiable Credentials Data Model](https://www.w3.org/TR/vc-data-model/), [ISO mdoc/mDL](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:18013:-5:ed-1:v1:en), and [AnonCreds](https://www.hyperledger.org/projects/hyperledger-indy) |

### Other

| Standard | Status | Description |
| -------- | ------ | ----------- |
| [ISO mdoc/mDL](https://www.iso.org/obp/ui/en/#iso:std:iso-iec:18013:-5:ed-1:v1:en) | Standard | Standard for Mobile driving license (mDL) application. Establishes interface specification for the implementation of a driving licence in association with a mobile device. |
| [HyperLedger AnonCreds](https://www.hyperledger.org/projects/anoncreds) | Standard | Anonymous Credentials - a ledger agnostic and with a formal open specification. AnonCreds as a VC format adds privacy-protecting zero-knowledge proof capabilities to the core VC assurances. |

