import React, { useEffect, useState } from 'react';
import { Form, Input, Button, DatePicker, TimePicker, Select, InputNumber } from 'antd';
import { supabase } from '../../services/supabaseClient';
import moment from 'moment';
import { Link } from 'react-router-dom';

import NavMenu from '../../components/navMenu';
import home from "../../assets/images/icons/home.svg"

const { Option } = Select;

const CreateActivityPage = () => {
    const [form] = Form.useForm();
    const [categories, setCategories] = useState([]); // State for storing categories

    // Fetch categories from the database
    useEffect(() => {
        const fetchCategories = async () => {
            const { data, error } = await supabase
                .from('categories')
                .select('category, subcategories');

            if (error) {
                console.error('Error fetching categories:', error.message);
                return;
            }

            setCategories(data);
        };

        fetchCategories();
    }, []);

    // Handle form submission
    const onFinish = async (values) => {
        try {
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
            form.resetFields(); // Reset form fields after successful submission
        } catch (error) {
            console.error('Error creating activity:', error.message);
        }
    };

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [firstFieldFilled, setFirstFieldFilled] = useState(false);

    // Handle category change
    const handleCategoryChange = (value) => {
        setSelectedCategory(value);
        setFirstFieldFilled(!!value); // Check if first field is filled
    };

    // Validate if a category is selected
    const validateFirstField = () => ({
        validator(_, value) {
            if (firstFieldFilled || !value) {
                return Promise.resolve();
            }
            return Promise.reject(new Error('Please select activity type first'));
        },
    });

    return (
        <div className="flex flex-col items-center h-960">
            <div className="absolute top-50 left-30">
                <Link to="/home">
                    <img src={home} alt="Home" />
                </Link>
            </div>
            <h1 className="text-3xl mt-90 mb-40">Create an event</h1>
            <div className="w-full md:w-3/4 lg:w-1/2 xl:w-1/3">
                <Form
                    className='form'
                    form={form}
                    name="create_activity"
                    onFinish={onFinish}
                    initialValues={{ experienceLevel: 'Beginner' }}
                >
                    <p className="text-xl mb-4">Category</p>
                    <Form.Item
                        className='mb-16'
                        name="type"
                        rules={[{ required: true, message: 'Please select a category' }]}
                    >
                        <Select placeholder="Select type of activity" onChange={handleCategoryChange}>
                            <Option key={"Physical"} value="Physical">Physical</Option>
                            <Option key={"Arts and crafts"} value="Arts">Arts and crafts</Option>
                            <Option key={"Outdoors"} value="Outdoor">Outdoors</Option>
                            <Option key={"Education"} value="Education">Education</Option>
                            <Option key={"Food"} value="Food">Food</Option>
                            <Option key={"Hangout"} value="Hangout">Hangout</Option>
                            <Option key={"Events"} value="Events">Events</Option>
                        </Select>
                    </Form.Item>
                    <p className="text-xl mb-4">Activity</p>
                    <Form.Item
                        className="w-310 mb-16"
                        name="name"
                        rules={[
                        { required: true, message: 'Please choose an activity' },
                        validateFirstField(),
                        ]}
                    >
                        <Select placeholder="Select an activity" disabled={!firstFieldFilled}>
                            {categories
                                .filter(category => category.category === selectedCategory)
                                .map(category => (
                                    <Option key={category.id} value={category.subcategories}>
                                        {category.subcategories}
                                    </Option>
                                ))}
                        </Select>
                    </Form.Item>
                    <p className="text-xl mb-4">Introduction</p>
                    <Form.Item
                        className="mb-60"
                        name="description"
                        rules={[{ required: true, message: 'Please enter a short introduction to your event' }]}
                    >
                        <Input.TextArea placeholder="Enter a short introduction for your event" />
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
                        className="mb-60"
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
            <NavMenu
                page="add"
            />
        </div>
    );
};

export default CreateActivityPage;