import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'

const TourModalButton = () => (
  <Modal
    class="modal"
    trigger={
      <Button primary size="huge">
        Go on a Tour
        <Icon name="right arrow" />
      </Button>
    }
  >
    <Modal.Header>Let's Get In Touch!</Modal.Header>
    <Modal.Content >
      {/* <Image wrapped size='medium' src='/images/avatar/large/rachel.png' /> */}
      <Modal.Description>
        <Header>Current Tours</Header>
        <p>Want to see the kind of project we’ll be working on this summer? Curious
        about what our objectives look like in practice? <b>Come join us for our
        Chinatown Food tour.</b></p>
        <p>Chinatown Food: Labor and Politics One of the most
        popular commercial tours in Chinatown is the the food tour. Tongue in
        cheek style, our tour discusses what imperialism and British army bases
        might have to do with our favorite Chinatown desserts, what policies and
        institutions affect street vendors, and worker organizing from the 1980s
        in New York City’s Chinatown.</p>
        <p> <b>Please contact <a href="mailto:chinatown.our.narrative@gmail.com">chinatown.our.narrative@gmail.com</a> to book a private tour, tour + workshop, or learn more
        about our project.</b> Currently, our tours are in English with the hope to
        eventually expand into Mandarin and/or Cantonese (and other languages!)
        capacity.</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default TourModalButton
