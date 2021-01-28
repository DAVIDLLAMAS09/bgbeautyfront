import React, { Component } from 'react';
import icoClose from '../img/ico_close.png';
import $ from 'jquery';
import Loader from 'react-loader-spinner'

export default function (ComposedComponent) {
  class NetworkDetector extends Component {
    state = {
      isDisconnected: false
    }

    componentDidMount() {
      this.handleConnectionChange();
      window.addEventListener('online', this.handleConnectionChange);
      window.addEventListener('offline', this.handleConnectionChange);
    }

    componentWillUnmount() {
      window.removeEventListener('online', this.handleConnectionChange);
      window.removeEventListener('offline', this.handleConnectionChange);
    }

    _triggerModalNoInternet=()=>{
        if(this.state.isDisconnected){
            $('#modalNoInternet').modal()
        }
        else{
            $('#modalNoInternet').modal('hide')
        }
    }


    handleConnectionChange = () => {
      const condition = navigator.onLine ? 'online' : 'offline';
      if (condition === 'online') {
        const webPing = setInterval(
          () => {
            fetch('//google.com', {
              mode: 'no-cors',
              })
            .then(() => {
              this.setState({ isDisconnected: false }, () => {
                return clearInterval(webPing)
              });
            })
            .catch(() => this.setState({ isDisconnected: true }) )
          }, 2000);
        return;
      }

      this._triggerModalNoInternet();
      return this.setState({ isDisconnected: true });
    }

    render() {
      return (
        <div>
           <Loader type="Circles" color="#fff" height={80} width={80} className="spinnerJS" timeout={2000}/>
          { this._triggerModalNoInternet()}

          <ComposedComponent {...this.props} />

                {/*-------------------------Modals-------------------------------*/}
                <div className="modal fade" id="modalNoInternet" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-md" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <p className="modal-title txt-title-login" id="exampleModalLabel" style={{color:'#070A57',fontSize:25}}>No hay conexión a internet</p>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span className="close_contraseña_login" aria-hidden="true"><img src={icoClose} alt="hola"></img></span>
                                </button>
                            </div>
                            <div className="modal-body" style={{paddingLeft:30, paddingRight:30}}>
                                
                                <p className='text-dark' style={{textAlign:'center',fontWeight:'bold',fontSize:20}}>Por favor, verifique su conexión</p>
                                
                            </div>
                        </div>
                    </div>
                </div>

        </div>
      );
    }
  }

  return NetworkDetector;
}
