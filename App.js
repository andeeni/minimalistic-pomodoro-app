import React from 'react';
import { View, Text, FlatList, TouchableOpacity, TextInput, Button, ScrollView, Image, ImageBackground, StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CheckBox from 'react-native-check-box';
import CountDown from 'react-native-countdown-component';


class FocusScreen extends React.Component {

  render() {
    return (
      <View style={{ 
        flex: 1,
        backgroundColor: "#acc8c9",
        }}
      >
        <ImageBackground 
          source={{uri: 'https://pbs.twimg.com/media/DN4I_bUVoAAP49R.jpg'}} 
          style={styles.image}
        >
          <View style={{justifyContent: 'center', flex:0.8}}>
            <View style={styles.border1}>
              <Text style={styles.header1}>CURRENT TASK:</Text>
              <Text style={styles.header2}>{currentTask}</Text>
            </View>
            <CountDown
              until={60*25}
              size={40}
              onFinish={() => alert('Break Time!')}
              timeToShow={['M', 'S']}
              timeLabels={{m: null, s: null}}
              digitStyle={{backgroundColor: '#708090'}}
              digitTxtStyle={{color: 'white'}}
            />   
          </View>  
        </ImageBackground> 
      </View>
    );
  }
}


let currentTask = "test"
class DashboardScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked1:false,
      isChecked2: false,
      isChecked3: false,
      isChecked4: false,
      task1:'',
      task2:'',
      task3:'',
      task4:'',
    }
  }

  render() {
    return (
      <View style={{flex: 1, flexDirection: "column",padding: 20, backgroundColor:'#acc8c9'}}>
        <View style={styles.border2}>
          <Text style={styles.header1}>POMODORO TASKS</Text>
          <Text style={styles.header2}>
            Fill in your tasks below, then tap the checkboxes to begin!
          </Text>
        </View>

        <View style = {{height: '50%',marginTop: 20}}>
          <View style={{flexDirection: 'row', flex: 1, alignItems:'center'}}>
            <CheckBox
              style={{flex: 1,alignSelf: 'center'}}
              onClick={ () => {
                this.setState ({
                  isChecked1:!this.state.isChecked1
                });
                this.props.navigation.navigate('Focus', { isChecked1: !this.state.isChecked1});
                currentTask = this.state.task1
              }}
              isChecked={this.state.isChecked1}
              checkBoxColor = '#df5154'
              rightText={"Task 1:"}
              rightTextStyle = {{
                  fontWeight: 'bold',
                  color:'black' 
                }}
            />
            
            <TextInput 
              style = {styles.taskInput}
              keyboardType="default"
              value={this.state.task1}
              onChangeText={input_text => { 
                this.setState({task1: input_text});
              }}
              placeholder = {"Add Task Here"}
              />
          </View>

          <View style={{flexDirection: 'row', flex: 1, alignItems:'center'}}>
            <CheckBox
              style={{flex: 1,alignSelf: 'center'}}
              onClick={ () => {
                this.setState ({
                  isChecked2:!this.state.isChecked2
                });
                this.props.navigation.navigate('Focus', { isChecked2: !this.state.isChecked2 });
                currentTask = this.state.task2
              }}
              isChecked={this.state.isChecked2}
              checkBoxColor = '#df5154'
              rightText={"Task 2:"}
              rightTextStyle = {{
                  fontWeight: 'bold',
                  color:'black' 
                }}
            />
            
            <TextInput 
              style = {styles.taskInput}
              keyboardType="default"
              value={this.state.task2}
              onChangeText={input_text => { 
                this.setState({task2: input_text});
              }}
              placeholder = {"Add Task Here"}
              />
          </View>
          <View style={{flexDirection: 'row', flex: 1, alignItems:'center'}}>
            <CheckBox
              style={{flex: 1,alignSelf: 'center'}}
              onClick={ () => {
                this.setState ({
                  isChecked3:!this.state.isChecked3
                });
                this.props.navigation.navigate('Focus', {isChecked3: !this.state.isChecked3});
                currentTask = this.state.task3
              }}
              isChecked={this.state.isChecked3}
              checkBoxColor = '#df5154'
              rightText={"Task 3:"}
              rightTextStyle = {{
                  fontWeight: 'bold',
                  color:'black' 
                }}
            />
            
            <TextInput 
              style = {styles.taskInput}
              keyboardType="default"
              value={this.state.task3}
              onChangeText={input_text => { 
                this.setState({task3: input_text});
              }}
              placeholder = {"Add Task Here"}
              />
          </View>

          <View style={{flexDirection: 'row', flex: 1, alignItems:'center'}}>
            <CheckBox
              style={{flex: 1,alignSelf: 'center'}}
              onClick={ () => {
                this.setState ({
                  isChecked4:!this.state.isChecked4
                });
                this.props.navigation.navigate('Focus', {isChecked4: !this.state.isChecked4});
                currentTask = this.state.task4
              }}
              isChecked={this.state.isChecked4}
              checkBoxColor = '#df5154'
              rightText={"Task 4:"}
              rightTextStyle = {{
                  fontWeight: 'bold',
                  color:'black' 
                }}
            />
            
            <TextInput 
              style = {styles.taskInput}
              keyboardType="default"
              value={this.state.task4}
              onChangeText={input_text => { 
                this.setState({task4: input_text});
              }}
              placeholder = {"Add Task Here"}
              />
          </View>
        </View>
        <View style={{alignSelf:'center', width:'20%', marginTop:20}}>
          <Button
            title = "Reset"
            onPress={() => {
                this.setState ({
                  isChecked1:false,
                  isChecked2: false,
                  isChecked3: false,
                  isChecked4: false,
                  task1:'',
                  task2:'',
                  task3:'',
                  task4:'',
                });
                currentTask = "test"
              }}
            type = "outline"
            color = "#1c749a">
          </Button>
        </View>

      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Focus: {
     screen: FocusScreen,
     navigationOptions: {
       headerTransparent:true,
      },
    },
    Dashboard: {
     screen: DashboardScreen,
     navigationOptions: {
       headerTransparent:true,
     },
  },
  },
  {
    initialRouteName: 'Dashboard',
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  image: {
    resizeMode:'cover',
    width:'100%',
    height:'100%',
    alignItems:'center',
  },

  border1: {
    backgroundColor:'#708090',
    padding:10,
    borderRadius:5,
    marginBottom:15
  },

  border2: {
    backgroundColor:'#708090',
    padding:10,
    borderRadius:5,
    marginTop:25,
  },

  header1: {
    padding:10, 
    fontSize: 30,
    color:"white",
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
    textAlign: 'center',
    flexWrap: 'wrap',
    fontWeight: 'bold'
  },

  header2: {
    paddingBottom:10, 
    paddingLeft:10,paddingRight:10,
    fontSize: 18,
    color:"white",
    justifyContent: 'flex-start', 
    alignItems: 'flex-start',
    textAlign: 'center',
    flexWrap: 'wrap'
  },
  
  taskInput: {
    borderWidth: 1,
    height: 40,
    flex:2.5
  },

});
