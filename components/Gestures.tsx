import { View} from 'react-native'
import { PanGestureHandler, State, GestureHandlerRootView } from 'react-native-gesture-handler';

const Gesture = () => {
    const onGestureEvent = (event:any) => {
      const { translationY } = event.nativeEvent;
      if (translationY < 0) {
        console.log('Scorri dal basso verso l alto');
      }
    };
  
    return (
    <GestureHandlerRootView style={{height: "100%",zIndex:20,opacity:0.1, width:"100%", backgroundColor: 'lightgrey', position:'absolute' }}>
      <PanGestureHandler
        onGestureEvent={onGestureEvent}
        onHandlerStateChange={(event) => {
          if (event.nativeEvent.oldState === State.ACTIVE) {
            console.log("wabadabaa")
          }
        }}
      >
        <View style={{ height: "100%",zIndex:20,opacity:0.1, width:"100%", backgroundColor: 'lightgrey', position:'absolute'}}>
        </View>
      </PanGestureHandler>
      </GestureHandlerRootView>

    );
  };
  
  export default Gesture;