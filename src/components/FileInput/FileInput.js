import React from "react";

class FileInput extends React.Component {
  state = {
    selectedFile: null,
  };
  fileSelectedHandler = (event) => {
    this.setState({
      selectedFile: event.targer.file[0],
    });
  };

  fileUploadHandler = () => {};
  render() {
    return (
      <div>
        <input type="file" onChange={this.fileSelectedHandler} />
        <button onClick={this.fileUploadHandler}>Upload</button>
      </div>
    );
  }
}

export default FileInput;
