import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker, * from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-web';
import { VERTICAL } from 'react-native/Libraries/Components/ScrollView/ScrollViewContext';
import * as React from 'react';
import {createSwitchNavigator, createAppcontainer} from 'react-navigation'

import LoginScreen from "./screens/LoginScreen"
import LoadingScreen from './screens/LoadingScreen'
import DashboardScreen from './screens/DashboardScreen'

import * as firebase from 'firebase';
import {firebaseConfig} from './config';

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app()
}

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen: LoadingScreen,
  LoginScreen: LoginScreen,
  DashboardScreen: DashboardScreen
})

const AppNavigator = createAppcontainer(AppSwitchNavigator)

export default function App(){
  return(
    <AppNavigator/>
  )
}

export default function App() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.droidSafeArea}/>
      <View style={styles.appTitle}>
        <View style={styles.appIcon}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.iconImage}
          ></Image>
        </View>
        <View style={styles.appTitleTextContainer}>
          <Text style={styles.apptilteText}>New Post</Text>
        </View>
      </View>
      <View style={styles.fieldContainer}>
        <ScrollView>
          <Image
            source={preview_images[this.state.previewImages]}
            style={styles.previewImage}
          ></Image>
        
        <View style={{height:
                        RFValue(this.state.dropDownHeight)}}>

          <DropDownPicker
            items={[
              {label: 'Image 1', value: 'image_1'},
              {label: 'Image 2', value: 'image_2'},
              {label: 'Image 3', value: 'image_3'},
              {label: 'Image 4', value: 'image_4'},
              {label: 'Image 5', value: 'image_5'},
              {label: 'Image 6', value: 'image_6'},
              {label: 'Image 7', value: 'image_7'}
            ]}
            defaultValue={this.state.previewImage}
            containerStyle={{
              heights: 40, 
              borderRadius: 20,
              marginBottom: 10
            }}
            onOpen={()=>{
              this.setState({dropDownHeight:170});
            }}
            onClose={()=>{
              this.setState({dropDownHeight:40})
            }}
            style={{backgroundColor:'transparent'}}
            itemStyle={{
              justifyContent: 'flex-start'
            }}
            dropDownStyle={{backgroundColor:"#2a2a2a"
            labelStyle={{
                color:'white'
            }}
            arrowStyle={{
              color:'white'
            }}
            onChangeItem={item=>
            this.setState({
              previewImage: item.value
            })
          }
          
          />
          
        </View>
        <TextInput
          style={styles.inputFont}
          onChangeText={caption=>this.setState({caption
          })}
          placeHolder={'Caption'}
          placeHolderTextColor='white'
          />
          </ScrollView>
      </View>
      <View style={{flex:0.08}}/>
      
      

      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
