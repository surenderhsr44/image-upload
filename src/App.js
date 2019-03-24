import React, { Component } from 'react';
import DisplayImage from './DisplayImage';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gallery: [],
    }
  }
  _handleImageChange(e) {
    e.preventDefault();
   
    let reader = new FileReader();
    let file = e.target.files[0];
    var currentTimeDate = new Date().toLocaleString();

    reader.onloadend = () => {
      var obj = {
        file: file,
        imagePreviewUrl: reader.result,
        currentTimeDate:currentTimeDate
      }
      let list = this.state.gallery;
      list.push(obj)
      this.setState({ gallery: list })

    }

    reader.readAsDataURL(file)
  }
  render() {
    const { gallery } = this.state;
    var currentTimeDate = new Date().toLocaleString();
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds
    return (
      <div>
        <div className="App">
          {gallery.map((item, index) => {
            return <DisplayImage URL={item.imagePreviewUrl} currentTimeDate={item.currentTimeDate} />
          })}
        
          <input className="fileInput"
            type="file" accept=".jpeg,.png,.jpg,.bmp,"
            onChange={(e) => this._handleImageChange(e)} />
        </div>
        
       
      </div>
    );
  }
}

export default App;
