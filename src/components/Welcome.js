import React, {Component} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


import FeedBack from 'react-feedback-popup';


export default class Welcome extends Component{
    constructor(props) {
        super(props);
    this.styleIt = {
        color:"white",
        float: "left",
        marginLeft :"5rem",
        marginRight :"5rem",
        marginTop :"4rem",
        marginBottom : "1rem"
        
    };
    this.styleIts = {
        color:"white",
        float: "left",
        marginLeft :"5rem",
        marginRight :"5rem",
        marginBottom : "3rem"
       
    };

    this.paraStyle = {
        borderLeft:"8px solid #3CB371",
        borderRadius:"4px",
        paddingLeft:"15px",
    }

}
render(){
    return(
        <>
        <div class=" bg-dark text-light p-5">
            <h1 class="display-4 fw-bold">Thought Of The Day</h1>
            <p className="text-muted">Explore and Share people's thoughts here!</p>
            <Button> <Link to={"explore"} className="nav-link">
            Explore </Link> </Button>
        </div>
        <div style={{...this.styleIt}} class="text-wrapper">
  <p style={{...this.paraStyle}} >
    Lorem ipsum odor, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
    Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
    orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
    eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
    Interdum praesent ut penatibus fames eros ad consectetur sed.
    Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
    orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
    eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
    Interdum praesent ut penatibus fames eros ad consectetur sed.
  </p>
 
</div>

<div style={{...this.styleIts}} class="text-wrapper">
<p style={{...this.paraStyle}} >
    Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
    dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
    Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
    sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
    Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
    orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
    eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
    Interdum praesent ut penatibus fames eros ad consectetur sed.
    Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras porttitor condimentum
    orci suscipit. Leo maecenas in tristique, himenaeos elementum placerat. Taciti rutrum nostra,
    eget cursus velit ultricies. Quam molestie tellus himenaeos cubilia congue vivamus ultricies.
    Interdum praesent ut penatibus fames eros ad consectetur sed.
  </p>
 
</div>

<div className="App">
			<header className="App-header">
			</header>
			<FeedBack
				position="right"
                marginBottom = "10px"
				numberOfStars={5}
				headerText="Help us improve!"
				bodyText="Feedback Form"
				buttonText="Feedback"
				handleClose={() => console.log("handleclose")}
				handleSubmit={(data) => 
					fetch('xxxxxx', {
						headers: {
							Accept: 'application/json',
							'Content-Type': 'application/json'
						},
						method: 'POST', // or 'PUT'
						body: JSON.stringify(data),
					}).then((response) => { 
						if (!response.ok) {
							return Promise.reject('Our servers are having issues! We couldn\'t send your feedback!');
						}
						response.json()
					}).then(() => {
						alert('Success!');
					}).catch((error) => {
						alert('Our servers are having issues! We couldn\'t send your feedback!', error);
					})
				}
				handleButtonClick={() => console.log("handleButtonClick")}
			/>
		</div>

        </>
    );
}
}
