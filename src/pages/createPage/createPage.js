import React from 'react';
import { Form, Input, Button, DatePicker, TimePicker, Select, InputNumber } from 'antd';
import { supabase } from '../../services/supabaseClient';
import moment from 'moment';

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
            <div className="flex justify-center items-center h-screen">
                <h1>Create an event</h1>
                <Form
                    className='form'
                    form={form}
                    name="create_activity"
                    onFinish={onFinish}
                    initialValues={{ experienceLevel: 'Beginner' }}
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 14 }}
                >
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please enter the activity name!' }]}
                    >
                        <Input placeholder="Name" />
                    </Form.Item>

                    <Form.Item
                        name="description"
                        rules={[{ required: true, message: 'Please enter the activity description!' }]}
                    >
                        <Input.TextArea placeholder="Description" />
                    </Form.Item>

                    <Form.Item
                        name="type"
                        rules={[{ required: true, message: 'Please select the activity type!' }]}
                    >
                        <Select placeholder="Type of activity">
                            <Option value="Indoor">Indoor</Option>
                            <Option value="Outdoor">Outdoor</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item name="date" rules={[
                        { required: true, message: 'Please select the event date' },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (value && value.isAfter(moment(), 'day')) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('Event date must be in the future'));
                            },
                        }),
                    ]}>
                        <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD" />
                    </Form.Item>

                    <Form.Item
                        name="time"
                        rules={[{ required: true, message: 'Please select the time!' }]}
                    >
                        <TimePicker format="HH:mm" />
                    </Form.Item>

                    <Form.Item
                        name="location"
                        rules={[{ required: true, message: 'Please enter the location!' }]}
                    >
                        <Input placeholder="Location" />
                    </Form.Item>

                    <Form.Item name="experienceLevel">
                        <Select>
                            <Option value="Beginner">Beginner level</Option>
                            <Option value="Intermediate">Intermediate level</Option>
                            <Option value="Advanced">Advanced level</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="maxAttendees"
                        rules={[
                            { required: true, message: 'Please enter the maximum number of attendees!' },
                            { type: 'number', min: 1, message: 'Please enter a valid number!' },
                        ]}
                    >
                        <InputNumber placeholder='Max Attendees' />
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 6, span: 14 }}>
                        <Button type="primary" htmlType="submit">
                            Create Event
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default CreateActivityPage;
