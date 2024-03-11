import React from 'react';
import { Form, Input, Button, DatePicker, TimePicker, Select, InputNumber } from 'antd';
import { supabase } from '../../services/supabaseClient';
import moment from 'moment';
import NavMenu from '../../components/navMenu';
import { Link } from 'react-router-dom';

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
        <div className="flex flex-col items-center h-screen bg-grey">
            <div className="absolute top-8 left-4">
                <Link to="/home">
                    <img src="images/home.png" alt="Home" />
                </Link>
            </div>
            <h1 className="text-4xl mb-8">Create an event</h1>
            <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3">

                <Form
                    className='form'
                    form={form}
                    name="create_activity"
                    onFinish={onFinish}
                    initialValues={{ experienceLevel: 'Beginner' }}
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

                    <Form.Item>
                        <Button htmlType="submit">
                            Create Event
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <NavMenu />
        </div>
    );
};

export default CreateActivityPage;
