import React, {Component} from 'react';
import './app.scss';
import Header from "./componenets/Header";
import BradenModal from "./componenets/modals/BradenModal";
import WrenModal from "./componenets/modals/WrenModal";
import RafiModal from "./componenets/modals/RafiModal";
import AlyxModal from "./componenets/modals/AlyxModal";
import DevonModal from "./componenets/modals/DevonModal";
import DoModal from "./componenets/modals/DoModal";
import JacquiModal from "./componenets/modals/JacquiModal";
import JathushanModal from "./componenets/modals/JathushanModal";
import KiranModal from "./componenets/modals/KiranModal";
import LucyModal from './componenets/modals/LucyModal';
import PjModal from "./componenets/modals/PjModal";
import floorPlan from "./assets/floor-plan.jpg";
import muscle from "./assets/muscle_icon.png";






class App extends Component {
  constructor() {
    super()
    this.state = {
      whosModel: null
  }
}

  setInternModal = (e) => {
    let internClicked = e.target.getAttribute("data-name");

      this.setState({
        whosModel: internClicked
      });
  }

  closeInternModal = () => {
    this.setState({
      whosModel: null
    });
  }


  

  render() {
    //Variables storing intern models
    const internModels = {
      braeden: <BradenModal closeInternModal={this.closeInternModal}/>,
      wren: <WrenModal closeInternModal={this.closeInternModal}/>,
      rafi: <RafiModal closeInternModal={this.closeInternModal}/>,
      alyx: <AlyxModal closeInternModal={this.closeInternModal}/>,
      devon: <DevonModal closeInternModal={this.closeInternModal}/>,
      do: <DoModal closeInternModal={this.closeInternModal}/>,
      jacqui: <JacquiModal closeInternModal={this.closeInternModal}/>,
      jathushan: <JathushanModal closeInternModal={this.closeInternModal}/>,
      kiran: <KiranModal closeInternModal={this.closeInternModal}/>,
      lucy: <LucyModal closeInternModal={this.closeInternModal}/>,
      pj: <PjModal closeInternModal={this.closeInternModal}/>
    }

    const imageUrl = floorPlan;
    const styles = {
      mainContainer: {
        backgroundImage: `url(${imageUrl})`,
        backgroundPosition: "center center",
        backgroundSize: "cover"
      }
    };

    return (
        <main className="main-content-container" style={styles.mainContainer}>
            <Header />
          <div className="wrapper">

            {/* <img src={floorPlan} alt="floorplan of Critical Mass ... Oceans 11 style." /> */}

          <button className="braeden-button button" data-name="braeden" onClick={this.setInternModal}>
              <img className="image muscle1" src={muscle} alt=""  />
            </button>

          <button className="wren-button button" data-name="wren" onClick={this.setInternModal}>
              <img className="image muscle2" src={muscle} alt="" />
            </button>

          <button className="rafi-button button" data-name="rafi" onClick={this.setInternModal} >
              <img className="image muscle3" src={muscle} alt="" />
            </button>

          <button className="alyx-button button" data-name="alyx" onClick={this.setInternModal}>
              <img className="image muscle4" src={muscle} alt="" />
            </button>

          <button className="devon-button button" data-name="devon" onClick={this.setInternModal}>
              <img className="image muscle5" src={muscle} alt="" />
            </button>

          <button className="do-button button" data-name="do" onClick={this.setInternModal}>
              <img className="image muscle6" src={muscle} alt="" />
            </button>

          <button className="jacqui-button button" data-name="jacqui" onClick={this.setInternModal}>
              <img className="image muscle7" src={muscle} alt="" />
            </button>

          <button className="jathushan-button button" type="button" data-name="jathushan" onClick={this.setInternModal}>
              <img className="image muscle8" src={muscle} alt="" />
            </button>

          <button className="lucy-button button" data-name="lucy" onClick={this.setInternModal}>
              <img className="image muscle9" src={muscle} alt="" />
            </button>

          <button className="kiran-button button" data-name="kiran" onClick={this.setInternModal}>
              <img className="image muscle10" src={muscle} alt="" />
            </button>

          <button className="pj-button button" data-name="pj" onClick={this.setInternModal}>
              <img className="image muscle11" src={muscle} alt="" />
            </button>

            {/* Render the intern that's clicked */}
            {
              internModels[this.state.whosModel]
            }

          </div>

          

        </main>
    )

  }


}

export default App;
