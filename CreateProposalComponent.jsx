import React, { Component } from 'react'
import ProposalService from '../services/ProposalService';

class CreateProposalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

            proposal: '',
            propId: 0,
            amount: '',
            reqId: 0,
            resId: 0

        }
        this.changeProposalHandler = this.changeProposalHandler.bind(this);
        this.changePropIdHandler = this.changePropIdHandler.bind(this);
        this.changeAmountHandler = this.changeAmountHandler.bind(this);
        this.changeReqIdHandler = this.changeReqIdHandler.bind(this);
         this.changeResIdHandler = this.changeResIdHandler.bind(this);
    }

    // step 3
    componentDidMount() {
    }

    saveProposal = (e) => {
        e.preventDefault();
        let Proposal = {
            proposal: this.state.proposal, propId: this.state.propId, amount: this.state.amount, reqId: this.state.reqId,
            resId: this.state.resId
        };
        console.log('proposal => ' + JSON.stringify(Proposal));

        ProposalService.addProposal(Proposal).then(res => {
            this.props.history.push('/proposals');
        });
        window.alert("Added Successfully");
    }

    changeProposalHandler = (event) => {
        this.setState({ proposal: event.target.value });

    }
    changePropIdHandler = (event) => {
        this.setState({ propId: event.target.value });
    }

    changeAmountHandler = (event) => {
        this.setState({ amount: event.target.value });
    }

    changeReqIdHandler = (event) => {
        this.setState({ reqId: event.target.value });
    }

    changeResIdHandler = (event) => {
        this.setState({ resId: event.target.value });
    }

    cancel() {
        this.props.history.push('/proposals');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Proposal</h3>
        } else {
            return <h3 className="text-center">Update Proposal</h3>
        }
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"> Add Proposal </h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Proposal: </label>
                                        <input placeholder="proposal" name="proposal" className="form-control"
                                            value={this.state.proposal} onChange={this.changeProposalHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> PropId: </label>
                                        <input placeholder="propId" name="propId" className="form-control"
                                            value={this.state.propId} onChange={this.changePropIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Amount:  </label>
                                        <input placeholder="enter amount" name="amount" className="form-control"
                                            value={this.state.amount} onChange={this.changeAmountHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> ReqId:  </label>
                                        <input placeholder="Enter id" name="reqId" className="form-control"
                                            value={this.state.reqId} onChange={this.changeReqIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> ResId:  </label>
                                        <input placeholder="enter id" name="resId" className="form-control"
                                            value={this.state.resId} onChange={this.changeResIdHandler} />
                                    </div>
                            

                                    <button className="btn btn-success" onClick={this.saveProposal}> Save </button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ margin: "10px" }}> Cancel </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateProposalComponent;