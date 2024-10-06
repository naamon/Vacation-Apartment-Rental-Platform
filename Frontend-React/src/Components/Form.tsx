import React, { useRef, useState } from 'react';
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import MultiRangeSlider from './Range'
import { color } from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../app/store';
import { updateCategory } from '../features/category/CategorySlice';
import { FormControl, InputLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select'


function Form(props:any) {
    const dispatch: AppDispatch = useDispatch();
    const [minVal, setMinVal] = useState(100);
    const [maxVal, setMaxVal] = useState(1000);
    const currentCategory = useSelector((state: RootState) => state.category.currentCategory);
    const handleSubmit = () => {
        dispatch(updateCategory(Number(areaRef.current?.value)));
    }
    //     const newTask=(event)=>{
    //         event.preventDefault(); 
    //         addTask(titleRef.current.value,descripRef.current.value,pictureRef.current.value,'false');
    // }
    
    const areaRef = useRef<HTMLSelectElement>(null);
    return (
        <div id="form">
                <label> price </label>
                <MultiRangeSlider min={100} max={1000}  ></MultiRangeSlider>
                <br />
                <label> area  </label>
                <select ref={areaRef} id="select" required >
                    <option value={0}>show all</option>
                    <option value={1}>north</option>
                    <option value={2}>south</option>
                    <option value={3}>center</option>
                    
                </select>
                
                <br />
                <br />
                {/* <br /> */}
                <button onClick={handleSubmit} >search</button>
            {/* <h1>{areaRef.current?.value}</h1>
            <h1>{Number(currentCategory)}</h1> */}
        </div>
    )
}

export default Form;
