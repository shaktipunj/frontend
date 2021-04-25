import React, { Component } from 'react'
import ProposalService from '../services/ProposalService';

class ViewProposalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            proposal: {}
        }
    }
    componentWillMount(){}
    componentDidMount(){
        ProposalService.getProposalById(this.state.id).then( res => {
            this.setState({proposal: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View proposal details </h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Proposal: </label>
                            <div> { this.state.proposal.proposal }</div>
                        </div>
                        <div className = "row">  
                            <label> PropId: </label>
                            <div> { this.state.proposal.propId }</div>
                        </div>
                        <div className = "row">
                            <label> Amount: </label>
                            <div> { this.state.proposal.amount }</div>
                        </div>
                        <div className = "row">
                            <label> ReqId: </label>
                            <div> { this.state.proposal.reqId }</div>
                        </div>
                        <div className = "row">
                            <label> ResId: </label>
                            <div> { this.state.proposal.resId }</div>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewProposalComponent