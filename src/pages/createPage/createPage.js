import React from 'react';
import { Form, Input, Button, DatePicker, TimePicker, Select, InputNumber } from 'antd';
import { supabase } from '../../services/supabaseClient';

const { Option } = Select;

const CreateActivityPage = () => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      // Call Supabase API to insert activity into database
      const { data, error } = await supabase.from('activities').insert([
        {
          name: values.name,
          description: values.description,
          type: values.type,
          date: values.date.format('YYYY-MM-DD'),
          time: values.time.format('HH:mm:ss'),
          location: values.location,
          experience_level: values.experienceLevel,
          max_attendees: values.maxAttendees,
        },
      ]);

      if (error) {
        throw error;
      }

      console.log('Activity created:', data);
      // Reset form fields after successful submission
      form.resetFields();
    } catch (error) {
      console.error('Error creating activity:', error.message);
    }
  };

  return (
    <div>
      <h1>Create Activity</h1>
      <Form
        form={form}
        name="create_activity"
        onFinish={onFinish}
        initialValues={{ experienceLevel: 'Beginner' }}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 14 }}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: 'Please enter the activity name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: 'Please enter the activity description!' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Type"
          name="type"
          rules={[{ required: true, message: 'Please select the activity type!' }]}
        >
          <Select>
            <Option value="Indoor">Indoor</Option>
            <Option value="Outdoor">Outdoor</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Date"
          name="date"
          rules={[{ required: true, message: 'Please select the date!' }]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Time"
          name="time"
          rules={[{ required: true, message: 'Please select the time!' }]}
        >
          <TimePicker format="HH:mm" />
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: 'Please enter the location!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Experience Level" name="experienceLevel">
          <Select>
            <Option value="Beginner">Beginner</Option>
            <Option value="Intermediate">Intermediate</Option>
            <Option value="Advanced">Advanced</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Max Attendees"
          name="maxAttendees"
          rules={[
            { required: true, message: 'Please enter the maximum number of attendees!' },
            { type: 'number', min: 1, message: 'Please enter a valid number!' },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
          <Button type="primary" htmlType="submit">
            Create Activity
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateActivityPage;
