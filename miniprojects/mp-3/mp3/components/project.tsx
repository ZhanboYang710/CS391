import React, { useState } from 'react';
import styled from 'styled-components';



export default function ProjectPage() {
    return (
        <>
        <main>
        {/* here is the calculator */}
            First Number:
            <input type="text" id="firstnum"></input>
            Second Number:
            <input type="text" id="secondnum"></input>
                
            <button onClick={addition()}>+</button>
            <button onClick={subtraction()}>-</button>
            <button onClick={multiplication()}>*</button>
            <button onClick={division()}>/</button>
            <button onClick={power()}>**</button>
            <button onClick={clear()}>Clear</button>

            <div id="calculation-output"></div>

            <script src="calculate.js"></script>
        </main>
        </>
    )
}