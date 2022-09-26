import './App.css';
import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import Rank from './components/rank/Rank'
import FaceRecognition from './faceRecognition/FaceRecognition';
import { Component } from 'react';
// import Clarifai from 'clarifai';
import SignIn from './components/signIn/SignIn';
import Register from './components/register/Register';

// const app = new Clarifai.App({
//   apiKey: ''
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'signIn',
      isSignedIn: false
    }
  }

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  }

  // calculateFaceLocation = (data) => {
  //   const clarifaiFace =
  //     data.outputs[0].data.regions[0].region_info.bounding_box;
  //   const image = document.getElementById('inputImage');
  //   const width = Number(image.width);
  //   const height = Number(image.height);
  //   return {
  //     leftCol: clarifaiFace.left_col * width,
  //     topRow: clarifaiFace.top_row * height,
  //     rightCol: width - clarifaiFace.right_col * width,
  //     bottomRow: height - clarifaiFace.bottom_row * height
  //   }
  // }

  // displayFaceBox = (box) => {
  //   this.setState({ box: box });
  // }

  // onButtonSubmit = () => {
  //   this.setState({ imageUrl: this.state.input });
  //   app.models.predict(
  //     Clarifai.FACE_DETECT_MODEL,
  //     this.state.input)
  //     .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
  //     .catch(error => console.log(error));
  // }

  onRouteChange = (route) => {
    if (route === "signOut") {
      this.setState({ isSignedIn: false });
    }
    else if (route === "home") {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });

  }

  render() {
    const { isSignedIn, box, imageUrl, route } = this.state;
    return (
      <div className="App">
        <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        {route === "signIn"
          ? <SignIn onRouteChange={this.onRouteChange} />
          : (
            route === "home"
              ?
              <div> <Logo />
                <Rank />
                <ImageLinkForm
                  onInputChange={this.onInputChange}
                  onButtonSubmit={this.onButtonSubmit} />
                <FaceRecognition box={box} imageUrl={imageUrl} />
              </div>
              :
              <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
