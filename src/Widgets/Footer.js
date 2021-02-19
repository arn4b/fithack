import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <div className = "main-footer">
            <div className = "container">
                <div className = "row">
                    <div className = "col1">
                        <h1>FITHACK</h1>
                        <ul className = "list">
                            <li>Arab Chatterjee</li>
                            <li>Divyanshu Shekhar</li>
                            <li>Ashish Kumar Mishra</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className = "row">
                    <p className = "col-sm">
                        &copy; {new Date().getFullYear()} FITHACK | Arab Chatterjee | Divyanshu Shekhar | Ashish Kumar Mishra
                    </p>
                </div>
            </div>            
        </div>
    )
}

export default Footer;
