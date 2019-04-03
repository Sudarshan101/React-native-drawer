import React, { Component } from "react"
import { Content,List, Header, Body, Title,ListItem, Container,  Left, Right, Icon, Text, Badge} from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationActions } from 'react-navigation';

export default class LeftSideBar extends React.Component {
  constructor(props) {
    super(props)
  }

  navigateToScreen = (route) => () => {
    const navigate = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigate);
  }

  render() {
    return (
     <ScrollView>
     <Container>
     <Header>
        <Left/>
        <Body>
          <Title>Left Side</Title>
        </Body>
        <Right />
      </Header>
        <Content>
          <List>
            <ListItem  onPress={() => this.props.navigation.closeDrawer()} selected>
              <Left>
                <Text>Simon Mignolet</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem  onPress={() => this.props.navigation.closeDrawer()}>
              <Left>
                <Text>Nathaniel Clyne</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem  onPress={() => this.props.navigation.closeDrawer()}>
              <Left>
                <Text>Dejan Lovren</Text>
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
     </ScrollView>
    )
  }
}
