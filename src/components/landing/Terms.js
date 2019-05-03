import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react';

class Terms extends Component {
  render(){
    return(
      <Container>
        <Header as='h1' textAlign='center'>Terms & Privacy Policy</Header>
        <Header as='h4' textAlign='center'>Last updated: 22 April 2019</Header>
        <div style={{ marginTop: 50 }}>
          Alterz accepts no liability or responsibility to any person or organisation as a consequence of our products
          and services or any reliance upon the information contained in any of its sites and properties.
        </div>
        <div style={{ marginTop: 50 }}>
          <Header as='h2'>What we collect:</Header>
          <ul>
            <li>Information you give us</li>
            <li>Information we get from your use of our products</li>
          </ul>
        </div>
        <div style={{ marginTop: 50 }}>
          <Header as='h2'>What will we do with the data we collect:</Header>
          <ul>
            <li>
              We use the information that we collect to provide better understand your needs and provide you with a better
              experience and service. We may also use the information to contact you. If you do not want us to use your
              information, please let us know.
            </li>
          </ul>
        </div>
        <div style={{ marginTop: 50 }}>
          <Header as='h2'>Beta Products</Header>
          <ul>
            <li>Occasionally, we may release Product(s) and features on a alpha, beta, seed, and other pre-release basis,
              and related documentation, materials, and information (collectively, the "Beta Products”.</li>
            <li>Beta Products will be identified as “beta” or “pre-release”, or with words or phrases importing similar
            meanings. </li>
            <li>Beta Products are not ready for prime time, and any warranties or contractual commitments that we may
            make for other Products do not apply.</li>
            <li>We expect Beta Products to contain defects and bugs. Beta Products are provided on an "as is"
            and “as available" basis for the sole purpose of providing Alterz with feedback on quality, usability,
            performance, and the idenitification of defects.</li>
          </ul>
        </div>
        <div style={{ marginTop: 50 }}>
          <Header as='h2'>More terms</Header>
          <p>You agree to observe and maintain the confidentiality of all security features relating to use of the Website
          (including passwords, access arrangements etc) as notified. Alterz will not be liable for any unauthorised breach
          or disclosure of the security features.</p>
          <p>When providing feedback (e.g. by identifying any errors or problems in the operations of Alterz and its services)
          through any medium (e.g. the feedback form, email or any other medium), you acknowledge and agree that all feedback
          will be the sole and exclusive property of Alterz. You hereby assign to Alterz and agree to assign to Alterz all of
          your right and interesting in and to all feedback, including all intellectual property rights therein.</p>
          <p>You agree to indemnify Alterz (its employees and agents) for any loss suffered or liability incurred by Alterz
          (its employees and agents) arising from any unlawful, unauthorised or improper access or use of the Website or any
          breach of these terms by you or your employees, contractors or representatives.</p>
          <p>Alterz does not guarantee constant availability of Website access and accept no liability for down time or access
          failure due to circumstances beyond its reasonable control (including any failure by ISP or system provider).</p>
          <p>The Site may contain links to other sites on the internet (“Linked Sites”). Alterz is not responsible for the accuracy,
          legality, decency of material or copyright compliance of any Linked Site or services or information provided via any Linked Site.</p>
          <p>No data transmission over the Internet can be guaranteed as totally secure. Whilst we strive to protect such information we do not
          warrant and cannot ensure the security of information which you transmit to us. Accordingly, any information which you transmit to us is
          transmitted at your own risk.</p>
          <p>These terms and conditions will be constructed according to and are governed by the laws of United States of America, regardless of
          where Alterz operates or you use Alterz from.</p>
        </div>
        <div style={{ marginTop: 50 }}>
          <Header as='h2'>That's it <span role="img" aria-label="bye">👋</span></Header>
          <Header as='h2'>Yours, Alterz</Header>
        </div>
      </Container>
    )
  }
}

export default Terms;
