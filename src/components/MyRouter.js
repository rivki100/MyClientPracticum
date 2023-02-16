import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import AddChild from './AddChild';
import Guidelines from './Guidelines';
import Form from './Form';
import Test from './Exel';
import { excel } from 'react-export-table-to-excel/lib/lib';

export default function MyRouter() {

    return (
        <div className="nav nav-tabs" >
{/* 
            <div className="nav-link active"><Link  to='/form'>form</Link></div>
            <div className="nav-link active"><Link to='/'>Guidelines</Link></div> */}



            <Routes>
                <Route path='/' element={<Guidelines />} />
                <Route path='/addChild' element={<AddChild />} />
                <Route path='/form' element={<Form/>} />
                <Route path='/exel' element={<Test/>} />
            </Routes>
        </div>
    );
}