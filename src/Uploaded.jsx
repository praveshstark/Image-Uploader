import React,{Component} from "react";
import "./App.css";
import axios from 'axios';   



class Uploaded extends Component { 
   
    state = { 
  
      // Initially, no file is selected 
      selectedFile: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
      previewfile: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
    }; 
     
    // On file select (from the pop up) 
    onFileChange = event => {
    
     // Update the state 
     this.setState({ selectedFile: event.target.files[0],previewfile:URL.createObjectURL(event.target.files[0]) }); 
  };
  
 // On file upload (click the upload button) 
    onFileUpload = () => { 
      // Create an object of formData 
      const formData = new FormData(); 
      // Update the formData object 
      formData.append( 
        "myFile", 
        this.state.selectedFile, 
        this.state.selectedFile.name 
        
      ); 
      alert(`UPLOADED`);
      // Details of the uploaded file 
      console.log(this.state.selectedFile); 
       
      // Request made to the backend api 
      // Send formData object 
      axios.post("api/uploadfile", formData); 


    };

    
     
    render(){
      const { previewfile} = this.state 
      return ( 
          <div className="page"> 
          <div className="container">
          <h1 className="heading">Add your Profile Picture</h1>
					<div className="img-holder">

					<img src={previewfile} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.onFileChange} />
					<div className="label">
          <label className="image-upload" htmlFor="input">
          
						Choose your Photo
					</label>
          </div>
           <button onClick={this.onFileUpload}>Upload!</button> 
            </div>
        </div> 
      ); 
    } 
    }
  export default Uploaded;