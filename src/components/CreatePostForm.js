import React from "react";
import {Form, Input} from 'antd';

class NormalCreatePostForm extends React.Component {
  render() {
      const {getFieldDecorator} = this.props.form;
    return (
      <Form>
        <Form.Item label="Message">
          {getFieldDecorator("message", {
            rules: [
              {
                required: true,
                message: "Please input your username!",
                whitespace: false
              }
            ]
          })(<Input />)}
        </Form.Item>
      </Form>
    );
  }
}

export const CreatePostForm = Form.create({name: 'CreatePostForm'})(NormalCreatePostForm);