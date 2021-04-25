import axios from 'axios';

const PROPOSAL_API_BASE_URL = "http://localhost:3456/getallproposal";

class ProposalService {

    getProposals(){
        return axios.get(PROPOSAL_API_BASE_URL);
    }
    addProposal(proposal){
        return axios.post("http://localhost:3456/addproposal", proposal);
    }

    getProposalById(proposalId){
        return axios.put("http://localhost:3456/getproposalbyid/2" + '/' + proposalId);
    }

    getAllProposal(proposal){ 
        return axios.post("http://localhost:3456/getallproposal",proposal); 
    }
}

export default new ProposalService()