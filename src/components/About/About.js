import React, { Component } from 'react';

class About extends Component {


    render(){
        return (
            <section className='content-box' id='about-section'>
                <h2>About</h2>
                <p>
                    I cut my teeth in coding by making games in Visual Basic for a high school elective course. During my undergrad at Macalester College, 
                    I learned basic Python in an Environmental Science course and R as a statistical analysis tool. Ultimately, I 
                    pursued biology as my main course of study but picked up Javascript while doing some database management at Mississippi Mushrooms, 
                    a start-up urban farm in Minneapolis, where I’ve worked for two years. As is the case at any start-up, I’ve had a wide-range of 
                    responsibilities but ultimately wanted to focus on software bringing me to Prime Digital Academy.
                </p>
                <p>
                    I’m a transplant from Amherst, MA and have lived happily in the Twin Cities
                    for seven years.I enjoy exploring the parks, breweries, and farmer’s markets of the cities with my girlfriend and my dog.
                    I’ve been enjoying diversifying my skill set and outlook on tech by attending meetups and conferences such as React Minneapolis, 
                    Minnebar and Hackers and Founders.
                </p>
                <p>
                    I’m currently searching for a job in web development, my main areas of experience are in React and node but I’m looking 
                    forward to expanding my skill set with Python and additional back end technologies in the near future.
                </p>
            </section>
        )
    }
}

export default About