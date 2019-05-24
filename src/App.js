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
import alyx from "./assets/alyx_icon.png";
import braeden from "./assets/braeden_icon.png";
import devon from "./assets/devon_icon.png";
import doo from "./assets/do_icon.png";
import jacqui from "./assets/jaqui_icon.png";
import jathushan from "./assets/jathushan_icon.png";
import kiran from "./assets/kiran_icon.png";
import lucy from "./assets/lucy_icon.png";
import pj from "./assets/pj_icon.png";
import rafaela from "./assets/rafaela_icon.png";
import wren from "./assets/wren_icon.png";

class App extends Component {
  constructor() {
    super()
    this.state = {
      whosModel: null
  }
}

  //Function to set state based on intern icon clicked
  setInternModal = (e) => {
    let internClicked = e.target.getAttribute("data-name");

      this.setState({
        whosModel: internClicked
      });
  }

  //Function to close modal -- set state back to null
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

          {/* Intern icons */}
          <button className="braeden-button button" data-name="braeden" onClick={this.setInternModal}>
              <img className="image muscle1" src={braeden} alt="an icon of an acrobat representing braeden"  />
            </button>

          <button className="wren-button button" data-name="wren" onClick={this.setInternModal}>
              <img className="image muscle2" src={wren} alt="an icon of comedy and tragedy representing Wren" />
            </button>

          <button className="rafi-button button" data-name="rafi" onClick={this.setInternModal} >
            <img className="image muscle3" src={rafaela} alt="an icon of an hourglass representing Rafi" />
            </button>

          <button className="alyx-button button" data-name="alyx" onClick={this.setInternModal}>
              <img className="image muscle4" src={alyx} alt="an icon of a brain representing Alyx" />
            </button>

          <button className="devon-button button" data-name="devon" onClick={this.setInternModal}>
              <img className="image muscle5" src={devon} alt="an icon of a broken heart representing Devon" />
            </button>

          <button className="do-button button" data-name="do" onClick={this.setInternModal}>
              <img className="image muscle6" src={doo} alt="an icon of an eye representing Do" />
            </button>

          <button className="jacqui-button button" data-name="jacqui" onClick={this.setInternModal}>
              <img className="image muscle7" src={jacqui} alt="an icon of binoculars representing Jacqui" />
            </button>

          <button className="jathushan-button button" type="button" data-name="jathushan" onClick={this.setInternModal}>
              <img className="image muscle8" src={jathushan} alt="an icon of a Tuxedo representing Jathu" />
            </button>

          <button className="lucy-button button" data-name="lucy" onClick={this.setInternModal}>
              <img className="image muscle9" src={lucy} alt="an icon of a Guy Fawkes mask representing Lucy" />
            </button>

          <button className="kiran-button button" data-name="kiran" onClick={this.setInternModal}>
              <img className="image muscle10" src={kiran} alt="an icon of a poison bottle representing Kiran" />
            </button>

          <button className="pj-button button" data-name="pj" onClick={this.setInternModal}>
              <img className="image muscle11" src={pj} alt="an icon of a flexed muscle representing PJ" />
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
