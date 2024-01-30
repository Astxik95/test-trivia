import React, { useEffect, useState } from "react";
import axios from "axios";
import Select from 'react-select';
import { useNavigate } from "react-router-dom";

const styles = {
    control: (baseStyles, state) => ({
        ...baseStyles,
       minHeight: '100%',
       borderRadius: '18px',
       border: state.isFocused ? '2px solid #3A7859' : '2px solid #E7EBF1',
       background: '#F6F7F8',
       boxShadow: 'none',
       outline: 'none',
        '&:hover': {
            borderColor: state.isFocused ? '#3A7859' : '#E7EBF1',
        }
    }),
    indicatorSeparator: (baseStyles) => ({
        ...baseStyles,
        display: 'none',
    }),
    placeholder: (baseStyles) => ({
        ...baseStyles,
        color: '#9EA0A4',
        fontSize: '18px',
    }),
    menu: (baseStyles) => ({
        ...baseStyles,
        padding: '10px',
        borderRadius: '18px',
        boxShadow: '0 4px 10px 0 rgba(0, 0, 0, 0.04);'
    }),
    option: (baseStyles) => ({
        ...baseStyles,
        padding: '6px 18px',
        background: "#fff",
        fontSize: '18px',
        color: '#354153',
        marginBottom: '4px',
        cursor: 'pointer',
        '&:active': {
            background: "#fff",
        }
    }),
}

const CategorySelect = () => {
    const history = useNavigate();
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const categoriesOptions = categories.map((item) => ({
        value: item.id, label: item.name
    }))

    useEffect(() => {
        // Fetch categories from Open Trivia API
        const fetchCategories = async () => {
            try {
                const response = await axios.get('https://opentdb.com/api_category.php');
                setCategories(response.data.trivia_categories);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    const handleStart = () => {
        history(`/questions/${selectedCategory?.label?.toLowerCase()}/${selectedCategory?.value}`)
    }


    return (
        <div className="flex flex-col items-center">
            <div className="text-center text-green text-[50px] leading-normal font-bold mb-[146px]">Trivia App</div>
            <div className="text-center text-typography text-3xl font-bold mb-9">Pick a Category</div>
            <Select
                value={selectedCategory}
                onChange={setSelectedCategory}
                options={categoriesOptions}
                className="w-80 h-14"
                placeholder="Category"
                styles={styles}
            />
            <button
                onClick={handleStart}
                disabled={!selectedCategory}
                className="flex justify-center items-center mt-[99px] py-4 px-5 bg-green text-white w-[150px] h-14 rounded-[18px] text-lg font-bold disabled:bg-light-gray disabled:text-silver"
            >
                Start
            </button>
        </div>
    )
}

export default CategorySelect;