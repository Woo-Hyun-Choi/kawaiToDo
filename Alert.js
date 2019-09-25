import CheckAlert from "react-native-awesome-alert"

const NeverAskView = (
  <View style={styles.sampleView}>
    <Text style={styles.sampleViewText}>This is "Do not ask again" checkable alert</Text>
  </View>
)

...

export default class App extends Component {

  onPressSimpleAlert = () => {
    this.checkAlert.alert("Hello!!", SimpleView, [
      { text: "OK", onPress: () => console.log("OK touch") },
      { text: "Cancel", onPress: () => console.log("Cancel touch") }
    ])
  }

  onPresshNeverAskAlert = () => {
    this.checkAlert.neverAskAlert(
      "Hello CheckAlert",
      NeverAskView,
      [
        { text: "OK", onPress: () => console.log("OK touch"), id: "helloAlert" },
        { text: "Cancel", onPress: () => console.log("Cancel touch") }
      ],
      "Do not ask again"
    )
  }

  onPresshNot24HAlert = () => {
    this.checkAlert.randomAskAlert(
      "Hello CheckAlert",
      RandomAskView,
      [
        { text: "OK", onPress: () => console.log("OK touch"), id: "helloAlert2" },
        { text: "Cancel", onPress: () => console.log("Cancel touch") }
      ],
      "Do not ask for 3 minutes",
      3
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <CheckAlert
          styles={{
            modalContainer: { backgroundColor: "rgba(49,49,49,0.8)" },
            checkBox: { padding: 10 },
            modalView: { marginBottom: 10, borderRadius: 0 }
          }}
          ref={ref => (this.checkAlert = ref)}
          // available Modal's props options: https://facebook.github.io/react-native/docs/modal.html
          modalProps={{
            transparent: true,
            animationType: "slide",
            onShow: () => alert("onShow!")
          }}
          checkBoxColor="red"
        />
        <TouchableOpacity style={styles.touchButton} onPress={this.onPressSimpleAlert}>
          <Text style={styles.toucaButtonTxt}>simple Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchButton}
          onPress={this.onPresshNeverAskAlert}
        >
          <Text style={styles.toucaButtonTxt}>neverAsk Alert</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchButton} onPress={this.onPresshNot24HAlert}>
          <Text style={styles.toucaButtonTxt}>randomAsk Alert</Text>
        </TouchableOpacity>
      </View>
    )
  }
}