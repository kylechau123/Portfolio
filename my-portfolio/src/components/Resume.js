import React from 'react';
import resume from '../pdf/Resume.docx.pdf';

function Resume(props) {
    return (
        <div class="resume-container">
            <iframe src={resume} frameborder="0" class="resume"></iframe>
        </div>
    );
}

export default Resume;