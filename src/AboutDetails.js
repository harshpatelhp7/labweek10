import React, { Component } from 'react'
import './App.css';

export default class AboutDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: "No Email",
            name: "No Name",
            address: "No primary Address",
            address2: "No secondary address",
            city: "No city",
            selectedOption:"None",
            postalCode: "No postal code"
        }
    }

    options = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Nova Scotia", "Ontario", 
                "Prince Edward Island", "Quebec", "Saskatchewan"]

    readData = (event) =>{
        this.setState({
            ...this.state,
            [event.target.name]:event.target.value
        })
    }

    submitData = (e) => {
        e.preventDefault()
        alert("Submit")
    }


    render() {
        return (
            <div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginLeft:'30px', marginRight:'20px'}}>
                <form onSubmit={this.submitData}>
                    <div style={{float:'left'}}>
                        <div style={{float:'left'}}>
                            <label style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Email</label>
                            <input style={{width:'730px', marginTop:'10px'}} name="email" onChange={this.readData} placeholder="Enter Email" type="email"/>
                        </div>

                        <div style={{float:'right', marginLeft:'10px'}}>
                            <label style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Name</label>
                            <input style={{width:'750px', marginTop:'10px'}} name="name" onChange={this.readData} placeholder="Full Name" type="text"/>
                        </div>
                    </div>

                    <div style={{float:'left', marginTop:'30px'}}>
                        <label style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Address</label>
                        <input style={{width:'1520px', marginTop:'10px'}} name="address" onChange={this.readData} placeholder="Enter your Primary Address" type="text"/>
                    </div>

                    
                    <div style={{float:'left', marginTop:'30px'}}>
                        <label style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Address 2</label>
                        <input style={{width:'1520px', marginTop:'10px'}} name="address2" onChange={this.readData} placeholder="Enter your Secondary Address" type="text"/>
                    </div>
                    
                    <div style={{float:'left', marginTop:'30px'}}>
                        <div style={{float:'left'}}>
                            <label style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>City</label>
                            <input style={{width:'500px', marginTop:'10px'}} name="city" onChange={this.readData} placeholder="Enter your City" type="text"/>
                        </div>
                        
                        <div style={{float:'left', marginLeft:'10px'}}>
                            <label style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Province</label>
                            <select style={{width:'490px', marginTop:'10px'}} name="selectedOption" onChange={this.readData}>
                                <option name="selectedOption" key="">Choose...</option>{
                                    this.options.map(selectedOption => {
                                    return (<option key={selectedOption}>{selectedOption}</option>)
                                    })
                                }
                            </select>
                        </div>
                        
                        <div style={{float:'right' , marginLeft:'10px'}}>
                            <label style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Postal Code</label>
                            <input style={{width:'500px', marginTop:'10px'}} name="postalCode" onChange={this.readData} placeholder="Enter your Postal Code" type="text"/>
                        </div>
                    </div>

                    <div style={{marginLeft:'640px'}}>            
                        <input style={{float:'left'}} type="checkbox"></input>
                        <label style={{float:'left',marginTop:'10px'}}>Agree Terms & Conditions?</label>
                    </div>

                    
                    <input style={{float:'left',marginLeft:'-130px',fontSize:'20px', marginTop:'40px'}} type="submit" value="Submit"></input>
                    
                </form>
            </div>

            <div style={{fontSize:'25px',display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'30px'}}>
                <label style={{color:'green'}}>Email: <br/></label>
                <p style={{marginLeft:'30px'}}>{this.state.email}</p>
            </div>

            <div style={{fontSize:'25px',display: 'flex', justifyContent:'center', alignItems:'center', marginTop:'-30px'}}>
                <label style={{color:'green'}}>Full Name: <br/></label>
                <p style={{marginLeft:'30px'}}>{this.state.name}</p>
            </div>

            <div style={{fontSize:'25px',display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'-30px'}}>
                <label style={{color:'green'}}>Address: <br/></label>
                <p style={{marginLeft:'30px'}}>{this.state.address}</p>
            </div>

            <div style={{fontSize:'25px',display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'-30px'}}>
                <label style={{color:'green'}}>City: <br/></label>
                <p style={{marginLeft:'30px'}}>{this.state.city}</p>
            </div>
      
            <div style={{fontSize:'25px',display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'-30px'}}>
                <label style={{color:'green'}}>Province: <br/></label>
                <p style={{marginLeft:'30px'}}>{this.state.selectedOption}</p>
            </div>

            <div style={{fontSize:'25px',display: 'flex',  justifyContent:'center', alignItems:'center', marginTop:'-30px'}}>
                <label style={{color:'green'}}>Postal Code: <br/></label>
                <p style={{marginLeft:'30px'}}>{this.state.postalCode}</p>
            </div>

            </div>
        )
    }
}
