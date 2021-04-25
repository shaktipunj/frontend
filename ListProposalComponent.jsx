import React, { Component } from 'react'
import ProposalService from '../services/ProposalService'

class ListProposalComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
              proposals: []
        }
        this.addProposal = this.addProposal.bind(this);
    }

    viewProposal(id){
        this.props.history.push(`/view-proposal/${id}`);
    }
    componentDidMount(){
        console.log("After list emp component intialized called automtically")
         ProposalService.getProposals().then((res) => {
             console.log(res);
            this.setState({ proposals: res.data});
        });
    }

    addProposal(){
        this.props.history.push('/add-proposal/_add');
    }
    getallproposalsby(id) {
        this.props.history.push(`/getallproposalsbyid/${id}`);
    }


    render() {
        return (
            <div>
                 <h2 className="text-center">Proposals List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addProposal}> Add Proposal</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                <th> Proposal </th>
                                <th> PropId </th>
                                <th> Amount </th>
                                <th> ReqId </th>
                                <th> ResId </th>  
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.proposals.map(
                                        proposal => 
                                        <tr key = {proposal.propId}>
                                            <td> {proposal.proposal} </td>
                                            <td> {proposal.propId} </td>
                                            <td> {proposal.amount} </td>
                                            <td> {proposal.requirement.reqId} </td>
                                            <td> {proposal.resource.resId} </td>
                                         <td>
                                                 
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewProposal(proposal.id)} className="btn btn-warning">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}
export default ListProposalComponent