import React from 'react';


function Project({
    name, img, deploy, github
}) {
    return (
            <div class="card project">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src={img} alt="Placeholder image"/>
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-content">
                            <p class="title is-4">{name}</p>
                        </div>
                    </div>

                    <div class="content">
                        <a href={deploy}>{deploy}</a>
                        <br/>
                        <a href={github}>{github}</a>
                    </div>
                </div>
            </div>
    );
}

export default Project;