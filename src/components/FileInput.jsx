import React, { Component } from "react";
import axios from "axios";

const FileInput = (props) => {
  // On file select (from the pop up)
  const onFileChange = (event) => {
    // Update the state
    // this.setState({ selectedFile: event.target.files[0] }); (this is what they had)
    props.myUseState({ selectedFile: event.target.files[0] }); //i added this
  };

  // File content to be displayed after
  // file upload is complete
  const fileData = () => {
    if (props.myState) {
      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {props.myState.selectedFile.name}</p>

          <p>File Type: {props.myState.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {props.myState.selectedFile.lastModifiedDate.toDateString()}
          </p>
        </div>
      );
    }
  };

  return (
    <div className="file-upload-main-container">
      <h4>{props.title}</h4>
      <div>
        <input type="file" onChange={onFileChange} />
      </div>
      {fileData()}
    </div>
  );
};

// class FileInput extends Component {
//   // On file select (from the pop up)
//   onFileChange = (event) => {
//     // Update the state
//     // this.setState({ selectedFile: event.target.files[0] }); (this is what they had)
//     this.props.myUseState({ selectedFile: event.target.files[0] }); //i added this
//   };

//   // File content to be displayed after
//   // file upload is complete
//   fileData = () => {
//     if (this.props.myState) {
//       return (
//         <div>
//           <h2>File Details:</h2>

//           <p>File Name: {this.props.myState.selectedFile.name}</p>

//           <p>File Type: {this.props.myState.selectedFile.type}</p>

//           <p>
//             Last Modified:{" "}
//             {this.props.myState.selectedFile.lastModifiedDate.toDateString()}
//           </p>
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <br />
//           <h4>Choose before Pressing the Upload button</h4>
//         </div>
//       );
//     }
//   };

//   render() {
//     return (
//       <div className="file-upload-main-container">
//         <h4>{this.props.title}</h4>
//         <div>
//           <input type="file" onChange={this.onFileChange} />
//         </div>
//         {this.fileData()}
//       </div>
//     );
//   }
// }

export default FileInput;
