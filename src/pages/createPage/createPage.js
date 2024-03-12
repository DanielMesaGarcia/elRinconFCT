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
        <div className="flex flex-col items-center h-screen ">
            <div className="absolute top-50 left-30">
                <Link to="/home">
                    <img src="images/home.png" alt="Home" />
                </Link>
            </div>
            <h1 className="text-3xl mt-90 mb-30">Create an event</h1>
            <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
                <Form
                    className='form'
                    form={form}
                    name="create_activity"
                    onFinish={onFinish}
                    initialValues={{ experienceLevel: 'Beginner' }}
                >
                    <p className="text-xl mb-4">Name</p>
                    <Form.Item
                        className="w-310 mb-16"
                        name="name"
                        rules={[{ required: true, message: 'Please give the activity a name' }]}
                    >
                        <Input placeholder="Enter a name for your event" />
                    </Form.Item>

                    <p className="text-xl mb-4">Introduction</p>
                    <Form.Item
                        className="mb-16"
                        name="description"
                        rules={[{ required: true, message: 'Please enter a short introduction to your event' }]}
                    >
                        <Input.TextArea placeholder="Enter a short introduction for your event" />
                    </Form.Item>

                    <p className="text-xl mb-4">Activity</p>
                    <Form.Item
                        className="mb-40"
                        name="type"
                        rules={[{ required: true, message: 'Please select activity type' }]}
                    >
                        <Select placeholder="Selecet type of activity">
                            <Option value="Physical">Physical</Option>
                            <Option value="Arts and crafts">Arts and crafts</Option>
                            <Option value="Outdoors">Outdoors</Option>
                            <Option value="Education">Education</Option>
                            <Option value="Food">Food</Option>
                            <Option value="Hangout">Hangout</Option>
                            <Option value="Events">Events</Option>
                        </Select>
                    </Form.Item>

                    <div className="flex gap-158">
                    <p className="text-xl mb-4">Date</p>
                    <p className="text-xl mb-4">Time</p>
                    </div>
                    <div className="flex justify-between">
                    <Form.Item
                        className="w-166 mb-16"
                        name="date"
                        rules={[
                            { required: true, message: 'Please select a date' },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (value && value.isAfter(moment(), 'day')) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('Event date must be in the future'));
                                },
                            }),
                        ]}
                    >
                        <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD" />
                    </Form.Item>

                    <Form.Item
                        className="w-124 mb-16"
                        name="time"
                        rules={[{ required: true, message: 'Please select a time' }]}
                    >
                        <TimePicker format="HH:mm" />
                    </Form.Item>

                    </div>
                    <p className="text-xl mb-4">Location</p>
                    <Form.Item
                        className="mb-40"
                        name="location"
                        rules={[{ required: true, message: 'Please enter a location' }]}
                    >
                        <Input placeholder="Enter a location for your event" />
                    </Form.Item>

                    <div className="flex justify-between">
                    <p className="text-xl mb-4">Experience level</p>
                    <p className="text-xl mb-4">Max no of guests</p>
                    </div>
                    <div className="flex justify-between">
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
                            { required: true, message: 'Please enter the maximum number of attendees allowed' },
                            { type: 'number', min: 1, message: 'Please enter a valid number' },
                        ]}
                    >
                        <InputNumber placeholder='Max Attendees' />
                    </Form.Item>
                    </div>

                    <Form.Item>
                        <Button
                            className="mt-40 rounded-2xl bg-darkGrey w-310 h-60 text-white text-2xl"
                            htmlType="submit"
                        >
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
