/** @format */

import { connect } from "react-redux";
import React, { Component } from "react";
import { reqWeatherData } from "./../action/action";
import TextField from "@material-ui/core/TextField";
import * as Constant from "./../action/Constants";
import Container from "@material-ui/core/Container";
import {  IconButton, Typography } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

class PageOne extends Component {
	constructor(props) {
		super(props);
		this.state = {
			[Constant.SEARCH]: "",
			data:[],
			main:{},
			sys:{}
		};
		
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { search } = this.state;
		let data = {
			[Constant.SEARCH]: search,
          };

		this.props.reqWeatherData(data.search, this);
	};
	
	handleChange = (input) => (e) => {
		console.log("input", input);
		console.log("value", e.target.value);
		this.setState({
			[input]: e.target.value,
		});
	};
	
	render() {
		const { search ,main,sys} = this.state;
		return (
			<Container maxWidth="lg">
			<div>
			    <form>
					<Typography style={styles.Typography}>Weather App</Typography>
					
					
               <div style={styles.textField}>
                       <TextField
						
							id="standard-basic"
							label="search by city name..."
							name="search"
							value={search}
							type="text"
							onChange={this.handleChange("search")}
							variant="outlined"
						/>
						<IconButton onClick={this.handleSubmit}>
					<SearchIcon />
					</IconButton>
</div>
				</form>
			</div>
			
				<div>
					{
						this.state.data.map((item,key)=>{
							return <div key={key} >
							<p>{search}({sys[Constant.COUNTRY]})</p>
							<h1>{item[Constant.MAIN]}</h1>
							<p>Current tempreture {search} is  <h2>{main[Constant.TEMP]} °C</h2> </p>
							
							</div>
						})
					}
				
				</div>

			
			</Container>
		);
	}
	handleResponse =(nextprops)=>{
		console.log("nextProps",nextprops)
		if(nextprops){
			this.state.data = nextprops.weather;
			this.state.main =nextprops.main;
			this.state.sys=nextprops.sys
			this.state.search =nextprops.name
		}
		
	}
}
const styles = {
	div: {
		border: "1px solid red",
		display: "flex",
		padding: 40,
		width: "300px",
		alignItem: "center",
		justifyContent: "center",
		marginTop: 70,
		bockgroundColor: "transparent",
	},
	Typography: {
		fontWidth: "bold",
		fontSize: "30px",
	},
	textField:{
		
		marginTop:45,
	}
};

const mapStateToProp = (response) => {
	console.log("response",response);
	return response;
};
export default connect(mapStateToProp, { reqWeatherData })(PageOne);
