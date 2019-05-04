import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import {TourModalButton} from './'

const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}


const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='Chinatown: Our Narrative Tours'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='The personal stories, policy, and history of NYC Chinatown'
      inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    <TourModalButton />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = { 
      activeItem: 'home'
  }

  handleItemClick = (e, { name }) => {
      this.setState({ activeItem: name })
      document.querySelector(`#${name}`).scrollIntoView({ behavior: 'smooth' })
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed, activeItem } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            id='home'
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item as='a' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
                  Home
                </Menu.Item>
                <Menu.Item as='a' name='about' active={activeItem === 'about'} onClick={this.handleItemClick}>About</Menu.Item>
                <Menu.Item as='a' name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick}>Blog</Menu.Item>
                <Menu.Item as='a' name='map' active={activeItem === 'map'} onClick={this.handleItemClick}>Map</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted={!fixed}>
                    Donate
                  </Button>
                  {/* <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button> */}
                </Menu.Item>
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as='a' active>
            Home
          </Menu.Item>
          <Menu.Item as='a'>Stories</Menu.Item>
          <Menu.Item as='a'>Map</Menu.Item>
          <Menu.Item as='a'>About</Menu.Item>
          <Menu.Item as='a'>Donate</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>
                  Donate
                  </Button>
                  {/* <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button> */}
                </Menu.Item>
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const HomepageLayout = () => (
  <ResponsiveContainer>
    <Segment id='about' style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
            What We Do
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Our Narrative Tours aims to connect and identify community resources within history, policy, and personal experiences of New York City’s Chinatown. This summer, Contours will train and facilitate the research, storytelling, and crafting process for youth that want to tell their own stories about Chinatown.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
            What Do We Mean by <i>Tour</i>?
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Our tours aim to defamiliarize places in our neighborhood so we can better imagine and act toward changes that we want. We want to draw attention to international impact on local phenomenon, of policy on daily life, and current projects and campaigns in Chinatown. Under specific themes, we want to tell as many layers of the story as we can.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/images/tour.jpg' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Join Our Team</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "The best tour I've been on in New York!"
            </Header>
            <p style={{ fontSize: '1.33em' }}><b>Lisa Lee</b> a New Yorker</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "A true learning experience. Alina was the best guide!"
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <Image avatar src='/images/mitski.png' />
              <b>Mitski</b> sad cowboy
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment id='blog' style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
        Defamiliarizing Space (and My Intro to Critical Geography)
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        One night before graduation, one of my friends, Y., asked me if I wanted to stay the night in Chinatown. She wanted to do something called emotional cartography, which involves controlled wandering and, in particular, chalking empty streets and recording sounds. We carried a tub of chalk and a pad of paper...
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
        <Divider
          as='h4'
          className='header'
          horizontal
          style={{ margin: '3em 0em', textTransform: 'uppercase' }}
        >
          <a href='#'>Blog Posts</a>
        </Divider>
        <Header as='h3' style={{ fontSize: '2em' }}>
        New faces, summer heat, and impromptu poetry
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        Some of my personal goals going in to this summer: Figure out how Chinatown: Our Narrative Tours could operate more like a collective than a program which I think could improve our sustainability and creativity. How can we make this project more sustainable, and align more closely with social issues in the...
        </p>
        <Button as='a' size='large'>
        Read More
        </Button>
      </Container>
    </Segment>
    <Segment inverted vertical style={{ padding: '5em 0em' }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='About' />
              <List link inverted>
                <List.Item as='a'>Sitemap</List.Item>
                <List.Item as='a'>Contact Us</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as='h4' content='Services' />
              <List link inverted>
                <List.Item as='a'>Home</List.Item>
                <List.Item as='a'>Stories</List.Item>
                <List.Item as='a'>FAQ</List.Item>
                <List.Item as='a'>Go On a Tour</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as='h4' inverted>
                Contours NYC
              </Header>
              <p>
              Our tours aim to defamiliarize places in our neighborhood so we can better imagine and act toward changes that we want.  
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  </ResponsiveContainer>
)
export default HomepageLayout