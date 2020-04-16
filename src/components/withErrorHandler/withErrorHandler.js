import React from 'react';

import Modal from '../UI/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios) => {

    return class extends React.Component {
        state={
            error:null
        }
        errorConfirmedHandler=()=>{
            this.setState({error:null});
        }
        componentDidMount(){
            axios.interceptors.request.use(request=>{
                this.setState({error:null});
                return request;
            })
            axios.interceptors.response.use(null,error=>{
                this.setState({error:error});
            })
        }
        render() {
            return (
                <div>
                    <Modal show={this.state.error} revert={this.errorConfirmedHandler}>Something Went wrong!</Modal>
                    <WrappedComponent {...this.props} />
                </div>
            );
        }
    }
}


export default withErrorHandler;