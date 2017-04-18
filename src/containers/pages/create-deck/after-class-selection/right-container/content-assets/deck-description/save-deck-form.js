import React from 'react';
import Modal from 'antd/lib/modal';

const SaveDeckForm = ({visible}) =>{
  return (
      <Modal title="Title of the modal dialog"
             visible={visible}
          // onOk={this.handleOk}
          // confirmLoading={this.state.confirmLoading}
          //  onCancel=
      >
        <p>foo</p>
      </Modal>
  )
};

export default SaveDeckForm;